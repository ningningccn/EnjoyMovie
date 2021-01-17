<template>
  <div>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide
      v-for="item in productCategory" :key="item.id"
      @click.native="moveTo(item.id)">
      <img :src="item.imageUrl" alt="imageUrl">
    </swiper-slide>
  </swiper>
  </div>

</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';

export default {
  name: 'swiper-example-free-mode',
  title: 'Free mode / No fixed positions',
  props: ['productCategory'],
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 20,
        freeMode: true,
      },
    };
  },
  methods: {
    moveTo(id) {
      this.$router.push(`/product_detail/${id}`);
      window.location.reload();
    },
  },
};
</script>

<style lang="scss" scoped>
.swiper {
  height: 280px;
  width: 100%;
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
    // font-size: $font-size-huge * 2;
    background-color: #fff;
    width: 180px;
    cursor: pointer;
  }
}
.swiper-slide img {
  width: 100%;
  height: 100%;
}
</style>
