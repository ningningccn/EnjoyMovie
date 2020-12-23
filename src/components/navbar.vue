<template>
  <div class="navbar navbar-expand-md p-0 sticky-top navbar-transparent"
    :class="{'bgc':scrollPostion>30}">
    <nav class="navbar container-fluid d-flex justify-conext-between ">
      <router-link to="/" class="px-4">
        <img src="../assets/Ning_LogoW.png" alt="Logo" width="60px">
      </router-link>
      <button
        class="navbar-toggler text-white"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarSupportedContent">
        <ul class="navbar-nav  mr-md-auto ">
          <li class="nav-item ">
            <router-link
              to="/coustomer_Product/category"
              class="nav-link px-4">
              所有電影
            </router-link>
          </li>
        </ul>
        <!-- 右邊 -->
        <ul class="navbar-nav navbar-right pl-4">
          <li>
            <router-link
              to="/login"
              class="nav-link p-3">
              <span><i class="fas fa-user"></i></span>
            </router-link>
          </li>
          <!-- 購物車 -->
          <li>
            <div class='dropdown'>
              <a href="#" class="btn-shop-cart navbar-text p-3"
              data-toggle="dropdown"    aria-expanded="false">
                <span><i aria-hidden="true" class="fas fa-shopping-cart"></i></span>
                <span class="badge badge-pill badge-danger shop-cart"
                v-if="cartProducts.carts && cartProducts.carts.length>0">
                  {{ cartProducts.carts.length }}
                </span>
              </a>
              <div class="dropdown-menu dropdown-menu-right blur"
                aria-labelledby="dropdownMenuButton"
                style="min-width:400px; padding:50px 30px">
                <div class="cart">
                  <table class="table"
                    v-if="cartProducts.carts && cartProducts.carts.length>0">
                    <thead >
                      <tr>
                        <td width="200" style="text-align:center">商品名稱</td>
                        <td width="100">數量</td>
                        <td width="100">單價</td>
                        <td width="50"></td>
                      </tr>
                    </thead>
                    <tbody v-for="item in cartProducts.carts" :key="item.id">
                      <tr>
                        <td style="text-align:center">{{ item.product.title }}</td>
                        <td>{{ item.qty }}{{ item.product.unit }}</td>
                        <td>{{ item.product.price | currency }}</td>
                        <td>
                          <div class="cart_del_btn" style="cursor:pointer"
                            @click.prevent="delCartItem(item.id)">
                            <i class="far fa-window-close"></i>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="text-center mb-5"
                    v-if="cartProducts.carts && cartProducts.carts.length === 0">
                      暫時沒有商品
                  </div>
                  <div v-if="cartProducts.carts && cartProducts.carts.length > 0">
                    <router-link to="/cart/checkproduct"
                      class="btn btn-dark w-100 p-2 float-right
                      btn-block router-link-exact-avtive
                      router-link-active">
                      前往結帳
                    </router-link>
                  </div>
                  <div v-if="cartProducts.carts && cartProducts.carts.length === 0">
                    <router-link to="/coustomer_Product/category"
                      class="btn btn-dark w-100 p-2 float-right
                      btn-block router-link-exact-avtive
                      router-link-active">
                      繼續購物
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      scrollPostion: null,
      background_color: 'rgba (0, 0, 0, 0.5)',
    };
  },
  methods: {
    updateScroll() {
      this.scrollPostion = window.scrollY;
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

<style scoped>
.navbar-nav a{
  font-size: 16px;
  text-decoration: none;
  color:#fff;
}
.navbar-login a{
  font-size: 20px;
}
.logo img{
  width: 100%;
  color: #fff;
}
.bgc {
  background-color: rgba(0, 0, 0, 0.5);
}
/* 購物車 */
.btn-shop-cart{
  background-color: rgba(250, 250, 250, 0);
  position: relative;
}
.shop-cart{
  position: absolute;
  top:3px;
  right:-2px;
  font-size: 13px;
};
.dropdown-menu{
  padding:20px ;
  border-radius: 15px;
  backdrop-filter: blur(60px);
  background-color: rgba(255, 255, 255, 0.7);
}
.blur{
  backdrop-filter: blur(20px);
  background-color: rgba(0, 0, 0, 0.5);
}
.dropdown-menu{
  padding:20px ;
  border-radius: 15px;
  backdrop-filter: blur(60px);
  background-color: rgba(255, 255, 255, 0.7);
}

</style>
