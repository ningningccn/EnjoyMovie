(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40fecb8c"],{"2a75":function(t,c,e){"use strict";e.r(c);var o=function(){var t=this,c=t.$createElement,e=t._self._c||c;return e("div",{style:{backgroundImage:"url("+t.product.imageUrl+")",backgroundSize:"cover",backgroundPosition:"center"}},[e("div",{staticClass:"blur"},[e("Navbar"),e("div",{staticClass:"container mt-5 pb-5 text-white"},[e("div",{staticClass:"context row"},[e("div",{staticClass:"context-left col-12  col-md-6"},[e("img",{staticClass:"col-md-12",attrs:{src:t.product.imageUrl,alt:"product-img"}})]),e("div",{staticClass:"context-right col-10 mt-4 mx-auto col-md-6"},[e("h1",[t._v(t._s(t.product.title))]),e("h6",{staticClass:"text-secondary"},[t._v("類別:"+t._s(t.product.category)+" ")]),e("span",{staticClass:"text-secondary"},[t._v("時長:"+t._s(t.product.content)+"分鐘")]),e("div",{staticStyle:{"margin-bottom":"30px","font-size":"18px"}},[t._v(" "+t._s(t.product.description)+" ")]),t.product.origin_price?e("del",{staticStyle:{"font-size":"30px"}},[e("span",[t._v("原價：")]),t._v(t._s(t._f("currency")(t.product.origin_price))+" ")]):t._e(),e("div",{class:{"text-white":!t.product.origin_price,"text-success":t.product.origin_price},staticStyle:{"font-size":"40px"}},[t.product.origin_price?e("span",[t._v("優惠價：")]):t._e(),t.product.origin_price?t._e():e("span",[t._v("售價：")]),t._v(" "+t._s(t._f("currency")(t.product.price))+" ")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.product.num,expression:"product.num"}],staticClass:"form-control mt-3",attrs:{name:""},on:{change:function(c){var e=Array.prototype.filter.call(c.target.options,(function(t){return t.selected})).map((function(t){var c="_value"in t?t._value:t.value;return c}));t.$set(t.product,"num",c.target.multiple?e:e[0])}}},t._l(10,(function(c){return e("option",{key:c,domProps:{value:c}},[t._v(" 選購 "+t._s(c)+" "+t._s(t.product.unit)+" ")])})),0),e("button",{staticClass:"btn btn-secondary mt-5 w-100",attrs:{type:"button"},on:{click:function(c){return c.preventDefault(),t.addToCart(t.product.id,t.product.num)}}},[t._v(" 加入購物車 ")])])])])],1)])},r=[],a=(e("99af"),e("d178")),i={data:function(){return{product_detailId:"",product:{}}},components:{Navbar:a["a"]},methods:{getProduct_detail:function(){var t=this,c="".concat("https://vue-course-api.hexschool.io","/api/").concat("ningningccn","/product/").concat(t.product_detailId);t.$store.dispatch("updateLoading",!0),t.$http.get(c).then((function(c){c.data.success&&(t.product=c.data.product,t.product.num=1,t.$store.dispatch("updateLoading",!1))}))},addToCart:function(t){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.$store.dispatch("cartModules/addToCart",{id:t,qty:c})}},created:function(){this.product_detailId=this.$route.params.productId,this.getProduct_detail()}},n=i,s=(e("cd83"),e("2877")),d=Object(s["a"])(n,o,r,!1,null,"c043ce4a",null);c["default"]=d.exports},a39a:function(t,c,e){},cd83:function(t,c,e){"use strict";e("a39a")}}]);
//# sourceMappingURL=chunk-40fecb8c.9e1dada5.js.map