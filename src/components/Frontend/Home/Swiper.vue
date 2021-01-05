<template>
  <div class="thumb-example">
    <!-- swiper1 -->
    <swiper class="swiper gallery-top banner" :options="swiperOptionTop" ref="swiperTop">
      <swiper-slide class="slide-1 text-white">
        <div class="banner1 d-flex justify-content-start">
          <div class="banner-context col-12">
            <div class='banner-context-bg'>
              <a href="#" class="badge badge-secondary">動作</a>
              <h2>水行俠</h2>
              <div>
                劇情描述，當年輕的亞瑟庫瑞（傑森摩莫亞 飾）得知他是水底王國亞特蘭提斯的王位繼承人，他必須作出決定，勇敢引領他的人民並成為這個世界的英雄。
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="slide-2 text-white">
        <div class="banner1 d-flex justify-content-start">
          <div class="banner-context col-12">
            <div class='banner-context-bg'>
              <a href="#" class="badge badge-secondary">動作</a>
              <h2>惡棍英雄：死侍</h2>
              <div>
                前特種部隊變成傭兵的韋德威爾遜，由於得了不治之症而自願加入「Weapon X 計劃」，
                受到一個不法的實驗組織進行身體實驗性手術，並讓他的身體擁有快速再生的獨特能力，
                但付出的代價是失去容貌，並成為「死侍」。這位嘴砲英雄將帶著自己新的超能力，
                展開最殘酷的報復，將那些毀掉他生活的仇人一一獵殺。
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="slide-3 text-white">
        <div class="banner1 d-flex justify-content-start">
          <div class="banner-context col-12">
            <div class='banner-context-bg'>
              <a href="#" class="badge badge-secondary">動作</a>
              <h2>神力女超人</h2>
              <div>
                講述來自亞馬遜的女超人戴安娜（Diana），離開她的小島來到世界，展現出她的神力與迷人魅力的故事。
                蓋兒加朵飾演的神力女超人拿起第一次世界大戰與夥伴拍攝的照片看起，回憶當年她是如何進入這個人類的世界：
                在她成為世人熟知的神力女超人前，她是一名從小接受嚴格訓練的亞馬遜英勇戰士：黛安娜，
                與族人們一起居住在與世隔絕的天堂島上。
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="slide-4 text-white">
        <div class="banner d-flex justify-content-start">
          <div class="banner-context col-12">
            <div class='banner-context-bg'>
              <a href="#" class="badge badge-secondary">動作</a>
              <h2>凸搥特派員</h2>
              <div>
                羅溫亞金森重回特務本色。無畏無懼、不怕危險的特務間諜強尼英格力將三度出擊拯救世界！
                當一起網路攻擊事件，使得英國所有臥底的特務間諜身分曝光，而強尼英格力則是唯一沒有被掀底的特務，
                於是他就成為英國特務組織的最後一線希望，就此展開這場全新的搞笑動作冒險旅程。
                他奉命在退休之後重出江湖，立馬投入全新任務，希望能揪出主使這起網路攻擊事件的駭客。
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="slide-5 text-white">
        <div class="banner1 d-flex justify-content-start">
          <div class="banner-context col-12">
            <div class='banner-context-bg'>
              <a href="#" class="badge badge-secondary">動作</a>
              <h2>玩命關頭</h2>
              <div>
                自從大隻佬執法人員哈柏（巨石強森 飾），一名忠心耿耿的美國外交安全局 (DSS) 菁英探員，
                以及無法無天的不法之徒戴克蕭（傑森史塔森 飾），一名前任英國軍方特種部隊菁英隊員，
                首次在 2015 年的《玩命關頭 7》針鋒相對之後，這一對死對頭就一直在嗆來嗆去、拳來拳往，試圖把對方打趴。
              </div>
            </div>
          </div>
        </div></swiper-slide>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
    </swiper>
    <!-- swiper2 Thumbs -->
    <swiper class="swiper gallery-thumbs" :options="swiperOptionThumbs" ref="swiperThumbs">
      <swiper-slide class="slide-1"></swiper-slide>
      <swiper-slide class="slide-2"></swiper-slide>
      <swiper-slide class="slide-3"></swiper-slide>
      <swiper-slide class="slide-4"></swiper-slide>
      <swiper-slide class="slide-5"></swiper-slide>
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

<style lang="scss" scoped>
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
  // background-color: rgba(0, 0, 0, 0.3);
  text-shadow: 1px 1px 12px black;
  padding:40px;
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
      url('~@/assets/Banner(img)/Home/Swiper/waterman(banner).jpg');
    }
    &.slide-2 {
      background-image:
      url('~@/assets/Banner(img)/Home/Swiper/deadpool(banner).jpg');
    }
    &.slide-3 {
      background-image:
      url('~@/assets/Banner(img)/Home/Swiper/wonderwoman(banner).jpg');
    }
    &.slide-4 {
      background-image:
      url('~@/assets/Banner(img)/Home/Swiper/mr.onj(banner).jpg');
    }
    &.slide-5 {
      background-image:
      url('~@/assets/Banner(img)/Home/Swiper/speed8(banner).jpg');
    }
  }
  &.gallery-top {
    height: 85%;
    width: 100%;
    margin-top: -80px;
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
