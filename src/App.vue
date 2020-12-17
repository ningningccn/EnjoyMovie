<template>
  <div id="app">
    <loading :active.sync="isLoading"></loading>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/home/footer.vue';

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
<style lang="scss">
@import "./assets/all";
body{background-color: #000;}
</style>
