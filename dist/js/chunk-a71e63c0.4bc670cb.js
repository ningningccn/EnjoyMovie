(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a71e63c0"],{1799:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination justify-content-center"},[a("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_pre}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.getpage(t.pagination.current_page-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pagination.total_pages,(function(e){return a("li",{key:e,staticClass:"page-item",class:{active:t.pagination.current_page===e}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.getpage(e)}}},[t._v(" "+t._s(e)+" ")])])})),a("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_next}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.getpage(t.pagination.current_page+1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])])},c=[],n={props:["pagination"],methods:{getpage:function(t){this.$emit("event",t)}}},s=n,r=(a("d0c0"),a("2877")),o=Object(r["a"])(s,i,c,!1,null,"e19a87d0",null);e["a"]=o.exports},"4db9":function(t,e,a){},d0c0:function(t,e,a){"use strict";a("4db9")},dbac:function(t,e,a){"use strict";a("f35c")},f35c:function(t,e,a){},fc83:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[""===t.tempCategory?a("h2",{staticClass:"text-white"},[t._v("所有電影")]):t._e(),"動作"===t.tempCategory?a("h2",{staticClass:"text-white"},[t._v("動作類")]):t._e(),"劇情"===t.tempCategory?a("h2",{staticClass:"text-white"},[t._v("劇情類")]):t._e(),"愛情"===t.tempCategory?a("h2",{staticClass:"text-white"},[t._v("愛情類")]):t._e(),"動畫"===t.tempCategory?a("h2",{staticClass:"text-white"},[t._v("動畫類")]):t._e(),a("Card"),""===t.tempCategory?a("Pagination",{attrs:{pagination:t.pagination},on:{event:t.getProduct}}):t._e()],1)},c=[],n=(a("99af"),a("5530")),s=a("1157"),r=a.n(s),o=a("1799"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row"},t._l(t.filterCategory,(function(e){return a("div",{key:e.id,staticClass:"btn col-md-6 col-lg-4 mb-4"},[a("div",{staticClass:"movie-card mt-4",on:{click:function(a){return a.preventDefault(),t.product_detail(e.id)}}},[a("div",{staticClass:"card-img",style:{backgroundImage:"url("+e.imageUrl+")"}}),a("div",{staticClass:"card-mask"},[a("div",{staticClass:"card-title"},[t._v(" "+t._s(e.title)+" ")])]),a("div",{staticClass:"movie_category"},[t._v(" "+t._s(e.category)+" ")])])])})),0)])},u=[],d=a("2f62"),p={props:["item"],methods:{product_detail:function(t){this.$router.push("/product_detail/".concat(t))}},computed:Object(n["a"])({},Object(d["c"])("productModules",["products","filterCategory"]))},g=p,f=(a("dbac"),a("2877")),v=Object(f["a"])(g,l,u,!1,null,null,null),h=v.exports,_={data:function(){return{OnceProduct:{},status:{loadingItem:""}}},components:{Pagination:o["a"],Card:h},methods:Object(n["a"])({getProduct:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$store.dispatch("productModules/getProduct",t)},getOnceProduct:function(t){var e=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("ningningccn","/product/").concat(t);e.$http.get(a).then((function(t){t.data.success&&(e.OnceProduct=t.data.product,e.OnceProduct.num=1,r()("#productModal").modal("show"))}))}},Object(d["b"])("productModules",["getAllProducts"])),computed:Object(n["a"])({},Object(d["c"])("productModules",["products","categories","pagination","allproducts","tempCategory"])),created:function(){this.getProduct(),this.getAllProducts()}},m=_,C=Object(f["a"])(m,i,c,!1,null,"737fd332",null);e["default"]=C.exports}}]);
//# sourceMappingURL=chunk-a71e63c0.4bc670cb.js.map