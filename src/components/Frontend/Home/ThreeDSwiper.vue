<template>
  <div class="example-3d">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="item in products" :key="item.id"
        @click.native="getProduct_detail(item.id)">
        <img :src="item.imageUrl" alt="imageUrl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div
      class="modal fade" id="productModal" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body row">
            <img :src="product.imageUrl" class="mx-auto" alt="product.imageUrl">
              <div class="text-white p-3 mx-auto">
              <h3 class ="text-center">電影簡介</h3>
              {{ product.description }}
            </div>
            <button type="button" class="btn btn-secondary w-100"
              @click.prevent="product_detail(product.id)">
              想了解更多
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';
import $ from 'jquery';

export default {
  name: 'swiper-example-3d-coverflow',
  title: '3D Coverflow effect',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      product: {},
      swiperOption: {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        autoplay: true,
        // preventClicksPropagation: false,
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: '.swiper-pagination',
        },
      },
    };
  },
  methods: {
    ...mapActions('productModules', ['getProduct']),
    getProduct_detail(id) {
      const vm = this;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`;
      vm.$store.dispatch('updateLoading', true);
      vm.$http.get(api).then((response) => {
        if (response.data.success) {
          vm.product = response.data.product;
          vm.product.num = 1;
          $('#productModal').modal('show');
          vm.$store.dispatch('updateLoading', false);
        } else {
          vm.$store.dispatch('updateLoading', false);
        }
      });
    },
    product_detail(id) {
      $('#productModal').modal('hide');
      this.$router.push(`/product_detail/${id}`);
    },
  },
  computed: {
    ...mapGetters('productModules', ['products']),
  },
  created() {
    this.getProduct();
  },
};
</script>

<style lang='scss' scoped>
.example-3d {
  width: 100%;
  height:100%;
  padding: 50px 0;
}
img{
  width: 100%;
}
.modal-body {
  background-color: #000;
}
.modal-body img{
  width: 70%;
  height: auto;
  margin: 0 20px;
}
.swiper {
  height: 100%;
  width: 100%;
  padding: 50px 0px;
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    text-align: center;
    font-weight: bold;
    background-color: #fff;
    background-position: center;
    background-size: cover;
    color: #fff;
  }
  .swiper-pagination {
    .swiper-pagination-bullet.swiper-pagination-bullet-active {
      background: #fff;
    }
  }
}
</style>
