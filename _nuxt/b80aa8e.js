(window.webpackJsonp=window.webpackJsonp||[]).push([[6,3,4,5,7],{347:function(e,t,n){var content=n(352);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(32).default)("31c6d416",content,!0,{sourceMap:!1})},348:function(e,t,n){var content=n(357);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(32).default)("57b024a2",content,!0,{sourceMap:!1})},349:function(e,t,n){var content=n(360);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(32).default)("1afb0a14",content,!0,{sourceMap:!1})},350:function(e,t,n){var content=n(362);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(32).default)("5b224406",content,!0,{sourceMap:!1})},351:function(e,t,n){"use strict";n(347)},352:function(e,t,n){var o=n(31)(!1);o.push([e.i,".slideToggleAnimation[data-v-1826e032]{transition:all .3s}.fastAnimation[data-v-1826e032]{transition:all .01s}.compareNotification[data-v-1826e032]{transition:all 3s}",""]),e.exports=o},353:function(e,t,n){"use strict";n.r(t);var o={methods:{beforeEnter:function(e){e.style.height="0",e.style.overflow="hidden"},enter:function(e){e.style.height=e.scrollHeight+"px"},afterEnter:function(e){e.style.height="auto",e.style.overflow="initial"},beforeLeave:function(e){e.style.overflow="hidden",e.style.height=e.scrollHeight+"px",e.scrollHeight},leave:function(e){e.style.height="0"},afterLeave:function(e){e.style.height="auto",e.style.overflow="initial"}}},r=(n(351),n(22)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("transition",{on:{"before-enter":e.beforeEnter,enter:e.enter,"after-enter":e.afterEnter,"before-leave":e.beforeLeave,leave:e.leave,"after-leave":e.afterLeave}},[e._t("default",null,{animationClass:"slideToggleAnimation",compareNotificationClass:"compareNotification",fastAnimation:"fastAnimation"})],2)}),[],!1,null,"1826e032",null);t.default=component.exports},354:function(e,t,n){var content=n(370);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(32).default)("78abb475",content,!0,{sourceMap:!1})},355:function(e,t,n){e.exports=function(){var e="undefined"!=typeof window,t="undefined"!=typeof navigator,n=e&&("ontouchstart"in window||t&&navigator.msMaxTouchPoints>0)?["touchstart"]:["click"];function i(e){var t=e.event,n=e.handler;(0,e.middleware)(t)&&n(t)}function o(e,t){var o=function(e){var t="function"==typeof e;if(!t&&"object"!=typeof e)throw new Error("v-click-outside: Binding value must be a function or an object");return{handler:t?e:e.handler,middleware:e.middleware||function(e){return e},events:e.events||n,isActive:!(!1===e.isActive),detectIframe:!(!1===e.detectIframe)}}(t.value),r=o.handler,c=o.middleware,a=o.detectIframe;if(o.isActive){if(e["__v-click-outside"]=o.events.map((function(t){return{event:t,srcTarget:document.documentElement,handler:function(t){return function(e){var t=e.el,n=e.event,o=e.handler,r=e.middleware,c=n.path||n.composedPath&&n.composedPath();(c?c.indexOf(t)<0:!t.contains(n.target))&&i({event:n,handler:o,middleware:r})}({el:e,event:t,handler:r,middleware:c})}}})),a){var d={event:"blur",srcTarget:window,handler:function(t){return function(e){var t=e.el,n=e.event,o=e.handler,r=e.middleware;setTimeout((function(){var e=document.activeElement;e&&"IFRAME"===e.tagName&&!t.contains(e)&&i({event:n,handler:o,middleware:r})}),0)}({el:e,event:t,handler:r,middleware:c})}};e["__v-click-outside"]=[].concat(e["__v-click-outside"],[d])}e["__v-click-outside"].forEach((function(t){var n=t.event,i=t.srcTarget,o=t.handler;return setTimeout((function(){e["__v-click-outside"]&&i.addEventListener(n,o,!1)}),0)}))}}function r(e){(e["__v-click-outside"]||[]).forEach((function(e){return e.srcTarget.removeEventListener(e.event,e.handler,!1)})),delete e["__v-click-outside"]}var c=e?{bind:o,update:function(e,t){var n=t.value,i=t.oldValue;JSON.stringify(n)!==JSON.stringify(i)&&(r(e),o(e,{value:n}))},unbind:r}:{};return{install:function(e){e.directive("click-outside",c)},directive:c}}()},356:function(e,t,n){"use strict";n(348)},357:function(e,t,n){var o=n(31)(!1);o.push([e.i,".search-dropdown[data-v-1b41e8fc]{width:191px;position:relative}.flag[data-v-1b41e8fc]{width:24px;height:24px;margin-right:4px}.text[data-v-1b41e8fc]{font-weight:700;font-size:24px;line-height:130%;color:#f7a035}.item[data-v-1b41e8fc]{display:flex;align-items:center;padding:8px 10px;cursor:pointer;height:42px;position:relative}.item.active[data-v-1b41e8fc],.item[data-v-1b41e8fc]:hover{background:#eef0f5}.item .check[data-v-1b41e8fc]{position:absolute;top:50%;transform:translateY(-50%);right:10px}.dropdown-base[data-v-1b41e8fc]{display:flex;align-items:center;width:154px;height:42px;position:relative;cursor:pointer;padding:8px 10px;background:rgba(247,160,53,.06);border-radius:8px}.dropdown-base__icon[data-v-1b41e8fc]{transition:transform .3s;width:24px;height:24px}.dropdown-base__icon.rotate[data-v-1b41e8fc]{transform:rotate(180deg)}.menu-list[data-v-1b41e8fc]{position:absolute;width:154px;z-index:100;transition:.3s;margin-top:6px;background:#fff;border:1px solid rgba(0,0,0,.05);box-shadow:0 12px 20px rgba(0,0,0,.05);border-radius:8px}.menu-list .text[data-v-1b41e8fc]{font-size:16px;line-height:20px}.etherium[data-v-1b41e8fc]{font-size:20px;color:#2c2e2b}",""]),e.exports=o},358:function(e,t){e.exports=function(component,e){var t="function"==typeof component.exports?component.exports.extendOptions:component.options;for(var i in"function"==typeof component.exports&&(t.directives=component.exports.options.directives),t.directives=t.directives||{},e)t.directives[i]=t.directives[i]||e[i]}},359:function(e,t,n){"use strict";n(349)},360:function(e,t,n){var o=n(31)(!1);o.push([e.i,"[data-v-3a9dfa5b]:focus{outline:none}.coin-field[data-v-3a9dfa5b]{width:100%;position:relative;overflow:hidden}.coin-field__input[data-v-3a9dfa5b]{width:100%;padding:12px 10px 12px 34px;height:48px;background:transparent;box-sizing:border-box;border-radius:2px;display:flex;align-items:center}.coin-field__dollar[data-v-3a9dfa5b],.coin-field__input[data-v-3a9dfa5b]{font-size:24px;line-height:32px;color:#2c2e2b}.coin-field__dollar[data-v-3a9dfa5b]{left:11px;font-weight:500;opacity:.3}.coin-field__currency[data-v-3a9dfa5b],.coin-field__dollar[data-v-3a9dfa5b]{position:absolute;top:50%;transform:translateY(-50%)}.coin-field__currency[data-v-3a9dfa5b]{display:flex;align-items:center;right:11px}.coin-field__currency .sum[data-v-3a9dfa5b]{font-size:14px;line-height:18px;color:#2c2e2b;opacity:.5;margin-right:8px}",""]),e.exports=o},361:function(e,t,n){"use strict";n(350)},362:function(e,t,n){var o=n(31)(!1);o.push([e.i,".chips[data-v-7d2899fd]{display:grid;grid-template-columns:repeat(6,1fr);grid-column-gap:10px;-moz-column-gap:10px;column-gap:10px}.chips__item[data-v-7d2899fd]{font-weight:500;font-size:16px;line-height:20px;color:#2c2e2b;padding:8px 16px;background:#fafafa;border-radius:20px;width:60px;height:36px;display:flex;align-items:center;cursor:pointer}@media(max-width:850px){.chips__item[data-v-7d2899fd]{font-size:12px;line-height:16px;width:40px;height:26px;padding:5px 6px}}.chips__item.active[data-v-7d2899fd]{background:rgba(1,172,106,.07)}",""]),e.exports=o},363:function(e,t,n){"use strict";var o=n(50);n(6),n(71);function r(e){if("function"!=typeof e.getRootNode){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}var t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}function c(){return!0}function d(e,t,n){if(!e||!1===l(e,n))return!1;var c=r(t);if("undefined"!=typeof ShadowRoot&&c instanceof ShadowRoot&&c.host===e.target)return!1;var d=("object"===Object(o.a)(n.value)&&n.value.include||function(){return[]})();return d.push(t),!d.some((function(t){return t.contains(e.target)}))}function l(e,t){return("object"===Object(o.a)(t.value)&&t.value.closeConditional||c)(e)}function f(e,t){var n=r(e);t(document),"undefined"!=typeof ShadowRoot&&n instanceof ShadowRoot&&t(n)}var v={inserted:function(e,t,n){var o=function(n){return function(e,t,n,o){var r="function"==typeof n.value?n.value:n.value.handler;t._clickOutside.lastMousedownWasOutside&&d(e,t,n)&&setTimeout((function(){l(e,n)&&r&&r(e)}),0)}(n,e,t)},r=function(n){e._clickOutside.lastMousedownWasOutside=d(n,e,t)};f(e,(function(e){e.addEventListener("click",o,!0),e.addEventListener("mousedown",r,!0)})),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!0}),e._clickOutside[n.context._uid]={onClick:o,onMousedown:r}},unbind:function(e,t,n){e._clickOutside&&(f(e,(function(t){var o;if(t&&null!=(o=e._clickOutside)&&o[n.context._uid]){var r=e._clickOutside[n.context._uid],c=r.onClick,d=r.onMousedown;t.removeEventListener("click",c,!0),t.removeEventListener("mousedown",d,!0)}})),delete e._clickOutside[n.context._uid])}};t.a=v},365:function(e,t,n){"use strict";n.r(t);var o=n(15),r=(n(6),n(28),n(168),n(355)),c={props:{value:{type:String,required:!0}},data:function(){return{show:!1,currency:{bitcoin:{id:1,text:"Bitcoin",iconImg:n(247)+"#bitcoin",type:"bitcoin"},etherium:{id:2,text:"Etherium",iconImg:n(247)+"#etherium",type:"etherium"}}}},computed:{activeItem:function(){return this.currency[this.value]},array:function(){var e=[];return Object.entries(this.currency).forEach((function(t){var n=Object(o.a)(t,2),r=(n[0],n[1]);return e.push(r)})),e}},methods:{onSelectHandler:function(e,t){this.$emit("input",e?e.type:""),this.show=!1}},directives:{clickOutside:n.n(r).a.directive}},d=(n(356),n(22)),l=n(358),f=n.n(l),v=n(363),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:function(){return e.show=!1},expression:"() => (show = false)"}]},[n("div",{staticClass:"search-dropdown__button dropdown-base",on:{click:function(t){e.show=!e.show}}},[e.activeItem&&e.activeItem.iconImg?n("svg",{staticClass:"flag"},[n("use",{attrs:{"xlink:href":e.activeItem.iconImg}})]):e._e(),e._v(" "),n("div",{staticClass:"text",class:{etherium:2===e.activeItem.id}},[e._v(e._s(e.activeItem.text))]),e._v(" "),n("BaseIcon",{staticClass:"dropdown-base__icon",class:{rotate:e.show}},[e._v("\n      arrowDown\n    ")])],1),e._v(" "),n("SlideToggle",{scopedSlots:e._u([{key:"default",fn:function(t){var o=t.animationClass;return[n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"search-dropdown__menu menu-list",class:o},e._l(e.array,(function(t,o){return n("div",{key:t.id,staticClass:"item",class:[{active:e.activeItem.id===t.id}],on:{click:function(n){return e.onSelectHandler(t,o)}}},[t&&t.iconImg?n("svg",{staticClass:"flag"},[n("use",{attrs:{"xlink:href":t.iconImg}})]):e._e(),e._v(" "),n("div",{staticClass:"text",class:{etherium:1===o}},[e._v(e._s(t.text)+"\n        ")]),e._v(" "),n("BaseIcon",{directives:[{name:"show",rawName:"v-show",value:e.activeItem.id===t.id,expression:"activeItem.id === item.id"}],staticClass:"ic-size-12 check"},[e._v("check-green")])],1)})),0)]}}])})],1)}),[],!1,null,"1b41e8fc",null);t.default=component.exports;installComponents(component,{BaseIcon:n(106).default,SlideToggle:n(353).default}),f()(component,{ClickOutside:v.a})},366:function(e,t,n){"use strict";n.r(t);n(248);var o={name:"CoinField",props:{value:{type:[String,Number],required:!0},sum:{type:[String,Number],required:!0},currency:String},methods:{inputHandler:function(e){this.$emit("input",e)}}},r=(n(359),n(22)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"coin-field"},[n("div",{staticClass:"coin-field__dollar"},[e._v("\n    $\n  ")]),e._v(" "),n("input",{staticClass:"coin-field__input",domProps:{value:e.value},on:{input:function(t){return e.inputHandler(t.target.value)}}}),e._v(" "),n("div",{staticClass:"coin-field__currency"},[n("div",{staticClass:"sum"},[e._v(e._s(e.sum))]),e._v(" "),n("BaseIcon",{directives:[{name:"show",rawName:"v-show",value:"bitcoin"===e.currency,expression:'currency === "bitcoin"'}],staticClass:"ic-size-16"},[e._v("bitcoin")]),e._v(" "),n("BaseIcon",{directives:[{name:"show",rawName:"v-show",value:"etherium"===e.currency,expression:'currency==="etherium"'}],staticClass:"ic-size-16"},[e._v("etherium")])],1)])}),[],!1,null,"3a9dfa5b",null);t.default=component.exports;installComponents(component,{BaseIcon:n(106).default})},367:function(e,t,n){"use strict";n.r(t);var o={name:"Chips",props:{chips:{type:Array,default:function(){return[]}},selectedChip:{type:Object,default:function(){}}},methods:{activateChip:function(e){this.$emit("clicked",e)}}},r=(n(361),n(22)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"chips"},e._l(e.chips,(function(t){return n("div",{staticClass:"chips__item",class:{active:t.id===e.selectedChip.id},on:{click:function(n){return e.activateChip(t)}}},[n("span",[e._v("$")]),e._v("\n      "+e._s(t.text)+"\n    ")])})),0)}),[],!1,null,"7d2899fd",null);t.default=component.exports},369:function(e,t,n){"use strict";n(354)},370:function(e,t,n){var o=n(31)(!1);o.push([e.i,".form[data-v-12c8d7fc]{max-width:480px;display:flex;flex-direction:column;align-items:center;padding:36px;background:#fff;border:1px solid rgba(44,46,43,.05);border-radius:16px}@media(max-width:850px){.form[data-v-12c8d7fc]{padding:30px 10px}}.form__title[data-v-12c8d7fc]{display:flex;align-items:center}.form__title span[data-v-12c8d7fc]{color:#2c2e2b;font-weight:700;font-size:24px;line-height:130%;margin-right:8px}.form__fields[data-v-12c8d7fc]{margin-top:32px;width:100%}.form__fields--inputs[data-v-12c8d7fc]{border:1px solid #e6e6e6;border-radius:8px;padding:11px 16px;width:100%}.form__fields--subtitle[data-v-12c8d7fc]{font-weight:600;font-size:16px;line-height:20px;color:#2c2e2b;margin:24px 0 16px}.form__fields--coins[data-v-12c8d7fc]{border-radius:8px;border:1px solid #e6e6e6}.form__fields--chips[data-v-12c8d7fc]{margin-top:20px;margin-bottom:56px}.with-border[data-v-12c8d7fc]{border-bottom:1px solid #e6e6e6}",""]),e.exports=o},383:function(e,t,n){"use strict";n.r(t);n(249);var o={name:"Form",data:function(){return{currentCurrency:"bitcoin",name:"",email:"",coin:"",selectedChip:null,chips:[{text:50,id:1},{text:100,id:2},{text:150,id:3},{text:200,id:4},{text:250,id:5},{text:500,id:6}]}},computed:{getCourse:function(){return("bitcoin"===this.currentCurrency?5e-4*+this.coin:.004*+this.coin).toFixed(3)}},methods:{setClickedChip:function(e){this.selectedChip=e,this.coin=e.text}},created:function(){this.selectedChip=this.chips[0]}},r=(n(369),n(22)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form"},[n("div",{staticClass:"form__title"},[n("span",[e._v("\n      Gift\n    ")]),e._v(" "),n("BaseSelect",{on:{input:function(t){e.currentCurrency=t}},model:{value:e.currentCurrency,callback:function(t){e.currentCurrency=t},expression:"currentCurrency"}})],1),e._v(" "),n("div",{staticClass:"form__fields"},[n("div",{staticClass:"form__fields--inputs"},[n("BaseTextField",{staticClass:"with-border",attrs:{labelText:"Recipent name",value:e.name}}),e._v(" "),n("BaseTextField",{attrs:{labelText:"Recipient e-mail",value:e.email}})],1),e._v(" "),n("div",{staticClass:"form__fields--subtitle"},[e._v("\n      Gift value & currency\n    ")]),e._v(" "),n("div",{staticClass:"form__fields--coins"},[n("CoinField",{attrs:{currency:e.currentCurrency,sum:e.getCourse},model:{value:e.coin,callback:function(t){e.coin=t},expression:"coin"}})],1),e._v(" "),n("div",{staticClass:"form__fields--chips"},[n("Chips",{attrs:{chips:e.chips,selectedChip:e.selectedChip},on:{clicked:e.setClickedChip}})],1),e._v(" "),n("div",{staticClass:"form__fields--button"},[n("Button",{attrs:{variant:"large"}},[e._v("Send a Gift")])],1)])])}),[],!1,null,"12c8d7fc",null);t.default=component.exports;installComponents(component,{BaseSelect:n(365).default,BaseTextField:n(372).default,CoinField:n(366).default,Chips:n(367).default,Button:n(133).default})}}]);