(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{476:function(t,e,n){var content=n(549);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("149fd804",content,!0,{sourceMap:!1})},548:function(t,e,n){"use strict";n(476)},549:function(t,e,n){var c=n(31)(!1);c.push([t.i,".sign[data-v-6322355c]{display:grid;grid-template-columns:1fr 1fr;width:100%;height:80vh}.sign__left[data-v-6322355c]{background:#e5e5e5}.sign__right[data-v-6322355c]{display:flex;flex-direction:column;justify-content:center;flex:1;align-items:center;position:relative}.sign__right--wrapper[data-v-6322355c]{max-width:430px;width:100%}.sign__right--title[data-v-6322355c]{font-weight:500;font-size:32px;line-height:130%;color:#000}.sign__right--subtitle[data-v-6322355c]{font-size:16px;line-height:19px;color:#000;margin-top:8px}.sign__right--form[data-v-6322355c]{margin-top:32px}.sign__right--form .form__email--text[data-v-6322355c]{font-weight:500;font-size:18px;line-height:21px;margin-bottom:16px}.sign__right--form .link[data-v-6322355c]{font-size:12px;line-height:130%;color:#000;margin-top:16px;margin-bottom:32px}.sign__right--back[data-v-6322355c]{position:absolute;top:40px;left:40px;display:flex;align-items:center;width:62px;justify-content:space-between;opacity:.3;cursor:pointer}.sign__right--back .text[data-v-6322355c]{color:#000;font-weight:500;font-size:12px;line-height:140%}.sign__success[data-v-6322355c]{display:flex;flex-direction:column;justify-content:center;flex:1;align-items:center}.sign__success--wrapper[data-v-6322355c]{max-width:430px;width:100%}.sign__success--title[data-v-6322355c]{font-size:32px;line-height:130%}.sign__success--subtitle[data-v-6322355c]{font-size:16px;line-height:24px;text-align:center;margin-top:16px}.sign__success .btn[data-v-6322355c]{max-width:205px;margin:44px auto 0}",""]),t.exports=c},578:function(t,e,n){"use strict";n.r(e);var c={name:"forget",data:function(){return{email:"",password:"",isSuccessful:!1}}},l=(n(548),n(17)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sign"},[t._m(0),t._v(" "),t.isSuccessful?n("div",{staticClass:"sign__success"},[n("div",{staticClass:"sign__success--wrapper"},[n("div",{staticClass:"sign__success--title"},[t._v("\n        Link was sent on your e-mail\n      ")]),t._v(" "),n("div",{staticClass:"sign__success--subtitle"},[t._v("\n        You can see to your email letter with link and you have to click on that confirm you address\n      ")]),t._v(" "),n("Button",{attrs:{type:"rounded",variant:"large"},nativeOn:{click:function(e){t.isSuccessful=!1}}},[t._v("Ok")])],1)]):n("div",{staticClass:"sign__right"},[n("div",{staticClass:"sign__right--wrapper"},[n("div",{staticClass:"sign__right--title"},[t._v("\n        Forgot password\n      ")]),t._v(" "),n("div",{staticClass:"sign__right--subtitle"},[t._v("\n        Full out the form below to request a password reset\n      ")]),t._v(" "),n("div",{staticClass:"sign__right--form"},[n("div",{staticClass:"form__email"},[n("div",{staticClass:"form__email--text"},[t._v("\n            E-mail\n          ")]),t._v(" "),n("BaseTextField",{attrs:{variant:"simple",placeholder:"name@example.com"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),t._v(" "),n("div",{staticClass:"link"},[t._v("Link will be sent to your email, follow it to recover your password")]),t._v(" "),n("Button",{attrs:{type:"rounded",variant:"large"},nativeOn:{click:function(e){t.isSuccessful=!0}}},[t._v("Recover password")])],1)]),t._v(" "),n("NuxtLink",{staticClass:"sign__right--back",attrs:{to:"/signin/login"}},[n("BaseIcon",{staticClass:"ic-size-20"},[t._v("back-arrow")]),t._v(" "),n("div",{staticClass:"text"},[t._v("Back")])],1)],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sign__left"},[n("h1",[t._v("here is gonna be some Illustrations")])])}],!1,null,"6322355c",null);e.default=component.exports;installComponents(component,{BaseTextField:n(418).default,Button:n(136).default,BaseIcon:n(108).default})}}]);