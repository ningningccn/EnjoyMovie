<template>
  <div id='app'>
    <loading :active.sync='isLoading'></loading>
    <div class='wrap'>
      <router-view/>
    </div>
    <div class='footer'>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Footer from '@/components/Frontend/Home/Footer.vue';

export default {
  components: {
    Footer,
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
  },
};
</script>
<style lang='scss'>
@import './assets/scss/all';
body{background-color: #000;}
#app {
  position: relative;
  min-height: 100vh;
}
.wrap{
  padding-bottom:150px;
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;            /* Footer height */
}
</style>
