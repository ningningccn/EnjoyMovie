(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-336d861c"],{"54c0":function(t,s,e){"use strict";e("9abf")},"9abf":function(t,s,e){},c1cb:function(t,s,e){"use strict";e.r(s);var r=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[t._m(0),e("div",[e("div",{staticClass:"my-5 row justify-content-center"},[e("form",{staticClass:"col-10 col-md-10",on:{submit:function(s){return s.preventDefault(),t.payOrder(s)}}},[e("table",{staticClass:"table text-white"},[t._m(1),e("tbody",t._l(t.order.products,(function(s){return e("tr",{key:s.id},[e("td",[e("img",{staticClass:"img-fluid",attrs:{src:s.product.imageUrl,alt:"product_imageUrl"}})]),e("td",{staticClass:"align-middle"},[t._v(t._s(s.product.title))]),e("td",{staticClass:"align-middle"},[t._v(t._s(s.qty)+t._s(s.product.unit))]),e("td",{staticClass:"align-middle text-right"},[t._v(t._s(t._f("currency")(s.final_total)))])])})),0),e("tfoot",[e("tr",[e("td"),e("td",{staticClass:"text-right",attrs:{colspan:"2"}},[t._v("總計")]),e("td",{staticClass:"text-right text-success"},[t._v(t._s(t._f("currency")(t.order.total)))])])])]),e("table",{staticClass:"table text-white"},[e("tbody",[e("tr",[e("th",{attrs:{width:"100"}},[t._v("Email")]),e("td",[t._v(t._s(t.order.user.email))])]),e("tr",[e("th",[t._v("姓名")]),e("td",[t._v(t._s(t.order.user.name))])]),e("tr",[e("th",[t._v("收件人電話")]),e("td",[t._v(t._s(t.order.user.tel))])]),e("tr",[e("th",[t._v("收件人地址")]),e("td",[t._v(t._s(t.order.user.address))])]),e("tr",[e("th",[t._v("付款狀態")]),e("td",[t.order.is_paid?e("span",{staticClass:"text-success"},[t._v("付款完成")]):e("span",{staticClass:"text-danger"},[t._v("尚未付款")])])])])]),!1===t.order.is_paid?e("div",{staticClass:"text-right"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"submit"}},[t._v(" 確認付款去 ")])]):t._e(),!0===t.order.is_paid?e("div",{staticClass:"text-center text-white"},[e("h1",[t._v("付款成功")]),e("h4",{staticClass:"mt-3"},[t._v("開始享受你的電影吧！")]),e("h6",{staticClass:"mt-5"},[t._v("或是...")]),e("button",{staticClass:"btn btn-secondary mt-4",attrs:{type:"button"},on:{click:t.moveToProducts}},[t._v(" 購買更多電影！ ")])]):t._e()])])])])},a=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"form text-white"},[e("div",{staticClass:"form-step"},[t._v("1.確認購物車")]),e("div",{staticClass:"form-step"},[t._v("2.填寫訂單資訊")]),e("div",{staticClass:"form-step active"},[t._v("3.完成購買")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("thead",[e("th",{staticClass:"w-25"}),e("th",[t._v("品名")]),e("th",[t._v("數量")]),e("th",[t._v("單價")])])}],c=(e("99af"),{data:function(){return{orderId:"",order:{user:{}}}},methods:{getOrderId:function(){var t=this,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("ningningccn","/order/").concat(t.orderId);t.$store.dispatch("updateLoading",!0),t.$http.get(s).then((function(s){s.data.success&&(t.order=s.data.order,t.$store.dispatch("updateLoading",!1))}))},payOrder:function(){var t=this,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("ningningccn","/pay/").concat(t.orderId);t.$http.post(s).then((function(s){s.data.success&&t.getOrderId()}))},moveToProducts:function(){this.$router.push("/coustomer_Product/category")}},created:function(){this.orderId=this.$route.params.orderId,this.getOrderId()}}),i=c,o=(e("54c0"),e("2877")),d=Object(o["a"])(i,r,a,!1,null,null,null);s["default"]=d.exports}}]);
//# sourceMappingURL=chunk-336d861c.6005d754.js.map