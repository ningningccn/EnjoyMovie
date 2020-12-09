import axios from 'axios';

export default {
  // state ＝區域變數
  // 其他都是 全域變數
  namespaced: true, // 把有都變成區域變數
  state: {
    products: [],
    allproducts: [],
    categories: [],
    pagination: {},
    tempCategory: '', // 選分類
    filterCategory: {},
  },
  // 狀態
  mutations: {
    PRODUCTS(state, payload) {
      state.products = payload;
      state.filterCategory = payload;
    },
    CATEGORIES(state, payload) {
      const categories = new Set();
      payload.forEach((item) => {
        categories.add(item.category);
      });
      state.categories = Array.from(categories);
    },
    PAGINATION(state, page) {
      state.pagination = page;
    },
    ALLPRODUCTS(state, data) {
      state.allproducts = data;
    },
    TEMPCATEGORY(state, category) {
      if (category === '') {
        state.tempCategory = category;
        state.filterCategory = state.products;
      } else {
        state.tempCategory = category;
        state.filterCategory = state.allproducts.filter((item) => item.category === category);
      }
      console.log(state.filterCategory);
      // state.tempCategory = category;
      // console.log(state.tempCategory);
    },
  },
  actions: {
    updateLoading(context, status) {
      context.commit('LOADING', status);
    },
    getProduct(context, page = 1) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/products?page=${page}`;
      context.commit('LOADING', true, { root: true }); // 切換loading效果
      axios.get(api).then((response) => {
        context.commit('PRODUCTS', response.data.products);
        context.commit('PAGINATION', response.data.pagination);
        context.commit('CATEGORIES', response.data.products);
        console.log('取得產品列表', response.data);
        context.commit('LOADING', false, { root: true });
      });
    },
    getAllProducts(context) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
      console.log(api);
      axios.get(api).then((response) => {
        console.log(response);
        context.commit('ALLPRODUCTS', response.data.products);
        console.log('取得產品列表123', response.data);
      });
    },
    // getProduct_detail(context, id) {
    //   // this.$store.dispatch('updateLoading', true);
    //   axios.get(api).then((response) => {
    //     // if (response.data.success) {
    //     //   vm.product = response.data.product;
    //     //   vm.product.num = 1;
    //     //   $('#productModal').modal('show');
    //     //   this.$store.dispatch('updateLoading', false);
    //     //   console.log('done');
    //     // } else {
    //     //   console.log('eorro');
    //     // }
    //   });
    // },
    gettempCategory(context, category) {
      context.commit('TEMPCATEGORY', category);
    },
  },
  getters: {
    categories: (state) => state.categories,
    products: (state) => state.products,
    pagination: (state) => state.pagination,
    allproducts: (state) => state.allproducts,
    tempCategory: (state) => state.tempCategory,
    filterCategory: (state) => state.filterCategory,
    // categories(state) {
    //   return state.categories;
    // },
  },
  modules: {
  },
};
