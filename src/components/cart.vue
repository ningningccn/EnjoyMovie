<template>
  <div class="cart">
    <table class="table mt-4 text-white">
      <thead>
        <tr>
          <td style="width:20%">產品</td>
          <td></td>
          <td style="width:15%">數量</td>
          <td style="width:15%">單價</td>
        </tr>
      </thead>
      <tbody v-for="item in cartProducts.carts " :key="item.id">
        <tr>
          <td>
            <img :src="item.product.imageUrl" alt=""
            class="img-fluid">
          </td>
          <td style="vertical-align:middle"> <!--商品名稱-->
            <div >
              <h4>{{ item.product.title }}</h4>
              <span class="cart-category"
                style="background-color:red;padding:4px; border-radius:5px">
                {{ item.product.category }}
              </span>
            </div>
            <div class="text-success" v-if="item.coupon">已套用優惠卷</div>
          </td>
          <td style="vertical-align: middle;"> <!--數量-->
            {{ item.qty }} {{ item.product.unit }}
          </td>
          <!-- 價錢 -->
          <td class="text-right h6" style="vertical-align: middle;">
            <div class="del_btn py-3" style="cursor:pointer;"
              @click.prevent="delCartItem(item.id)">
              <i class="fas fa-times"></i>
            </div>
            <del
              v-if="item.final_total !== item.total">
              {{ item.product.price | currency }}
            </del>
            <div v-if="item.final_total === item.total">
              {{ item.product.price | currency }}
            </div>
            <div class="text-success py-3" v-if="item.final_total !== item.total" >
              {{ item.final_total | currency }}
            </div>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td width='80'></td>
          <td></td>
          <td width="200">總計</td>
          <td width="200" class="text-right"> {{ cartProducts.total | currency }}</td>
        </tr>
        <tr v-if=" cartProducts.total !== cartProducts.final_total">
          <td width='80'></td>
          <td></td>
          <td width="200">折扣價</td>
          <td width="200" class="text-right text-success">
            {{ cartProducts.final_total | currency }}
          </td>
        </tr>
      </tfoot>
    </table>
    <div class="input-group mb-3 input-group-sm">
      <input type="text" class="form-control"
        v-model="coupon_code"
        placeholder="請輸入優惠碼">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button"
        @click.prevent="addCouponCode" >
          套用優惠碼
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  // props: ['cartProductSD'],
  data() {
    return {
      coupon_code: '',
    };
  },
  methods: {
    delCartItem(item) {
      this.$store.dispatch('cartModules/delCartItem', item);
    },
    addCouponCode() {
      const vm = this;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`;
      const coupon = {
        code: vm.coupon_code,
      };
      vm.$http.post(api, { data: coupon }).then((response) => {
        if (response.data.success) {
          vm.getCart();
        }
      });
    },
    ...mapActions('cartModules', ['getCart']),
    // 拿到getCart Function 的語法
  },
  computed: {
    ...mapGetters('cartModules', ['cartProducts']),
  },
  created() {
    this.getCart();
  },
};

</script>
