import Vue from 'vue';
import Vuex from 'vuex';
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
    },
  },
  // 行為
  actions: {
    updateLoading(context, status) {
      context.commit('LOADING', status);
    },
  },
  getters: {},
  modules: {
    productModules,
    cartModules,
  },
});
