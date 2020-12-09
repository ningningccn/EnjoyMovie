import axios from 'axios';

export default {
  namespaced: true,
  state: {
    cartProducts: [],
  },
  mutations: {
    CARTPRODUCTS(state, payload) {
      state.cartProducts = payload;
    },
  },
  actions: {
    getCart(context) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      context.commit('LOADING', true, { root: true });
      axios.get(api).then((response) => {
        console.log(response.data.data);
        context.commit('CARTPRODUCTS', response.data.data);
        context.commit('LOADING', false, { root: true });
        console.log('已取得cart資料');
      });
    },
    delCartItem(context, id) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`;
      context.commit('LOADING', true, { root: true });
      axios.delete(api).then((response) => {
        if (response.data.success) {
          console.log(response.data.message);
          context.dispatch('getCart');
          context.commit('LOADING', false, { root: true });
        } else {
          context.commit('LOADING', false, { root: true });
          console.log(response.data.message);
        }
      });
    },
    addToCart(context, { id, qty }) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      context.commit('LOADING', true, { root: true });
      const cart = {
        product_id: id,
        qty,
      };
      axios.post(api, { data: cart }).then((response) => {
        if (response.data.success) {
          context.dispatch('getCart');
          console.log(context);
          context.commit('LOADING', false, { root: true });
        }
        context.commit('LOADING', false, { root: true });
      });
    },

  },
  getters: {
    cartProducts: (state) => state.cartProducts,
  },
  modules: {},
};
