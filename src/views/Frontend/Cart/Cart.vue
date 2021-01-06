<template>
  <div>
    <AlertMessage/>
    <Navbar/>
    <Banner/>
    <div class='container'>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AlertMessage from '@/components/AlertMessage.vue';
import Banner from '@/components/Frontend/Cart/Banner.vue';
import Navbar from '@/components/Navbar.vue';

export default {
  data() {
    return {
      cartProduct: [],
      message: '',
    };
  },
  components: {
    AlertMessage,
    Navbar,
    Banner,
  },
};
</script>
