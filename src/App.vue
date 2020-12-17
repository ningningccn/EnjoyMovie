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
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
