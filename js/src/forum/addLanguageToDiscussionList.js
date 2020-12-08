import { extend } from 'flarum/extend';
import IndexPage from 'flarum/components/IndexPage';
import DiscussionHero from 'flarum/components/DiscussionHero';
import DiscussionListState from 'flarum/states/DiscussionListState';
import DiscussionListItem from 'flarum/components/DiscussionListItem';
import GlobalSearchState from 'flarum/states/GlobalSearchState';
import setRouteWithForcedRefresh from 'flarum/utils/setRouteWithForcedRefresh';

import flag from '../common/utils/flag';
import LanguageDropdown from './components/LanguageDropdown';

const addLanguage = function (items) {
    const language = this.attrs.discussion.language();

    if (!language) return;

    items.add(
        'discussion-language',
        <span>
            {flag(language) || <i className="fas fa-globe" />}
            <code>{language.name()}</code>
        </span>,
        5
    );
};

export default () => {
    extend(DiscussionListItem.prototype, 'infoItems', addLanguage);
    extend(DiscussionHero.prototype, 'items', addLanguage);

    extend(DiscussionListState.prototype, 'requestParams', function (params) {
        params.include.push('language');

        if (app.search.params().language) {
            params.filter.q = (params.filter.q || '') + ' language:' + app.search.params().language;
        }
    });

    extend(GlobalSearchState.prototype, 'stickyParams', (params) => (params.language = m.route.param('language')));

    extend(IndexPage.prototype, 'viewItems', function (items) {
        items.add(
            'language',
            LanguageDropdown.component({
                extra: { any: app.translator.trans('fof-discussion-language.forum.index_language.any') },
                default: 'any',
                onclick: (key) => {
                    const params = app.search.params();

                    if (key === 'any') delete params.language;
                    else params.language = key;

                    setRouteWithForcedRefresh(app.route(app.current.get('routeName'), params));
                },
                selected: app.search.params().language,
            })
        );
    });
};
