<template>
  <div>
    <div class="form text-white">
      <div class="form-step d-none d-md-flex col-md-4 justify-content-center">1.確認購物車</div>
      <div class="form-step d-none d-md-flex col-md-4 justify-content-center">2.填寫訂單資訊</div>
      <div class="form-step col-10 col-md-4 active">3.完成購買</div>
    </div>
    <div>
      <div class="my-5 row justify-content-center">
        <form class="col-12" @submit.prevent="payOrder">
          <table class="table text-white">
            <thead>
              <!-- <th width="20%"></th> -->
              <th width="35%">品名</th>
              <th class="text-center">品名/數量</th>
              <th>單價</th>
            </thead>
            <tbody>
              <tr v-for="item in order.products" :key="item.id">
                <td class="align-middle">
                  <div>
                    <img class="img-fluid" :src="item.product.imageUrl" alt="product_imageUrl">
                  </div>
                </td>
                <td class="align-middle text-center">
                  <p>{{ item.product.title }}</p>
                  {{ item.qty }} {{ item.product.unit }}
                </td>
                <td class="align-middle text-right">{{ item.final_total | currency }}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="2" class="text-right">總計</td>
                <td class="text-right text-success">{{ order.total | currency }}</td>
              </tr>
            </tfoot>
          </table>
          <table class="table text-white text-center">
            <tbody>
              <tr>
                <th width="40%">Email</th>
                <td>{{ order.user.email }}</td>
              </tr>
              <tr>
                <th>姓名</th>
                <td>{{ order.user.name }}</td>
              </tr>
              <tr>
                <th>收件人電話</th>
                <td>{{ order.user.tel }}</td>
              </tr>
              <tr>
                <th>收件人地址</th>
                <td>{{ order.user.address }}</td>
              </tr>
              <tr>
                <th>付款狀態</th>
                <td>
                  <span v-if="!order.is_paid" class="text-danger">尚未付款</span>
                  <span v-else class="text-success">付款完成</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="text-right" v-if="order.is_paid === false">
            <button type="submit" class="btn btn-secondary">
              確認付款去
            </button>
          </div>
          <div class="text-center text-white"
            v-if="order.is_paid === true">
            <h1>付款成功</h1>
            <h4 class="mt-3">開始享受你的電影吧！</h4>
            <h6 class="mt-5">或是...</h6>
            <button type="button" class="btn btn-secondary mt-4"
              @click="moveToProducts">
              購買更多電影！
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      orderId: '',
      order: {
        user: {},
      },
    };
  },
  methods: {
    getOrderId() {
      const vm = this;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/order/${vm.orderId}`;
      vm.$store.dispatch('updateLoading', true);
      vm.$http.get(api).then((response) => {
        if (response.data.success) {
          vm.order = response.data.order;
          vm.$store.dispatch('updateLoading', false);
        }
      });
    },
    payOrder() {
      const vm = this;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/pay/${vm.orderId}`;
      vm.$http.post(api).then((response) => {
        if (response.data.success) {
          vm.getOrderId();
        }
      });
    },
    moveToProducts() {
      this.$router.push('/coustomer_Product/category');
    },
  },
  created() {
    this.orderId = this.$route.params.orderId;
    // params 網址上的orderid
    this.getOrderId();
  },
};
</script>
<style lang='scss'>
@import '~@/assets/scss/cart';
</style>
