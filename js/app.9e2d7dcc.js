(function(t){function e(e){for(var r,a,s=e[0],c=e[1],l=e[2],u=0,d=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==i[s]&&(r=!1)}r&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},i={app:0},o=[];function s(t){return c.p+"js/"+({admin:"admin",adminlogin:"adminlogin",brand:"brand",cart:"cart",comstomerfaq:"comstomerfaq",home:"home",news:"news",orders:"orders",payment:"payment",privacypolicy:"privacypolicy",product:"product",products:"products",shipping:"shipping",termofservice:"termofservice"}[t]||t)+"."+{admin:"54fb6eef",adminlogin:"d2b40a80",brand:"2b5339e4",cart:"3aa74ae3",comstomerfaq:"462e9082",home:"9e6aa362",news:"da2b7c5f",orders:"80f0d1c2",payment:"483310ec",privacypolicy:"4dbc76b4",product:"0ccb73f6",products:"42a36dce",shipping:"07879dc6",termofservice:"17a293ab"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={admin:1,adminlogin:1,brand:1,cart:1,home:1,news:1,orders:1,payment:1,privacypolicy:1,product:1,products:1,shipping:1,termofservice:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({admin:"admin",adminlogin:"adminlogin",brand:"brand",cart:"cart",comstomerfaq:"comstomerfaq",home:"home",news:"news",orders:"orders",payment:"payment",privacypolicy:"privacypolicy",product:"product",products:"products",shipping:"shipping",termofservice:"termofservice"}[t]||t)+"."+{admin:"f7a3d01b",adminlogin:"14be3471",brand:"72803d03",cart:"840d2269",comstomerfaq:"31d6cfe0",home:"ff9ca159",news:"a6f66642",orders:"d8441120",payment:"06127b15",privacypolicy:"412241ed",product:"dd147b5d",products:"66d20e33",shipping:"bd40b394",termofservice:"addf9227"}[t]+".css",i=c.p+r,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var l=o[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===i))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===r||u===i)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[t],p.parentNode.removeChild(p),n(o)},p.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){a[t]=0})));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise((function(e,n){r=i[t]=[e,n]}));e.push(r[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(p);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}i[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var p=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"01f7":function(t,e,n){},"16a3":function(t,e,n){"use strict";n("cd8c")},"53d7":function(t,e,n){"use strict";n("01f7")},"56d7":function(t,e,n){"use strict";n.r(e);var r={};n.r(r),n.d(r,"login",(function(){return It})),n.d(r,"logout",(function(){return Rt})),n.d(r,"getInfo",(function(){return Tt})),n.d(r,"addCart",(function(){return qt})),n.d(r,"orderCart",(function(){return Pt}));var a={};n.r(a),n.d(a,"user",(function(){return $t}));var i={};n.r(i),n.d(i,"login",(function(){return Lt})),n.d(i,"logout",(function(){return Nt})),n.d(i,"getInfo",(function(){return St})),n.d(i,"extend",(function(){return Dt})),n.d(i,"updateCart",(function(){return zt})),n.d(i,"orderCart",(function(){return Ft}));var o={};n.r(o),n.d(o,"adminlogin",(function(){return Ht})),n.d(o,"adminlogout",(function(){return Gt})),n.d(o,"getInfo",(function(){return Jt})),n.d(o,"logout",(function(){return Kt}));var s={};n.r(s),n.d(s,"admin",(function(){return Wt}));var c={};n.r(c),n.d(c,"login",(function(){return Yt})),n.d(c,"logout",(function(){return Qt})),n.d(c,"getInfo",(function(){return Xt}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var l=n("2b0e"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"app"}},[n("v-main",[n("router-view",{key:t.$route.fullPath})],1)],1)},d=[],p=n("1da1"),m=(n("96cf"),{name:"App",data:function(){return{sidebar:!1}},created:function(){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$store.dispatch("user/getInfo"),t.$store.dispatch("admin/getInfo");case 2:case"end":return e.stop()}}),e)})))()}}),f=m,h=n("2877"),v=n("6544"),g=n.n(v),b=n("7496"),x=n("f6c4"),w=Object(h["a"])(f,u,d,!1,null,null,null),C=w.exports;g()(w,{VApp:b["a"],VMain:x["a"]});n("d3b7"),n("3ca3"),n("ddb0"),n("caad"),n("2532");var y=n("8c4f"),k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"front"}},[n("Navbar"),n("router-view"),n("Footer")],1)},_=[],j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"navbar"}},[n("nav",[n("v-app-bar",{staticClass:"justify-en",attrs:{"min-width":"100vw","elevate-on-scroll":!0,fixed:"",elevation:"5"}},[n("v-app-bar-nav-icon",{staticClass:"hidden-md-and-up mr-3",attrs:{large:""},on:{click:function(e){t.sidebar=!t.sidebar}}}),n("v-row",[n("v-toolbar-title",{staticClass:" font-weight-bold light-green--text text--darken-3 col-6 col-md-4",attrs:{tag:"router-link",to:"/"}},[n("span",{staticClass:"text-h6 text-xs-h5 font-weight-bold mr-2 hidden-xs-only"},[t._v("Purecrop")]),n("span",{staticClass:"text-h6 text-md-h5 font-weight-bold"},[t._v("無疑農")]),n("span",{staticClass:"mx-2 font-weight-light hidden-md-and-down "},[t._v("|")]),n("span",{staticClass:"light-green--text text--darken-3  subtitle-1 hidden-md-and-down"},[t._v("產地直送 品質無疑")])]),n("v-toolbar-items",{staticClass:"hidden-sm-and-down col-6 col-md-4 justify-center"},t._l(t.items,(function(e){return n("v-btn",{key:e.title,staticClass:"text--darken-3 text-subtitle-1 navtitle font-weight-medium",attrs:{ripple:!1,plain:"",to:e.to,text:"",color:"grey"}},[t._v(t._s(e.title))])})),1),n("v-toolbar-items",{staticClass:"col-6 col-md-4 justify-end"},[t.user.isLogin?n("v-btn",{staticClass:"me-2 me-sm-4",attrs:{large:"",icon:"",ripple:!1,plain:"",to:"/orders"}},[n("v-icon",{staticClass:"light-green--text text--darken-3 icon",attrs:{large:""}},[t._v("mdi-clipboard-list-outline")])],1):t._e(),n("v-btn",{staticClass:"me-2 me-sm-4",attrs:{large:"",icon:"",ripple:!1,plain:"",to:"/cart"}},[n("v-icon",{staticClass:"light-green--text text--darken-3 icon",attrs:{large:""}},[t._v("mdi-cart")]),t.user.cart?n("v-badge",{attrs:{color:"red",content:t.user.cart,"offset-x":"11","offset-y":"-7"}}):t._e()],1),n("v-btn",{staticClass:"me-0 me-sm-8",attrs:{large:"",icon:"",ripple:!1,plain:""}},[t.user.isLogin?t._e():n("v-icon",{staticClass:"light-green--text text--darken-3 icon",attrs:{large:""},on:{click:function(e){t.parentdialog=!0}}},[t._v("mdi-login")]),t.user.isLogin?n("v-icon",{staticClass:"light-green--text text--darken-3 icon",attrs:{large:""},on:{click:t.logout}},[t._v("mdi-logout")]):t._e()],1)],1)],1)],1),n("v-navigation-drawer",{attrs:{"disable-resize-watcher":"",app:""},model:{value:t.sidebar,callback:function(e){t.sidebar=e},expression:"sidebar"}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-h6 font-weight-bold light-green--text text--darken-1 "},[t._v(" Purecrop 無疑農 ")]),n("v-list-item-subtitle",{staticClass:"font-weight-bold light-green--text mt-5 mb-2 text--darken-1 "},[t._v(" 產地直送 | 品質無疑 ")])],1)],1),n("v-divider"),n("v-list",{attrs:{flat:"",nav:""}},[n("v-list-item-group",t._l(t.items,(function(e){return n("v-list-item",{key:e.title,attrs:{to:e.to}},[n("v-list-item-icon",[n("v-icon",[t._v(" "+t._s(e.icon)+" ")])],1),n("v-list-item-content",{staticClass:"px-4 font-weight-bold"},[t._v(" "+t._s(e.title)+" ")])],1)})),1)],1)],1)],1),n("LoginSignup",{attrs:{parentdialog:t.parentdialog},on:{closedialog:function(e){t.parentdialog=!1}}})],1)},B=[],O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"loginsignup"}},[n("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:t.parentdialog,callback:function(e){t.parentdialog=e},expression:"parentdialog"}},[n("section",{staticClass:"grey lighten-4 pt-3 pb-0 py-sm-8"},[n("div",{staticClass:"d-flex justify-end pe-3 pe-sm-6 pb-sm-2"},[n("v-btn",{attrs:{icon:""}},[n("v-icon",{attrs:{large:""},on:{click:function(e){return t.$emit("closedialog")}}},[t._v("mdi-close")])],1)],1),n("v-container",[n("v-row",{staticClass:"justify-center"},[n("v-col",{attrs:{cols:"12",lg:"10"}},[n("v-card",{attrs:{flat:"",outlined:""}},[n("v-tabs",{attrs:{"active-class":"white",height:"40","background-color":"grey lighten-2","fixed-tabs":"","hide-slider":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tab",{staticClass:"text-h6"},[t._v("登入")]),n("v-tab",{staticClass:"text-h6"},[t._v("註冊")])],1),n("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tab-item",{staticStyle:{height:"300px"},attrs:{value:0}},[n("v-card-text",[n("v-form",{on:{submit:function(e){return e.preventDefault(),t.login.apply(null,arguments)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-text-field",{attrs:{dense:"",outlined:"",label:"請輸入電子郵件",type:"email",clearable:"","prepend-icon":"mdi-email",rules:[t.rules.required,t.rules.loginemailValidator],required:""},model:{value:t.loginform.email,callback:function(e){t.$set(t.loginform,"email",e)},expression:"loginform.email"}}),n("v-text-field",{attrs:{"prepend-icon":"mdi-lock",dense:"",outlined:"","append-icon":t.show2?"mdi-eye":"mdi-eye-off",rules:[t.rules.required,t.rules.min,t.rules.max],type:t.show2?"text":"password",hint:"密碼為 4 - 20 個字",label:"請輸入密碼",required:""},on:{"click:append":function(e){t.show2=!t.show2}},model:{value:t.loginform.password,callback:function(e){t.$set(t.loginform,"password",e)},expression:"loginform.password"}}),n("v-row",{staticClass:"align-center"},[n("v-col",{staticClass:"text-center hidden-xs-and-down",attrs:{cols:"12",sm:"4"}}),n("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"4"}},[n("v-btn",{staticClass:"light-green darken-3 white--text",attrs:{ripple:!1,type:"submit",disabled:!t.valid}},[t._v("登入")])],1),n("v-col",{staticClass:"text-center pr-3 pr-sm-12",attrs:{cols:"12",sm:"4"}},[n("v-btn",{staticClass:"light-green--text text--darken-3",attrs:{ripple:!1,text:"",plain:""}},[t._v(" 忘記密碼 ")])],1)],1)],1)],1)],1),n("v-tab-item",{staticStyle:{height:"300px"},attrs:{value:1}},[n("v-card-text",[n("v-form",{on:{submit:function(e){return e.preventDefault(),t.register.apply(null,arguments)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-text-field",{attrs:{dense:"",outlined:"",label:"請輸入電子郵件",type:"email",clearable:"","prepend-icon":"mdi-email",rules:[t.rules.required,t.rules.emailValidator],required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),n("v-text-field",{attrs:{"prepend-icon":"mdi-lock",dense:"",outlined:"","append-icon":t.show2?"mdi-eye":"mdi-eye-off",rules:[t.rules.required,t.rules.min,t.rules.max],type:t.show2?"text":"password",hint:"密碼為 4 - 20 個字",label:"請輸入密碼",required:""},on:{"click:append":function(e){t.show2=!t.show2}},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),n("v-text-field",{attrs:{"prepend-icon":"mdi-lock",dense:"",outlined:"","append-icon":t.show3?"mdi-eye":"mdi-eye-off",type:t.show3?"text":"password",label:"請再次輸入密碼",rules:[t.rules.required,t.rules.passwordConfirmation],required:""},on:{"click:append":function(e){t.show3=!t.show3}},model:{value:t.form.newPassword,callback:function(e){t.$set(t.form,"newPassword",e)},expression:"form.newPassword"}}),n("v-row",{staticClass:"justify-center py-5"},[n("v-btn",{staticClass:"light-green darken-3 white--text",attrs:{ripple:!1,type:"submit",disabled:!t.valid}},[t._v("註冊")])],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)])],1)},V=[],A=n("f90c"),I=n.n(A),R={data:function(){var t=this;return{form:{email:"",password:"",newPassword:""},loginform:{email:"",password:""},tab:0,valid:!0,show1:!1,show2:!1,show3:!1,rules:{required:function(t){return!!t||"此為必填欄位"},min:function(t){return t.length>=4||"最少須 4 個字"},max:function(t){return t.length<=16||"最多為 16 個字"},passwordConfirmation:function(e){return e===t.form.password||"密碼不一致"},emailValidator:function(e){return 0===t.form.email.length?"":I.a.isEmail(t.form.email)||"電子郵件格式錯誤"},loginemailValidator:function(e){return 0===t.loginform.email.length?"":I.a.isEmail(t.loginform.email)||"電子郵件格式錯誤"}}}},props:["parentdialog"],emits:["closedialog"],methods:{register:function(){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.api.post("/users",t.form);case 3:t.$swal({icon:"success",title:"成功",text:"註冊成功"}),t.$emit("closedialog"),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),t.$swal({icon:"error",title:"錯誤",text:e.t0.response.data.message});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},login:function(){var t=this;this.$store.dispatch("user/login",this.loginform).then((function(){t.$emit("closedialog")}))}}},T=R,q=(n("8da9"),n("8336")),P=n("b0af"),E=n("99d9"),$=n("62ad"),L=n("a523"),N=n("169a"),S=n("4bd4"),D=n("132d"),z=n("0fd9"),F=n("71a3"),M=n("c671"),U=n("fe57"),H=n("aac8"),G=n("8654"),J=Object(h["a"])(T,O,V,!1,null,null,null),K=J.exports;g()(J,{VBtn:q["a"],VCard:P["a"],VCardText:E["c"],VCol:$["a"],VContainer:L["a"],VDialog:N["a"],VForm:S["a"],VIcon:D["a"],VRow:z["a"],VTab:F["a"],VTabItem:M["a"],VTabs:U["a"],VTabsItems:H["a"],VTextField:G["a"]});var W={data:function(){return{sidebar:!1,parentdialog:!1,items:[{title:"首頁",icon:"mdi-application-outline ",to:"/"},{title:"品牌故事",icon:"mdi-book-outline",to:"/brand"},{title:"最新消息",icon:"mdi-newspaper-variant-outline ",to:"/news"},{title:"小農產品",icon:"mdi-corn",to:"/products"}]}},components:{LoginSignup:K},methods:{logout:function(){this.$store.dispatch("user/logout")}}},Y=W,Q=(n("16a3"),n("40dc")),X=n("5bc1"),Z=n("4ca6"),tt=n("ce7e"),et=n("8860"),nt=n("da13"),rt=n("5d23"),at=n("1baa"),it=n("34c3"),ot=n("f774"),st=n("2a7f"),ct=Object(h["a"])(Y,j,B,!1,null,null,null),lt=ct.exports;g()(ct,{VAppBar:Q["a"],VAppBarNavIcon:X["a"],VBadge:Z["a"],VBtn:q["a"],VDivider:tt["a"],VIcon:D["a"],VList:et["a"],VListItem:nt["a"],VListItemContent:rt["a"],VListItemGroup:at["a"],VListItemIcon:it["a"],VListItemSubtitle:rt["b"],VListItemTitle:rt["c"],VNavigationDrawer:ot["a"],VRow:z["a"],VToolbarItems:st["a"],VToolbarTitle:st["b"]});var ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"light-green darken-1",attrs:{id:"footer"}},[n("v-container",[n("v-row",{staticClass:"mt-3"},[n("v-col"),n("v-col",{attrs:{cols:"12",md:"11",lg:"9"}},[n("v-row",[n("v-col",{staticClass:"white--text",attrs:{cols:"12",sm:"12",md:"3"}},[n("h4",{staticClass:"white--text text--darken-4 text-center text-md-h6 bottomline2"},[t._v("關於我們")]),n("ul",{staticClass:"list"},[n("li",[n("v-list-item",{staticClass:"white--text",attrs:{to:"/brand",ripple:!1}},[t._v(" 品牌故事 ")])],1),n("li",[n("v-list-item",{staticClass:"white--text",attrs:{to:"/privacyterm",ripple:!1}},[t._v(" 隱私權政策 ")])],1),n("li",[n("v-list-item",{staticClass:"white--text",attrs:{to:"/termofservice",ripple:!1}},[t._v(" 使用者條款 ")])],1)])]),n("v-col",{staticClass:"white--text",attrs:{cols:"12",sm:"12",md:"3"}},[n("h4",{staticClass:"white--text text--darken-4 text-center text-md-h6 bottomline2"},[t._v("顧客服務")]),n("ul",{staticClass:"list "},[n("li",[n("v-list-item",{staticClass:"white--text",attrs:{to:"/comstomerfaq",ripple:!1}},[t._v(" 常見問題 ")])],1),n("li",[n("v-list-item",{staticClass:"white--text",attrs:{to:"/shipping",ripple:!1}},[t._v(" 運送服務方式 ")])],1),n("li",[n("v-list-item",{staticClass:"white--text",attrs:{to:"/payment",ripple:!1}},[t._v(" 付款服務方式 ")])],1)])]),n("v-col",{staticClass:"white--text",attrs:{cols:"12",sm:"12",md:"6"}},[n("h4",{staticClass:"white--text text--darken-4 text-center text-md-h6 bottomline2"},[t._v("聯絡我們")]),n("ul",{staticClass:"list contact "},[n("li",[n("v-list-item",{staticClass:"white--text"},[t._v(" 聯絡地址：新北市新店區中和路110號 ")])],1),n("li",[n("v-list-item",{staticClass:"white--text "},[t._v(" 聯絡電話：(02)2485-5242 ")])],1),n("li",[n("v-list-item",{staticClass:"white--text "},[t._v(" 電子郵件：lotrhmm@gmail.com ")])],1),n("li",[n("v-list-item",{staticClass:"white--text "},[t._v(" 營業時間：10:00-18:00 ")])],1),n("li",{staticClass:"mt-2"},[n("v-btn",{staticClass:"mx-2 p-2",attrs:{icon:"",ripple:!1,plain:""}},[n("v-icon",{staticClass:"white--text",attrs:{large:""}},[t._v(" mdi-facebook ")])],1),n("v-btn",{staticClass:"mx-2 p-2",attrs:{icon:"",ripple:!1,plain:""}},[n("v-icon",{staticClass:"white--text",attrs:{large:""}},[t._v(" mdi-instagram ")])],1),n("v-btn",{staticClass:"mx-2 p-2",attrs:{icon:"",ripple:!1,plain:""}},[n("v-icon",{staticClass:"white--text",attrs:{large:""}},[t._v(" mdi-twitter ")])],1)],1)])])],1)],1),n("v-col")],1)],1),n("v-container",{staticClass:"mt-8"},[n("p",{staticClass:"white--text text-center"},[t._v("© "+t._s(this.date)+" Raquel 泰山職訓作品集")])])],1)},dt=[],pt={data:function(){return{date:(new Date).getFullYear()}}},mt=pt,ft=(n("53d7"),Object(h["a"])(mt,ut,dt,!1,null,null,null)),ht=ft.exports;g()(ft,{VBtn:q["a"],VCol:$["a"],VContainer:L["a"],VIcon:D["a"],VListItem:nt["a"],VRow:z["a"]});var vt={components:{Navbar:lt,Footer:ht},data:function(){return{sidebar:!1}}},gt=vt,bt=Object(h["a"])(gt,k,_,!1,null,null,null),xt=bt.exports,wt=n("2f62"),Ct=function(){return{token:"",email:"",cart:0}},yt=n("bc3a"),kt=n.n(yt),_t=n("130e"),jt=n("f9d5"),Bt=n.n(jt),Ot=kt.a.create({baseURL:"https://purecrop.herokuapp.com/"});Ot.interceptors.response.use((function(t){return t}),(function(t){if(t.response){if(401===t.response.status&&"/users/extend"!==t.config.url){var e=t.config;return Ot.post("/users/extend",{},{headers:{authorization:"Bearer "+ee.state.user.token}}).then((function(t){var n=t.data;return ee.commit("user/extend",n.result.token),e.headers.authorization="Bearer "+ee.state.user.token,kt()(e)})).catch((function(t){return ee.commit("user/logout"),ae.push("/login"),Promise.reject(t)}))}}else"ECONNABORTED"===t.code&&t.message.includes("timeout")?Bt.a.fire({icon:"error",title:"錯誤",text:"請求逾時"}):Bt.a.fire({icon:"error",title:"錯誤",text:"網路不穩定"});return Promise.reject(t)})),l["a"].use(_t["a"],{axios:kt.a,api:Ot});var Vt=n("3d20"),At=n.n(Vt),It=function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(e,n){var r,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.prev=1,t.next=4,Ot.post("/users/login",n);case 4:a=t.sent,i=a.data,r("login",i.result),At.a.fire({icon:"success",title:"成功",text:"登入成功",confirmButtonColor:"#8BC34A"}),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](1),At.a.fire({icon:"error",title:"失敗",text:t.t0.response.data.message,confirmButtonColor:"#8BC34A"});case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,n){return t.apply(this,arguments)}}(),Rt=function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,r=e.state,t.prev=1,t.next=4,Ot.delete("users/logout",{headers:{authorization:"Bearer "+r.token}});case 4:At.a.fire({icon:"success",title:"成功",text:"登出成功",confirmButtonColor:"#8BC34A"}),n("logout"),ae.currentRoute.meta.login&&ae.push("/").catch((function(){})),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),At.a.fire({icon:"error",title:"失敗",text:t.t0.response.data.message,confirmButtonColor:"#8BC34A"});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}(),Tt=function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(e){var n,r,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.commit,r=e.state,0!==r.token.length){t.next=3;break}return t.abrupt("return");case 3:return t.prev=3,t.next=6,Ot.get("/users/me",{headers:{authorization:"Bearer "+r.token}});case 6:a=t.sent,i=a.data,n("getInfo",i.result),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](3),n("logout");case 14:case"end":return t.stop()}}),t,null,[[3,11]])})));return function(e){return t.apply(this,arguments)}}(),qt=function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(e,n){var r,a,i,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.commit,a=e.state,!(n.quantity<=0)){t.next=4;break}return At.a.fire({icon:"error",title:"錯誤",text:"請輸入正確數量",confirmButtonColor:"#8BC34A"}),t.abrupt("return");case 4:return t.prev=4,t.next=7,Ot.post("/users/me/cart",n,{headers:{authorization:"Bearer "+a.token}});case 7:i=t.sent,o=i.data,r("updateCart",o.result),At.a.fire({icon:"success",title:"成功",text:"加入購物車",confirmButtonColor:"#8BC34A"}),t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](4),At.a.fire({icon:"error",title:"錯誤",text:"加入購物車失敗"});case 16:case"end":return t.stop()}}),t,null,[[4,13]])})));return function(e,n){return t.apply(this,arguments)}}(),Pt=function(t){var e=t.commit;t.state;e("orderCart")},Et=n("5530"),$t=function(t){return Object(Et["a"])({isLogin:t.token.length>0},t)},Lt=function(t,e){t.token=e.token,t.email=e.email,t.cart=e.cart},Nt=function(t,e){t.token="",t.email="",t.cart=0},St=function(t,e){t.email=e.email,t.cart=e.cart},Dt=function(t,e){t.token=e},zt=function(t,e){t.cart=e},Ft=function(t,e){t.cart=0},Mt={namespaced:!0,state:Ct,actions:r,getters:a,mutations:i},Ut=function(){return{account:"",token:""}},Ht=function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(e,n){var r,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.prev=1,t.next=4,Ot.post("/admins/login",n);case 4:a=t.sent,i=a.data,r("login",i.result),ae.push("/admin").catch((function(){})),At.a.fire({icon:"success",title:"成功",text:"登入成功",confirmButtonColor:"#8BC34A"}),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](1),At.a.fire({icon:"error",title:"失敗",text:t.t0.response.data.message,confirmButtonColor:"#8BC34A"});case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,n){return t.apply(this,arguments)}}(),Gt=function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,r=e.state,t.prev=1,t.next=4,Ot.delete("admins/logout",{headers:{authorization:"Bearer "+r.token}});case 4:At.a.fire({icon:"success",title:"成功",text:"登出成功",confirmButtonColor:"#8BC34A"}),n("logout"),ae.push("/").catch((function(){})),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),At.a.fire({icon:"error",title:"失敗",text:t.t0.response.data.message,confirmButtonColor:"#8BC34A"});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}(),Jt=function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(e){var n,r,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.commit,r=e.state,0!==r.token.length){t.next=3;break}return t.abrupt("return");case 3:return t.prev=3,t.next=6,Ot.get("/admins/me",{headers:{authorization:"Bearer "+r.token}});case 6:a=t.sent,i=a.data,n("getInfo",i.result),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](3),n("logout");case 14:case"end":return t.stop()}}),t,null,[[3,11]])})));return function(e){return t.apply(this,arguments)}}(),Kt=function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,r=e.state,t.prev=1,t.next=4,Ot.delete("admins/logout",{headers:{authorization:"Bearer "+r.token}});case 4:At.a.fire({icon:"success",title:"成功",text:"登出成功",confirmButtonColor:"#8BC34A"}),n("logout"),ae.push("/"),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),At.a.fire({icon:"error",title:"失敗",text:t.t0.response.data.message,confirmButtonColor:"#8BC34A"});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}(),Wt=function(t){return Object(Et["a"])({isAdmin:t.token.length>0},t)},Yt=function(t,e){t.token=e.token,t.account=e.account},Qt=function(t,e){t.token="",t.account=""},Xt=function(t,e){t.account=e.account},Zt={namespaced:!0,state:Ut,actions:o,getters:s,mutations:c},te=n("0e44");l["a"].use(wt["a"]);var ee=new wt["a"].Store({state:{},mutations:{},actions:{},modules:{user:Mt,admin:Zt},plugins:[Object(te["a"])({key:"purecrop_user",paths:["user.token"]}),Object(te["a"])({key:"purecrop_admin",paths:["admin.token"]})]});l["a"].use(y["a"]);var ne=[{path:"/",component:xt,children:[{path:"",name:"Home",component:function(){return n.e("home").then(n.bind(null,"a685"))},meta:{title:"無疑農 | 首頁"}},{path:"brand",name:"Brand",component:function(){return n.e("brand").then(n.bind(null,"be28"))},meta:{title:"無疑農 | 品牌故事"}},{path:"news",component:function(){return n.e("news").then(n.bind(null,"5b89"))},children:[{path:"",name:"NewsHome",component:function(){return n.e("news").then(n.bind(null,"7bab"))},meta:{title:"無疑農 | 最新消息"}},{path:"singlenews/:id",name:"NewsPages",component:function(){return n.e("news").then(n.bind(null,"b6ca"))},meta:{title:"無疑農 | title"}}]},{path:"products",component:function(){return n.e("products").then(n.bind(null,"6165"))},children:[{path:"",name:"ProductsHome",component:function(){return n.e("products").then(n.bind(null,"0151"))},meta:{title:"無疑農 | 小農產品"}},{path:"productintroduction/:id",name:"ProductIntroduction",component:function(){return n.e("product").then(n.bind(null,"ef01"))},meta:{title:"無疑農 | 商品介紹"}}]},{path:"cart",component:function(){return n.e("cart").then(n.bind(null,"db0c"))},children:[{path:"",component:function(){return n.e("cart").then(n.bind(null,"1d34"))},meta:{login:!0,title:"無疑農 | 購物車"}},{path:"cartcheckout",component:function(){return n.e("cart").then(n.bind(null,"6532"))},meta:{login:!0,title:"無疑農 | 結帳"}}]},{path:"orders",name:"Orders",component:function(){return n.e("orders").then(n.bind(null,"3482"))},meta:{login:!0,title:"無疑農 | 訂單頁面"}},{path:"privacyterm",name:"PrivacyTerm",component:function(){return n.e("privacypolicy").then(n.bind(null,"dd52"))},meta:{title:"無疑農 | 隱私權政策"}},{path:"termofservice",name:"TermOfService",component:function(){return n.e("termofservice").then(n.bind(null,"9438"))},meta:{title:"無疑農 | 使用者條款"}},{path:"comstomerfaq",name:"Comstomerfaq",component:function(){return n.e("comstomerfaq").then(n.bind(null,"8906"))},meta:{title:"無疑農 | 常見問題"}},{path:"shipping",name:"Shipping",component:function(){return n.e("shipping").then(n.bind(null,"fa1b"))},meta:{title:"無疑農 | 運送服務方式"}},{path:"payment",name:"Payment",component:function(){return n.e("payment").then(n.bind(null,"e76e"))},meta:{title:"無疑農 | 付款服務方式"}}]},{path:"/adminlogin",component:function(){return n.e("adminlogin").then(n.bind(null,"609d"))},meta:{title:"無疑農 | 管理員登入"}},{path:"/admin",component:function(){return n.e("admin").then(n.bind(null,"e567"))},children:[{path:"",component:function(){return n.e("admin").then(n.bind(null,"caf1"))},meta:{title:"無疑農 | 商品管理",admin:!0}},{path:"news",component:function(){return n.e("admin").then(n.bind(null,"b42b"))},meta:{title:"無疑農 | 最新消息",admin:!0}},{path:"swipers",component:function(){return n.e("admin").then(n.bind(null,"4c28"))},meta:{title:"無疑農 | 輪播圖管理",admin:!0}},{path:"members",name:"AdminMembers",component:function(){return n.e("admin").then(n.bind(null,"9d5f"))},meta:{title:"無疑農 | 會員管理",admin:!0}},{path:"orders",name:"AdminOrders",component:function(){return n.e("admin").then(n.bind(null,"4194"))},meta:{title:"無疑農 | 訂單管理",admin:!0}}]},{path:"*",name:"NotFound",redirect:"/"}],re=new y["a"]({routes:ne});re.beforeEach((function(t,e,n){var r=ee.getters["user/user"],a=ee.getters["admin/admin"];!t.meta.login||r.isLogin||t.path.includes("admin")?!t.meta.admin||a.isAdmin||t.path.includes("admin")?n():n("/"):(At.a.fire({icon:"error",title:"請先登入",confirmButtonColor:"#8BC34A"}),n("/"))})),re.afterEach((function(t,e){document.title=t.meta.title,window.scrollTo(0,0)}));var ae=re,ie=n("f309");l["a"].use(ie["a"]);var oe=new ie["a"]({theme:{themes:{light:{primary:"#7CB342",secondary:"#b0bec5",accent:"#8c9eff",error:"#b71c1c"}}}}),se=(n("b682"),n("4413"),{computed:{user:function(){return this.$store.getters["user/user"]},admin:function(){return this.$store.getters["admin/admin"]}}}),ce=n("657c"),le=(n("2bd9"),n("ef1b")),ue=n("8dc0"),de=n("e687"),pe=n("4c95"),me=n.n(pe),fe=n("bec8"),he=n("d768"),ve=n.n(he),ge=n("a584");l["a"].use(ge["a"],{config:{id:"G-RHGPJJ8G7V"}}),l["a"].use(ve.a),l["a"].use(fe["a"]),l["a"].use(me.a,{class:"v-scroll-reveal",duration:1e3,scale:1,distance:"100px",mobile:!1,easing:"ease-out"});var be={confirmButtonColor:"#8BC34A"};l["a"].use(Bt.a,be),l["a"].component("ImgInputer",ce["a"]),l["a"].mixin(se),l["a"].config.productionTip=!1,l["a"].prototype.$date={formatDistanceToNow:le["a"],parseISO:de["a"],locales:{zhTW:ue["a"]}},new l["a"]({router:ae,store:ee,vuetify:oe,render:function(t){return t(C)}}).$mount("#app")},"63b3":function(t,e,n){var r={"./1.jpg":"e901","./10.jpg":"8220","./11.jpg":"d540","./12.jpg":"bb62","./13.jpg":"bac3","./14.jpg":"f332","./15.jpg":"737e","./16.jpg":"7ea5","./17.jpg":"2355","./18.jpg":"f521","./19.jpg":"74bc","./2.jpg":"aaa1","./20.jpg":"a50e","./21.jpg":"b60d","./22.jpg":"ef82","./23.jpg":"3e58","./24.jpg":"424b","./25.jpg":"841c","./3.jpg":"d0d7","./4.jpg":"f1f8","./5.jpg":"8a80","./6.jpg":"e444","./7.jpg":"c6e8","./8.jpg":"1741","./9.jpg":"5300"};function a(t){var e=i(t);return n(e)}function i(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}a.keys=function(){return Object.keys(r)},a.resolve=i,t.exports=a,a.id="63b3"},"8da9":function(t,e,n){"use strict";n("d527")},"8e14":function(t,e,n){var r={"./amex.png":"fea8","./aura.png":"d4c1","./chip.png":"e0c9","./dankort.png":"72c5","./dinersclub.png":"69f4","./discover.png":"469c","./elo.png":"bd42","./hipercard.png":"f124","./jcb.png":"a775","./laser.png":"d135","./maestro.png":"3c60","./mastercard.png":"702c","./mir.png":"9757","./troy.png":"aab3","./uatp.png":"5699","./unionpay.png":"2ddc","./visa.png":"f9db","./visaelectron.png":"59cb"};function a(t){var e=i(t);return n(e)}function i(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}a.keys=function(){return Object.keys(r)},a.resolve=i,t.exports=a,a.id="8e14"},b682:function(t,e,n){},cd8c:function(t,e,n){},d527:function(t,e,n){}});
//# sourceMappingURL=app.9e2d7dcc.js.map