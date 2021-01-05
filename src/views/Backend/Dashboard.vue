<template>
  <div class="dashboard">
    <Navbar/>
    <div class="bg-img"></div>
    <div class="bg-blur"></div>
    <Alert/>
    <main role="main" class="container p-4 rounded shadow" >
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/Backend/Navbar.vue';
import Alert from '@/components/AlertMessage.vue';

export default {
  components: {
    Navbar,
    Alert,
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/_dashboard.scss";
</style>
