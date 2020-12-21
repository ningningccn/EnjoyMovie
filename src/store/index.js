import Vue from 'vue';
import Vuex from 'vuex';
// import axios from 'axios';
import productModules from './products';
import cartModules from './cart';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    isLoading: false,
  },
  // 狀態
  mutations: {
    LOADING(state, status) {
      state.isLoading = status;
    },
    TEMPCATEGORY(state, payload) {
      state.tempCategory = payload;
      // console.log(state.tempCategory);
    },
    // PRODUCTS(state, payload) {
    //   state.products = payload;
    // },
    // CATEGORIES(state, payload) {
    //   const categories = new Set();
    //   payload.forEach((item) => {
    //     categories.add(item.category);
    //   });
    //   state.categories = Array.from(categories);
    // },
    // PAGINATION(state, payload) {
    //   state.pagination = payload;
    // },
  },
  // 行為
  actions: {
    updateLoading(context, status) {
      context.commit('LOADING', status);
    },
  //   getProduct(context, page = 1) {
  //     const api = `${process.env.VUE_APP_API}/api
  // /${process.env.VUE_APP_CUSTOMPATH}/products?page=${page}`;
  //     // console.log(page);
  //     context.commit('LOADING', true); // 切換loading效果
  //     axios.get(api).then((response) => {
  //       context.commit('PRODUCTS', response.data.products);
  //       context.commit('PAGINATION', response.data.pagination);
  //       context.commit('CATEGORIES', response.data.products);
  //       console.log('取得產品列表', response.data);
  //       context.commit('LOADING', false);
  //       // vm.getCategories();
  //       // vm.$store.dispatch('updateLoading', false);
  //     });
  //   },
  // },
  // getters: {
  //   categories(state) {
  //     return state.categories;
  //   },
  //   products(state) {
  //     return state.products;
  //   },
  //   pagination(state) {
  //     return state.pagination;
  //   },
  },
  getters: {},
  modules: {
    productModules,
    cartModules,
  },
});
