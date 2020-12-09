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
import Navbar from '@/views/Admin_Navbar.vue';
import Alert from '@/components/AlertMessage.vue';

export default {
  components: {
    Navbar,
    Alert,
  },
};
</script>

<style scoped>
.dashboard{
  position: relative;
  height: auto;
}
.bg-img {
  background-image: url('../assets/admin_bg.jpg');
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position:center;
  position:absolute;
}
.bg-blur{
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px ) brightness(80%);
  position:absolute;
}
main {
  background-color:rgba(0, 0, 0, 0.8);
  position: relative;
  margin-top: 20px;
}

</style>
