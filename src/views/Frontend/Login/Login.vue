<template>
  <div>
    <Navbar/>
    <div class='bg-img'>
      <div class='bg-blur'>
        <AlertMessage/>
        <main class='text-white'>
          <form class='form-signin shadow p-5 rounded'>
            <h1 class='h3 mb-3 font-weight-normal'>Please sign in</h1>
            <label for='inputEmail' class='sr-only'>Email address</label>
            <input type='email' id='inputEmail' class='form-control'
              placeholder='Email address'
              v-model='user.username' required autofocus>
            <label for='inputPassword' class='sr-only'>Password</label>
            <input type='password' id='inputPassword' class='form-control'
              placeholder='Password'
              v-model='user.password' required>
            <div class='checkbox mb-3'>
              <label>
                <input type='checkbox' value='remember-me'>Remember me
              </label>
            </div>
            <button class='btn btn-lg btn-primary btn-block'
              @click.prevent='signIn' type='submit'>Sign in
            </button>
          </form>
        </main>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue';
import AlertMessage from '@/components/AlertMessage.vue';

export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  components: {
    Navbar,
    AlertMessage,
  },
  methods: {
    signIn() {
      const vm = this;
      const api = `${process.env.VUE_APP_API}/admin/signin`;
      vm.$store.dispatch('updateLoading', true);
      vm.$http.post(api, vm.user).then((response) => {
        if (response.data.success) {
          vm.$router.push('/admin/product');
          vm.$store.dispatch('updateLoading', false);
        } else {
          vm.$store.dispatch('updateLoading', false);
          vm.$bus.$emit('messsage:push', response.data.message, 'danger');
        }
      });
    },
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
  },
};
</script>
<style lang='scss' scoped>
@import '~@/assets/scss/login';
</style>
