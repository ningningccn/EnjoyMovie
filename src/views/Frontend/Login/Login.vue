<template>
  <div>
    <div class="bg-img">
      <div class="bg-blur">
        <Navbar/>
        <Alert/>
        <main class="my-5 text-white ">
          <form class="form-signin shadow p-5 rounded">
            <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label for="inputEmail" class="sr-only">Email address</label>
            <input type="email" id="inputEmail" class="form-control"
              placeholder="Email address"
              v-model="user.username" required autofocus>
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" class="form-control"
              placeholder="Password"
              v-model="user.password" required>
            <div class="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me">Remember me
              </label>
            </div>
            <button class="btn btn-lg btn-primary btn-block"
              @click.prevent="signIn" type="submit">Sign in
            </button>
          </form>
        </main>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue';
import Alert from '@/components/AlertMessage.vue';

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
    Alert,
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
<style scoped>
html,body {
  height: 1000px;
}
body {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}
main {
  padding-bottom: 150px;
}
.bg-img {
  background-image: url('~@/assets/Image/Background/login(BG).jpeg');
  height: 100%;
  background-size: cover;
  background-position:center;
}
.bg-blur {
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px ) brightness(80%);
}
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
  /* filter:blur(1px); */
  background-color:rgba(0, 0, 0, 0.8);
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
