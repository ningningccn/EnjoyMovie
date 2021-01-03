<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link class="mr-5" to="/">
        <img src="@/assets/Image/Logo/EnjoyMovie.png" alt="logo" >
      </router-link>
      <button class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="nav  nav-pills mx-auto mt-2">
          <li class="nav-item ">
            <router-link class="nav-link"
              to="/admin/product" active-class="active">產品列表</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link"
              to="/admin/orderlist" active-class="active">訂單列表
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link"
              to="/admin/discount" active-class="active">優惠卷</router-link>
          </li>
        </ul>
        <ul class="nav navbar-right" >
          <li class="nav-item text-nowrap">
            <a class="nav-link" href="#" @click.prevent="signout">登出</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    signout() {
      const vm = this;
      const api = `${process.env.VUE_APP_API}/logout`;
      vm.$store.dispatch('updateLoading', true);
      vm.$http.post(api).then((response) => {
        if (response.data.success) {
          vm.$router.push('/login');
          vm.$store.dispatch('updateLoading', false);
        }
      });
    },
  },
};
</script>

<style scoped>
img{
  width: 100%;
  max-width: 100px;
}
</style>
