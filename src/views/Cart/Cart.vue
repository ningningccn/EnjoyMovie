<template>
  <div>
    <Navbar/>
    <Banner/>
    <div class="container">
      <Cart
        :cartProductSD="cartProduct"
        @reflash="getCart"> <!--傳資料 -->
      </Cart>
      <Form ></Form>
    </div>

  </div>
</template>

<script>
import Banner from '@/components/Banner/discount.vue';
import Navbar from '@/components/navbar.vue';
import Cart from '@/components/cart.vue';
import Form from '@/components/customer_form.vue';

export default {
  data() {
    return {
      cartProduct: [],
      message: '',
    };
  },
  components: {
    Navbar,
    Banner,
    Cart,
    Form,
  },
  methods: {
    getCart() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      const vm = this;
      this.$http.get(api).then((response) => {
        console.log(response.data.data);
        vm.cartProduct = response.data.data;
      });
    },
  },
  created() {
    this.getCart();
  },
};
</script>
