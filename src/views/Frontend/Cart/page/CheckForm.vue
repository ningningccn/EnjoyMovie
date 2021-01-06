<template>
  <div>
    <div class='form text-white'>
      <div class='form-step '>1.確認購物車</div>
      <div class='form-step active'>2.填寫訂單資訊</div>
      <div class='form-step'>3.完成購買</div>
    </div>
    <div class ='form d-flex justify-content-center mt-5 text-white'>
      <form class='col-md-6 ' @submit.prevent='createOrder'>
        <div class='form-group'>
          <label for='useremail'>Email
            <small class='text-danger'>(必需填寫)</small>
          </label>
          <input type='email' class='form-control' name='email' id='useremail'
            v-validate ='"required|email"'
            v-model='form.user.email' placeholder='請輸入 Email'
            :class='{"is-invalid":errors.has("email")}'>
            <!-- required -->
          <span class='text-danger' v-if='errors.has("email")'>
            {{ errors.first('email') }}
          </span>
        </div>
        <div class='form-group '>
          <label for='username'>收件人姓名:
            <small class='text-danger'>(必需填寫)</small>
          </label>
          <input type='text' class='form-control' name='name' id='username'
            v-model='form.user.name'
            v-validate='"required"'
            placeholder='輸入姓名'
            :class='{"is-invalid":errors.has("name")}'> <!-- 紅色框 -->
          <span class='text-danger' v-if='errors.has("name")'>姓名必須輸入</span>
        </div>
        <div class='form-group'>
          <label for='usertel'>收件人電話
            <small class='text-danger'>(必需填寫)</small>
          </label>
          <input type='tel' class='form-control' name='tel' id='usertel'
            v-model='form.user.tel'
            v-validate='"required"'
            placeholder='請輸入電話'
            :class='{"is-invalid":errors.has("tel")}'>
          <span class='text-danger' v-if='errors.has("tel")'>電話必須輸入
            <small class='text-danger'>(必需填寫)</small>
          </span>
        </div>
        <div class='form-group'>
          <label for='useraddress'>收件人地址
            <small class='text-danger'>(必需填寫)</small>
          </label>
          <input type='text' class='form-control' name='address' id='useraddress'
            v-model='form.user.address'
            v-validate='"required"'
            placeholder='請輸入地址'
            :class='{"is-invalid":errors.has("address")}'>
          <span class='text-danger' v-if='errors.has("address")'>地址欄位不得留空</span>
        </div>
        <div class='form-group'>
          <label for='comment'>留言
            <small class='text-success'>(此欄位非必填)</small>
          </label>
          <textarea name='' id='comment' class='form-control' cols='30' rows='10'
          v-model='form.message'></textarea>
        </div>
        <div class='d-flex justify-content-between mt-3'>
          <button type='button' class='btn btn-secondary'
            @click='backStep'>
            上一步
          </button>
          <button type='submit' class='btn btn-success'>
            送出訂單
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    };
  },
  methods: {
    createOrder() {
      const vm = this;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/order`;
      const order = vm.form;
      vm.$store.dispatch('updateLoading', true);
      vm.$validator.validate().then((result) => {
        if (result) {
          vm.$http.post(api, { data: order }).then((response) => {
            if (response.data.success) {
              vm.$router.push(`checkout/${response.data.orderId}`);
              vm.$store.dispatch('updateLoading', false);
            } else {
              vm.$bus.$emit('messsage:push', response.data.message, 'danger');
              vm.$store.dispatch('updateLoading', false);
            }
          });
        } else {
          vm.$bus.$emit('messsage:push', '資料還沒填好', 'danger');
          vm.$store.dispatch('updateLoading', false);
        }
      });
    },
    backStep() {
      this.$router.push('checkproduct');
    },
  },
};
</script>
<style lang='scss'>
@import '~@/assets/scss/cart';
</style>
