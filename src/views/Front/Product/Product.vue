<template>
  <div>
    <Navbar/>
    <Banner/>
    <div class="background">
      <div class="bg-blur">
        <div class="container py-5">
          <div class="context d-flex row mx-auto">
            <div class="col-12 col-lg-3 ">
              <Allcategory/>
            </div>
            <div class="col-10 col-md-12 col-lg-9 mx-auto" >
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/navbar.vue';
import Banner from '@/components/Front/Layout/Product/Banner.vue';
import Allcategory from '@/components/Front/Layout/Product/All_category.vue';

export default {
  components: {
    Navbar,
    Banner,
    Allcategory,
  },
};
</script>
<style scoped>
.video{
  margin-top: -75px;
}
.background {
  background-image: url('/src/assets/CINE-TIMES.jpg');
  width: 100%;
  height: auto;
  background-size: cover;
  background-position: center;
}
.bg-blur{
  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
