(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0afe0a"],{"0fca":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("table",{staticClass:"table mt-4 text-white"},[t._m(0),t._l(t.orderlist,(function(e){return s("tbody",{key:e.id},[s("tr",[s("td",[t._v(t._s(e.create_at))]),s("td",[t._v(t._s(e.user.email))]),s("td",[s("ul",{staticClass:"list-unstyled"},t._l(e.products,(function(e){return s("li",{key:e.id},[t._v(" "+t._s(e.product.title)+" : "+t._s(e.qty)+" "+t._s(e.product.unit)+" ")])})),0)]),s("td",{staticClass:"text-right"},[t._v(" "+t._s(t._f("currency")(e.total)))]),s("td",[e.is_paid?s("span",{staticClass:"text-success"},[t._v("已付款")]):s("span",{staticClass:"text-danger"},[t._v("尚未付款")])])])])}))],2)])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",{attrs:{width:"80"}},[t._v("購買時間")]),s("th",{attrs:{width:"120"}},[t._v("Email")]),s("th",{attrs:{width:"150"}},[t._v("購買款項")]),s("th",{attrs:{width:"50"}},[t._v("應付金額")]),s("th",{attrs:{width:"50"}},[t._v("是否付款")])])])}],r=(s("99af"),{data:function(){return{orderlist:{}}},methods:{getOrderList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("ningningccn","/orders?page=").concat(t);e.$store.dispatch("updateLoading",!0),e.$http.get(s).then((function(t){e.orderlist=t.data.orders,e.$store.dispatch("updateLoading",!1)}))}},created:function(){this.getOrderList()}}),n=r,c=s("2877"),d=Object(c["a"])(n,a,i,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0afe0a.c62c8435.js.map