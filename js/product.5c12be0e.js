(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["product"],{"1f4f":function(t,e,i){"use strict";var s=i("5530"),n=(i("a9e3"),i("8b37"),i("80d2")),a=i("7560"),o=i("58df");e["a"]=Object(o["a"])(a["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(s["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(n["h"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"8b37":function(t,e,i){},9486:function(t,e,i){},9734:function(t,e,i){},af96:function(t,e,i){"use strict";i("9486")},ef01:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"ProductIntroductiom"}},[i("v-overlay",{attrs:{value:t.init}},[i("div",{staticClass:"mask white d-flex justify-center align-center"},[i("v-progress-circular",{attrs:{size:70,width:7,indeterminate:"",color:"green"}})],1)]),i("v-overlay",{attrs:{value:!t.sell}},[i("div",{staticClass:"mask black"},[i("p",{staticClass:"text-h1"},[t._v("產品已下架")])])]),i("v-container",{staticClass:"mt-8 mt-md-16"},[i("v-row",[i("v-col"),i("v-col",{attrs:{cols:"12",md:"11"}},[i("v-row",[i("v-col",{staticClass:"grey lighten-3",attrs:{cols:"12",sm:"6",md:"5"}},[i("v-img",{attrs:{src:this.image}})],1),i("v-col",{staticClass:"grey lighten-3",attrs:{cols:"12",sm:"6",md:"7"}},[i("div",{staticClass:"txt"},[i("h3",{staticClass:"py-5 text-h3 font-weight-bold"},[t._v(t._s(t.name))]),i("p",{staticClass:"text-h4 deep-orange--text text--darken-2 font-weight-bold py-15"},[t._v(" $ "+t._s(new Intl.NumberFormat("en-IN").format(t.price))+" ")]),i("v-simple-table",{staticClass:"grey lighten-3 top"},[i("tbody",{staticClass:"lighten-4"},[i("tr",[i("td",{staticClass:"text-subtitle-1 text-sm-h6",attrs:{width:"25%"}},[t._v("運送")]),i("td",{staticClass:"text-subtitle-1 text-sm-h6 text-end"},[t._v(" 備貨時間約 3 - 5 天 ")]),i("td",{staticClass:"hidden-lg-and-down",attrs:{width:"50%"}})]),i("tr",[i("td"),i("td",{staticClass:"text-h6 text-end"},[i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,n=e.attrs;return[i("span",[t._v("$60")]),i("v-icon",t._g(t._b({attrs:{large:"",color:"grey",dark:""}},"v-icon",n,!1),s),[t._v(" mdi-chevron-down ")])]}}])},[i("div",{staticClass:"tooltiptext pt-4"},[i("div",{staticClass:"d-flex justify-space-between"},[i("p",[t._v("貨運")]),i("p",[t._v("$60")])]),i("p",[t._v("預計到貨時間 2/5 - 2/7")])])])],1)]),i("tr",[i("td",{staticClass:"text-subtitle-1 text-sm-h6"},[t._v("數量")]),i("td",{staticClass:"text-subtitle-1 text-sm-h6 quantity"},[i("v-text-field",{attrs:{"background-color":"transparent","hide-spin-buttons":"",readonly:"",flat:"",solo:"",min:"1",type:"number",value:"quantity",state:t.quantityState},model:{value:t.quantity,callback:function(e){t.quantity=t._n(e)},expression:"quantity"}},[i("template",{slot:"append"},[i("v-btn",{attrs:{text:"",ripple:!1,plain:""},on:{click:t.plus}},[t._v(" + ")])],1),i("template",{slot:"prepend-inner"},[i("v-btn",{attrs:{text:"",ripple:!1,plain:""},on:{click:t.menos}},[t._v(" - ")])],1)],2)],1)])])]),i("div",{staticClass:"d-flex"},[i("v-btn",{staticClass:" my-10 text-subtitle-1  text-md-h5 mr-10 addcart",attrs:{text:"",ripple:!1,large:"",width:"30%"},on:{click:t.addCart}},[t._v("加入購物車")]),i("v-btn",{staticClass:"light-green white--text my-10 text-subtitle-1  text-md-h5 buynow",attrs:{text:"",ripple:!1,large:"",width:"30%"},on:{click:t.buyNow}},[t._v("立即購買")])],1)],1)])],1)],1),i("v-col")],1),i("v-row",[i("v-col"),i("v-col",{staticClass:"px-0 py-0",attrs:{cols:"12",md:"11"}},[i("v-simple-table",{staticClass:"grey lighten-3"},[i("thead",[i("tr",[i("th",{staticClass:"text-h4 py-8",attrs:{colspan:"2"}},[t._v("商品規格")])])]),i("tbody",[i("tr",[i("td",{staticClass:"text-subtitle-1 text-sm-h6",attrs:{width:"20%"}},[t._v("產地")]),i("td",{staticClass:"text-subtitle-1 text-sm-h6",attrs:{width:"50%"}},[t._v(t._s(t.spec.origin))])]),i("tr",[i("td",{staticClass:"text-subtitle-1 text-sm-h6"},[t._v("食物種類")]),i("td",{staticClass:"text-subtitle-1 text-sm-h6"},[t._v(t._s(t.spec.type))])]),i("tr",[i("td",{staticClass:"text-subtitle-1 text-sm-h6"},[t._v("內容物/成分")]),i("td",{staticClass:"text-subtitle-1 text-sm-h6"},[t._v(t._s(t.spec.content))])]),i("tr",[i("td",{staticClass:"text-subtitle-1 text-sm-h6"},[t._v("出貨地")]),i("td",{staticClass:"text-subtitle-1 text-sm-h6"},[t._v(t._s(t.spec.from))])])])]),i("v-simple-table",{staticClass:"py-5 grey lighten-3"},[i("thead",[i("tr",[i("th",{staticClass:"text-h4 py-8",attrs:{colspan:"2"}},[t._v("商品詳情")])])]),i("tbody",[i("tr",[i("td",[i("p",{staticClass:"text-subtitle-1 text-sm-h6",domProps:{innerHTML:t._s(t.descriptionProduct)}})])])])])],1),i("v-col")],1)],1)],1)},n=[],a=i("1da1"),o=(i("96cf"),i("b0c0"),i("a4d3"),i("e01a"),i("ac1f"),i("5319"),{data:function(){return{init:!0,name:"",price:0,description:"",image:"",sell:"",spec:{origin:"",from:"",type:"",content:""},quantity:1}},created:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.api.get("/products/"+t.$route.params.id);case 3:i=e.sent,s=i.data,t.name=s.result.name,t.price=s.result.price,t.description=s.result.description,t.image=s.result.image,t.sell=s.result.sell,t.spec={origin:s.result.spec.origin,from:s.result.spec.from,type:s.result.spec.type,content:s.result.spec.content},document.title=" 無疑農 | ".concat(t.name),t.init=!1,e.next=18;break;case 15:e.prev=15,e.t0=e["catch"](0),t.$swal({icon:"error",title:"錯誤",text:"取得商品錯誤"});case 18:case"end":return e.stop()}}),e,null,[[0,15]])})))()},methods:{plus:function(){this.quantity++},menos:function(){this.quantity<=1||this.quantity--},addCart:function(){this.user.isLogin?this.$store.dispatch("user/addCart",{product:this.$route.params.id,quantity:this.quantity}):this.$swal({icon:"error",title:"錯誤",text:"請先登入"})},buyNow:function(){this.user.isLogin?(this.$store.dispatch("user/addCart",{product:this.$route.params.id,quantity:this.quantity}),this.$router.push("/cart")):this.$swal({icon:"error",title:"錯誤",text:"請先登入"})}},computed:{quantityState:function(){return 0===this.quantity?null:this.quantity>0},descriptionProduct:function(){return this.description.replace(/\n/g,"<br /><br />")}}}),r=o,c=(i("af96"),i("2877")),h=i("6544"),l=i.n(h),u=i("8336"),d=i("62ad"),f=i("a523"),p=i("132d"),v=i("adda"),m=i("a797"),g=i("490a"),b=i("0fd9"),w=i("1f4f"),x=i("8654"),y=i("ade3"),C=(i("a9e3"),i("9734"),i("4ad4")),O=i("a9ad"),_=i("16b7"),k=i("b848"),T=i("f573"),A=i("f2e7"),Y=i("80d2"),L=i("d9bd"),$=i("58df"),W=Object($["a"])(O["a"],_["a"],k["a"],T["a"],A["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},openOnFocus:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,i=t.content,s=!this.bottom&&!this.left&&!this.top&&!this.right,n=!1!==this.attach?e.offsetLeft:e.left,a=0;return this.top||this.bottom||s?a=n+e.width/2-i.width/2:(this.left||this.right)&&(a=n+(this.right?e.width:-i.width)+(this.right?10:-10)),this.nudgeLeft&&(a-=parseInt(this.nudgeLeft)),this.nudgeRight&&(a+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(a,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,i=t.content,s=!1!==this.attach?e.offsetTop:e.top,n=0;return this.top||this.bottom?n=s+(this.bottom?e.height:-i.height)+(this.bottom?10:-10):(this.left||this.right)&&(n=s+e.height/2-i.height/2),this.nudgeTop&&(n-=parseInt(this.nudgeTop)),this.nudgeBottom&&(n+=parseInt(this.nudgeBottom)),!1===this.attach&&(n+=this.pageYOffset),"".concat(this.calcYOverflow(n),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(Y["h"])(this.maxWidth),minWidth:Object(Y["h"])(this.minWidth),top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(Y["t"])(this,"activator",!0)&&Object(L["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=C["a"].options.methods.genActivatorListeners.call(this);return this.openOnFocus&&(e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")}),e.keydown=function(e){e.keyCode===Y["x"].esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(y["a"])(t,this.contentClass,!0),Object(y["a"])(t,"menuable__content__active",this.isActive),Object(y["a"])(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}}),I=Object(c["a"])(r,s,n,!1,null,null,null);e["default"]=I.exports;l()(I,{VBtn:u["a"],VCol:d["a"],VContainer:f["a"],VIcon:p["a"],VImg:v["a"],VOverlay:m["a"],VProgressCircular:g["a"],VRow:b["a"],VSimpleTable:w["a"],VTextField:x["a"],VTooltip:W})},f573:function(t,e,i){"use strict";var s=i("5530"),n=(i("a9e3"),i("d3b7"),i("21be")),a=i("fe6c"),o=i("4ad4"),r=i("75eb"),c=i("58df"),h=i("80d2"),l=Object(c["a"])(n["a"],Object(a["b"])(["top","right","bottom","left","absolute"]),o["a"],r["a"]);e["a"]=l.extend().extend({name:"menuable",props:{allowOverflow:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[Number,String],default:"auto"},minWidth:[Number,String],nudgeBottom:{type:[Number,String],default:0},nudgeLeft:{type:[Number,String],default:0},nudgeRight:{type:[Number,String],default:0},nudgeTop:{type:[Number,String],default:0},nudgeWidth:{type:[Number,String],default:0},offsetOverflow:Boolean,positionX:{type:Number,default:null},positionY:{type:Number,default:null},zIndex:{type:[Number,String],default:null}},data:function(){return{activatorNode:[],absoluteX:0,absoluteY:0,activatedBy:null,activatorFixed:!1,dimensions:{activator:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0,offsetLeft:0},content:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0}},relativeYOffset:0,hasJustFocused:!1,hasWindow:!1,inputActivator:!1,isContentActive:!1,pageWidth:0,pageYOffset:0,stackClass:"v-menu__content--active",stackMinZIndex:6}},computed:{computedLeft:function(){var t=this.dimensions.activator,e=this.dimensions.content,i=(!1!==this.attach?t.offsetLeft:t.left)||0,s=Math.max(t.width,e.width),n=0;if(n+=this.left?i-(s-t.width):i,this.offsetX){var a=isNaN(Number(this.maxWidth))?t.width:Math.min(t.width,Number(this.maxWidth));n+=this.left?-a:t.width}return this.nudgeLeft&&(n-=parseInt(this.nudgeLeft)),this.nudgeRight&&(n+=parseInt(this.nudgeRight)),n},computedTop:function(){var t=this.dimensions.activator,e=this.dimensions.content,i=0;return this.top&&(i+=t.height-e.height),!1!==this.attach?i+=t.offsetTop:i+=t.top+this.pageYOffset,this.offsetY&&(i+=this.top?-t.height:t.height),this.nudgeTop&&(i-=parseInt(this.nudgeTop)),this.nudgeBottom&&(i+=parseInt(this.nudgeBottom)),i},hasActivator:function(){return!!this.$slots.activator||!!this.$scopedSlots.activator||!!this.activator||!!this.inputActivator},absoluteYOffset:function(){return this.pageYOffset-this.relativeYOffset}},watch:{disabled:function(t){t&&this.callDeactivate()},isActive:function(t){this.disabled||(t?this.callActivate():this.callDeactivate())},positionX:"updateDimensions",positionY:"updateDimensions"},beforeMount:function(){this.hasWindow="undefined"!==typeof window,this.hasWindow&&window.addEventListener("resize",this.updateDimensions,!1)},beforeDestroy:function(){this.hasWindow&&window.removeEventListener("resize",this.updateDimensions,!1)},methods:{absolutePosition:function(){return{offsetTop:this.positionY||this.absoluteY,offsetLeft:this.positionX||this.absoluteX,scrollHeight:0,top:this.positionY||this.absoluteY,bottom:this.positionY||this.absoluteY,left:this.positionX||this.absoluteX,right:this.positionX||this.absoluteX,height:0,width:0}},activate:function(){},calcLeft:function(t){return Object(h["h"])(!1!==this.attach?this.computedLeft:this.calcXOverflow(this.computedLeft,t))},calcTop:function(){return Object(h["h"])(!1!==this.attach?this.computedTop:this.calcYOverflow(this.computedTop))},calcXOverflow:function(t,e){var i=t+e-this.pageWidth+12;return t=(!this.left||this.right)&&i>0?Math.max(t-i,0):Math.max(t,12),t+this.getOffsetLeft()},calcYOverflow:function(t){var e=this.getInnerHeight(),i=this.absoluteYOffset+e,s=this.dimensions.activator,n=this.dimensions.content.height,a=t+n,o=i<a;return o&&this.offsetOverflow&&s.top>n?t=this.pageYOffset+(s.top-n):o&&!this.allowOverflow?t=i-n-12:t<this.absoluteYOffset&&!this.allowOverflow&&(t=this.absoluteYOffset+12),t<12?12:t},callActivate:function(){this.hasWindow&&this.activate()},callDeactivate:function(){this.isContentActive=!1,this.deactivate()},checkForPageYOffset:function(){this.hasWindow&&(this.pageYOffset=this.activatorFixed?0:this.getOffsetTop())},checkActivatorFixed:function(){if(!1===this.attach){var t=this.getActivator();while(t){if("fixed"===window.getComputedStyle(t).position)return void(this.activatorFixed=!0);t=t.offsetParent}this.activatorFixed=!1}},deactivate:function(){},genActivatorListeners:function(){var t=this,e=o["a"].options.methods.genActivatorListeners.call(this),i=e.click;return i&&(e.click=function(e){t.openOnClick&&i&&i(e),t.absoluteX=e.clientX,t.absoluteY=e.clientY}),e},getInnerHeight:function(){return this.hasWindow?window.innerHeight||document.documentElement.clientHeight:0},getOffsetLeft:function(){return this.hasWindow?window.pageXOffset||document.documentElement.scrollLeft:0},getOffsetTop:function(){return this.hasWindow?window.pageYOffset||document.documentElement.scrollTop:0},getRoundedBoundedClientRect:function(t){var e=t.getBoundingClientRect();return{top:Math.round(e.top),left:Math.round(e.left),bottom:Math.round(e.bottom),right:Math.round(e.right),width:Math.round(e.width),height:Math.round(e.height)}},measure:function(t){if(!t||!this.hasWindow)return null;var e=this.getRoundedBoundedClientRect(t);if(!1!==this.attach){var i=window.getComputedStyle(t);e.left=parseInt(i.marginLeft),e.top=parseInt(i.marginTop)}return e},sneakPeek:function(t){var e=this;requestAnimationFrame((function(){var i=e.$refs.content;i&&"none"===i.style.display?(i.style.display="inline-block",t(),i.style.display="none"):t()}))},startTransition:function(){var t=this;return new Promise((function(e){return requestAnimationFrame((function(){t.isContentActive=t.hasJustFocused=t.isActive,e()}))}))},updateDimensions:function(){var t=this;this.hasWindow="undefined"!==typeof window,this.checkActivatorFixed(),this.checkForPageYOffset(),this.pageWidth=document.documentElement.clientWidth;var e={activator:Object(s["a"])({},this.dimensions.activator),content:Object(s["a"])({},this.dimensions.content)};if(!this.hasActivator||this.absolute)e.activator=this.absolutePosition();else{var i=this.getActivator();if(!i)return;e.activator=this.measure(i),e.activator.offsetLeft=i.offsetLeft,!1!==this.attach?e.activator.offsetTop=i.offsetTop:e.activator.offsetTop=0}this.sneakPeek((function(){if(t.$refs.content){if(t.$refs.content.offsetParent){var i=t.getRoundedBoundedClientRect(t.$refs.content.offsetParent);t.relativeYOffset=window.pageYOffset+i.top,e.activator.top-=t.relativeYOffset,e.activator.left-=window.pageXOffset+i.left}e.content=t.measure(t.$refs.content)}t.dimensions=e}))}}})}}]);
//# sourceMappingURL=product.5c12be0e.js.map