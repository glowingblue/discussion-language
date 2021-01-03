module.exports=function(t){var n={};function e(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return t[a].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,a){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:a})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(e.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(a,o,function(n){return t[n]}.bind(null,o));return a},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=33)}([function(t,n){t.exports=flarum.core.compat.Model},function(t,n){t.exports=flarum.core.compat.extend},function(t,n,e){"use strict";function a(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n}e.d(n,"a",(function(){return a}))},function(t,n,e){"use strict";var a=e(9),o=e.n(a);n.a=function(t){if(t){var n=t.emoji?t.emoji():t;return n&&m("img",{alt:t.country&&t.country()||"",className:"emoji",draggable:"false",loading:"lazy",src:"//cdn.jsdelivr.net/gh/twitter/twemoji@13/assets/72x72/"+o()(n)+".png"})}}},function(t,n){t.exports=flarum.core.compat["components/Button"]},function(t,n,e){"use strict";function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}e.d(n,"a",(function(){return u}));var o=e(2);function s(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var r=e(0),i=e.n(r),u=function(t){function n(){for(var n,e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return s(a(n=t.call.apply(t,[this].concat(o))||this),"code",i.a.attribute("code")),s(a(n),"country",i.a.attribute("country")),s(a(n),"name",i.a.attribute("name")),s(a(n),"emoji",i.a.attribute("emoji")),n}return Object(o.a)(n,t),n.prototype.apiEndpoint=function(){return"/fof/discussion-language"+(this.exists?"/"+this.data.id:"")},n}(i.a)},function(t,n){t.exports=flarum.core.compat["models/Forum"]},function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var a={Language:e(5).a}},function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var a={flag:e(3).a}},function(t,n){
/*! Copyright Twitter Inc. and other contributors. Licensed under MIT */
t.exports=function(t){for(var n=[],e=0,a=0,o=0,s=t.length;o<s;)e=t.charCodeAt(o++),a?(n.push((65536+(a-55296<<10)+(e-56320)).toString(16)),a=0):55296<=e&&e<=56319?a=e:n.push(e.toString(16));return n.join("-")}},function(t,n){t.exports=flarum.core.compat["components/DiscussionComposer"]},,function(t,n){t.exports=flarum.core.compat.Component},function(t,n){t.exports=flarum.core.compat["components/IndexPage"]},,function(t,n){t.exports=flarum.core.compat["models/Discussion"]},,,,function(t,n){t.exports=flarum.core.compat["utils/DiscussionControls"]},function(t,n){t.exports=flarum.core.compat["components/Modal"]},function(t,n){t.exports=flarum.core.compat["components/DiscussionPage"]},function(t,n){t.exports=flarum.core.compat["components/DiscussionHero"]},function(t,n){t.exports=flarum.core.compat["states/DiscussionListState"]},function(t,n){t.exports=flarum.core.compat["components/DiscussionListItem"]},function(t,n){t.exports=flarum.core.compat["states/GlobalSearchState"]},function(t,n){t.exports=flarum.core.compat["utils/setRouteWithForcedRefresh"]},function(t,n){t.exports=flarum.core.compat["components/Dropdown"]},,,,,,function(t,n,e){"use strict";e.r(n),e.d(n,"components",(function(){return W})),e.d(n,"utils",(function(){return $.a})),e.d(n,"models",(function(){return J.a}));var a=e(0),o=e.n(a),s=e(6),r=e.n(s),i=e(15),u=e.n(i),c=e(5),l=e(1),p=e(19),g=e.n(p),f=e(4),d=e.n(f),h=e(2),b=e(20),y=e.n(b),v=e(21),x=e.n(v),j=e(12),O=e.n(j),_=e(3),L=function(t){function n(){return t.apply(this,arguments)||this}Object(h.a)(n,t);var e=n.prototype;return e.oninit=function(n){t.prototype.oninit.call(this,n),this.languages=app.store.all("discussion-languages"),this.options=this.languages.reduce((function(t,n){return t[n.code()]=m("span",null,Object(_.a)(n)," ",n.name()),t}),this.attrs.extra||{})},e.view=function(){var t=this.attrs,n=t.language,e=t.uppercase,a=n.name()||"";return m("span",null,Object(_.a)(n)," ",e?a.toUpperCase():a)},n}(O.a),w=function(t){function n(){return t.apply(this,arguments)||this}Object(h.a)(n,t);var e=n.prototype;return e.oninit=function(n){t.prototype.oninit.call(this,n),this.languages=app.store.all("discussion-languages"),this.current=this.attrs.selected||this.attrs.discussion&&this.attrs.discussion.language(),this.selected=this.current},e.className=function(){return"FoFLanguageDiscussionModal"},e.title=function(){return this.attrs.discussion?app.translator.trans("fof-discussion-language.forum.change_language.edit_title",{title:m("em",null,this.attrs.discussion.title())}):app.translator.trans("fof-discussion-language.forum.change_language.title")},e.content=function(){var t=this;return[m("div",{className:"Modal-body"},m("div",{className:"Form-group"},this.languages.map((function(n){return m(d.a,{onclick:t.select.bind(t,n),className:"Button Button--block "+(t.selected===n?"active":"")},m(L,{language:n,uppercase:!0}))}))),!this.attrs.hideSubmitButton&&m("div",{className:"App-primaryControl"},d.a.component({type:"submit",className:"Button Button--primary",disabled:!this.selected||this.selected===this.current,loading:this.loading,icon:"fas fa-check"},app.translator.trans("fof-discussion-language.forum.change_language.submit_button"))))]},e.select=function(t){if(this.selected=t,this.attrs.hideSubmitButton)return this.onsubmit();m.redraw()},e.onsubmit=function(t){var n=this;t&&t.preventDefault();var e=this.attrs,a=e.discussion,o=e.onsubmit;if(this.loading=!0,!a)return this.hide(),void(o&&o(this.selected));var s=this.selected;a.save({relationships:{language:s}}).then((function(){return app.current instanceof x.a&&app.current.stream.update(),n.hide()})).catch(this.loaded.bind(this))},n}(y.a),C=e(13),D=e.n(C),S=e(10),k=e.n(S),N=function(t,n){return t.code().toLowerCase()>n.code().toLowerCase()},B=e(22),M=e.n(B),P=e(23),F=e.n(P),I=e(24),A=e.n(I),q=e(25),R=e.n(q),T=e(26),z=e.n(T),E=e(27),G=e.n(E),H=function(t){function n(){return t.apply(this,arguments)||this}Object(h.a)(n,t);var e=n.prototype;return e.oninit=function(n){t.prototype.oninit.call(this,n),this.languages=app.store.all("discussion-languages"),this.options=this.languages.reduce((function(t,n){return t[n.code()]=m(L,{language:n}),t}),this.attrs.extra||{})},e.view=function(){var t=this,n=this.attrs.selected;return G.a.component({buttonClassName:"Button",label:this.options[n]||this.options[this.attrs.default]},Object.keys(this.options).map((function(e){var a=e===(n||"any");return d.a.component({active:a,icon:!a||"fas fa-check",onclick:function(){return t.attrs.onclick(e)}},t.options[e])})))},n}(O.a),U=function(t){var n=this.attrs.discussion.language();n&&t.add("discussion-language",m("span",null,Object(_.a)(n)||m("i",{className:"fas fa-globe"}),m("code",null,n.name())),5)},W={Language:L,LanguageDiscussionModal:w,LanguageDropdown:H},$=e(8),J=e(7);app.initializers.add("fof/discussion-language",(function(){app.store.models["discussion-languages"]=c.a,r.a.prototype.discussionLanguages=o.a.hasMany("discussionLanguages"),u.a.prototype.language=o.a.hasOne("language"),u.a.prototype.canChangeLanguage=o.a.attribute("canChangeLanguage"),Object(l.extend)(g.a,"moderationControls",(function(t,n){n.canChangeLanguage()&&t.add("language",d.a.component({icon:"fas fa-globe",onclick:function(){return app.modal.show(w,{discussion:n})}},app.translator.trans("fof-discussion-language.forum.discussion_controls.change_language_button")))})),Object(l.extend)(D.a.prototype,"newDiscussionAction",(function(t){var n=app.search.params().language;n?t.then((function(t){return t.fields.language=app.store.getBy("discussion-languages","code",n)})):app.composer.fields.language=""})),k.a.prototype.chooseLanguage=function(t,n){var e=this;app.modal.show(w,{selected:this.composer.fields.language,hideSubmitButton:t,onsubmit:function(t){e.composer.fields.language=t,e.$("textarea").focus(),n&&n()}})},Object(l.extend)(k.a.prototype,"headerItems",(function(t){t.add("language",m("a",{className:"DiscussionComposer-changeTags",onclick:this.chooseLanguage.bind(this,!0,null)},m("span",{className:"LanguageLabel "+(this.composer.fields.language?"":"none")},this.composer.fields.language?L.component({language:this.composer.fields.language,uppercase:!0}):app.translator.trans("fof-discussion-language.forum.composer_discussion.choose_language_link"))),20)})),Object(l.override)(k.a.prototype,"onsubmit",(function(t){if(!this.composer.fields.language)return this.chooseLanguage(!0,t);t()})),Object(l.extend)(k.a.prototype,"data",(function(t){t.relationships=t.relationships||{},t.relationships.language=this.composer.fields.language||app.store.all("discussion-languages").sort(N)[0]})),Object(l.extend)(A.a.prototype,"infoItems",U),Object(l.extend)(M.a.prototype,"items",U),Object(l.extend)(F.a.prototype,"requestParams",(function(t){t.include.push("language"),app.search.params().language&&(t.filter.q=(t.filter.q||"")+" language:"+app.search.params().language)})),Object(l.extend)(R.a.prototype,"stickyParams",(function(t){return t.language=m.route.param("language")})),Object(l.extend)(D.a.prototype,"viewItems",(function(t){t.add("language",H.component({extra:{any:app.translator.trans("fof-discussion-language.forum.index_language.any")},default:"any",onclick:function(t){var n=app.search.params();"any"===t?delete n.language:n.language=t,z()(app.route(app.current.get("routeName"),n))},selected:app.search.params().language}))}))}))}]);
//# sourceMappingURL=forum.js.map