(window.webpackJsonp=window.webpackJsonp||[]).push([[3,7],{347:function(e,t,n){var content=n(352);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(32).default)("31c6d416",content,!0,{sourceMap:!1})},348:function(e,t,n){var content=n(357);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(32).default)("02d5784c",content,!0,{sourceMap:!1})},351:function(e,t,n){"use strict";n(347)},352:function(e,t,n){var o=n(31)(!1);o.push([e.i,".slideToggleAnimation[data-v-1826e032]{transition:all .3s}.fastAnimation[data-v-1826e032]{transition:all .01s}.compareNotification[data-v-1826e032]{transition:all 3s}",""]),e.exports=o},353:function(e,t,n){"use strict";n.r(t);var o={methods:{beforeEnter:function(e){e.style.height="0",e.style.overflow="hidden"},enter:function(e){e.style.height=e.scrollHeight+"px"},afterEnter:function(e){e.style.height="auto",e.style.overflow="initial"},beforeLeave:function(e){e.style.overflow="hidden",e.style.height=e.scrollHeight+"px",e.scrollHeight},leave:function(e){e.style.height="0"},afterLeave:function(e){e.style.height="auto",e.style.overflow="initial"}}},r=(n(351),n(22)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("transition",{on:{"before-enter":e.beforeEnter,enter:e.enter,"after-enter":e.afterEnter,"before-leave":e.beforeLeave,leave:e.leave,"after-leave":e.afterLeave}},[e._t("default",null,{animationClass:"slideToggleAnimation",compareNotificationClass:"compareNotification",fastAnimation:"fastAnimation"})],2)}),[],!1,null,"1826e032",null);t.default=component.exports},355:function(e,t,n){e.exports=function(){var e="undefined"!=typeof window,t="undefined"!=typeof navigator,n=e&&("ontouchstart"in window||t&&navigator.msMaxTouchPoints>0)?["touchstart"]:["click"];function i(e){var t=e.event,n=e.handler;(0,e.middleware)(t)&&n(t)}function o(e,t){var o=function(e){var t="function"==typeof e;if(!t&&"object"!=typeof e)throw new Error("v-click-outside: Binding value must be a function or an object");return{handler:t?e:e.handler,middleware:e.middleware||function(e){return e},events:e.events||n,isActive:!(!1===e.isActive),detectIframe:!(!1===e.detectIframe)}}(t.value),r=o.handler,c=o.middleware,a=o.detectIframe;if(o.isActive){if(e["__v-click-outside"]=o.events.map((function(t){return{event:t,srcTarget:document.documentElement,handler:function(t){return function(e){var t=e.el,n=e.event,o=e.handler,r=e.middleware,c=n.path||n.composedPath&&n.composedPath();(c?c.indexOf(t)<0:!t.contains(n.target))&&i({event:n,handler:o,middleware:r})}({el:e,event:t,handler:r,middleware:c})}}})),a){var d={event:"blur",srcTarget:window,handler:function(t){return function(e){var t=e.el,n=e.event,o=e.handler,r=e.middleware;setTimeout((function(){var e=document.activeElement;e&&"IFRAME"===e.tagName&&!t.contains(e)&&i({event:n,handler:o,middleware:r})}),0)}({el:e,event:t,handler:r,middleware:c})}};e["__v-click-outside"]=[].concat(e["__v-click-outside"],[d])}e["__v-click-outside"].forEach((function(t){var n=t.event,i=t.srcTarget,o=t.handler;return setTimeout((function(){e["__v-click-outside"]&&i.addEventListener(n,o,!1)}),0)}))}}function r(e){(e["__v-click-outside"]||[]).forEach((function(e){return e.srcTarget.removeEventListener(e.event,e.handler,!1)})),delete e["__v-click-outside"]}var c=e?{bind:o,update:function(e,t){var n=t.value,i=t.oldValue;JSON.stringify(n)!==JSON.stringify(i)&&(r(e),o(e,{value:n}))},unbind:r}:{};return{install:function(e){e.directive("click-outside",c)},directive:c}}()},356:function(e,t,n){"use strict";n(348)},357:function(e,t,n){var o=n(31)(!1);o.push([e.i,".search-dropdown[data-v-4686b02e]{width:191px;position:relative}.flag[data-v-4686b02e]{width:24px;height:24px;margin-right:4px}.text[data-v-4686b02e]{font-weight:700;font-size:24px;line-height:130%;color:#f7a035}.item[data-v-4686b02e]{display:flex;align-items:center;padding:8px 10px;cursor:pointer;height:42px}.item.active[data-v-4686b02e],.item[data-v-4686b02e]:hover{background:#eef0f5}.dropdown-base[data-v-4686b02e]{display:flex;align-items:center;width:154px;height:42px;position:relative;cursor:pointer;padding:8px 10px;background:rgba(247,160,53,.06);border-radius:8px}.dropdown-base__icon[data-v-4686b02e]{transition:transform .3s;width:24px;height:24px}.dropdown-base__icon.rotate[data-v-4686b02e]{transform:rotate(180deg)}.menu-list[data-v-4686b02e]{border-radius:0 0 8px 8px;position:absolute;width:154px;background:#fff;z-index:100;transition:.3s}.etherium[data-v-4686b02e]{font-size:20px;color:#2c2e2b}",""]),e.exports=o},358:function(e,t){e.exports=function(component,e){var t="function"==typeof component.exports?component.exports.extendOptions:component.options;for(var i in"function"==typeof component.exports&&(t.directives=component.exports.options.directives),t.directives=t.directives||{},e)t.directives[i]=t.directives[i]||e[i]}},363:function(e,t,n){"use strict";var o=n(50);n(6),n(71);function r(e){if("function"!=typeof e.getRootNode){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}var t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}function c(){return!0}function d(e,t,n){if(!e||!1===l(e,n))return!1;var c=r(t);if("undefined"!=typeof ShadowRoot&&c instanceof ShadowRoot&&c.host===e.target)return!1;var d=("object"===Object(o.a)(n.value)&&n.value.include||function(){return[]})();return d.push(t),!d.some((function(t){return t.contains(e.target)}))}function l(e,t){return("object"===Object(o.a)(t.value)&&t.value.closeConditional||c)(e)}function f(e,t){var n=r(e);t(document),"undefined"!=typeof ShadowRoot&&n instanceof ShadowRoot&&t(n)}var v={inserted:function(e,t,n){var o=function(n){return function(e,t,n,o){var r="function"==typeof n.value?n.value:n.value.handler;t._clickOutside.lastMousedownWasOutside&&d(e,t,n)&&setTimeout((function(){l(e,n)&&r&&r(e)}),0)}(n,e,t)},r=function(n){e._clickOutside.lastMousedownWasOutside=d(n,e,t)};f(e,(function(e){e.addEventListener("click",o,!0),e.addEventListener("mousedown",r,!0)})),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!0}),e._clickOutside[n.context._uid]={onClick:o,onMousedown:r}},unbind:function(e,t,n){e._clickOutside&&(f(e,(function(t){var o;if(t&&null!=(o=e._clickOutside)&&o[n.context._uid]){var r=e._clickOutside[n.context._uid],c=r.onClick,d=r.onMousedown;t.removeEventListener("click",c,!0),t.removeEventListener("mousedown",d,!0)}})),delete e._clickOutside[n.context._uid])}};t.a=v},365:function(e,t,n){"use strict";n.r(t);var o=n(15),r=(n(6),n(28),n(168),n(355)),c={props:{value:{type:String,required:!0}},data:function(){return{show:!1,currency:{bitcoin:{id:1,text:"Bitcoin",iconImg:n(247)+"#bitcoin",type:"bitcoin"},etherium:{id:2,text:"Etherium",iconImg:n(247)+"#etherium",type:"etherium"}}}},computed:{activeItem:function(){return this.currency[this.value]},array:function(){var e=[];return Object.entries(this.currency).forEach((function(t){var n=Object(o.a)(t,2),r=(n[0],n[1]);return e.push(r)})),e}},methods:{onSelectHandler:function(e,t){this.$emit("input",e?e.type:""),this.show=!1}},directives:{clickOutside:n.n(r).a.directive}},d=(n(356),n(22)),l=n(358),f=n.n(l),v=n(363),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:function(){return e.show=!1},expression:"() => (show = false)"}]},[n("div",{staticClass:"search-dropdown__button dropdown-base",on:{click:function(t){e.show=!e.show}}},[e.activeItem&&e.activeItem.iconImg?n("svg",{staticClass:"flag"},[n("use",{attrs:{"xlink:href":e.activeItem.iconImg}})]):e._e(),e._v(" "),n("div",{staticClass:"text",class:{etherium:2===e.activeItem.id}},[e._v(e._s(e.activeItem.text))]),e._v(" "),n("BaseIcon",{staticClass:"dropdown-base__icon",class:{rotate:e.show}},[e._v("\n      arrowDown\n    ")])],1),e._v(" "),n("SlideToggle",{scopedSlots:e._u([{key:"default",fn:function(t){var o=t.animationClass;return[n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"search-dropdown__menu menu-list",class:o},e._l(e.array,(function(t,o){return n("div",{key:t.id,staticClass:"item",class:[{active:e.activeItem.id===t.id}],on:{click:function(n){return e.onSelectHandler(t,o)}}},[t&&t.iconImg?n("svg",{staticClass:"flag"},[n("use",{attrs:{"xlink:href":t.iconImg}})]):e._e(),e._v(" "),n("div",{staticClass:"text",class:{etherium:1===o}},[e._v(e._s(t?t.text:"")+"\n        ")])])})),0)]}}])})],1)}),[],!1,null,"4686b02e",null);t.default=component.exports;installComponents(component,{BaseIcon:n(106).default,SlideToggle:n(353).default}),f()(component,{ClickOutside:v.a})}}]);