(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["products"],{"0151":function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"ProductsHome"}},[r("v-overlay",{attrs:{value:t.init}},[r("div",{staticClass:"mask white d-flex justify-center align-center"},[r("v-progress-circular",{attrs:{size:70,width:7,indeterminate:"",color:"green"}})],1)]),r("v-container",{staticClass:"mt-8 mt-md-8"},[r("v-row",[r("v-col"),r("v-col",{staticClass:"py-3",attrs:{cols:"12"}},[r("v-row",[r("v-col",{staticClass:"px-0 py-0",attrs:{cols:"12",md:"12"}},[r("v-carousel",{attrs:{height:"auto",cycle:"","hide-delimiters":"",progress:"",interval:"2500","show-arrows":!1}},t._l(t.productscarousel,(function(t){return r("v-carousel-item",{key:t._id,attrs:{src:t.file}})})),1)],1)],1)],1),r("v-col")],1)],1),r("v-container",{staticClass:"home mt-8 mt-md-10"},[r("h3",{staticClass:"text-center text-lg-h2 text-md-h3 text-h3 light-green--text text--darken-1 font-weight-bold bottomline"},[t._v("小農產品")]),r("p",{staticClass:"text-center mt-6 mt-lg-10"},[t._v("新鮮熱賣 x 自產自銷")]),r("v-row",{staticClass:"mt-4 mt-sm-10"},[r("v-col"),r("v-col",{attrs:{cols:"12"}},[r("v-row",t._l(t.products,(function(e){return r("v-col",{key:e._id,staticClass:"productcard",attrs:{cols:"12",xl:"3",md:"4",sm:"6"}},[r("v-card",{attrs:{ripple:!1}},[r("v-img",{staticClass:"cursor",attrs:{height:"200",src:e.image},on:{click:function(r){return t.singleproduct(e._id)}}}),r("v-card-text",{staticClass:"pb-0"},[r("p",{staticClass:"text-h5 grey--text text--darken-3 font-weight-bold"},[t._v(t._s(e.name))]),r("p",{staticClass:"mb-0 text-h5 orange--text text--darken-4 font-weight-bold"},[t._v(" $ "+t._s(new Intl.NumberFormat("en-IN").format(e.price)))])]),r("v-card-actions",{staticClass:"px-4 pb-4"},[r("v-btn",{staticClass:"buybtn mt-4 text-h6 text-sm-h5 font-weight-bold",attrs:{width:"50%",text:"",large:"",ripple:!1},on:{click:function(r){return t.buyNow(e)}}},[t._v("直接購買")]),r("v-btn",{staticClass:"addcartbtn light-green darken-1 white--text  mt-4 text-h6 font-weight-medium",attrs:{width:"50%",text:"",large:"",ripple:!1},on:{click:function(r){return t.addCart(e)}}},[r("v-icon",{attrs:{large:""}},[t._v("mdi-cart")])],1)],1)],1)],1)})),1)],1),r("v-col")],1)],1)],1)},s=[],a=r("1da1"),n=(r("96cf"),{data:function(){return{products:[],productscarousel:[],init:!0}},created:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.api.get("/products");case 3:r=e.sent,i=r.data,t.products=i.result,t.getProduct(),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),t.$swal({icon:"error",title:"失敗",text:"商品取得失敗"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},mounted:function(){this.init=!1},methods:{addCart:function(t){this.user.isLogin?this.$store.dispatch("user/addCart",{product:t._id,quantity:1}):this.$swal({icon:"error",title:"錯誤",text:"請先登入"})},buyNow:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(e.user.isLogin){r.next=3;break}return e.$swal({icon:"error",title:"錯誤",text:"請先登入"}),r.abrupt("return");case 3:return r.next=5,e.$store.dispatch("user/addCart",{product:t._id,quantity:1});case 5:e.$router.push("/cart");case 6:case"end":return r.stop()}}),r)})))()},singleproduct:function(t){this.$router.push("products/productintroduction/"+t)},getProduct:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.api.get("/images");case 3:r=e.sent,i=r.data,t.productscarousel=i.result[0].productswiper,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.$swal({icon:"error",title:"失敗",text:"取得圖片失敗"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}}),o=n,c=(r("086f"),r("2877")),l=r("6544"),u=r.n(l),d=r("8336"),h=r("b0af"),m=r("99d9"),p=r("5e66"),v=r("3e35"),g=r("62ad"),f=r("a523"),w=r("132d"),x=r("adda"),b=r("a797"),C=r("490a"),y=r("0fd9"),_=Object(c["a"])(o,i,s,!1,null,null,null);e["default"]=_.exports;u()(_,{VBtn:d["a"],VCard:h["a"],VCardActions:m["a"],VCardText:m["c"],VCarousel:p["a"],VCarouselItem:v["a"],VCol:g["a"],VContainer:f["a"],VIcon:w["a"],VImg:x["a"],VOverlay:b["a"],VProgressCircular:C["a"],VRow:y["a"]})},"086f":function(t,e,r){"use strict";r("6dc5")},"3e35":function(t,e,r){"use strict";var i=r("5530"),s=r("1e6c"),a=r("adda"),n=r("58df"),o=r("80d2"),c=r("1c87"),l=Object(n["a"])(s["a"],c["a"]);e["a"]=l.extend().extend({name:"v-carousel-item",inject:{parentTheme:{default:{isDark:!1}}},provide:function(){return{theme:this.parentTheme}},inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement(a["a"],{staticClass:"v-carousel__item",props:Object(i["a"])(Object(i["a"])({},this.$attrs),{},{height:this.windowGroup.internalHeight}),on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},Object(o["s"])(this))]},genWindowItem:function(){var t=this.generateRouteLink(),e=t.tag,r=t.data;return r.staticClass="v-window-item",r.directives.push({name:"show",value:this.isActive}),this.$createElement(e,r,this.genDefaultSlot())}}})},"5e66":function(t,e,r){"use strict";var i=r("5530"),s=(r("a9e3"),r("63b7"),r("f665")),a=r("afdd"),n=r("9d26"),o=r("37c6"),c=r("604c"),l=c["a"].extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return c["a"].options.computed.classes.call(this)}},methods:{genData:c["a"].options.methods.genData}}),u=r("80d2"),d=r("d9bd");e["a"]=s["a"].extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:function(t){return t>0}},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},provide:function(){return{parentTheme:this.theme}},data:function(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical})},isDark:function(){return this.dark||!this.light},isVertical:function(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height:function(t,e){t!==e&&t&&(this.internalHeight=t)},cycle:function(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created:function(){this.$attrs.hasOwnProperty("hide-controls")&&Object(d["a"])("hide-controls",':show-arrows="false"',this)},mounted:function(){this.startTimeout()},methods:{genControlIcons:function(){return this.isVertical?null:s["a"].options.methods.genControlIcons.call(this)},genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems:function(){for(var t=this,e=this.items.length,r=[],i=0;i<e;i++){var s=this.$createElement(a["a"],{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",i+1,e)},props:{icon:!0,small:!0,value:this.getValue(this.items[i],i)}},[this.$createElement(n["a"],{props:{size:18}},this.delimiterIcon)]);r.push(s)}return this.$createElement(l,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:function(e){t.internalValue=e}}},r)},genProgress:function(){return this.$createElement(o["a"],{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render:function(t){var e=s["a"].options.render.call(this,t);return e.data.style="height: ".concat(Object(u["h"])(this.height),";"),this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}})},6165:function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"products"},[r("router-view")],1)},s=[],a=r("2877"),n={},o=Object(a["a"])(n,i,s,!1,null,null,null);e["default"]=o.exports},"63b7":function(t,e,r){},"6dc5":function(t,e,r){}}]);
//# sourceMappingURL=products.3686fd31.js.map