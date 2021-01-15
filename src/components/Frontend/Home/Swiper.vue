<template>
  <div class='thumb-example'>
    <!-- swiper1 -->
    <swiper class='swiper gallery-top banner' :options='swiperOptionTop' ref='swiperTop'>
      <swiper-slide class='slide-1 text-white'>
        <div class='banner1 d-flex justify-content-start'>
          <div class='banner-context col-12'>
            <div class='banner-context-bg'>
              <a href='#' class='badge badge-secondary p-2'>動作</a>
              <h2>水行俠</h2>
              <p>
                亞瑟庫瑞得知他是亞特蘭提斯的王位繼承人，他必須作出決定，引領他的人民。
              </p>
              <button class='btn btn-secondary' type='button'
              @click.prevent='moveTo(1)'>查看更多</button>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class='slide-2 text-white'>
        <div class='banner1 d-flex justify-content-start'>
          <div class='banner-context col-12'>
            <div class='banner-context-bg'>
              <a href='#' class='badge badge-secondary p-2'>動作</a>
              <h2>惡棍英雄：死侍</h2>
              <p>
                這位嘴砲英雄將帶著自己新的超能力，向那些毀掉他生活的仇人展開報復。
              </p>
              <button class='btn btn-secondary' type='button' @click.prevent='moveTo(2)'>
                查看更多
              </button>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class='slide-3 text-white'>
        <div class='banner1 d-flex justify-content-start'>
          <div class='banner-context col-12'>
            <div class='banner-context-bg'>
              <a href='#' class='badge badge-secondary p-2'>動作</a>
              <h2>神力女超人</h2>
              <p>
                來自亞馬遜的女超人戴安娜，離開她的小島來到世界，展現出她的神力與迷人魅力的故事。
              </p>
              <button class='btn btn-secondary' type='button' @click.prevent='moveTo(3)'>
                查看更多
              </button>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class='slide-4 text-white'>
        <div class='banner d-flex justify-content-start'>
          <div class='banner-context col-12'>
            <div class='banner-context-bg'>
              <a href='#' class='badge badge-secondary p-2'>動作</a>
              <h2>凸搥特派員</h2>
              <p>
                羅溫亞金森重回特務本色。無畏無懼、不怕危險的特務間諜強尼英格力將三度出擊拯救世界！
              </p>
              <button class='btn btn-secondary' type='button'
                @click.prevent='moveTo(4)'>查看更多</button>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class='slide-5 text-white'>
        <div class='banner1 d-flex justify-content-start'>
          <div class='banner-context col-12'>
            <div class='banner-context-bg'>
              <a href='#' class='badge badge-secondary p-2'>動作</a>
              <h2>玩命關頭8</h2>
              <p>
                這個高手如雲的團隊將跑遍全世界，阻止一個無政府主義者讓全世界陷入一團混亂。
              </p>
              <button class='btn btn-secondary' type='button'
                @click.prevent='moveTo(5)'>查看更多</button>
            </div>
          </div>
        </div></swiper-slide>
      <div class='swiper-button-next swiper-button-white' slot='button-next'></div>
      <div class='swiper-button-prev swiper-button-white' slot='button-prev'></div>
    </swiper>
    <!-- swiper2 Thumbs -->
    <swiper class='swiper gallery-thumbs' :options='swiperOptionThumbs' ref='swiperThumbs'>
      <swiper-slide class='slide-1'></swiper-slide>
      <swiper-slide class='slide-2'></swiper-slide>
      <swiper-slide class='slide-3'></swiper-slide>
      <swiper-slide class='slide-4'></swiper-slide>
      <swiper-slide class='slide-5'></swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';

export default {
  name: 'swiper-example-thumbs-gallery',
  title: 'Thumbs gallery with Two-way control',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptionTop: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        autoplay: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      swiperOptionThumbs: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true,

      },
    };
  },
  methods: {
    moveTo(number) {
      switch (number) {
        case 1: // 水行俠
          this.$router.push('/product_detail/-MQerWyyYVuDaX449E7P');
          break;
        case 2:
          this.$router.push('/product_detail/-MQev7nNVqy7ZRyRUair');
          break;
        case 3:
          this.$router.push('/product_detail/-MQeyg_hL5fAPf71aQ1X');
          break;
        case 4:
          this.$router.push('/product_detail/-MQevdK8bzvGpfXmITwF');
          break;
        case 5:
          this.$router.push('/product_detail/-MQcZe9Yj4P9NR6bryjt');
          break;
        default:
          break;
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper;
      const swiperThumbs = this.$refs.swiperThumbs.$swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  },
};
</script>

<style lang='scss' scoped>
.banner1 {
  width: 100%;
  height: 100%;
}
.banner-context {
  padding: 180px 150px 0 150px;
}
@media(max-width: 768px){
  .banner-context {
    padding: 180px 50px 0px 50px;
  }
}
.banner-context-bg {
  text-shadow: 1px 1px 12px black;
  padding:20px 10px 20px 10px;
}
.thumb-example {
  height: 700px;
  background-color: black;
} //整個黑色 高度
.swiper {
  .swiper-slide {
    background-size: cover;
    background-position: center;
    height: 100%;
    &.slide-1 {
      background-image:
      url('~@/assets/Image/Banner(img)/Home/Swiper/waterman(banner).jpg');
    }
    &.slide-2 {
      background-image:
      url('~@/assets/Image/Banner(img)/Home/Swiper/deadpool(banner).jpg');
    }
    &.slide-3 {
      background-image:
      url('~@/assets/Image/Banner(img)/Home/Swiper/wonderwoman(banner).jpg');
    }
    &.slide-4 {
      background-image:
      url('~@/assets/Image/Banner(img)/Home/Swiper/mr.onj(banner).jpg');
    }
    &.slide-5 {
      background-image:
      url('~@/assets/Image/Banner(img)/Home/Swiper/speed8(banner).jpg');
    }
  }
  &.gallery-top {
    height: 85%;
    width: 100%;
  }
  &.gallery-thumbs {
    height: 15%;
    box-sizing: border-box;
    padding: 10px 0;
  }
  &.gallery-thumbs .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }
  &.gallery-thumbs .swiper-slide-active {
    opacity: 1;
  }
}
</style>
