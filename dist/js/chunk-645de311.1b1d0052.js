(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-645de311"],{1799:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("nav",{attrs:{"aria-label":"Page navigation example"}},[s("ul",{staticClass:"pagination justify-content-center"},[s("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_pre}},[s("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(a){return a.preventDefault(),t.getpage(t.pagination.current_page-1)}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pagination.total_pages,(function(a){return s("li",{key:a,staticClass:"page-item",class:{active:t.pagination.current_page===a}},[s("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.getpage(a)}}},[t._v(" "+t._s(a)+" ")])])})),s("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_next}},[s("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(a){return a.preventDefault(),t.getpage(t.pagination.current_page+1)}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])])},i=[],n={props:["pagination"],methods:{getpage:function(t){this.$emit("event",t)}}},o=n,c=(s("5eaf"),s("2877")),l=Object(c["a"])(o,e,i,!1,null,null,null);a["a"]=l.exports},"2aa4":function(t,a,s){},"5eaf":function(t,a,s){"use strict";s("2aa4")},fcb9:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),s("div",{staticClass:"text-right mt-4"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){return t.opendDiscountModal(!0)}}},[t._v(" 建立新的優惠卷 ")])]),s("table",{staticClass:"table mt-4 text-white"},[t._m(0),s("tbody",t._l(t.discounts,(function(a){return s("tr",{key:a.id},[s("td",[t._v(t._s(a.title))]),s("td",[t._v(t._s(a.percent))]),s("td",[t._v(t._s(a.due_date))]),s("td",[a.is_enabled?s("span",{staticClass:"text-success"},[t._v("啟用")]):s("span",[t._v("未啟用")])]),s("td",[s("div",{staticClass:"btn-group"},[s("button",{staticClass:"btn btn-outline-primary btn-sm",attrs:{type:"button"},on:{click:function(s){return t.opendDiscountModal(!1,a)}}},[t._v("編輯 ")]),s("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:function(s){return t.openDel_discountModal(a)}}},[t._v("刪除 ")])])])])})),0)]),s("Pagination",{attrs:{pagination:t.pagination},on:{event:t.getDiscounts}}),s("div",{staticClass:"modal fade",attrs:{id:"DiscountModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[s("div",{staticClass:"modal-content border-0"},[t._m(1),s("div",{staticClass:"modal-body"},[s("form",[s("div",{staticClass:"form-group"},[s("label",{staticClass:"col-form-label",attrs:{for:"recipient-name"}},[t._v("名稱:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.tempDiscounts.title,expression:"tempDiscounts.title"}],staticClass:"form-control",attrs:{type:"text",id:"title"},domProps:{value:t.tempDiscounts.title},on:{input:function(a){a.target.composing||t.$set(t.tempDiscounts,"title",a.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{staticClass:"col-form-label",attrs:{for:"message-text"}},[t._v("優惠碼:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.tempDiscounts.code,expression:"tempDiscounts.code"}],staticClass:"form-control ",attrs:{id:"code"},domProps:{value:t.tempDiscounts.code},on:{input:function(a){a.target.composing||t.$set(t.tempDiscounts,"code",a.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{staticClass:"col-form-label",attrs:{for:"message-text"}},[t._v("到期日:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.tempDiscounts.due_date,expression:"tempDiscounts.due_date"}],staticClass:"form-control",attrs:{type:"date",id:"due_date"},domProps:{value:t.tempDiscounts.due_date},on:{input:function(a){a.target.composing||t.$set(t.tempDiscounts,"due_date",a.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{staticClass:"col-form-label",attrs:{for:"message-text"}},[t._v("百份比:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.tempDiscounts.percent,expression:"tempDiscounts.percent"}],staticClass:"form-control",attrs:{id:"percent"},domProps:{value:t.tempDiscounts.percent},on:{input:function(a){a.target.composing||t.$set(t.tempDiscounts,"percent",a.target.value)}}})]),s("div",{staticClass:"form-group"},[s("div",{staticClass:"form-check"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.tempDiscounts.is_enabled,expression:"tempDiscounts.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"is_enabled","true-value":1,"false-value":0},domProps:{checked:Array.isArray(t.tempDiscounts.is_enabled)?t._i(t.tempDiscounts.is_enabled,null)>-1:t._q(t.tempDiscounts.is_enabled,1)},on:{change:function(a){var s=t.tempDiscounts.is_enabled,e=a.target,i=e.checked?1:0;if(Array.isArray(s)){var n=null,o=t._i(s,n);e.checked?o<0&&t.$set(t.tempDiscounts,"is_enabled",s.concat([n])):o>-1&&t.$set(t.tempDiscounts,"is_enabled",s.slice(0,o).concat(s.slice(o+1)))}else t.$set(t.tempDiscounts,"is_enabled",i)}}}),s("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v(" 是否啟用 ")])])])])]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.updateCoupons}},[t._v("確認")])])])])]),s("div",{staticClass:"modal",attrs:{id:"openDeldiscountModal",tabindex:"-1"}},[s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[t._m(2),s("div",{staticClass:"modal-body"},[s("p",[t._v("優惠名稱:"+t._s(t.tempDiscounts.title))])]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.delDiscount}},[t._v("確定刪掉")])])])])])],1)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",[s("tr",[s("th",{attrs:{width:"150"}},[t._v("名稱")]),s("th",{attrs:{width:"100"}},[t._v("折扣百分比")]),s("th",{attrs:{width:"100"}},[t._v("到期日")]),s("th",{attrs:{width:"80"}},[t._v("是否啟用")]),s("th",{attrs:{width:"80"}},[t._v("編輯")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"modal-header bg-dark text-white"},[s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[s("span",[t._v("新增優惠卷 ")])]),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title"},[t._v("刪除優惠")]),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],n=(s("99af"),s("5530")),o=s("1157"),c=s.n(o),l=s("1799"),r={data:function(){return{discounts:[],tempDiscounts:{},pagination:{},isNew:!1,isLoading:!1}},components:{Pagination:l["a"]},methods:{getDiscounts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=this,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("ningningccn","/admin/coupons?page=").concat(t);a.isLoading=!0,a.$http.get(s).then((function(t){a.isLoading=!1,a.discounts=t.data.coupons,a.pagination=t.data.pagination}))},opendDiscountModal:function(t,a){t?(this.tempDiscounts={},this.isNew=!0):(this.tempDiscounts=Object(n["a"])({},a),this.isNew=!1),c()("#DiscountModal").modal("show")},updateCoupons:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("ningningccn","/admin/coupon"),s="post";t.isLoading=!0,t.isNew||(a="".concat("https://vue-course-api.hexschool.io","/api/").concat("ningningccn","/admin/coupon/").concat(t.tempDiscounts.id),s="put"),t.$http[s](a,{data:t.tempDiscounts}).then((function(a){a.data.success?(c()("#DiscountModal").modal("hide"),t.getDiscounts(),t.isLoading=!1):c()("#DiscountModal").modal("hide")}))},openDel_discountModal:function(t){var a=this;a.tempDiscounts=Object(n["a"])({},t),c()("#openDeldiscountModal").modal("show")},delDiscount:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("ningningccn","/admin/coupon/").concat(t.tempDiscounts.id);t.$http.delete(a).then((function(a){a.data.success&&(t.getDiscounts(),c()("#openDeldiscountModal").modal("hide"),t.tempDiscounts={})}))}},created:function(){this.getDiscounts()}},d=r,u=s("2877"),p=Object(u["a"])(d,e,i,!1,null,null,null);a["default"]=p.exports}}]);
//# sourceMappingURL=chunk-645de311.1b1d0052.js.map