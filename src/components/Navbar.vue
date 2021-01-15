<template>
  <header>
    <nav
      class="navbar navbar-expand-md navbar-dark fixed-top nav"
      :class="{'bgcY':scrollPostionY>30}">
      <div
        class="container-fluid">
        <button
          class='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          aria-haspopup="menu">
          <span class='navbar-toggler-icon'>
            <i class="fas fa-bars" style="color:#fff; font-size:28px;"></i>
          </span>
        </button>
        <router-link
          to="/" class="navbar-brand order-0" href="#">
          <img src="@/assets/Image/Logo/EnjoyMovie.png" alt='Logo' width='60px'>
        </router-link>
        <div
          class="collapse navbar-collapse justify-content-end order-2 "
          id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link
                class="nav-link nav-text"
                href="#"
                to="/coustomer_Product/category">
                所有電影
              </router-link>
            </li>
            <li class="nav-item ">
              <router-link
                class="nav-link nav-text"
                href="#" to="/login">
                登入
              </router-link>
            </li>
          </ul>
        </div>
        <!-- 購物車 -->
        <div class='dropdown order-md-2'>
          <a href='#'
            class='btn-shop-cart navbar-text p-3 '
            data-toggle='dropdown'
            aria-expanded='false'
            aria-haspopup="true">
            <span><i aria-hidden='true' class='fas fa-shopping-cart'></i></span>
            <span class='badge badge-pill badge-danger shop-cart'
            v-if='cartProducts.carts && cartProducts.carts.length>0'>
              {{ cartProducts.carts.length }}
            </span>
          </a>
          <div class='dropdown-menu dropdown-menu-right blur'
            aria-labelledby='dropdownMenuButton'>
            <div class='cart'>
              <table class='table'
                v-if='cartProducts.carts && cartProducts.carts.length>0'>
                <thead>
                  <tr>
                    <td class='text-align-center' width="100px">商品名稱</td>
                    <td nowrap="nowrap" width="20%">數量</td>
                    <td width="15%">單價</td>
                    <td width="5%"></td>
                  </tr>
                </thead>
                <tbody v-for='item in cartProducts.carts' :key='item.id'>
                  <tr>
                    <td class='text-align-center ellipsis'>
                      {{ item.product.title }}
                    </td>
                    <td>{{ item.qty }}{{ item.product.unit }}</td>
                    <td>{{ item.product.price | currency }}</td>
                    <td>
                      <div class='cart_del_btn'
                        @click.prevent='delCartItem(item.id)'>
                        <i class='far fa-window-close'></i>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class='text-center mb-5'
                v-if='cartProducts.carts && cartProducts.carts.length === 0'>
                  暫時沒有商品
              </div>
              <div v-if='cartProducts.carts && cartProducts.carts.length > 0'>
                <router-link to='/cart/checkproduct'
                  class='btn btn-dark w-100 p-2 float-right
                  btn-block router-link-exact-avtive
                  router-link-active'>
                  前往結帳
                </router-link>
              </div>
              <div v-if='cartProducts.carts && cartProducts.carts.length === 0'>
                <router-link to='/coustomer_Product/category'
                  class='btn btn-dark w-100 p-2 float-right
                  btn-block router-link-exact-avtive
                  router-link-active'>
                  繼續購物
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      scrollPostionY: null,
      scrollPostionX: null,
      background_color: 'rgba (0, 0, 0, 0.5)',
    };
  },
  methods: {
    updateScroll() {
      this.scrollPostionY = window.scrollY;
    },
    delCartItem(item) {
      this.$store.dispatch('cartModules/delCartItem', item);
    },
    ...mapActions('cartModules', ['getCart']),
  },
  computed: {
    ...mapGetters('cartModules', ['cartProducts']),
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
  created() {
    this.getCart();
  },

};
</script>

<style lang='scss'>
@import '~@/assets/scss/components/navbar.scss';
</style>
