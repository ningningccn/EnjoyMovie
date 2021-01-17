<template>
  <div class="cart">
    <div class="form">
      <div class="form-step col-10 col-md-4 active">1.確認購物車</div>
      <div class="form-step d-none d-md-flex col-md-4 justify-content-center">2.填寫訂單資訊</div>
      <div class="form-step d-none d-md-flex col-md-4 justify-content-center">3.完成購買</div>
    </div>
    <table class="table mt-4 text-white">
      <thead>
        <tr>
          <th width="20%">產品</th>
          <th width="35%"></th>
          <th width="15%" class="d-md-table-cell d-none">數量</th>
          <th width="15%">單價</th>
        </tr>
      </thead>
      <tbody v-for="item in cartProducts.carts" :key="item.id">
        <tr>
          <td>
            <img :src="item.product.imageUrl" alt="product-imageUrl" class="img-fluid">
          </td>
          <td class="align-middle"> <!--商品名稱-->
            <div>
              <h4>{{ item.product.title }}</h4>
              <span class="cart-category">
                {{ item.product.category }}
              </span>
            </div>
            <div class="text-success" v-if="item.coupon">已套用優惠卷</div>
            <div class="btn-group w-100 d-md-none mt-3" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-light" @click="changeQty(item, false)">
                -
              </button>
              <button type="button" class="btn btn-light"> {{ item.qty }} </button>
              <button type="button" class="btn btn-light" @click="changeQty(item, true)">
                +
              </button>
            </div>
          </td>
          <td class="d-md-table-cell d-none align-middle"> <!--數量-->
            <div class="btn-group w-100" role="group" aria-label="Basic example">
              <button type="button"
                class="btn btn-light"
                :disabled="item.qty === 1"
                @click="changeQty(item, false)">
                -
              </button>
              <button type="button" class="btn btn-light"> {{ item.qty }} </button>
              <button type="button" class="btn btn-light" @click="changeQty(item, true)">
                +
              </button>
            </div>
          </td>
          <!-- 價錢 -->
          <td class="text-right h6 align-middle">
            <div class="del_btn py-3"
              @click.prevent="delCartItem(item.id)">
                <i class="fas fa-times"></i>
            </div>
            <del
              v-if="item.final_total !== item.total">
              {{ item.total | currency }}
            </del>
            <div v-if="item.final_total === item.total">
              {{ item.final_total | currency }}
            </div>
            <div class="text-success py-3" v-if="item.final_total !== item.total" >
              {{ item.final_total | currency }}
            </div>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td width="80"></td>
          <td class="d-md-table-cell d-none"></td>
          <td width="200">總計</td>
          <td width="200" class="text-right"> {{ cartProducts.total | currency }}</td>
        </tr>
        <tr v-if=" cartProducts.total !== cartProducts.final_total">
          <td width="80"></td>
          <td class="d-md-table-cell d-none"></td>
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
    <div class="text-right">
      <button type="button" class="btn btn-secondary col-4 col-md-2" @click="nextStep">下一步</button>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      coupon_code: '',
      mode: true,
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
          vm.$bus.$emit('messsage:push', response.data.message, 'danger');
          vm.getCart();
        } else {
          vm.$bus.$emit('messsage:push', response.data.message, 'danger');
        }
      });
    },
    changeQty(item, mode) {
      if (mode) {
        const num = item.qty + 1;
        const cart = {
          product_id: item.product_id,
          qty: num,
        };
        this.$store.dispatch('cartModules/delCartItem', item.id);
        this.$store.dispatch('cartModules/changeQty', cart);
      } else {
        const num = item.qty + -1;
        const cart = {
          product_id: item.product_id,
          qty: num,
        };
        this.$store.dispatch('cartModules/delCartItem', item.id);
        this.$store.dispatch('cartModules/changeQty', cart);
      }
    },
    nextStep() {
      this.$router.push('cartform');
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
<style lang='scss'>
@import '~@/assets/scss/cart';

</style>
