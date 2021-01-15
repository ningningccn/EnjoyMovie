<template>
  <div :style="{backgroundImage:'url(' + product.imageUrl + ')',
    backgroundSize: 'cover', backgroundPosition: 'center'}">
    <Navbar/>
    <div class='blur pb-5'>
      <div class='container my-3 pb-5 text-white'>
        <div v-if='product.content' class='text-center py-5'>
          <iframe width='80%' height='400' :src='product.content' frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media;
            gyroscope; picture-in-picture' allowfullscreen>
          </iframe>
        </div>
        <div class='context row mt-5'>
          <div class='context-left col-12  col-md-6'>
            <img class='col-md-12' :src='product.imageUrl' alt='product-img'>
          </div>
          <div class='context-right col-10 mt-4 mx-auto col-md-6'>
            <h1>{{ product.title }}</h1>
            <h6 class='text-secondary'>類別:{{ product.category }}</h6>
            <div class='product-description'>
              {{ product.description }}
            </div>
            <del
              v-if='product.origin_price'>
              <span>原價：</span>{{ product.origin_price | currency }}
            </del>
            <div class='product-price'
            :class="{'text-white':!product.origin_price,
            'text-success':product.origin_price}">
              <span v-if='product.origin_price'>優惠價：</span>
              <span v-if='!product.origin_price'>售價：</span>
              {{ product.price| currency }}
            </div>
            <select name='' class='form-control mt-3' v-model='product.num'>
              <option :value='num' v-for='num in 10' :key='num'>
                選購 {{ num }} {{ product.unit }}
              </option>
            </select>
            <button class='btn btn-secondary mt-5 w-100' type='button'
              @click.prevent='addToCart(product.id, product.num)'>
              加入購物車
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  data() {
    return {
      product_detailId: '',
      product: {},
    };
  },
  components: {
    Navbar,
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
        }
      });
    },
    addToCart(id, qty = 1) {
      this.$store.dispatch('cartModules/addToCart', { id, qty });
    },
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
