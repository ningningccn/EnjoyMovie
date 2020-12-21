(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7537b568"],{4785:function(e,t,a){"use strict";a("c9e2")},"4fd6":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Form")],1)},r=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._m(0),a("div",{staticClass:"form d-flex justify-content-center mt-5 text-white"},[a("form",{staticClass:"col-md-6 ",on:{submit:function(t){return t.preventDefault(),e.createOrder(t)}}},[a("div",{staticClass:"form-group"},[e._m(1),a("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"},{name:"model",rawName:"v-model",value:e.form.user.email,expression:"form.user.email"}],staticClass:"form-control",class:{"is-invalid":e.errors.has("email")},attrs:{type:"email",name:"email",id:"useremail",placeholder:"請輸入 Email"},domProps:{value:e.form.user.email},on:{input:function(t){t.target.composing||e.$set(e.form.user,"email",t.target.value)}}}),e.errors.has("email")?a("span",{staticClass:"text-danger"},[e._v(" "+e._s(e.errors.first("email"))+" ")]):e._e()]),a("div",{staticClass:"form-group "},[e._m(2),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.user.name,expression:"form.user.name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":e.errors.has("name")},attrs:{type:"text",name:"name",id:"username",placeholder:"輸入姓名"},domProps:{value:e.form.user.name},on:{input:function(t){t.target.composing||e.$set(e.form.user,"name",t.target.value)}}}),e._v(" "),e.errors.has("name")?a("span",{staticClass:"text-danger"},[e._v("姓名必須輸入")]):e._e()]),a("div",{staticClass:"form-group"},[e._m(3),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.user.tel,expression:"form.user.tel"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":e.errors.has("tel")},attrs:{type:"tel",name:"tel",id:"usertel",placeholder:"請輸入電話"},domProps:{value:e.form.user.tel},on:{input:function(t){t.target.composing||e.$set(e.form.user,"tel",t.target.value)}}}),e.errors.has("tel")?a("span",{staticClass:"text-danger"},[e._v("電話必須輸入 "),a("small",{staticClass:"text-danger"},[e._v("(必需填寫)")])]):e._e()]),a("div",{staticClass:"form-group"},[e._m(4),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.user.address,expression:"form.user.address"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":e.errors.has("address")},attrs:{type:"text",name:"address",id:"useraddress",placeholder:"請輸入地址"},domProps:{value:e.form.user.address},on:{input:function(t){t.target.composing||e.$set(e.form.user,"address",t.target.value)}}}),e.errors.has("address")?a("span",{staticClass:"text-danger"},[e._v("地址欄位不得留空")]):e._e()]),a("div",{staticClass:"form-group"},[e._m(5),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{name:"",id:"comment",cols:"30",rows:"10"},domProps:{value:e.form.message},on:{input:function(t){t.target.composing||e.$set(e.form,"message",t.target.value)}}})]),a("div",{staticClass:"d-flex justify-content-between mt-3"},[a("button",{staticClass:"btn btn-danger",on:{click:e.backStep}},[e._v("上一步")]),a("button",{staticClass:"btn btn-danger"},[e._v("送出訂單")])])])])])},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form text-white"},[a("div",{staticClass:"form-step "},[e._v("1.確認購物車")]),a("div",{staticClass:"form-step active"},[e._v("2.填寫訂單資訊")]),a("div",{staticClass:"form-step"},[e._v("3.完成購買")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{attrs:{for:"useremail"}},[e._v("Email "),a("small",{staticClass:"text-danger"},[e._v("(必需填寫)")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{attrs:{for:"username"}},[e._v("收件人姓名: "),a("small",{staticClass:"text-danger"},[e._v("(必需填寫)")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{attrs:{for:"usertel"}},[e._v("收件人電話 "),a("small",{staticClass:"text-danger"},[e._v("(必需填寫)")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{attrs:{for:"useraddress"}},[e._v("收件人地址 "),a("small",{staticClass:"text-danger"},[e._v("(必需填寫)")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{attrs:{for:"comment"}},[e._v("留言 "),a("small",{staticClass:"text-success"},[e._v("(此欄位非必填)")])])}],o=(a("99af"),{data:function(){return{form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{createOrder:function(){var e=this,t="".concat("https://vue-course-api.hexschool.io","/api/").concat("ningningccn","/order"),a=e.form;e.$store.dispatch("updateLoading",!0),e.$validator.validate().then((function(s){s&&e.$http.post(t,{data:a}).then((function(t){t.data.success?(e.$router.push("checkout/".concat(t.data.orderId)),e.$store.dispatch("updateLoading",!1)):(e.$bus.$emit("messsage:push",t.data.message,"danger"),e.$store.dispatch("updateLoading",!1))}))}))},backStep:function(){this.$router.push("checkproduct")}}}),l=o,m=(a("4785"),a("2877")),c=Object(m["a"])(l,i,n,!1,null,"d5001c84",null),u=c.exports,d={components:{Form:u}},v=d,f=Object(m["a"])(v,s,r,!1,null,null,null);t["default"]=f.exports},c9e2:function(e,t,a){}}]);
//# sourceMappingURL=chunk-7537b568.f318ee68.js.map