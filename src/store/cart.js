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
      const tempCarts = context.state.cartProducts;
      const oncecart = tempCarts.carts.filter((item) => item.product_id === id);
      if (oncecart.length >= 1) {
        context.dispatch('delCartItem', oncecart[0].id);
        const tempProductid = oncecart[0].product_id;
        const tempNums = oncecart[0].qty + qty;
        // console.log(tempNums, tempProductid);
        context.commit('LOADING', true, { root: true });
        const cart = {
          product_id: tempProductid,
          qty: tempNums,
        };
        const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
        context.commit('LOADING', true, { root: true });
        axios.post(api, { data: cart }).then((response) => {
          if (response.data.success) {
            context.dispatch('getCart');
            context.commit('LOADING', false, { root: true });
          } else {
            context.commit('LOADING', false, { root: true });
          }
        });
      } else {
        const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
        context.commit('LOADING', true, { root: true });
        const cart = {
          product_id: id,
          qty,
        };
        axios.post(api, { data: cart }).then((response) => {
          if (response.data.success) {
            context.dispatch('getCart');
            context.commit('LOADING', false, { root: true });
          }
          context.commit('LOADING', false, { root: true });
        });
      }
    },
    changeQty(context, cart) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      context.commit('LOADING', true, { root: true });
      axios.post(api, { data: cart }).then((response) => {
        if (response.data.success) {
          context.dispatch('getCart');
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
