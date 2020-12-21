<template>
  <div>
    <Alert/>
    <Navbar/>
    <Banner/>
    <div class="container">
      <router-view></router-view>
      <!-- <Cart
        :cartProductSD="cartProduct"
        @reflash="getCart"> --> <!--傳資料 -->
      <!-- </Cart> -->
    </div>
  </div>
</template>

<script>
import Alert from '@/components/AlertMessage.vue';
import Banner from '@/components/Banner/discount.vue';
import Navbar from '@/components/navbar.vue';

export default {
  data() {
    return {
      cartProduct: [],
      message: '',
    };
  },
  components: {
    Alert,
    Navbar,
    Banner,
  },
  // methods: {
  //   getCart() {
  //     const vm = this;
  //     const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
  //     vm.$http.get(api).then((response) => {
  //       vm.cartProduct = response.data.data;
  //     });
  //   },
  // },
  // created() {
  //   this.getCart();
  // },
};
</script>
