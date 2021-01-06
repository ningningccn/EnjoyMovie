<template>
  <div class="dashboard">
    <Navbar/>
    <div class="bg-img"></div>
    <div class="bg-blur"></div>
    <AlertMessage/>
    <main role="main" class="container p-4 rounded shadow" >
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/Backend/Navbar.vue';
import AlertMessage from '@/components/AlertMessage.vue';

export default {
  components: {
    Navbar,
    AlertMessage,
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/dashboard.scss";
</style>
