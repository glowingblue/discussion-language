import { extend } from 'flarum/extend';
import DiscussionControls from 'flarum/utils/DiscussionControls';
import Button from 'flarum/components/Button';

import LanguageDiscussionModal from './components/LanguageDiscussionModal';

export default () => {
    extend(DiscussionControls, 'moderationControls', function (items, discussion) {
        if (discussion.canChangeLanguage()) {
            items.add(
                'language',
                Button.component({
                    children: app.translator.trans('fof-discussion-language.forum.discussion_controls.change_language_button'),
                    icon: 'fas fa-globe',
                    onclick: () => app.modal.show(new LanguageDiscussionModal({ discussion })),
                })
            );
        }
    });
};