!function(t){function e(data){for(var e,d,o=data[0],r=data[1],f=data[2],i=0,w=[];i<o.length;i++)d=o[i],Object.prototype.hasOwnProperty.call(n,d)&&n[d]&&w.push(n[d][0]),n[d]=0;for(e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e]);for(l&&l(data);w.length;)w.shift()();return c.push.apply(c,f||[]),h()}function h(){for(var t,i=0;i<c.length;i++){for(var e=c[i],h=!0,d=1;d<e.length;d++){var r=e[d];0!==n[r]&&(h=!1)}h&&(c.splice(i--,1),t=o(o.s=e[0]))}return t}var d={},n={1:0},c=[];function o(e){if(d[e])return d[e].exports;var h=d[e]={i:e,l:!1,exports:{}};return t[e].call(h.exports,h,h.exports,o),h.l=!0,h.exports}o.e=function(t){var e=[],h=n[t];if(0!==h)if(h)e.push(h[2]);else{var d=new Promise((function(e,d){h=n[t]=[e,d]}));e.push(h[2]=d);var c,script=document.createElement("script");script.charset="utf-8",script.timeout=120,o.nc&&script.setAttribute("nonce",o.nc),script.src=function(t){return o.p+""+{0:"2e36028",3:"f92084c",4:"05dbdd1",5:"9a9d65c",6:"c8dc896",7:"5b0883b",8:"84dfae4",9:"efa128a",11:"e3f74a0"}[t]+".js"}(t);var r=new Error;c=function(e){script.onerror=script.onload=null,clearTimeout(f);var h=n[t];if(0!==h){if(h){var d=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;r.message="Loading chunk "+t+" failed.\n("+d+": "+c+")",r.name="ChunkLoadError",r.type=d,r.request=c,h[1](r)}n[t]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:script})}),12e4);script.onerror=script.onload=c,document.head.appendChild(script)}return Promise.all(e)},o.m=t,o.c=d,o.d=function(t,e,h){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:h})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var h=Object.create(null);if(o.r(h),Object.defineProperty(h,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var d in t)o.d(h,d,function(e){return t[e]}.bind(null,d));return h},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(object,t){return Object.prototype.hasOwnProperty.call(object,t)},o.p="/coinsave-gh-pages/_nuxt/",o.oe=function(t){throw console.error(t),t};var r=window.webpackJsonp=window.webpackJsonp||[],f=r.push.bind(r);r.push=e,r=r.slice();for(var i=0;i<r.length;i++)e(r[i]);var l=f;c.push([252,2,10]),h()}({106:function(t,e,h){"use strict";h.r(e);h(17),h(54);var d={computed:{imageName:function(){return this.$slots.default[0].text.replace(/\s/g,"")}}},n=(h(299),h(22)),component=Object(n.a)(d,(function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("svg",[d("use",{attrs:{"xlink:href":h(247)+"#"+t.imageName}})])}),[],!1,null,"cfbf4756",null);e.default=component.exports},133:function(t,e,h){"use strict";h.r(e);h(63);var d={name:"Button",props:{type:{type:String,default:"primary",variant:function(t){return["primary","white"].includes(t)}},variant:{type:String,default:"small",variant:function(t){return["large","small","mobile"]}}}},n=(h(301),h(22)),component=Object(n.a)(d,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{class:["btn","btn__"+t.type,"btn__"+t.type+"--"+t.variant]},[t._t("default")],2)}),[],!1,null,"94a7d46e",null);e.default=component.exports;installComponents(component,{Button:h(133).default})},166:function(t,e,h){"use strict";var d=h(0),n=h(242);d.a.use(n.a,{breakpoints:{sm:880,md:1150,lg:1/0}})},200:function(t,e,h){var content=h(286);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,h(32).default)("7388ab72",content,!0,{sourceMap:!1})},203:function(t,e,h){var content=h(296);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,h(32).default)("51748d30",content,!0,{sourceMap:!1})},204:function(t,e,h){var content=h(298);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,h(32).default)("fa3d4d08",content,!0,{sourceMap:!1})},205:function(t,e,h){var content=h(300);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,h(32).default)("705d8dfc",content,!0,{sourceMap:!1})},206:function(t,e,h){var content=h(302);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,h(32).default)("81bbd8b2",content,!0,{sourceMap:!1})},207:function(t,e,h){var content=h(304);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,h(32).default)("3a3f9cb0",content,!0,{sourceMap:!1})},208:function(t,e,h){var content=h(306);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,h(32).default)("0aef9342",content,!0,{sourceMap:!1})},209:function(t,e,h){var content=h(308);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,h(32).default)("748243de",content,!0,{sourceMap:!1})},246:function(t,e,h){"use strict";var d={name:"default.vue"},n=(h(295),h(22)),component=Object(n.a)(d,(function(){var t=this,e=t.$createElement,h=t._self._c||e;return h("div",{staticClass:"main-layout"},["lg"===t.$mq?h("HeaderDesktop"):h("HeaderMobile"),t._v(" "),h("div",{staticClass:"content-layout"},[h("Nuxt")],1),t._v(" "),"lg"===t.$mq?h("FooterDesktop"):h("FooterMobile")],1)}),[],!1,null,"2f95b62d",null);e.a=component.exports;installComponents(component,{HeaderDesktop:h(339).default,HeaderMobile:h(340).default,FooterDesktop:h(341).default,FooterMobile:h(342).default})},247:function(t,e,h){t.exports=h.p+"img/sprite.3703f0a.svg"},252:function(t,e,h){h(253),t.exports=h(254)},285:function(t,e,h){"use strict";h(200)},286:function(t,e,h){var d=h(31)(!1);d.push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),t.exports=d},291:function(t,e,h){var content=h(292);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,h(32).default)("571236c1",content,!0,{sourceMap:!1})},292:function(t,e,h){var d=h(31)(!1);d.push([t.i,'body,html{padding:0;margin:0;box-sizing:border-box;font-family:"Lato",sans-serif}p{margin:0!important}.container{max-width:1180px;margin:0 auto;width:100%;padding:0 20px}.coinsave-logo{width:119px;height:15px}@media(max-width:850px){.coinsave-logo{width:80px;height:10px}}',""]),t.exports=d},293:function(t,e,h){var content=h(294);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,h(32).default)("300e2ce7",content,!0,{sourceMap:!1})},294:function(t,e,h){var d=h(31)(!1);d.push([t.i,"",""]),t.exports=d},295:function(t,e,h){"use strict";h(203)},296:function(t,e,h){var d=h(31)(!1);d.push([t.i,".content-layout[data-v-2f95b62d]{min-height:400px}",""]),t.exports=d},297:function(t,e,h){"use strict";h(204)},298:function(t,e,h){var d=h(31)(!1);d.push([t.i,".header[data-v-43307de6]{height:80px;width:100%;background:#fff}.header[data-v-43307de6],.header__content[data-v-43307de6]{display:flex;align-items:center}.header__content[data-v-43307de6]{justify-content:space-between}.header__content .center[data-v-43307de6],.header__content .center a[data-v-43307de6]{display:flex;align-items:center}.header__content .center a[data-v-43307de6]{text-decoration:none;color:#2c2e2b;line-height:20px}.header__content .center a svg[data-v-43307de6]{margin-right:8px}.header__content .center a+a[data-v-43307de6]{margin-left:36px}.header__content .buttons[data-v-43307de6]{display:flex;align-items:center}.header__content .buttons .btn+.btn[data-v-43307de6]{margin-left:16px}",""]),t.exports=d},299:function(t,e,h){"use strict";h(205)},300:function(t,e,h){var d=h(31)(!1);d.push([t.i,".ic-size-1[data-v-cfbf4756]{width:1px;height:1px;min-width:1px}.ic-size-2[data-v-cfbf4756]{width:2px;height:2px;min-width:2px}.ic-size-3[data-v-cfbf4756]{width:3px;height:3px;min-width:3px}.ic-size-4[data-v-cfbf4756]{width:4px;height:4px;min-width:4px}.ic-size-5[data-v-cfbf4756]{width:5px;height:5px;min-width:5px}.ic-size-6[data-v-cfbf4756]{width:6px;height:6px;min-width:6px}.ic-size-7[data-v-cfbf4756]{width:7px;height:7px;min-width:7px}.ic-size-8[data-v-cfbf4756]{width:8px;height:8px;min-width:8px}.ic-size-9[data-v-cfbf4756]{width:9px;height:9px;min-width:9px}.ic-size-10[data-v-cfbf4756]{width:10px;height:10px;min-width:10px}.ic-size-11[data-v-cfbf4756]{width:11px;height:11px;min-width:11px}.ic-size-12[data-v-cfbf4756]{width:12px;height:12px;min-width:12px}.ic-size-13[data-v-cfbf4756]{width:13px;height:13px;min-width:13px}.ic-size-14[data-v-cfbf4756]{width:14px;height:14px;min-width:14px}.ic-size-15[data-v-cfbf4756]{width:15px;height:15px;min-width:15px}.ic-size-16[data-v-cfbf4756]{width:16px;height:16px;min-width:16px}.ic-size-17[data-v-cfbf4756]{width:17px;height:17px;min-width:17px}.ic-size-18[data-v-cfbf4756]{width:18px;height:18px;min-width:18px}.ic-size-19[data-v-cfbf4756]{width:19px;height:19px;min-width:19px}.ic-size-20[data-v-cfbf4756]{width:20px;height:20px;min-width:20px}.ic-size-21[data-v-cfbf4756]{width:21px;height:21px;min-width:21px}.ic-size-22[data-v-cfbf4756]{width:22px;height:22px;min-width:22px}.ic-size-23[data-v-cfbf4756]{width:23px;height:23px;min-width:23px}.ic-size-24[data-v-cfbf4756]{width:24px;height:24px;min-width:24px}.ic-size-25[data-v-cfbf4756]{width:25px;height:25px;min-width:25px}.ic-size-26[data-v-cfbf4756]{width:26px;height:26px;min-width:26px}.ic-size-27[data-v-cfbf4756]{width:27px;height:27px;min-width:27px}.ic-size-28[data-v-cfbf4756]{width:28px;height:28px;min-width:28px}.ic-size-29[data-v-cfbf4756]{width:29px;height:29px;min-width:29px}.ic-size-30[data-v-cfbf4756]{width:30px;height:30px;min-width:30px}.ic-size-31[data-v-cfbf4756]{width:31px;height:31px;min-width:31px}.ic-size-32[data-v-cfbf4756]{width:32px;height:32px;min-width:32px}.ic-size-33[data-v-cfbf4756]{width:33px;height:33px;min-width:33px}.ic-size-34[data-v-cfbf4756]{width:34px;height:34px;min-width:34px}.ic-size-35[data-v-cfbf4756]{width:35px;height:35px;min-width:35px}.ic-size-36[data-v-cfbf4756]{width:36px;height:36px;min-width:36px}.ic-size-37[data-v-cfbf4756]{width:37px;height:37px;min-width:37px}.ic-size-38[data-v-cfbf4756]{width:38px;height:38px;min-width:38px}.ic-size-39[data-v-cfbf4756]{width:39px;height:39px;min-width:39px}.ic-size-40[data-v-cfbf4756]{width:40px;height:40px;min-width:40px}.ic-size-41[data-v-cfbf4756]{width:41px;height:41px;min-width:41px}.ic-size-42[data-v-cfbf4756]{width:42px;height:42px;min-width:42px}.ic-size-43[data-v-cfbf4756]{width:43px;height:43px;min-width:43px}.ic-size-44[data-v-cfbf4756]{width:44px;height:44px;min-width:44px}.ic-size-45[data-v-cfbf4756]{width:45px;height:45px;min-width:45px}.ic-size-46[data-v-cfbf4756]{width:46px;height:46px;min-width:46px}.ic-size-47[data-v-cfbf4756]{width:47px;height:47px;min-width:47px}.ic-size-48[data-v-cfbf4756]{width:48px;height:48px;min-width:48px}.ic-size-49[data-v-cfbf4756]{width:49px;height:49px;min-width:49px}.ic-size-50[data-v-cfbf4756]{width:50px;height:50px;min-width:50px}.ic-size-51[data-v-cfbf4756]{width:51px;height:51px;min-width:51px}.ic-size-52[data-v-cfbf4756]{width:52px;height:52px;min-width:52px}.ic-size-53[data-v-cfbf4756]{width:53px;height:53px;min-width:53px}.ic-size-54[data-v-cfbf4756]{width:54px;height:54px;min-width:54px}.ic-size-55[data-v-cfbf4756]{width:55px;height:55px;min-width:55px}.ic-size-56[data-v-cfbf4756]{width:56px;height:56px;min-width:56px}.ic-size-57[data-v-cfbf4756]{width:57px;height:57px;min-width:57px}.ic-size-58[data-v-cfbf4756]{width:58px;height:58px;min-width:58px}.ic-size-59[data-v-cfbf4756]{width:59px;height:59px;min-width:59px}.ic-size-60[data-v-cfbf4756]{width:60px;height:60px;min-width:60px}.ic-size-61[data-v-cfbf4756]{width:61px;height:61px;min-width:61px}.ic-size-62[data-v-cfbf4756]{width:62px;height:62px;min-width:62px}.ic-size-63[data-v-cfbf4756]{width:63px;height:63px;min-width:63px}.ic-size-64[data-v-cfbf4756]{width:64px;height:64px;min-width:64px}.ic-size-65[data-v-cfbf4756]{width:65px;height:65px;min-width:65px}.ic-size-66[data-v-cfbf4756]{width:66px;height:66px;min-width:66px}.ic-size-67[data-v-cfbf4756]{width:67px;height:67px;min-width:67px}.ic-size-68[data-v-cfbf4756]{width:68px;height:68px;min-width:68px}.ic-size-69[data-v-cfbf4756]{width:69px;height:69px;min-width:69px}.ic-size-70[data-v-cfbf4756]{width:70px;height:70px;min-width:70px}.ic-size-71[data-v-cfbf4756]{width:71px;height:71px;min-width:71px}.ic-size-72[data-v-cfbf4756]{width:72px;height:72px;min-width:72px}.ic-size-73[data-v-cfbf4756]{width:73px;height:73px;min-width:73px}.ic-size-74[data-v-cfbf4756]{width:74px;height:74px;min-width:74px}.ic-size-75[data-v-cfbf4756]{width:75px;height:75px;min-width:75px}.ic-size-76[data-v-cfbf4756]{width:76px;height:76px;min-width:76px}.ic-size-77[data-v-cfbf4756]{width:77px;height:77px;min-width:77px}.ic-size-78[data-v-cfbf4756]{width:78px;height:78px;min-width:78px}.ic-size-79[data-v-cfbf4756]{width:79px;height:79px;min-width:79px}.ic-size-80[data-v-cfbf4756]{width:80px;height:80px;min-width:80px}.ic-size-81[data-v-cfbf4756]{width:81px;height:81px;min-width:81px}.ic-size-82[data-v-cfbf4756]{width:82px;height:82px;min-width:82px}.ic-size-83[data-v-cfbf4756]{width:83px;height:83px;min-width:83px}.ic-size-84[data-v-cfbf4756]{width:84px;height:84px;min-width:84px}.ic-size-85[data-v-cfbf4756]{width:85px;height:85px;min-width:85px}.ic-size-86[data-v-cfbf4756]{width:86px;height:86px;min-width:86px}.ic-size-87[data-v-cfbf4756]{width:87px;height:87px;min-width:87px}.ic-size-88[data-v-cfbf4756]{width:88px;height:88px;min-width:88px}.ic-size-89[data-v-cfbf4756]{width:89px;height:89px;min-width:89px}.ic-size-90[data-v-cfbf4756]{width:90px;height:90px;min-width:90px}.ic-size-91[data-v-cfbf4756]{width:91px;height:91px;min-width:91px}.ic-size-92[data-v-cfbf4756]{width:92px;height:92px;min-width:92px}.ic-size-93[data-v-cfbf4756]{width:93px;height:93px;min-width:93px}.ic-size-94[data-v-cfbf4756]{width:94px;height:94px;min-width:94px}.ic-size-95[data-v-cfbf4756]{width:95px;height:95px;min-width:95px}.ic-size-96[data-v-cfbf4756]{width:96px;height:96px;min-width:96px}.ic-size-97[data-v-cfbf4756]{width:97px;height:97px;min-width:97px}.ic-size-98[data-v-cfbf4756]{width:98px;height:98px;min-width:98px}.ic-size-99[data-v-cfbf4756]{width:99px;height:99px;min-width:99px}.ic-size-100[data-v-cfbf4756]{width:100px;height:100px;min-width:100px}.ic-size-height[data-v-cfbf4756]{height:1;height:2;height:3;height:4;height:5;height:6;height:7;height:8;height:9;height:10;height:11;height:12;height:13;height:14;height:15;height:16;height:17;height:18;height:19;height:20;height:21;height:22;height:23;height:24;height:25;height:26;height:27;height:28;height:29;height:30;height:31;height:32;height:33;height:34;height:35;height:36;height:37;height:38;height:39;height:40;height:41;height:42;height:43;height:44;height:45;height:46;height:47;height:48;height:49;height:50;height:51;height:52;height:53;height:54;height:55;height:56;height:57;height:58;height:59;height:60;height:61;height:62;height:63;height:64;height:65;height:66;height:67;height:68;height:69;height:70;height:71;height:72;height:73;height:74;height:75;height:76;height:77;height:78;height:79;height:80;height:81;height:82;height:83;height:84;height:85;height:86;height:87;height:88;height:89;height:90;height:91;height:92;height:93;height:94;height:95;height:96;height:97;height:98;height:99;height:100}.ic-size-width[data-v-cfbf4756]{width:1;min-width:1;width:2;min-width:2;width:3;min-width:3;width:4;min-width:4;width:5;min-width:5;width:6;min-width:6;width:7;min-width:7;width:8;min-width:8;width:9;min-width:9;width:10;min-width:10;width:11;min-width:11;width:12;min-width:12;width:13;min-width:13;width:14;min-width:14;width:15;min-width:15;width:16;min-width:16;width:17;min-width:17;width:18;min-width:18;width:19;min-width:19;width:20;min-width:20;width:21;min-width:21;width:22;min-width:22;width:23;min-width:23;width:24;min-width:24;width:25;min-width:25;width:26;min-width:26;width:27;min-width:27;width:28;min-width:28;width:29;min-width:29;width:30;min-width:30;width:31;min-width:31;width:32;min-width:32;width:33;min-width:33;width:34;min-width:34;width:35;min-width:35;width:36;min-width:36;width:37;min-width:37;width:38;min-width:38;width:39;min-width:39;width:40;min-width:40;width:41;min-width:41;width:42;min-width:42;width:43;min-width:43;width:44;min-width:44;width:45;min-width:45;width:46;min-width:46;width:47;min-width:47;width:48;min-width:48;width:49;min-width:49;width:50;min-width:50;width:51;min-width:51;width:52;min-width:52;width:53;min-width:53;width:54;min-width:54;width:55;min-width:55;width:56;min-width:56;width:57;min-width:57;width:58;min-width:58;width:59;min-width:59;width:60;min-width:60;width:61;min-width:61;width:62;min-width:62;width:63;min-width:63;width:64;min-width:64;width:65;min-width:65;width:66;min-width:66;width:67;min-width:67;width:68;min-width:68;width:69;min-width:69;width:70;min-width:70;width:71;min-width:71;width:72;min-width:72;width:73;min-width:73;width:74;min-width:74;width:75;min-width:75;width:76;min-width:76;width:77;min-width:77;width:78;min-width:78;width:79;min-width:79;width:80;min-width:80;width:81;min-width:81;width:82;min-width:82;width:83;min-width:83;width:84;min-width:84;width:85;min-width:85;width:86;min-width:86;width:87;min-width:87;width:88;min-width:88;width:89;min-width:89;width:90;min-width:90;width:91;min-width:91;width:92;min-width:92;width:93;min-width:93;width:94;min-width:94;width:95;min-width:95;width:96;min-width:96;width:97;min-width:97;width:98;min-width:98;width:99;min-width:99;width:100;min-width:100}",""]),t.exports=d},301:function(t,e,h){"use strict";h(206)},302:function(t,e,h){var d=h(31)(!1);d.push([t.i,".btn[data-v-94a7d46e]{border-radius:2px;font-size:16px;line-height:24px;border:none;outline:none;cursor:pointer;transition:all .3s;display:flex;justify-content:center;align-items:center;border-radius:6px}.btn__primary[data-v-94a7d46e]{background:#01ac6a;color:#fff}.btn__primary[data-v-94a7d46e]:hover{background:#0b9e65}.btn__primary--large[data-v-94a7d46e]{width:100%;padding:20px 0}.btn__primary--small[data-v-94a7d46e]{padding:12px 24px}.btn__primary--mobile[data-v-94a7d46e]{width:100%;padding:16px 0}.btn__white[data-v-94a7d46e]{color:#01ac6a;background:#fff;border:1px solid rgba(1,172,106,.1)}.btn__white[data-v-94a7d46e]:hover{background:#0b9e65;color:#fff}.btn__white--large[data-v-94a7d46e]{width:100%;padding:10px 0}.btn__white--mobile[data-v-94a7d46e]{padding:20px 0;width:100%}.btn__white--small[data-v-94a7d46e]{padding:12px 24px}",""]),t.exports=d},303:function(t,e,h){"use strict";h(207)},304:function(t,e,h){var d=h(31)(!1);d.push([t.i,".header[data-v-ecc6aac6]{height:60px;width:100%;display:flex;padding:0 15px;align-items:center;background:#fff}.header--fixed[data-v-ecc6aac6],.header__hidden-info[data-v-ecc6aac6]{position:fixed;z-index:90}.header__hidden-info[data-v-ecc6aac6]{top:60px;left:0;background:#fff;height:100%;width:100%}.header__logo[data-v-ecc6aac6]{width:80px;height:11px}.header__hamburger[data-v-ecc6aac6]{width:27px;height:27px}.header__content[data-v-ecc6aac6]{width:100%;display:flex;justify-content:space-between;align-items:center}.actions[data-v-ecc6aac6]{font-size:20px;font-weight:600;padding:0 16px;line-height:24px;display:flex;flex-wrap:wrap}.actions__item[data-v-ecc6aac6]{color:#2c2e2b;width:100%;padding:24px 0;display:flex;text-decoration:none}.actions__item[data-v-ecc6aac6]:nth-child(2){border-top:1px solid #e5e5e5}.actions__item-arr[data-v-ecc6aac6]{margin-left:auto}.actions__item-text[data-v-ecc6aac6]{margin-left:10px}.buttons[data-v-ecc6aac6]{margin-top:27px;padding:0 16px}.buttons__item[data-v-ecc6aac6]{margin-top:20px}.animation-enter-active[data-v-ecc6aac6],.animation-leave-active[data-v-ecc6aac6]{transition:opacity .5s}.animation-enter[data-v-ecc6aac6],.animation-leave-to[data-v-ecc6aac6]{opacity:0}",""]),t.exports=d},305:function(t,e,h){"use strict";h(208)},306:function(t,e,h){var d=h(31)(!1);d.push([t.i,".app-footer[data-v-20e93f52]{max-width:1180px;min-height:100px;margin:0 auto;display:flex}.app-footer__left[data-v-20e93f52],.app-footer__right[data-v-20e93f52]{display:flex;width:50%;align-items:center}.app-footer__nav[data-v-20e93f52]{display:flex}.app-footer__nav-link[data-v-20e93f52]{list-style:none;margin-left:50px}.app-footer__nav-link[data-v-20e93f52]:first-child{margin-left:0}.app-footer__nav-link a[data-v-20e93f52]{color:#2c2e2b;transition:color .2s ease;text-decoration:none}.app-footer__nav-link a[data-v-20e93f52]:active,.app-footer__nav-link a[data-v-20e93f52]:focus,.app-footer__nav-link a[data-v-20e93f52]:hover{color:#c3c3c3}.app-footer__social-media[data-v-20e93f52]{list-style:none;margin-left:43px}.app-footer__logo a[data-v-20e93f52]{text-decoration:none}.app-footer__email[data-v-20e93f52]{margin-left:89px}.app-footer__email a[data-v-20e93f52]{transition:color .2s ease;color:#2c2e2b;text-decoration:none}.app-footer__email a[data-v-20e93f52]:active,.app-footer__email a[data-v-20e93f52]:focus,.app-footer__email a[data-v-20e93f52]:hover{color:#c3c3c3}.social-media[data-v-20e93f52],.social-media__item[data-v-20e93f52]{display:flex;align-items:center}.social-media__item[data-v-20e93f52]{background:#f8f8f8;transition:background .3s ease;padding:10px 14px;cursor:pointer;margin:6px;border-radius:4px}.social-media__item[data-v-20e93f52]:active,.social-media__item[data-v-20e93f52]:focus,.social-media__item[data-v-20e93f52]:hover{background:#f1f1f1;text-decoration:none}",""]),t.exports=d},307:function(t,e,h){"use strict";h(209)},308:function(t,e,h){var d=h(31)(!1);d.push([t.i,".app-footer[data-v-af50638c]{max-width:1180px;min-height:100px;padding:40px 0;margin:40px auto 0}.app-footer__nav[data-v-af50638c]{display:flex;margin-top:32px;justify-content:center}.app-footer__nav-link[data-v-af50638c]{list-style:none;margin-left:24px}.app-footer__nav-link[data-v-af50638c]:first-child{margin-left:0}.app-footer__nav-link a[data-v-af50638c]{color:#2c2e2b;transition:color .2s ease;text-decoration:none}.app-footer__nav-link a[data-v-af50638c]:active,.app-footer__nav-link a[data-v-af50638c]:focus,.app-footer__nav-link a[data-v-af50638c]:hover{color:#c3c3c3}.app-footer__social-media[data-v-af50638c]{list-style:none;margin-top:32px}.app-footer__logo[data-v-af50638c],.app-footer__social-media[data-v-af50638c]{display:flex;justify-content:center}.app-footer__logo a[data-v-af50638c]{text-decoration:none}.app-footer__logo svg[data-v-af50638c]{width:159px;height:20px}.app-footer__email[data-v-af50638c]{margin-top:32px;display:flex;justify-content:center}.app-footer__email a[data-v-af50638c]{transition:color .2s ease;color:#2c2e2b;text-decoration:none}.app-footer__email a[data-v-af50638c]:active,.app-footer__email a[data-v-af50638c]:focus,.app-footer__email a[data-v-af50638c]:hover{color:#c3c3c3}.social-media[data-v-af50638c],.social-media__item[data-v-af50638c]{display:flex;align-items:center}.social-media__item[data-v-af50638c]{background:#f8f8f8;transition:background .3s ease;padding:10px 14px;cursor:pointer;margin:6px;border-radius:4px}.social-media__item[data-v-af50638c]:active,.social-media__item[data-v-af50638c]:focus,.social-media__item[data-v-af50638c]:hover{background:#f1f1f1;text-decoration:none}",""]),t.exports=d},339:function(t,e,h){"use strict";h.r(e);var d={name:"Header"},n=(h(297),h(22)),component=Object(n.a)(d,(function(){var t=this,e=t.$createElement,h=t._self._c||e;return h("div",{staticClass:"header"},[h("div",{staticClass:"header__content container"},[h("nuxt-link",{attrs:{to:"/"}},[h("BaseIcon",{staticClass:"coinsave-logo"},[t._v("logo")])],1),t._v(" "),h("div",{staticClass:"center"},[h("a",{staticClass:"center__gift",attrs:{href:"#"}},[h("BaseIcon",{staticClass:"ic-size-20"},[t._v("gift")]),t._v("\n        Send a Gift\n      ")],1),t._v(" "),h("a",{staticClass:"center__redeem",attrs:{href:"#"}},[h("BaseIcon",{staticClass:"ic-size-20"},[t._v("redeem")]),t._v("\n        Redeem a Gift\n      ")],1)]),t._v(" "),h("div",{staticClass:"buttons"},[h("Button",{attrs:{type:"white",variant:"small"}},[t._v("Sign in")]),t._v(" "),h("Button",{attrs:{variant:"small"}},[t._v("Create Registry")])],1)],1)])}),[],!1,null,"43307de6",null);e.default=component.exports;installComponents(component,{BaseIcon:h(106).default,Button:h(133).default})},340:function(t,e,h){"use strict";h.r(e);var d={name:"Header",data:function(){return{show:!1}}},n=(h(303),h(22)),component=Object(n.a)(d,(function(){var t=this,e=t.$createElement,h=t._self._c||e;return h("div",{staticClass:"header",class:{"header--fixed":t.show}},[h("div",{staticClass:"header__content"},[h("nuxt-link",{attrs:{to:"/"}},[h("BaseIcon",{staticClass:"header__logo"},[t._v("logo")])],1),t._v(" "),h("BaseIcon",{directives:[{name:"show",rawName:"v-show",value:!t.show,expression:"!show"}],staticClass:"header__hamburger",nativeOn:{click:function(e){t.show=!t.show}}},[t._v("menu")]),t._v(" "),h("BaseIcon",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"header__hamburger",nativeOn:{click:function(e){t.show=!t.show}}},[t._v("menu-close")])],1),t._v(" "),h("transition",{attrs:{name:"animation"}},[h("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"header__hidden-info"},[h("div",{staticClass:"actions"},[h("a",{staticClass:"actions__item",attrs:{href:"#"}},[h("BaseIcon",{staticClass:"ic-size-24"},[t._v("gift")]),t._v(" "),h("span",{staticClass:"actions__item-text"},[t._v("\n            Send a Gift\n          ")]),t._v(" "),h("BaseIcon",{staticClass:"ic-size-24 actions__item-arr"},[t._v("arr-right")])],1),t._v(" "),h("a",{staticClass:"actions__item",attrs:{href:"#"}},[h("BaseIcon",{staticClass:"ic-size-24"},[t._v("redeem")]),t._v(" "),h("span",{staticClass:"actions__item-text"},[t._v("\n            Redeem a Gift\n          ")]),t._v(" "),h("BaseIcon",{staticClass:"ic-size-24 actions__item-arr"},[t._v("arr-right")])],1)]),t._v(" "),h("div",{staticClass:"buttons"},[h("Button",{staticClass:"buttons__item",attrs:{variant:"large"}},[t._v("Create Registry")]),t._v(" "),h("Button",{staticClass:"buttons__item",attrs:{type:"white",variant:"mobile"}},[t._v("Sign in")])],1)])])],1)}),[],!1,null,"ecc6aac6",null);e.default=component.exports;installComponents(component,{BaseIcon:h(106).default,Button:h(133).default})},341:function(t,e,h){"use strict";h.r(e);var d={name:"Footer"},n=(h(305),h(22)),component=Object(n.a)(d,(function(){var t=this,e=t.$createElement,h=t._self._c||e;return h("div",{staticClass:"app-footer"},[h("div",{staticClass:"app-footer__left"},[h("div",{staticClass:"app-footer__logo"},[h("nuxt-link",{attrs:{to:"/"}},[h("BaseIcon",{staticClass:"coinsave-logo"},[t._v("logo")])],1)],1),t._v(" "),t._m(0)]),t._v(" "),h("div",{staticClass:"app-footer__right"},[t._m(1),t._v(" "),h("div",{staticClass:"app-footer__social-media social-media"},[h("a",{staticClass:"social-media__item",attrs:{href:"#"}},[h("BaseIcon",{staticClass:"ic-size-16"},[t._v("instagram")])],1),t._v(" "),h("a",{staticClass:"social-media__item",attrs:{href:"#"}},[h("BaseIcon",{staticClass:"ic-size-16"},[t._v("facebook")])],1),t._v(" "),h("a",{staticClass:"social-media__item",attrs:{href:"#"}},[h("BaseIcon",{staticClass:"ic-size-16"},[t._v("twitter")])],1)])])])}),[function(){var t=this,e=t.$createElement,h=t._self._c||e;return h("div",{staticClass:"app-footer__email"},[h("a",{attrs:{href:"mailto:supportcoinsave@gmail.com"}},[t._v("\n          supportcoinsave@gmail.com\n        ")])])},function(){var t=this,e=t.$createElement,h=t._self._c||e;return h("div",{staticClass:"app-footer__nav"},[h("li",{staticClass:"app-footer__nav-link"},[h("a",{attrs:{href:"#"}},[t._v(" About ")])]),t._v(" "),h("li",{staticClass:"app-footer__nav-link"},[h("a",{attrs:{href:"#"}},[t._v(" How it works ")])]),t._v(" "),h("li",{staticClass:"app-footer__nav-link"},[h("a",{attrs:{href:"#"}},[t._v(" FAQ ")])]),t._v(" "),h("li",{staticClass:"app-footer__nav-link"},[h("a",{attrs:{href:"#"}},[t._v(" Legal ")])])])}],!1,null,"20e93f52",null);e.default=component.exports;installComponents(component,{BaseIcon:h(106).default})},342:function(t,e,h){"use strict";h.r(e);var d={name:"Footer"},n=(h(307),h(22)),component=Object(n.a)(d,(function(){var t=this,e=t.$createElement,h=t._self._c||e;return h("div",{staticClass:"app-footer"},[h("div",{staticClass:"app-footer__logo"},[h("nuxt-link",{attrs:{to:"/"}},[h("BaseIcon",[t._v("logo")])],1)],1),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),h("div",{staticClass:"app-footer__social-media social-media"},[h("a",{staticClass:"social-media__item",attrs:{href:"#"}},[h("BaseIcon",{staticClass:"ic-size-16"},[t._v("instagram")])],1),t._v(" "),h("a",{staticClass:"social-media__item",attrs:{href:"#"}},[h("BaseIcon",{staticClass:"ic-size-16"},[t._v("facebook")])],1),t._v(" "),h("a",{staticClass:"social-media__item",attrs:{href:"#"}},[h("BaseIcon",{staticClass:"ic-size-16"},[t._v("twitter")])],1)])])}),[function(){var t=this,e=t.$createElement,h=t._self._c||e;return h("div",{staticClass:"app-footer__nav"},[h("li",{staticClass:"app-footer__nav-link"},[h("a",{attrs:{href:"#"}},[t._v(" About ")])]),t._v(" "),h("li",{staticClass:"app-footer__nav-link"},[h("a",{attrs:{href:"#"}},[t._v(" How it works ")])]),t._v(" "),h("li",{staticClass:"app-footer__nav-link"},[h("a",{attrs:{href:"#"}},[t._v(" FAQ ")])]),t._v(" "),h("li",{staticClass:"app-footer__nav-link"},[h("a",{attrs:{href:"#"}},[t._v(" Legal ")])])])},function(){var t=this,e=t.$createElement,h=t._self._c||e;return h("div",{staticClass:"app-footer__email"},[h("a",{attrs:{href:"mailto:supportcoinsave@gmail.com"}},[t._v("\n          supportcoinsave@gmail.com\n        ")])])}],!1,null,"af50638c",null);e.default=component.exports;installComponents(component,{BaseIcon:h(106).default})},68:function(t,e,h){"use strict";var d={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},n=(h(285),h(22)),c=h(201),o=h.n(c),r=h(346),component=Object(n.a)(d,(function(){var t=this,e=t.$createElement,h=t._self._c||e;return h("v-app",{attrs:{dark:""}},[404===t.error.statusCode?h("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):h("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),h("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);e.a=component.exports;o()(component,{VApp:r.a})}});