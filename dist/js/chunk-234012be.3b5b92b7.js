(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-234012be"],{1707:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(s){t.isLoading=s}}}),a("div",{staticClass:"text-right mt-4"},[a("button",{staticClass:"btn btn-primary",on:{click:function(s){return t.opendDiscountModal(!0)}}},[t._v("建立新的優惠卷")])]),a("table",{staticClass:"table mt-4 text-white"},[t._m(0),a("tbody",t._l(t.discounts,(function(s){return a("tr",{key:s.id},[a("td",[t._v(t._s(s.title))]),a("td",[t._v(t._s(s.percent))]),a("td",[t._v(t._s(s.due_date))]),a("td",[s.is_enabled?a("span",{staticClass:"text-success"},[t._v("啟用")]):a("span",[t._v("未啟用")])]),a("td",[a("div",{staticClass:"btn-group"},[a("button",{staticClass:"btn btn-outline-primary btn-sm",on:{click:function(a){return t.opendDiscountModal(!1,s)}}},[t._v("編輯 ")]),a("button",{staticClass:"btn btn-outline-danger btn-sm",on:{click:function(a){return t.openDel_discountModal(s)}}},[t._v("刪除 ")])])])])})),0)]),a("Pagination",{attrs:{pagination:t.pagination},on:{event:t.getDiscounts}}),a("div",{staticClass:"modal fade",attrs:{id:"DiscountModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(1),a("div",{staticClass:"modal-body"},[a("form",[a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-form-label",attrs:{for:"recipient-name"}},[t._v("名稱:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempDiscounts.title,expression:"tempDiscounts.title"}],staticClass:"form-control",attrs:{type:"text",id:"title"},domProps:{value:t.tempDiscounts.title},on:{input:function(s){s.target.composing||t.$set(t.tempDiscounts,"title",s.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-form-label",attrs:{for:"message-text"}},[t._v("優惠碼:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempDiscounts.code,expression:"tempDiscounts.code"}],staticClass:"form-control ",attrs:{id:"code"},domProps:{value:t.tempDiscounts.code},on:{input:function(s){s.target.composing||t.$set(t.tempDiscounts,"code",s.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-form-label",attrs:{for:"message-text"}},[t._v("到期日:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempDiscounts.due_date,expression:"tempDiscounts.due_date"}],staticClass:"form-control",attrs:{type:"date",id:"due_date"},domProps:{value:t.tempDiscounts.due_date},on:{input:function(s){s.target.composing||t.$set(t.tempDiscounts,"due_date",s.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-form-label",attrs:{for:"message-text"}},[t._v("百份比:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempDiscounts.percent,expression:"tempDiscounts.percent"}],staticClass:"form-control",attrs:{id:"percent"},domProps:{value:t.tempDiscounts.percent},on:{input:function(s){s.target.composing||t.$set(t.tempDiscounts,"percent",s.target.value)}}})]),a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempDiscounts.is_enabled,expression:"tempDiscounts.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"is_enabled","true-value":1,"false-value":0},domProps:{checked:Array.isArray(t.tempDiscounts.is_enabled)?t._i(t.tempDiscounts.is_enabled,null)>-1:t._q(t.tempDiscounts.is_enabled,1)},on:{change:function(s){var a=t.tempDiscounts.is_enabled,e=s.target,i=e.checked?1:0;if(Array.isArray(a)){var n=null,o=t._i(a,n);e.checked?o<0&&t.$set(t.tempDiscounts,"is_enabled",a.concat([n])):o>-1&&t.$set(t.tempDiscounts,"is_enabled",a.slice(0,o).concat(a.slice(o+1)))}else t.$set(t.tempDiscounts,"is_enabled",i)}}}),a("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v(" 是否啟用 ")])])])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.updateCoupons}},[t._v("確認")])])])])]),a("div",{staticClass:"modal",attrs:{id:"openDeldiscountModal",tabindex:"-1"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[t._m(2),a("div",{staticClass:"modal-body"},[a("p",[t._v("優惠名稱:"+t._s(t.tempDiscounts.title))])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.delDiscount}},[t._v("確定刪掉")])])])])])],1)},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("thead",[a("tr",[a("th",{attrs:{width:"150"}},[t._v("名稱")]),a("th",{attrs:{width:"100"}},[t._v("折扣百分比")]),a("th",{attrs:{width:"100"}},[t._v("到期日")]),a("th",{attrs:{width:"80"}},[t._v("是否啟用")]),a("th",{attrs:{width:"80"}},[t._v("編輯")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"modal-header bg-dark text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v("新增優惠卷 ")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v("刪除優惠")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],n=(a("99af"),a("1157")),o=a.n(n),c=a("6407"),l={data:function(){return{discounts:[],tempDiscounts:{},pagination:{},isNew:!1,isLoading:!1}},components:{Pagination:c["a"]},methods:{getDiscounts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("ningningccn","/admin/coupons?page=").concat(t),a=this;a.isLoading=!0,this.$http.get(s).then((function(t){console.log(t.data),a.isLoading=!1,a.discounts=t.data.coupons,a.pagination=t.data.pagination}))},opendDiscountModal:function(t,s){if(t)this.tempDiscounts={},this.isNew=!0;else{var a={};this.tempDiscounts=Object.assign(a,s),this.isNew=!1}o()("#DiscountModal").modal("show")},updateCoupons:function(){var t="".concat("https://vue-course-api.hexschool.io","/api/").concat("ningningccn","/admin/coupon"),s="post",a=this;a.isLoading=!0,this.isNew||(t="".concat("https://vue-course-api.hexschool.io","/api/").concat("ningningccn","/admin/coupon/").concat(this.tempDiscounts.id),s="put"),console.log(a.tempDiscounts),this.$http[s](t,{data:a.tempDiscounts}).then((function(t){console.log(t.data),t.data.success?(o()("#DiscountModal").modal("hide"),a.getDiscounts(),a.isLoading=!1):(o()("#DiscountModal").modal("hide"),console.log("增新或修改失敗"))}))},openDel_discountModal:function(t){var s=this,a={};s.tempDiscounts=Object.assign(a,t),o()("#openDeldiscountModal").modal("show")},delDiscount:function(){var t=this,s=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("ningningccn","/admin/coupon/").concat(s.tempDiscounts.id);this.$http.delete(a).then((function(a){a.data.success&&(console.log("已經成功刪掉"),t.getDiscounts(),o()("#openDeldiscountModal").modal("hide"),s.tempDiscounts={})}))}},created:function(){this.getDiscounts()}},r=l,d=a("2877"),u=Object(d["a"])(r,e,i,!1,null,null,null);s["default"]=u.exports},5933:function(t,s,a){},6407:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination justify-content-center"},[a("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_pre}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(s){return s.preventDefault(),t.getpage(t.pagination.current_page-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pagination.total_pages,(function(s){return a("li",{key:s,staticClass:"page-item",class:{active:t.pagination.current_page===s}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.getpage(s)}}},[t._v(" "+t._s(s))])])})),a("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_next}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(s){return s.preventDefault(),t.getpage(t.pagination.current_page+1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])])},i=[],n={props:["pagination"],methods:{getpage:function(t){this.$emit("event",t)}}},o=n,c=(a("89a1"),a("2877")),l=Object(c["a"])(o,e,i,!1,null,"555c9af1",null);s["a"]=l.exports},"89a1":function(t,s,a){"use strict";a("5933")}}]);
//# sourceMappingURL=chunk-234012be.3b5b92b7.js.map