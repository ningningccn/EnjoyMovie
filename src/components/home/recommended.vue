<template>
  <div>
    <div class="main py-5">
      <div class="container py-5">
        <h1 class='recommend-title text-center mb-5'>本月推薦電影</h1>
        <div class="recommend-body row col-md-12 d-flex mx-auto">
          <!-- <div class="recommend-body-context d-flex  "> -->
            <div class="col-lg-6 col-md-12 d-flex justify-content-center mb-4" >
              <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/mR88lNYVqto" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
              </iframe> -->
              <video class="video col-12" loop="true" autoplay="autoplay"  muted="true" >
                <source type="video/mp4" src="../../assets/mp4/123.mp4">
              </video>
            </div>
            <div class="recommend-bodyleft  col-lg-6 col-md-12 ">
              <h4 class="text-center">鬼滅之刃劇場版 <br>無限列車篇</h4>
              <h6 class ="p-4">
                結束蝴蝶屋的訓練後，竈門炭治郎等一行人
                到達下一個任務地點「無限列車」，並與鬼殺隊炎柱・煉獄杏壽郎會合，一同調查列車上的四十多人失蹤事件，而下弦之壹・魘夢也潛伏在列車之中。
              </h6>
              <div class="col-md-12 row d-flex ">
                <img class="col-4 px-1" src="../../assets/movie_hot/2.jpg" alt="">
                <img class="col-4 px-1" src="../../assets/movie_hot/fire.jpeg" alt="">
                <img class="col-4 px-1" src="../../assets/movie_hot/3.jpg" alt="">
              </div>
            </div>

          <!-- </div> -->
        </div>

        <!-- <div class="main-context d-flex  justify-content-center">
          <div class="main-context-left col-md-6 text-right">
            <img src="https://s.yimg.com/ny/api/res/1.2/tE2aAU8acvbDxy9FJSL2vQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTEzNzMuNDAxMDE1MjI4NDI2Mw--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2020-11/43401340-1d1a-11eb-b9ff-feac20d5edb8" alt="">
          </div>
          <div class="main-context-right col-md-6">
            <h2>鬼滅之刃劇場版 無限列車篇</h2>
            <h4>
              結束蝴蝶屋的訓練後，竈門炭治郎等一行人到達下一個任務地點「無限列車」，並與鬼殺隊炎柱・煉獄杏壽郎會合，一同調查列車上的四十多人失蹤事件，而下弦之壹・魘夢也潛伏在列車之中。
            </h4>
          </div>
        </div> -->
      </div>

    </div>
  </div>
</template>
<script>
// import Smailswiper from '@/components/smail_swiper.vue';

export default {
};
</script>
<style scoped>
.main{
  background-color: rgb(38, 31, 31);
  background-image:url('../../assets/movie_hot/unnamed_Ed.jpg');
  background-size: cover;
  background-position:center;
  width: 100%;
  height: 100%;
}
.container{
  backdrop-filter: blur(4px);
  background-color: rgba(0, 0, 0,0.3);
  border-radius: 15px;
}
/* img{
  max-width: 100%;
  height: auto;
  border-radius: 15px;
} */
h1 ,h4 ,h6{
  color: #fff;
}
</style>
