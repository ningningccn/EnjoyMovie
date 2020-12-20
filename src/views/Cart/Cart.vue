<template>
  <div>
    <Alert/>
    <Navbar/>
    <Banner/>
    <div class="form text-white">
      <div class="form-step active">1.確認購物車</div>
      <div class="form-step">2.填寫訂單資訊</div>
      <div class="form-step">3.送出訂單</div>
    </div>
    <div class="container">
      <Cart
        :cartProductSD="cartProduct"
        @reflash="getCart"> <!--傳資料 -->
      </Cart>
    <button type="button" class='btn btn-secondary mx-auto'>下一步</button>
    </div>
  </div>
</template>

<script>
import Alert from '@/components/AlertMessage.vue';
import Banner from '@/components/Banner/discount.vue';
import Navbar from '@/components/navbar.vue';
import Cart from '@/components/cart.vue';
// import Form from '@/components/customer_form.vue';

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
    Cart,
  },
  methods: {
    getCart() {
      const vm = this;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      vm.$http.get(api).then((response) => {
        vm.cartProduct = response.data.data;
      });
    },
  },
  created() {
    this.getCart();
  },
};
</script>
<style scoped>
.form {
  display: flex;
  justify-content: center;
}
.form-step {
  margin: 30px 0;
  padding: 15px;
  font-size: 16px;
}
.form-step.active {
  background-color: #ff5f00;
  border-radius: 10px;
  color: #fff
}
</style>
