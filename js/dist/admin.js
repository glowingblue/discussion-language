module.exports=function(a){var e={};function n(i){if(e[i])return e[i].exports;var t=e[i]={i:i,l:!1,exports:{}};return a[i].call(t.exports,t,t.exports,n),t.l=!0,t.exports}return n.m=a,n.c=e,n.d=function(a,e,i){n.o(a,e)||Object.defineProperty(a,e,{enumerable:!0,get:i})},n.r=function(a){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},n.t=function(a,e){if(1&e&&(a=n(a)),8&e)return a;if(4&e&&"object"==typeof a&&a&&a.__esModule)return a;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:a}),2&e&&"string"!=typeof a)for(var t in a)n.d(i,t,function(e){return a[e]}.bind(null,t));return i},n.n=function(a){var e=a&&a.__esModule?function(){return a.default}:function(){return a};return n.d(e,"a",e),e},n.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)},n.p="",n(n.s=32)}([function(a,e){a.exports=flarum.core.compat["common/Model"]},function(a,e){a.exports=flarum.core.compat["common/extend"]},function(a,e,n){"use strict";function i(a,e){a.prototype=Object.create(e.prototype),a.prototype.constructor=a,a.__proto__=e}n.d(e,"a",(function(){return i}))},function(a,e,n){"use strict";var i=n(10),t=n.n(i),o=n(6),r=n.n(o);e.a=function(a){if(a){var e=a.emoji?a.emoji():a;return e?m("img",{alt:a.country&&a.country()||"",className:"emoji",draggable:"false",loading:"lazy",src:"//cdn.jsdelivr.net/gh/twitter/twemoji@13/assets/72x72/"+t()(e)+".png"}):r()("fas fa-globe")}}},function(a,e){a.exports=flarum.core.compat["common/components/Button"]},function(a,e,n){"use strict";function i(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}n.d(e,"a",(function(){return s}));var t=n(2);function m(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}var o=n(0),r=n.n(o),s=function(a){function e(){for(var e,n=arguments.length,t=new Array(n),o=0;o<n;o++)t[o]=arguments[o];return m(i(e=a.call.apply(a,[this].concat(t))||this),"code",r.a.attribute("code")),m(i(e),"country",r.a.attribute("country")),m(i(e),"name",r.a.attribute("name")),m(i(e),"emoji",r.a.attribute("emoji")),e}return Object(t.a)(e,a),e.prototype.apiEndpoint=function(){return"/fof/discussion-language"+(this.exists?"/"+this.data.id:"")},e}(r.a)},function(a,e){a.exports=flarum.core.compat["common/helpers/icon"]},function(a,e){a.exports=flarum.core.compat["common/models/Forum"]},function(a,e,n){"use strict";n.d(e,"a",(function(){return i}));var i={Language:n(5).a}},function(a,e,n){"use strict";n.d(e,"a",(function(){return i}));var i={flag:n(3).a}},function(a,e){
/*! Copyright Twitter Inc. and other contributors. Licensed under MIT */
a.exports=function(a){for(var e=[],n=0,i=0,t=0,m=a.length;t<m;)n=a.charCodeAt(t++),i?(e.push((65536+(i-55296<<10)+(n-56320)).toString(16)),i=0):55296<=n&&n<=56319?i=n:e.push(n.toString(16));return e.join("-")}},,function(a,e){a.exports=flarum.core.compat["common/components/Select"]},function(a,e){a.exports=flarum.core.compat["common/components/Switch"]},,,function(a){a.exports=JSON.parse('{"ad":{"name":"Andorra","native":"Andorra","emoji":"🇦🇩"},"ae":{"name":"United Arab Emirates","native":"دولة الإمارات العربية المتحدة","emoji":"🇦🇪"},"af":{"name":"Afghanistan","native":"افغانستان","emoji":"🇦🇫"},"ag":{"name":"Antigua and Barbuda","native":"Antigua and Barbuda","emoji":"🇦🇬"},"ai":{"name":"Anguilla","native":"Anguilla","emoji":"🇦🇮"},"al":{"name":"Albania","native":"Shqipëria","emoji":"🇦🇱"},"am":{"name":"Armenia","native":"Հայաստան","emoji":"🇦🇲"},"ao":{"name":"Angola","native":"Angola","emoji":"🇦🇴"},"aq":{"name":"Antarctica","native":"Antarctica","emoji":"🇦🇶"},"ar":{"name":"Argentina","native":"Argentina","emoji":"🇦🇷"},"as":{"name":"American Samoa","native":"American Samoa","emoji":"🇦🇸"},"at":{"name":"Austria","native":"Österreich","emoji":"🇦🇹"},"au":{"name":"Australia","native":"Australia","emoji":"🇦🇺"},"aw":{"name":"Aruba","native":"Aruba","emoji":"🇦🇼"},"ax":{"name":"Åland","native":"Åland","emoji":"🇦🇽"},"az":{"name":"Azerbaijan","native":"Azərbaycan","emoji":"🇦🇿"},"ba":{"name":"Bosnia and Herzegovina","native":"Bosna i Hercegovina","emoji":"🇧🇦"},"bb":{"name":"Barbados","native":"Barbados","emoji":"🇧🇧"},"bd":{"name":"Bangladesh","native":"Bangladesh","emoji":"🇧🇩"},"be":{"name":"Belgium","native":"België","emoji":"🇧🇪"},"bf":{"name":"Burkina Faso","native":"Burkina Faso","emoji":"🇧🇫"},"bg":{"name":"Bulgaria","native":"България","emoji":"🇧🇬"},"bh":{"name":"Bahrain","native":"‏البحرين","emoji":"🇧🇭"},"bi":{"name":"Burundi","native":"Burundi","emoji":"🇧🇮"},"bj":{"name":"Benin","native":"Bénin","emoji":"🇧🇯"},"bl":{"name":"Saint Barthélemy","native":"Saint-Barthélemy","emoji":"🇧🇱"},"bm":{"name":"Bermuda","native":"Bermuda","emoji":"🇧🇲"},"bn":{"name":"Brunei","native":"Negara Brunei Darussalam","emoji":"🇧🇳"},"bo":{"name":"Bolivia","native":"Bolivia","emoji":"🇧🇴"},"bq":{"name":"Bonaire","native":"Bonaire","emoji":"🇧🇶"},"br":{"name":"Brazil","native":"Brasil","emoji":"🇧🇷"},"bs":{"name":"Bahamas","native":"Bahamas","emoji":"🇧🇸"},"bt":{"name":"Bhutan","native":"ʼbrug-yul","emoji":"🇧🇹"},"bv":{"name":"Bouvet Island","native":"Bouvetøya","emoji":"🇧🇻"},"bw":{"name":"Botswana","native":"Botswana","emoji":"🇧🇼"},"by":{"name":"Belarus","native":"Белару́сь","emoji":"🇧🇾"},"bz":{"name":"Belize","native":"Belize","emoji":"🇧🇿"},"ca":{"name":"Canada","native":"Canada","emoji":"🇨🇦"},"cc":{"name":"Cocos [Keeling] Islands","native":"Cocos (Keeling) Islands","emoji":"🇨🇨"},"cd":{"name":"Democratic Republic of the Congo","native":"République démocratique du Congo","emoji":"🇨🇩"},"cf":{"name":"Central African Republic","native":"Ködörösêse tî Bêafrîka","emoji":"🇨🇫"},"cg":{"name":"Republic of the Congo","native":"République du Congo","emoji":"🇨🇬"},"ch":{"name":"Switzerland","native":"Schweiz","emoji":"🇨🇭"},"ci":{"name":"Ivory Coast","native":"Côte d\'Ivoire","emoji":"🇨🇮"},"ck":{"name":"Cook Islands","native":"Cook Islands","emoji":"🇨🇰"},"cl":{"name":"Chile","native":"Chile","emoji":"🇨🇱"},"cm":{"name":"Cameroon","native":"Cameroon","emoji":"🇨🇲"},"cn":{"name":"China","native":"中国","emoji":"🇨🇳"},"co":{"name":"Colombia","native":"Colombia","emoji":"🇨🇴"},"cr":{"name":"Costa Rica","native":"Costa Rica","emoji":"🇨🇷"},"cu":{"name":"Cuba","native":"Cuba","emoji":"🇨🇺"},"cv":{"name":"Cape Verde","native":"Cabo Verde","emoji":"🇨🇻"},"cw":{"name":"Curacao","native":"Curaçao","emoji":"🇨🇼"},"cx":{"name":"Christmas Island","native":"Christmas Island","emoji":"🇨🇽"},"cy":{"name":"Cyprus","native":"Κύπρος","emoji":"🇨🇾"},"cz":{"name":"Czech Republic","native":"Česká republika","emoji":"🇨🇿"},"de":{"name":"Germany","native":"Deutschland","emoji":"🇩🇪"},"dj":{"name":"Djibouti","native":"Djibouti","emoji":"🇩🇯"},"dk":{"name":"Denmark","native":"Danmark","emoji":"🇩🇰"},"dm":{"name":"Dominica","native":"Dominica","emoji":"🇩🇲"},"do":{"name":"Dominican Republic","native":"República Dominicana","emoji":"🇩🇴"},"dz":{"name":"Algeria","native":"الجزائر","emoji":"🇩🇿"},"ec":{"name":"Ecuador","native":"Ecuador","emoji":"🇪🇨"},"ee":{"name":"Estonia","native":"Eesti","emoji":"🇪🇪"},"eg":{"name":"Egypt","native":"مصر‎","emoji":"🇪🇬"},"eh":{"name":"Western Sahara","native":"الصحراء الغربية","emoji":"🇪🇭"},"er":{"name":"Eritrea","native":"ኤርትራ","emoji":"🇪🇷"},"es":{"name":"Spain","native":"España","emoji":"🇪🇸"},"et":{"name":"Ethiopia","native":"ኢትዮጵያ","emoji":"🇪🇹"},"fi":{"name":"Finland","native":"Suomi","emoji":"🇫🇮"},"fj":{"name":"Fiji","native":"Fiji","emoji":"🇫🇯"},"fk":{"name":"Falkland Islands","native":"Falkland Islands","emoji":"🇫🇰"},"fm":{"name":"Micronesia","native":"Micronesia","emoji":"🇫🇲"},"fo":{"name":"Faroe Islands","native":"Føroyar","emoji":"🇫🇴"},"fr":{"name":"France","native":"France","emoji":"🇫🇷"},"ga":{"name":"Gabon","native":"Gabon","emoji":"🇬🇦"},"gb":{"name":"United Kingdom","native":"United Kingdom","emoji":"🇬🇧"},"gd":{"name":"Grenada","native":"Grenada","emoji":"🇬🇩"},"ge":{"name":"Georgia","native":"საქართველო","emoji":"🇬🇪"},"gf":{"name":"French Guiana","native":"Guyane française","emoji":"🇬🇫"},"gg":{"name":"Guernsey","native":"Guernsey","emoji":"🇬🇬"},"gh":{"name":"Ghana","native":"Ghana","emoji":"🇬🇭"},"gi":{"name":"Gibraltar","native":"Gibraltar","emoji":"🇬🇮"},"gl":{"name":"Greenland","native":"Kalaallit Nunaat","emoji":"🇬🇱"},"gm":{"name":"Gambia","native":"Gambia","emoji":"🇬🇲"},"gn":{"name":"Guinea","native":"Guinée","emoji":"🇬🇳"},"gp":{"name":"Guadeloupe","native":"Guadeloupe","emoji":"🇬🇵"},"gq":{"name":"Equatorial Guinea","native":"Guinea Ecuatorial","emoji":"🇬🇶"},"gr":{"name":"Greece","native":"Ελλάδα","emoji":"🇬🇷"},"gs":{"name":"South Georgia and the South Sandwich Islands","native":"South Georgia","emoji":"🇬🇸"},"gt":{"name":"Guatemala","native":"Guatemala","emoji":"🇬🇹"},"gu":{"name":"Guam","native":"Guam","emoji":"🇬🇺"},"gw":{"name":"Guinea-Bissau","native":"Guiné-Bissau","emoji":"🇬🇼"},"gy":{"name":"Guyana","native":"Guyana","emoji":"🇬🇾"},"hk":{"name":"Hong Kong","native":"香港","emoji":"🇭🇰"},"hm":{"name":"Heard Island and McDonald Islands","native":"Heard Island and McDonald Islands","emoji":"🇭🇲"},"hn":{"name":"Honduras","native":"Honduras","emoji":"🇭🇳"},"hr":{"name":"Croatia","native":"Hrvatska","emoji":"🇭🇷"},"ht":{"name":"Haiti","native":"Haïti","emoji":"🇭🇹"},"hu":{"name":"Hungary","native":"Magyarország","emoji":"🇭🇺"},"id":{"name":"Indonesia","native":"Indonesia","emoji":"🇮🇩"},"ie":{"name":"Ireland","native":"Éire","emoji":"🇮🇪"},"il":{"name":"Israel","native":"יִשְׂרָאֵל","emoji":"🇮🇱"},"im":{"name":"Isle of Man","native":"Isle of Man","emoji":"🇮🇲"},"in":{"name":"India","native":"भारत","emoji":"🇮🇳"},"io":{"name":"British Indian Ocean Territory","native":"British Indian Ocean Territory","emoji":"🇮🇴"},"iq":{"name":"Iraq","native":"العراق","emoji":"🇮🇶"},"ir":{"name":"Iran","native":"ایران","emoji":"🇮🇷"},"is":{"name":"Iceland","native":"Ísland","emoji":"🇮🇸"},"it":{"name":"Italy","native":"Italia","emoji":"🇮🇹"},"je":{"name":"Jersey","native":"Jersey","emoji":"🇯🇪"},"jm":{"name":"Jamaica","native":"Jamaica","emoji":"🇯🇲"},"jo":{"name":"Jordan","native":"الأردن","emoji":"🇯🇴"},"jp":{"name":"Japan","native":"日本","emoji":"🇯🇵"},"ke":{"name":"Kenya","native":"Kenya","emoji":"🇰🇪"},"kg":{"name":"Kyrgyzstan","native":"Кыргызстан","emoji":"🇰🇬"},"kh":{"name":"Cambodia","native":"Kâmpŭchéa","emoji":"🇰🇭"},"ki":{"name":"Kiribati","native":"Kiribati","emoji":"🇰🇮"},"km":{"name":"Comoros","native":"Komori","emoji":"🇰🇲"},"kn":{"name":"Saint Kitts and Nevis","native":"Saint Kitts and Nevis","emoji":"🇰🇳"},"kp":{"name":"North Korea","native":"북한","emoji":"🇰🇵"},"kr":{"name":"South Korea","native":"대한민국","emoji":"🇰🇷"},"kw":{"name":"Kuwait","native":"الكويت","emoji":"🇰🇼"},"ky":{"name":"Cayman Islands","native":"Cayman Islands","emoji":"🇰🇾"},"kz":{"name":"Kazakhstan","native":"Қазақстан","emoji":"🇰🇿"},"la":{"name":"Laos","native":"ສປປລາວ","emoji":"🇱🇦"},"lb":{"name":"Lebanon","native":"لبنان","emoji":"🇱🇧"},"lc":{"name":"Saint Lucia","native":"Saint Lucia","emoji":"🇱🇨"},"li":{"name":"Liechtenstein","native":"Liechtenstein","emoji":"🇱🇮"},"lk":{"name":"Sri Lanka","native":"śrī laṃkāva","emoji":"🇱🇰"},"lr":{"name":"Liberia","native":"Liberia","emoji":"🇱🇷"},"ls":{"name":"Lesotho","native":"Lesotho","emoji":"🇱🇸"},"lt":{"name":"Lithuania","native":"Lietuva","emoji":"🇱🇹"},"lu":{"name":"Luxembourg","native":"Luxembourg","emoji":"🇱🇺"},"lv":{"name":"Latvia","native":"Latvija","emoji":"🇱🇻"},"ly":{"name":"Libya","native":"‏ليبيا","emoji":"🇱🇾"},"ma":{"name":"Morocco","native":"المغرب","emoji":"🇲🇦"},"mc":{"name":"Monaco","native":"Monaco","emoji":"🇲🇨"},"md":{"name":"Moldova","native":"Moldova","emoji":"🇲🇩"},"me":{"name":"Montenegro","native":"Црна Гора","emoji":"🇲🇪"},"mf":{"name":"Saint Martin","native":"Saint-Martin","emoji":"🇲🇫"},"mg":{"name":"Madagascar","native":"Madagasikara","emoji":"🇲🇬"},"mh":{"name":"Marshall Islands","native":"M̧ajeļ","emoji":"🇲🇭"},"mk":{"name":"North Macedonia","native":"Северна Македонија","emoji":"🇲🇰"},"ml":{"name":"Mali","native":"Mali","emoji":"🇲🇱"},"mm":{"name":"Myanmar [Burma]","native":"မြန်မာ","emoji":"🇲🇲"},"mn":{"name":"Mongolia","native":"Монгол улс","emoji":"🇲🇳"},"mo":{"name":"Macao","native":"澳門","emoji":"🇲🇴"},"mp":{"name":"Northern Mariana Islands","native":"Northern Mariana Islands","emoji":"🇲🇵"},"mq":{"name":"Martinique","native":"Martinique","emoji":"🇲🇶"},"mr":{"name":"Mauritania","native":"موريتانيا","emoji":"🇲🇷"},"ms":{"name":"Montserrat","native":"Montserrat","emoji":"🇲🇸"},"mt":{"name":"Malta","native":"Malta","emoji":"🇲🇹"},"mu":{"name":"Mauritius","native":"Maurice","emoji":"🇲🇺"},"mv":{"name":"Maldives","native":"Maldives","emoji":"🇲🇻"},"mw":{"name":"Malawi","native":"Malawi","emoji":"🇲🇼"},"mx":{"name":"Mexico","native":"México","emoji":"🇲🇽"},"my":{"name":"Malaysia","native":"Malaysia","emoji":"🇲🇾"},"mz":{"name":"Mozambique","native":"Moçambique","emoji":"🇲🇿"},"na":{"name":"Namibia","native":"Namibia","emoji":"🇳🇦"},"nc":{"name":"New Caledonia","native":"Nouvelle-Calédonie","emoji":"🇳🇨"},"ne":{"name":"Niger","native":"Niger","emoji":"🇳🇪"},"nf":{"name":"Norfolk Island","native":"Norfolk Island","emoji":"🇳🇫"},"ng":{"name":"Nigeria","native":"Nigeria","emoji":"🇳🇬"},"ni":{"name":"Nicaragua","native":"Nicaragua","emoji":"🇳🇮"},"nl":{"name":"Netherlands","native":"Nederland","emoji":"🇳🇱"},"no":{"name":"Norway","native":"Norge","emoji":"🇳🇴"},"np":{"name":"Nepal","native":"नपल","emoji":"🇳🇵"},"nr":{"name":"Nauru","native":"Nauru","emoji":"🇳🇷"},"nu":{"name":"Niue","native":"Niuē","emoji":"🇳🇺"},"nz":{"name":"New Zealand","native":"New Zealand","emoji":"🇳🇿"},"om":{"name":"Oman","native":"عمان","emoji":"🇴🇲"},"pa":{"name":"Panama","native":"Panamá","emoji":"🇵🇦"},"pe":{"name":"Peru","native":"Perú","emoji":"🇵🇪"},"pf":{"name":"French Polynesia","native":"Polynésie française","emoji":"🇵🇫"},"pg":{"name":"Papua New Guinea","native":"Papua Niugini","emoji":"🇵🇬"},"ph":{"name":"Philippines","native":"Pilipinas","emoji":"🇵🇭"},"pk":{"name":"Pakistan","native":"Pakistan","emoji":"🇵🇰"},"pl":{"name":"Poland","native":"Polska","emoji":"🇵🇱"},"pm":{"name":"Saint Pierre and Miquelon","native":"Saint-Pierre-et-Miquelon","emoji":"🇵🇲"},"pn":{"name":"Pitcairn Islands","native":"Pitcairn Islands","emoji":"🇵🇳"},"pr":{"name":"Puerto Rico","native":"Puerto Rico","emoji":"🇵🇷"},"ps":{"name":"Palestine","native":"فلسطين","emoji":"🇵🇸"},"pt":{"name":"Portugal","native":"Portugal","emoji":"🇵🇹"},"pw":{"name":"Palau","native":"Palau","emoji":"🇵🇼"},"py":{"name":"Paraguay","native":"Paraguay","emoji":"🇵🇾"},"qa":{"name":"Qatar","native":"قطر","emoji":"🇶🇦"},"re":{"name":"Réunion","native":"La Réunion","emoji":"🇷🇪"},"ro":{"name":"Romania","native":"România","emoji":"🇷🇴"},"rs":{"name":"Serbia","native":"Србија","emoji":"🇷🇸"},"ru":{"name":"Russia","native":"Россия","emoji":"🇷🇺"},"rw":{"name":"Rwanda","native":"Rwanda","emoji":"🇷🇼"},"sa":{"name":"Saudi Arabia","native":"العربية السعودية","emoji":"🇸🇦"},"sb":{"name":"Solomon Islands","native":"Solomon Islands","emoji":"🇸🇧"},"sc":{"name":"Seychelles","native":"Seychelles","emoji":"🇸🇨"},"sd":{"name":"Sudan","native":"السودان","emoji":"🇸🇩"},"se":{"name":"Sweden","native":"Sverige","emoji":"🇸🇪"},"sg":{"name":"Singapore","native":"Singapore","emoji":"🇸🇬"},"sh":{"name":"Saint Helena","native":"Saint Helena","emoji":"🇸🇭"},"si":{"name":"Slovenia","native":"Slovenija","emoji":"🇸🇮"},"sj":{"name":"Svalbard and Jan Mayen","native":"Svalbard og Jan Mayen","emoji":"🇸🇯"},"sk":{"name":"Slovakia","native":"Slovensko","emoji":"🇸🇰"},"sl":{"name":"Sierra Leone","native":"Sierra Leone","emoji":"🇸🇱"},"sm":{"name":"San Marino","native":"San Marino","emoji":"🇸🇲"},"sn":{"name":"Senegal","native":"Sénégal","emoji":"🇸🇳"},"so":{"name":"Somalia","native":"Soomaaliya","emoji":"🇸🇴"},"sr":{"name":"Suriname","native":"Suriname","emoji":"🇸🇷"},"ss":{"name":"South Sudan","native":"South Sudan","emoji":"🇸🇸"},"st":{"name":"São Tomé and Príncipe","native":"São Tomé e Príncipe","emoji":"🇸🇹"},"sv":{"name":"El Salvador","native":"El Salvador","emoji":"🇸🇻"},"sx":{"name":"Sint Maarten","native":"Sint Maarten","emoji":"🇸🇽"},"sy":{"name":"Syria","native":"سوريا","emoji":"🇸🇾"},"sz":{"name":"Swaziland","native":"Swaziland","emoji":"🇸🇿"},"tc":{"name":"Turks and Caicos Islands","native":"Turks and Caicos Islands","emoji":"🇹🇨"},"td":{"name":"Chad","native":"Tchad","emoji":"🇹🇩"},"tf":{"name":"French Southern Territories","native":"Territoire des Terres australes et antarctiques fr","emoji":"🇹🇫"},"tg":{"name":"Togo","native":"Togo","emoji":"🇹🇬"},"th":{"name":"Thailand","native":"ประเทศไทย","emoji":"🇹🇭"},"tj":{"name":"Tajikistan","native":"Тоҷикистон","emoji":"🇹🇯"},"tk":{"name":"Tokelau","native":"Tokelau","emoji":"🇹🇰"},"tl":{"name":"East Timor","native":"Timor-Leste","emoji":"🇹🇱"},"tm":{"name":"Turkmenistan","native":"Türkmenistan","emoji":"🇹🇲"},"tn":{"name":"Tunisia","native":"تونس","emoji":"🇹🇳"},"to":{"name":"Tonga","native":"Tonga","emoji":"🇹🇴"},"tr":{"name":"Turkey","native":"Türkiye","emoji":"🇹🇷"},"tt":{"name":"Trinidad and Tobago","native":"Trinidad and Tobago","emoji":"🇹🇹"},"tv":{"name":"Tuvalu","native":"Tuvalu","emoji":"🇹🇻"},"tw":{"name":"Taiwan","native":"臺灣","emoji":"🇹🇼"},"tz":{"name":"Tanzania","native":"Tanzania","emoji":"🇹🇿"},"ua":{"name":"Ukraine","native":"Україна","emoji":"🇺🇦"},"ug":{"name":"Uganda","native":"Uganda","emoji":"🇺🇬"},"um":{"name":"U.S. Minor Outlying Islands","native":"United States Minor Outlying Islands","emoji":"🇺🇲"},"us":{"name":"United States","native":"United States","emoji":"🇺🇸"},"uy":{"name":"Uruguay","native":"Uruguay","emoji":"🇺🇾"},"uz":{"name":"Uzbekistan","native":"O‘zbekiston","emoji":"🇺🇿"},"va":{"name":"Vatican City","native":"Vaticano","emoji":"🇻🇦"},"vc":{"name":"Saint Vincent and the Grenadines","native":"Saint Vincent and the Grenadines","emoji":"🇻🇨"},"ve":{"name":"Venezuela","native":"Venezuela","emoji":"🇻🇪"},"vg":{"name":"British Virgin Islands","native":"British Virgin Islands","emoji":"🇻🇬"},"vi":{"name":"U.S. Virgin Islands","native":"United States Virgin Islands","emoji":"🇻🇮"},"vn":{"name":"Vietnam","native":"Việt Nam","emoji":"🇻🇳"},"vu":{"name":"Vanuatu","native":"Vanuatu","emoji":"🇻🇺"},"wf":{"name":"Wallis and Futuna","native":"Wallis et Futuna","emoji":"🇼🇫"},"ws":{"name":"Samoa","native":"Samoa","emoji":"🇼🇸"},"xk":{"name":"Kosovo","native":"Republika e Kosovës","emoji":"🇽🇰"},"ye":{"name":"Yemen","native":"اليَمَن","emoji":"🇾🇪"},"yt":{"name":"Mayotte","native":"Mayotte","emoji":"🇾🇹"},"za":{"name":"South Africa","native":"South Africa","emoji":"🇿🇦"},"zm":{"name":"Zambia","native":"Zambia","emoji":"🇿🇲"},"zw":{"name":"Zimbabwe","native":"Zimbabwe","emoji":"🇿🇼"}}')},,function(a,e){a.exports=flarum.core.compat["common/utils/Stream"]},,,,,,,,,,function(a,e){a.exports=flarum.core.compat["admin/components/PermissionGrid"]},function(a,e){a.exports=flarum.core.compat["admin/components/SettingDropdown"]},function(a,e){a.exports=flarum.core.compat["admin/components/ExtensionPage"]},function(a,e){a.exports=flarum.core.compat["admin/utils/saveSettings"]},function(a,e,n){"use strict";n.r(e),n.d(e,"components",(function(){return _})),n.d(e,"utils",(function(){return O})),n.d(e,"models",(function(){return D.a}));var i=n(1),t=n(7),o=n.n(t),r=n(28),s=n.n(r),u=n(29),v=n.n(u),l=n(2),c=n(30),d=n.n(c),g=n(4),j=n.n(g),h=n(12),N=n.n(h),p=n(13),f=n.n(p),b=n(6),y=n.n(b),k=n(31),S=n.n(k),w=n(18),M=n.n(w);var C={aa:{name:"Afar",nativeName:"Afaraf"},ab:{name:"Abkhaz",nativeName:"аҧсуа бызшәа"},ae:{name:"Avestan",nativeName:"avesta"},af:{name:"Afrikaans",nativeName:"Afrikaans"},ak:{name:"Akan",nativeName:"Akan"},am:{name:"Amharic",nativeName:"አማርኛ"},an:{name:"Aragonese",nativeName:"aragonés"},ar:{name:"Arabic",nativeName:"اللغة العربية"},as:{name:"Assamese",nativeName:"অসমীয়া"},av:{name:"Avaric",nativeName:"авар мацӀ"},ay:{name:"Aymara",nativeName:"aymar aru"},az:{name:"Azerbaijani",nativeName:"azərbaycan dili"},ba:{name:"Bashkir",nativeName:"башҡорт теле"},be:{name:"Belarusian",nativeName:"беларуская мова"},bg:{name:"Bulgarian",nativeName:"български език"},bh:{name:"Bihari",nativeName:"भोजपुरी"},bi:{name:"Bislama",nativeName:"Bislama"},bm:{name:"Bambara",nativeName:"bamanankan"},bn:{name:"Bengali",nativeName:"বাংলা"},bo:{name:"Tibetan Standard",nativeName:"བོད་ཡིག"},br:{name:"Breton",nativeName:"brezhoneg"},bs:{name:"Bosnian",nativeName:"bosanski jezik"},ca:{name:"Catalan",nativeName:"Català"},ce:{name:"Chechen",nativeName:"нохчийн мотт"},ch:{name:"Chamorro",nativeName:"Chamoru"},co:{name:"Corsican",nativeName:"corsu"},cr:{name:"Cree",nativeName:"ᓀᐦᐃᔭᐍᐏᐣ"},cs:{name:"Czech",nativeName:"čeština"},cu:{name:"Old Church Slavonic",nativeName:"ѩзыкъ словѣньскъ"},cv:{name:"Chuvash",nativeName:"чӑваш чӗлхи"},cy:{name:"Welsh",nativeName:"Cymraeg"},da:{name:"Danish",nativeName:"dansk"},de:{name:"German",nativeName:"Deutsch"},dv:{name:"Divehi",nativeName:"Dhivehi"},dz:{name:"Dzongkha",nativeName:"རྫོང་ཁ"},ee:{name:"Ewe",nativeName:"Eʋegbe"},el:{name:"Greek",nativeName:"Ελληνικά"},en:{name:"English",nativeName:"English"},eo:{name:"Esperanto",nativeName:"Esperanto"},es:{name:"Spanish",nativeName:"Español"},et:{name:"Estonian",nativeName:"eesti"},eu:{name:"Basque",nativeName:"euskara"},fa:{name:"Persian",nativeName:"فارسی"},ff:{name:"Fula",nativeName:"Fulfulde"},fi:{name:"Finnish",nativeName:"suomi"},fj:{name:"Fijian",nativeName:"Vakaviti"},fo:{name:"Faroese",nativeName:"føroyskt"},fr:{name:"French",nativeName:"Français"},fy:{name:"Western Frisian",nativeName:"Frysk"},ga:{name:"Irish",nativeName:"Gaeilge"},gd:{name:"Scottish Gaelic",nativeName:"Gàidhlig"},gl:{name:"Galician",nativeName:"galego"},gn:{name:"Guaraní",nativeName:"Avañe'ẽ"},gu:{name:"Gujarati",nativeName:"ગુજરાતી"},gv:{name:"Manx",nativeName:"Gaelg"},ha:{name:"Hausa",nativeName:"هَوُسَ"},he:{name:"Hebrew",nativeName:"עברית"},hi:{name:"Hindi",nativeName:"हिन्दी"},ho:{name:"Hiri Motu",nativeName:"Hiri Motu"},hr:{name:"Croatian",nativeName:"hrvatski jezik"},ht:{name:"Haitian",nativeName:"Kreyòl ayisyen"},hu:{name:"Hungarian",nativeName:"Magyar"},hy:{name:"Armenian",nativeName:"Հայերեն"},hz:{name:"Herero",nativeName:"Otjiherero"},ia:{name:"Interlingua",nativeName:"Interlingua"},id:{name:"Indonesian",nativeName:"Bahasa Indonesia"},ie:{name:"Interlingue",nativeName:"Interlingue"},ig:{name:"Igbo",nativeName:"Asụsụ Igbo"},ii:{name:"Nuosu",nativeName:"ꆈꌠ꒿ Nuosuhxop"},ik:{name:"Inupiaq",nativeName:"Iñupiaq"},io:{name:"Ido",nativeName:"Ido"},is:{name:"Icelandic",nativeName:"Íslenska"},it:{name:"Italian",nativeName:"Italiano"},iu:{name:"Inuktitut",nativeName:"ᐃᓄᒃᑎᑐᑦ"},ja:{name:"Japanese",nativeName:"日本語"},jv:{name:"Javanese",nativeName:"basa Jawa"},ka:{name:"Georgian",nativeName:"ქართული"},kg:{name:"Kongo",nativeName:"Kikongo"},ki:{name:"Kikuyu",nativeName:"Gĩkũyũ"},kj:{name:"Kwanyama",nativeName:"Kuanyama"},kk:{name:"Kazakh",nativeName:"қазақ тілі"},kl:{name:"Kalaallisut",nativeName:"kalaallisut"},km:{name:"Khmer",nativeName:"ខេមរភាសា"},kn:{name:"Kannada",nativeName:"ಕನ್ನಡ"},ko:{name:"Korean",nativeName:"한국어"},kr:{name:"Kanuri",nativeName:"Kanuri"},ks:{name:"Kashmiri",nativeName:"कश्मीरी"},ku:{name:"Kurdish",nativeName:"Kurdî"},kv:{name:"Komi",nativeName:"коми кыв"},kw:{name:"Cornish",nativeName:"Kernewek"},ky:{name:"Kyrgyz",nativeName:"Кыргызча"},la:{name:"Latin",nativeName:"latine"},lb:{name:"Luxembourgish",nativeName:"Lëtzebuergesch"},lg:{name:"Ganda",nativeName:"Luganda"},li:{name:"Limburgish",nativeName:"Limburgs"},ln:{name:"Lingala",nativeName:"Lingála"},lo:{name:"Lao",nativeName:"ພາສາ"},lt:{name:"Lithuanian",nativeName:"lietuvių kalba"},lu:{name:"Luba-Katanga",nativeName:"Tshiluba"},lv:{name:"Latvian",nativeName:"latviešu valoda"},mg:{name:"Malagasy",nativeName:"fiteny malagasy"},mh:{name:"Marshallese",nativeName:"Kajin M̧ajeļ"},mi:{name:"Māori",nativeName:"te reo Māori"},mk:{name:"Macedonian",nativeName:"македонски јазик"},ml:{name:"Malayalam",nativeName:"മലയാളം"},mn:{name:"Mongolian",nativeName:"Монгол хэл"},mr:{name:"Marathi",nativeName:"मराठी"},ms:{name:"Malay",nativeName:"Bahasa Malaysia"},mt:{name:"Maltese",nativeName:"Malti"},my:{name:"Burmese",nativeName:"ဗမာစာ"},na:{name:"Nauru",nativeName:"Ekakairũ Naoero"},nb:{name:"Norwegian Bokmål",nativeName:"Norsk bokmål"},nd:{name:"Northern Ndebele",nativeName:"isiNdebele"},ne:{name:"Nepali",nativeName:"नेपाली"},ng:{name:"Ndonga",nativeName:"Owambo"},nl:{name:"Dutch",nativeName:"Nederlands"},nn:{name:"Norwegian Nynorsk",nativeName:"Norsk nynorsk"},no:{name:"Norwegian",nativeName:"Norsk"},nr:{name:"Southern Ndebele",nativeName:"isiNdebele"},nv:{name:"Navajo",nativeName:"Diné bizaad"},ny:{name:"Chichewa",nativeName:"chiCheŵa"},oc:{name:"Occitan",nativeName:"occitan"},oj:{name:"Ojibwe",nativeName:"ᐊᓂᔑᓈᐯᒧᐎᓐ"},om:{name:"Oromo",nativeName:"Afaan Oromoo"},or:{name:"Oriya",nativeName:"ଓଡ଼ିଆ"},os:{name:"Ossetian",nativeName:"ирон æвзаг"},pa:{name:"Panjabi",nativeName:"ਪੰਜਾਬੀ"},pi:{name:"Pāli",nativeName:"पाऴि"},pl:{name:"Polish",nativeName:"język polski"},ps:{name:"Pashto",nativeName:"پښتو"},pt:{name:"Portuguese",nativeName:"Português"},qu:{name:"Quechua",nativeName:"Runa Simi"},rm:{name:"Romansh",nativeName:"rumantsch grischun"},rn:{name:"Kirundi",nativeName:"Ikirundi"},ro:{name:"Romanian",nativeName:"Română"},ru:{name:"Russian",nativeName:"Русский"},rw:{name:"Kinyarwanda",nativeName:"Ikinyarwanda"},sa:{name:"Sanskrit",nativeName:"संस्कृतम्"},sc:{name:"Sardinian",nativeName:"sardu"},sd:{name:"Sindhi",nativeName:"सिन्धी"},se:{name:"Northern Sami",nativeName:"Davvisámegiella"},sg:{name:"Sango",nativeName:"yângâ tî sängö"},si:{name:"Sinhala",nativeName:"සිංහල"},sk:{name:"Slovak",nativeName:"slovenčina"},sl:{name:"Slovene",nativeName:"slovenski jezik"},sm:{name:"Samoan",nativeName:"gagana fa'a Samoa"},sn:{name:"Shona",nativeName:"chiShona"},so:{name:"Somali",nativeName:"Soomaaliga"},sq:{name:"Albanian",nativeName:"Shqip"},sr:{name:"Serbian",nativeName:"српски језик"},ss:{name:"Swati",nativeName:"SiSwati"},st:{name:"Southern Sotho",nativeName:"Sesotho"},su:{name:"Sundanese",nativeName:"Basa Sunda"},sv:{name:"Swedish",nativeName:"Svenska"},sw:{name:"Swahili",nativeName:"Kiswahili"},ta:{name:"Tamil",nativeName:"தமிழ்"},te:{name:"Telugu",nativeName:"తెలుగు"},tg:{name:"Tajik",nativeName:"тоҷикӣ"},th:{name:"Thai",nativeName:"ไทย"},ti:{name:"Tigrinya",nativeName:"ትግርኛ"},tk:{name:"Turkmen",nativeName:"Türkmen"},tl:{name:"Tagalog",nativeName:"Wikang Tagalog"},tn:{name:"Tswana",nativeName:"Setswana"},to:{name:"Tonga",nativeName:"faka Tonga"},tr:{name:"Turkish",nativeName:"Türkçe"},ts:{name:"Tsonga",nativeName:"Xitsonga"},tt:{name:"Tatar",nativeName:"татар теле"},tw:{name:"Twi",nativeName:"Twi"},ty:{name:"Tahitian",nativeName:"Reo Tahiti"},ug:{name:"Uyghur",nativeName:"ئۇيغۇرچە‎"},uk:{name:"Ukrainian",nativeName:"Українська"},ur:{name:"Urdu",nativeName:"اردو"},uz:{name:"Uzbek",nativeName:"Ўзбек"},ve:{name:"Venda",nativeName:"Tshivenḓa"},vi:{name:"Vietnamese",nativeName:"Tiếng Việt"},vo:{name:"Volapük",nativeName:"Volapük"},wa:{name:"Walloon",nativeName:"walon"},wo:{name:"Wolof",nativeName:"Wollof"},xh:{name:"Xhosa",nativeName:"isiXhosa"},yi:{name:"Yiddish",nativeName:"ייִדיש"},yo:{name:"Yoruba",nativeName:"Yorùbá"},za:{name:"Zhuang",nativeName:"Saɯ cueŋƅ"},zh:{name:"Chinese",nativeName:"中文"},zu:{name:"Zulu",nativeName:"isiZulu"}};class B{static getLanguages(a=[]){return a.map(a=>({code:a,name:B.getName(a),nativeName:B.getNativeName(a)}))}static getName(a){return B.validate(a)?C[a].name:""}static getAllNames(){return Object.values(C).map(a=>a.name)}static getNativeName(a){return B.validate(a)?C[a].nativeName:""}static getAllNativeNames(){return Object.values(C).map(a=>a.nativeName)}static getCode(a){return Object.keys(C).find(e=>{const n=C[e];return n.name.toLowerCase()===a.toLowerCase()||n.nativeName.toLowerCase()===a.toLowerCase()})||""}static getAllCodes(){return Object.keys(C)}static validate(a){return C.hasOwnProperty(a)}}var I=function(a){return B[a?"getAllNativeNames":"getAllNames"]().sort((function(a,e){return a>e})).reduce((function(a,e){return a[B.getCode(e)]=e,a}),{})},L=n(16),K=Object.values(L),T=function(a){var e=a?"native":"name";return K.map((function(a){return a[e]})).sort((function(a,e){return a>e})).reduce((function(a,n){var i=K.indexOf(K.filter((function(a){return a[e]===n}))[0]);return a[Object.keys(L)[i]]=n,a}),{})},z=function(a){var e=L[a];return e&&e.emoji},A=n(3),G=function(a){function e(){return a.apply(this,arguments)||this}Object(l.a)(e,a);var n=e.prototype;return n.oninit=function(e){a.prototype.oninit.call(this,e),this.updating={},this.deleting={},this.codes={},this.countries={},this.newLocale=M()(""),this.newCountry=M()(""),this.nativeKey="fof-discussion-language.native",this.native=app.data.settings[this.nativeKey],this.showFlagsKey="fof-discussion-language.showFlags",this.showFlags=app.data.settings[this.showFlagsKey],this.composerLocaleDefaultKey="fof-discussion-language.composerLocaleDefault",this.composerLocaleDefault=app.data.settings[this.composerLocaleDefaultKey]||0,this.localeSortKey="fof-discussion-language.filter_language_on_http_request",this.localeSort=app.data.settings[this.localeSortKey]},n.content=function(){var a=this,e=I(this.native),n=T(this.native);return[m("div",{className:"container"},m("div",{className:"FofDiscussionLanguagesSettingsPage"},m("div",{className:"Form-group"},f.a.component({state:this.native,onchange:function(e){a.native=e,m.redraw.sync()}},app.translator.trans("fof-discussion-language.admin.settings.native_label"))),m("div",{className:"Form-group"},f.a.component({state:this.showFlags,onchange:function(e){return a.showFlags=e}},app.translator.trans("fof-discussion-language.admin.settings.show_flag_label"))),m("div",{className:"Form-group"},f.a.component({state:this.composerLocaleDefault,onchange:function(e){return a.composerLocaleDefault=e}},app.translator.trans("fof-discussion-language.admin.settings.composer_default_label"))),m("div",{className:"Form-group"},f.a.component({state:this.localeSort,onchange:function(e){return a.localeSort=e}},app.translator.trans("fof-discussion-language.admin.settings.locale_sort_label"))),m("hr",null),m("div",{className:"Form-group flex"},N.a.component({onchange:this.newLocale,value:this.newLocale(),options:e}),N.a.component({onchange:this.newCountry,value:this.newCountry(),options:n}),Object(A.a)(z(this.newCountry())),j.a.component({className:"Button Button--primary",onclick:this.add.bind(this),disabled:!this.newLocale()||!this.newCountry()||this.adding},y()(this.adding?"fas fa-spinner fa-spin":"fas fa-plus"))),m("div",{className:"Form-group"},app.store.all("discussion-languages").map((function(i){var t=i.id(),o=a.updating[t],r=a.deleting[t],s=a.countries[t]||i.country();return m("div",{className:"flex"},N.a.component({onchange:function(e){return a.codes[t]=e},value:a.codes[t]||i.code(),options:e,disabled:o||r}),N.a.component({onchange:function(e){return a.countries[t]=e},value:s,options:n,disabled:o||r}),Object(A.a)(z(s)),j.a.component({className:"Button Button--danger",disabled:r,onclick:a.remove.bind(a,i)},y()(r?"fas fa-spinner fa-spin":"fas fa-times")))}))),m("div",{className:"Form-group"},m(j.a,{type:"submit",className:"Button Button--primary",loading:this.loading,disabled:!this.isChanged(),onclick:this.save.bind(this)},app.translator.trans("core.admin.settings.submit_button")))))]},n.onkeydown=function(a){"Enter"===a.key&&(this.add(),a.preventDefault())},n.add=function(){var a=this;if(!this.adding&&this.newLocale()){this.adding=!0;var e=this.newLocale(),n=this.newCountry();app.store.createRecord("discussion-languages").save({code:e,country:n}).then((function(){a.newLocale(""),a.adding=!1,m.redraw()})).catch((function(){return a.adding=!1}))}},n.save=function(a){var e,n=this;a.preventDefault(),this.loading=!0,Promise.all([].concat(this.dirty().map((function(a){var e=a.id();return n.updating[e]=!0,a.save({code:n.codes[e],country:n.countries[e]}).then((function(){}),(function(){})).then((function(){n.updating[e]=!1}))})),[S()((e={},e[this.nativeKey]=this.native,e[this.showFlagsKey]=this.showFlags,e[this.composerLocaleDefaultKey]=this.composerLocaleDefault,e[this.localeSortKey]=this.localeSort,e)).then(this.onsaved.bind(this))]))},n.remove=function(a){var e=this;this.deleting[a.id()]=!0,a.delete().then((function(){}),(function(){})).then((function(){delete e.deleting[a.id()],m.redraw()}))},n.dirty=function(){var a=this;return app.store.all("discussion-languages").filter((function(e){var n=e.id();return a.codes[n]&&a.codes[n]!==e.code()||a.countries[n]&&a.countries[n]!==e.country()}))},n.isChanged=function(){var a=this.dirty().length,e=Number(this.native)!==Number(app.data.settings[this.nativeKey]||0),n=Number(this.showFlags)!==Number(app.data.settings[this.showFlagsKey]||0),i=Number(this.composerLocaleDefault)!==Number(app.data.settings[this.composerLocaleDefaultKey]||0),t=Number(this.localeSort)!==Number(app.data.settings[this.localeSortKey]||0);return a||e||n||i||t},e}(d.a),P=n(5),_={LanguagesSettingsPage:G};function F(){return(F=Object.assign||function(a){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(a[i]=n[i])}return a}).apply(this,arguments)}var x=n(9),O=F({countries:T,getCountryEmoji:z,locales:I,getName:function(a,e){return B[e?"getNativeName":"getName"](a)}},x.a),D=n(8);app.initializers.add("fof/discussion-language",(function(){app.store.models["discussion-languages"]=P.a,o.a.prototype.discussionLanguages=o.a.hasMany("discussionLanguages"),app.extensionData.for("fof-discussion-language").registerPage(G),Object(i.extend)(s.a.prototype,"startItems",(function(a){a.add("allowLanguageChange",{icon:"fas fa-globe",label:app.translator.trans("fof-discussion-language.admin.permissions.allow_change_language_label"),setting:function(){var a=parseInt(app.data.settings["fof-discussion-language.allow_tag_change"],10);return v.a.component({defaultLabel:a?app.translator.trans("core.admin.permissions_controls.allow_some_minutes_button",a,{count:a}):app.translator.trans("core.admin.permissions_controls.allow_indefinitely_button"),key:"fof-discussion-language.allow_language_change",options:[{value:"-1",label:app.translator.trans("core.admin.permissions_controls.allow_indefinitely_button")},{value:"10",label:app.translator.trans("core.admin.permissions_controls.allow_ten_minutes_button")},{value:"reply",label:app.translator.trans("core.admin.permissions_controls.allow_until_reply_button")}]})}},90)}))}))}]);
//# sourceMappingURL=admin.js.map