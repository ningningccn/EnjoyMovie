<template>
  <div>
    <div class="row">
      <div class="btn col-md-6 col-lg-4 mb-4"
        v-for="item in filterCategory" :key="item.id">
        <div class="movie-card mt-4"
          @click.prevent="product_detail(item.id)">
          <div class="card-img" style="height: 400px;
            background-size: cover; background-position: center"
            :style="{backgroundImage:`url(${item.imageUrl})`}">
          </div>
          <div class="card-mask">
            <div class="card-title">
              {{ item.title }}
            </div>
          </div>
          <div class="movie_category">
            {{ item.category }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  props: ['item'],
  methods: {
    product_detail(id) {
      this.$router.push(`/product_detail/${id}`);
    },
  },
  computed: {
    ...mapGetters('productModules', ['products', 'filterCategory']),
  },
  created() {
  },
};
</script>
<style  scoped>
/* 商品卡片 */
.movie-card{
  position:relative;
  box-shadow:0 0 10px 5px rgba(255, 238, 238, 0.3);
  border-radius: 15px;
  cursor: pointer;
  transition:all 0.7s;
}
.movie-card:hover{
  transform:scale(1.1) ;
  box-shadow:0 0 15px 5px rgba(255, 238,238, 2);
}
.card-img {
  border-radius: 15px;
}
/* mask */
.card-mask{
  width: 100%;
  height: 100%;
  background-color:rgba(0 ,0 , 0,0.4);
  position: absolute;
  border-radius: 15px;
  top:0;
  opacity: 0;
  transition: 0.7s opacity;
}
.movie-card:hover .card-mask{
  opacity:1;
}
/* Title */
.card-mask .card-title{
  width: 100%;
  position: absolute;
  text-align:center;
  background-color: rgba(0, 0, 0,1);
  color: #fff;
  font-size: 20px;
  padding: 15px 0;
  left: 50%;
  bottom:-50px;
  transform: translate(-50%, 0);
  transition: all 0.7S;
}
.movie-card:hover .card-title{
  bottom: 20px;
}
.card-mask .card-cart{
  position: absolute;
  right:-50px;
  top:15px;
  font-size: 20px;
  transition: all 0.7S;
  padding: 0px 15px;
}
.movie_category {
  position:absolute;
  left:0;
  top:0;
  margin: 10px 0 0 10px ;
  color:#fff;
  padding: 5px 10px;
  text-align: center;
  border-radius: 5px;
  background-color: #ff5f00;
}

</style>
