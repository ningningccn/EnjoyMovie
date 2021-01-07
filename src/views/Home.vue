<template>
  <div class='home'>
    <Navbar/>
    <div class='col-12 px-0'>
    <Swiper/>
    </div>
    <Recommended/>
    <div class='background'>
      <div class='background-img'></div>
      <div class='container-blur'></div>
      <div class='container py-5 px-0'>
        <div class='new text-white h2 mt-5 pt-4 text-center'>
          最新上映
        </div>
        <ThreeDSwiper/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import Swiper from '@/components/Frontend/Home/Swiper.vue';
import Recommended from '@/components/Frontend/Home/Recommended.vue';
import ThreeDSwiper from '@/components/Frontend/Home/ThreeDSwiper.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Swiper,
    Recommended,
    ThreeDSwiper,
  },
};
</script>
<style lang='scss'>
@import '~@/assets/scss/home';

</style>
