<template>
  <div class="home">
    <Navbar/>
    <div class='col-12 px-0'>
    <swiper></swiper>
    </div>
    <Recommended></Recommended>
    <div class='background'>
      <div class="background-img"></div>
      <div class="container-blur"></div>
      <div class="container py-5 px-0">
        <div class="new text-white h2 mt-5 pt-4 text-center">
          最新上映
        </div>
        <ThreeDswiper></ThreeDswiper>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import Navbar from '@/components/navbar.vue';
import Recommended from '@/components/home/recommended.vue';
import swiper from '@/components/home/swiper.vue';
import ThreeDswiper from '@/components/home/3dswiper.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    // Banner,
    // Category,
    Recommended,
    swiper,
    ThreeDswiper,
    // Videoeffect,
  },
  created() {
    console.log(process.env.VUE_APP_API);
  },
};
</script>
<style scoped>
.background{
  height: 100%;
  position: relative;
}
.background-img {
  background-image: url('../assets/CINE-TIMES.jpg');
  position:absolute;
  width: 100%;
  height:100%;
  background-size: cover;
  background-position:center;
  filter:blur(10px);
}
.container-blur{
  position:absolute;
  width: 90%;
  height: 90%;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.5);
}
.new {
  position: relative;
}
</style>
