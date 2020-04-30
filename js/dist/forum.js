module.exports=function(t){var n={};function e(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return t[a].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,a){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:a})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(e.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(a,o,function(n){return t[n]}.bind(null,o));return a},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=26)}([function(t,n){t.exports=flarum.core.compat.Model},function(t,n){t.exports=flarum.core.compat.extend},function(t,n,e){"use strict";function a(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n}e.d(n,"a",(function(){return a}))},function(t,n){t.exports=flarum.core.compat["components/Button"]},function(t,n,e){"use strict";var a=e(7),o=e.n(a);n.a=function(t){if(t){var n=t.emoji?t.emoji():t;return n&&m("img",{alt:t.country&&t.country()||"",className:"emoji",draggable:"false",loading:"lazy",src:"//cdn.jsdelivr.net/gh/twitter/twemoji@12/assets/72x72/"+o()(n)+".png"})}}},function(t,n){t.exports=flarum.core.compat["models/Forum"]},function(t,n){t.exports=flarum.core.compat["components/Modal"]},function(t,n){
/*! Copyright Twitter Inc. and other contributors. Licensed under MIT */
t.exports=function(t){for(var n=[],e=0,a=0,o=0,s=t.length;o<s;)e=t.charCodeAt(o++),a?(n.push((65536+(a-55296<<10)+(e-56320)).toString(16)),a=0):55296<=e&&e<=56319?a=e:n.push(e.toString(16));return n.join("-")}},function(t,n,e){"use strict";function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}e.d(n,"a",(function(){return u}));var o=e(2);function s(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var r=e(0),i=e.n(r),u=function(t){function n(){for(var n,e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return s(a(n=t.call.apply(t,[this].concat(o))||this),"code",i.a.attribute("code")),s(a(n),"country",i.a.attribute("country")),s(a(n),"name",i.a.attribute("name")),s(a(n),"emoji",i.a.attribute("emoji")),n}return Object(o.a)(n,t),n.prototype.apiEndpoint=function(){return"/fof/discussion-language"+(this.exists?"/"+this.data.id:"")},n}(i.a)},function(t,n){t.exports=flarum.core.compat["components/IndexPage"]},function(t,n){t.exports=flarum.core.compat["components/DiscussionComposer"]},,function(t,n){t.exports=flarum.core.compat.Component},,function(t,n){t.exports=flarum.core.compat["models/Discussion"]},,function(t,n){t.exports=flarum.core.compat["utils/DiscussionControls"]},function(t,n){t.exports=flarum.core.compat["components/DiscussionPage"]},function(t,n){t.exports=flarum.core.compat["components/DiscussionHero"]},function(t,n){t.exports=flarum.core.compat["components/DiscussionList"]},function(t,n){t.exports=flarum.core.compat["components/DiscussionListItem"]},function(t,n){t.exports=flarum.core.compat["components/Dropdown"]},,,,,function(t,n,e){"use strict";e.r(n);var a=e(0),o=e.n(a),s=e(5),r=e.n(s),i=e(14),u=e.n(i),c=e(8),p=e(1),l=e(16),g=e.n(l),f=e(3),d=e.n(f),h=e(2),b=e(6),y=e.n(b),v=e(17),x=e.n(v),j=e(12),O=e.n(j),_=e(4),w=function(t){function n(){return t.apply(this,arguments)||this}Object(h.a)(n,t);var e=n.prototype;return e.init=function(){this.languages=app.store.all("discussion-languages"),this.options=this.languages.reduce((function(t,n){return t[n.code()]=m("span",null,Object(_.a)(n)," ",n.name()),t}),this.props.extra||{})},e.view=function(){var t=this.props,n=t.language,e=t.uppercase,a=n.name()||"";return m("span",null,Object(_.a)(n)," ",e?a.toUpperCase():a)},n}(O.a),L=function(t){function n(){return t.apply(this,arguments)||this}Object(h.a)(n,t);var e=n.prototype;return e.init=function(){t.prototype.init.call(this),this.languages=app.store.all("discussion-languages"),this.current=this.props.selected||this.props.discussion&&this.props.discussion.language(),this.selected=this.current},e.className=function(){return"FoFLanguageDiscussionModal"},e.title=function(){return this.props.discussion?app.translator.trans("fof-discussion-language.forum.change_language.edit_title",{title:m("em",null,this.props.discussion.title())}):app.translator.trans("fof-discussion-language.forum.change_language.title")},e.content=function(){var t=this;return[m("div",{className:"Modal-body"},m("div",{className:"Form-group"},this.languages.map((function(n){return m(d.a,{onclick:t.select.bind(t,n),className:"Button Button--block "+(t.selected===n?"active":"")},m(w,{language:n,uppercase:!0}))}))),m("div",{className:"App-primaryControl"},d.a.component({type:"submit",className:"Button Button--primary",disabled:!this.selected||this.selected===this.current,loading:this.loading,icon:"fas fa-check",children:app.translator.trans("fof-discussion-language.forum.change_language.submit_button")})))]},e.select=function(t){this.selected=t,m.redraw()},e.onsubmit=function(t){var n=this;if(t.preventDefault(),this.loading=!0,this.props.onsubmit)return this.props.onsubmit(this.selected),void this.hide();var e=this.props.discussion,a=this.selected;e.save({relationships:{language:a}}).then((function(){return app.current instanceof x.a&&app.current.stream.update(),n.hide()})).catch(this.loaded.bind(this))},n}(y.a),C=e(9),k=e.n(C),D=e(10),N=e.n(D),P=function(t,n){return t.code().toLowerCase()>n.code().toLowerCase()},M=e(18),B=e.n(M),S=e(19),I=e.n(S),A=e(20),F=e.n(A),q=e(21),T=e.n(q),z=function(t){function n(){return t.apply(this,arguments)||this}Object(h.a)(n,t);var e=n.prototype;return e.init=function(){this.languages=app.store.all("discussion-languages"),this.options=this.languages.reduce((function(t,n){return t[n.code()]=m(w,{language:n}),t}),this.props.extra||{})},e.view=function(){var t=this,n=this.props.selected;return T.a.component({buttonClassName:"Button",label:this.options[n]||this.options[this.props.default],children:Object.keys(this.options).map((function(e){var a=e===(n||"any");return d.a.component({active:a,children:t.options[e],icon:!a||"fas fa-check",onclick:function(){return t.props.onclick(e)}})}))})},n}(O.a),E=function(t){var n=this.props.discussion.language();n&&t.add("discussion-language",m("span",null,Object(_.a)(n)||m("i",{className:"fas fa-globe"}),m("code",null,n.name())),5)};app.initializers.add("fof/discussion-language",(function(){app.store.models["discussion-languages"]=c.a,r.a.prototype.discussionLanguages=o.a.hasMany("discussionLanguages"),u.a.prototype.language=o.a.hasOne("language"),u.a.prototype.canChangeLanguage=o.a.attribute("canChangeLanguage"),Object(p.extend)(g.a,"moderationControls",(function(t,n){n.canChangeLanguage()&&t.add("language",d.a.component({children:app.translator.trans("fof-discussion-language.forum.discussion_controls.change_language_button"),icon:"fas fa-globe",onclick:function(){return app.modal.show(new L({discussion:n}))}}))})),Object(p.extend)(k.a.prototype,"newDiscussionAction",(function(t){var n=this;t.then((function(t){return t.language=app.store.getBy("discussion-languages","code",n.params().language)}))})),N.a.prototype.chooseLanguage=function(){var t=this;app.modal.show(new L({selected:this.language,onsubmit:function(n){t.language=n,t.$("textarea").focus()}}))},Object(p.extend)(N.a.prototype,"headerItems",(function(t){t.add("language",m("a",{className:"DiscussionComposer-changeTags",onclick:this.chooseLanguage.bind(this)},m("span",{className:"LanguageLabel "+(this.language?"":"none")},this.language?w.component({language:this.language,uppercase:!0}):app.translator.trans("fof-discussion-language.forum.composer_discussion.choose_language_link"))),20)})),Object(p.override)(N.a.prototype,"onsubmit",(function(t){if(!this.language)return this.chooseLanguage();t()})),Object(p.extend)(N.a.prototype,"data",(function(t){t.relationships=t.relationships||{},t.relationships.language=this.language||app.store.all("discussion-languages").sort(P)[0]})),Object(p.extend)(F.a.prototype,"infoItems",E),Object(p.extend)(B.a.prototype,"items",E),Object(p.extend)(I.a.prototype,"requestParams",(function(t){t.include.push("language"),this.props.params.language&&(t.filter.q=(t.filter.q||"")+" language:"+this.props.params.language)})),Object(p.extend)(k.a.prototype,"stickyParams",(function(t){return t.language=m.route.param("language")})),Object(p.extend)(k.a.prototype,"viewItems",(function(t){var n=this;t.add("language",z.component({extra:{any:app.translator.trans("fof-discussion-language.forum.index_language.any")},default:"any",onclick:function(t){var e=n.params();"any"===t?delete e.language:e.language=t,m.route(app.route(n.props.routeName,e))},selected:this.params().language}))}))}))}]);
//# sourceMappingURL=forum.js.map