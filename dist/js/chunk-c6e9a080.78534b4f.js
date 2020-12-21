(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c6e9a080"],{"8d84":function(t,a,s){},a6dc:function(t,a,s){"use strict";s("8d84")},d55a:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("Cart")],1)},c=[],i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"cart"},[t._m(0),s("table",{staticClass:"table mt-4 text-white"},[t._m(1),t._l(t.cartProducts.carts,(function(a){return s("tbody",{key:a.id},[s("tr",[s("td",{staticStyle:{width:"25%"}},[s("img",{staticClass:"img-fluid",attrs:{src:a.product.imageUrl,alt:"product-imageUrl"}})]),s("td",{staticStyle:{"vertical-align":"middle",width:"25%"}},[s("div",[s("h4",[t._v(t._s(a.product.title))]),s("span",{staticClass:"cart-category",staticStyle:{"background-color":"red",padding:"4px","border-radius":"5px"}},[t._v(" "+t._s(a.product.category)+" ")])]),a.coupon?s("div",{staticClass:"text-success"},[t._v("已套用優惠卷")]):t._e(),s("div",{staticClass:"btn-group w-100 d-md-none mt-3",attrs:{role:"group","aria-label":"Basic example"}},[s("button",{staticClass:"btn btn-light",attrs:{type:"button"},on:{click:function(s){return t.changeQty(a,!1)}}},[t._v(" - ")]),s("button",{staticClass:"btn btn-light",attrs:{type:"button"}},[t._v(" "+t._s(a.qty)+" ")]),s("button",{staticClass:"btn btn-light",attrs:{type:"button"},on:{click:function(s){return t.changeQty(a,!0)}}},[t._v(" + ")])])]),s("td",{staticClass:"d-md-table-cell d-none",staticStyle:{"vertical-align":"middle"}},[s("div",{staticClass:"btn-group w-100",attrs:{role:"group","aria-label":"Basic example"}},[s("button",{staticClass:"btn btn-light ",attrs:{type:"button",disabled:1===a.qty},on:{click:function(s){return t.changeQty(a,!1)}}},[t._v(" - ")]),s("button",{staticClass:"btn btn-light",attrs:{type:"button"}},[t._v(" "+t._s(a.qty)+" ")]),s("button",{staticClass:"btn btn-light",attrs:{type:"button"},on:{click:function(s){return t.changeQty(a,!0)}}},[t._v(" + ")])])]),s("td",{staticClass:"text-right h6",staticStyle:{"vertical-align":"middle"}},[s("div",{staticClass:"del_btn py-3",staticStyle:{cursor:"pointer"},on:{click:function(s){return s.preventDefault(),t.delCartItem(a.id)}}},[s("i",{staticClass:"fas fa-times"})]),a.final_total!==a.total?s("del",[t._v(" "+t._s(t._f("currency")(a.total))+" ")]):t._e(),a.final_total===a.total?s("div",[t._v(" "+t._s(t._f("currency")(a.final_total))+" ")]):t._e(),a.final_total!==a.total?s("div",{staticClass:"text-success py-3"},[t._v(" "+t._s(t._f("currency")(a.final_total))+" ")]):t._e()])])])})),s("tfoot",[s("tr",[s("td",{attrs:{width:"80"}}),s("td",{staticClass:"d-md-table-cell d-none"}),s("td",{attrs:{width:"200"}},[t._v("總計")]),s("td",{staticClass:"text-right",attrs:{width:"200"}},[t._v(" "+t._s(t._f("currency")(t.cartProducts.total)))])]),t.cartProducts.total!==t.cartProducts.final_total?s("tr",[s("td",{attrs:{width:"80"}}),s("td",{staticClass:"d-md-table-cell d-none"}),s("td",{attrs:{width:"200"}},[t._v("折扣價")]),s("td",{staticClass:"text-right text-success",attrs:{width:"200"}},[t._v(" "+t._s(t._f("currency")(t.cartProducts.final_total))+" ")])]):t._e()])],2),s("div",{staticClass:"input-group mb-3 input-group-sm"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon_code,expression:"coupon_code"}],staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入優惠碼"},domProps:{value:t.coupon_code},on:{input:function(a){a.target.composing||(t.coupon_code=a.target.value)}}}),s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.addCouponCode(a)}}},[t._v(" 套用優惠碼 ")])])]),s("div",{staticClass:"text-right"},[s("button",{staticClass:"btn btn-danger w-25",attrs:{type:"button"},on:{click:t.nextStep}},[t._v("下一步")])])])},n=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"form text-white"},[s("div",{staticClass:"form-step active"},[t._v("1.確認購物車")]),s("div",{staticClass:"form-step"},[t._v("2.填寫訂單資訊")]),s("div",{staticClass:"form-step"},[t._v("3.完成購買")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",[s("tr",[s("th",{staticStyle:{width:"20%"}},[t._v("產品")]),s("th",{staticStyle:{width:"35%"}}),s("th",{staticClass:"d-md-table-cell d-none",staticStyle:{width:"15%"}},[t._v("數量")]),s("th",{staticStyle:{width:"15%"}},[t._v("單價")])])])}],o=(s("99af"),s("5530")),r=s("2f62"),l={data:function(){return{coupon_code:"",mode:!0}},methods:Object(o["a"])({delCartItem:function(t){this.$store.dispatch("cartModules/delCartItem",t)},addCouponCode:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("ningningccn","/coupon"),s={code:t.coupon_code};t.$http.post(a,{data:s}).then((function(a){a.data.success?(t.$bus.$emit("messsage:push",a.data.message,"danger"),t.getCart()):t.$bus.$emit("messsage:push",a.data.message,"danger")}))},changeQty:function(t,a){if(a){var s=t.qty+1,e={product_id:t.product_id,qty:s};this.$store.dispatch("cartModules/delCartItem",t.id),this.$store.dispatch("cartModules/changeQty",e)}else{var c=t.qty+-1,i={product_id:t.product_id,qty:c};this.$store.dispatch("cartModules/delCartItem",t.id),this.$store.dispatch("cartModules/changeQty",i)}},nextStep:function(){this.$router.push("cartform")}},Object(r["b"])("cartModules",["getCart"])),computed:Object(o["a"])({},Object(r["c"])("cartModules",["cartProducts"])),created:function(){this.getCart()}},d=l,u=(s("a6dc"),s("2877")),p=Object(u["a"])(d,i,n,!1,null,"60530dbf",null),_=p.exports,h={components:{Cart:_}},b=h,v=Object(u["a"])(b,e,c,!1,null,null,null);a["default"]=v.exports}}]);
//# sourceMappingURL=chunk-c6e9a080.78534b4f.js.map