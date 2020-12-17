<template>
  <div class ="form d-flex justify-content-center mt-5">
    <form class="col-md-6 " @submit.prevent="createOrder">
      <div class="form-group">
        <label for="useremail">Email</label>
        <input type="email" class="form-control" name="email" id="useremail"
          v-validate ="'required|email'"
          v-model="form.user.email" placeholder="請輸入 Email"
          :class="{'is-invalid':errors.has('email')}">
          <!-- required -->
        <span class="text-danger" v-if="errors.has('email')">
          {{ errors.first('email') }}
        </span>
      </div>
      <div class="form-group">
        <label for="username">收件人姓名</label>
        <input type="text" class="form-control" name="name" id="username"
          v-model="form.user.name"
          v-validate="'required'"
          placeholder="輸入姓名"
          :class="{'is-invalid':errors.has('name')}"> <!-- 紅色框 -->
        <span class="text-danger" v-if="errors.has('name')">姓名必須輸入</span>
      </div>
      <div class="form-group">
        <label for="usertel">收件人電話</label>
        <input type="tel" class="form-control" name="tel" id="usertel"
          v-model="form.user.tel"
          v-validate="'required'"
          placeholder="請輸入電話"
          :class="{'is-invalid':errors.has('tel')}">
        <span class="text-danger" v-if="errors.has('tel')">姓名必須輸入</span>
      </div>
      <div class="form-group">
        <label for="useraddress">收件人地址</label>
        <input type="text" class="form-control" name="address" id="useraddress"
          v-model="form.user.address"
          v-validate="'required'"
          placeholder="請輸入地址"
          :class="{'is-invalid':errors.has('address')}">
        <span class="text-danger" v-if="errors.has('address')">地址欄位不得留空</span>
      </div>
      <div class="form-group">
        <label for="comment">留言</label>
        <textarea name="" id="comment" class="form-control" cols="30" rows="10"
        v-model="form.message"></textarea>
      </div>
      <div class="text-right">
        <button class="btn btn-danger">送出訂單</button>
      </div>
    </form>
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
      vm.$validator.validate().then((result) => {
        if (result) {
          vm.$http.post(api, { data: order }).then((response) => {
            if (response.data.success) {
              vm.$router.push(`/customer_checkout/${response.data.orderId}`);
            }
          });
        }
      });
    },
  },
};
</script>
