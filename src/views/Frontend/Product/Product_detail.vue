<template>
  <div
    :style="{backgroundImage:'url(' + product.imageUrl + ')',
    backgroundSize: 'cover', backgroundPosition: 'center'}">
    <Navbar/>
    <div class="blur py-5">
      <div class="container py-5 text-white text-shadow">
        <!-- 主要內容 -->
        <div class="row context mt-5">
          <div class="context-left col-12 col-lg-6 mb-4">
            <img class="col-md-12" :src="product.imageUrl" alt="product-img">
          </div>
          <div class="context-right col-10 mx-auto col-lg-6">
            <h1>{{ product.title }}</h1>
            <h6 class="text-secondary">類別:{{ product.category }}</h6>
            <p class="product-description text-justify">
              {{ product.description }}
            </p>
            <del
              v-if="product.origin_price">
              <span>原價：</span>{{ product.origin_price | currency }}
            </del>
            <div class="product-price"
            :class="{'text-white':!product.origin_price,
            'text-success':product.origin_price}">
              <span v-if="product.origin_price">優惠價：</span>
              <span v-if="!product.origin_price">售價：</span>
              {{ product.price| currency }}
            </div>
            <select name="" class="form-control mt-3" v-model="product.num">
              <option :value="num" v-for="num in 10" :key="num">
                選購 {{ num }} {{ product.unit }}
              </option>
            </select>
            <button class="btn btn-secondary mt-5 w-100" type="button"
              @click.prevent="addToCart(product.id, product.num)">
              加入購物車
            </button>
          </div>
        </div>
        <!-- 預告片 -->
        <div class="youtube" v-if="product.content">
          <iframe width="80%" height="400px" :src="product.content" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
            gyroscope; picture-in-picture" allowfullscreen>
          </iframe>
        </div>
      </div>
        <!-- 相關電影 -->
      <div
        class="other-Movie col-10 mx-auto text-white text-shadow"
        v-if="otherMovie.length>0">
        <h3 class="mb-3">相關電影</h3>
        <Detail :product-category="otherMovie"/>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Detail from '@/components/Frontend/Product/Detail_swiper.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      product_detailId: '',
      product: {},
      otherMovie: [],
    };
  },
  components: {
    Navbar,
    Detail,
  },
  methods: {
    getProduct_detail() {
      const vm = this;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${vm.product_detailId}`;
      vm.$store.dispatch('updateLoading', true);
      vm.$http.get(api).then((response) => {
        if (response.data.success) {
          vm.product = response.data.product;
          vm.product.num = 1;
          vm.$store.dispatch('updateLoading', false);
          this.filterCategory();
        } else {
          vm.$store.dispatch('updateLoading', false);
        }
      });
    },
    filterCategory() {
      const vm = this;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
      vm.$store.dispatch('updateLoading', true);
      vm.$http.get(api).then((response) => {
        if (response.data.success) {
          vm.otherMovie = response.data.products;
          vm.otherMovie = vm.otherMovie.filter((item) => item.category
          === vm.product.category && item.id !== vm.product.id);
          vm.$store.dispatch('updateLoading', false);
        } else {
          vm.$store.dispatch('updateLoading', false);
        }
      });
    },
    addToCart(id, qty = 1) {
      this.$store.dispatch('cartModules/addToCart', { id, qty });
    },
    ...mapActions('productModules', ['getAllProducts']),
  },
  computed: {
    ...mapGetters('productModules', ['allproducts']),
  },
  created() {
    this.product_detailId = this.$route.params.productId;
    this.getProduct_detail();
  },
};
</script>

<style lang='scss' scoped>
@import '~@/assets/scss/product_detail.scss';

</style>
