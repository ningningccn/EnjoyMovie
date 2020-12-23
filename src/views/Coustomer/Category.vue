<template>
  <div>
    <h2 class="text-white" v-if="tempCategory === ''">所有電影</h2>
    <h2 class="text-white" v-if="tempCategory === '動作'">動作類</h2>
    <h2 class="text-white" v-if="tempCategory === '劇情'">劇情類</h2>
    <h2 class="text-white" v-if="tempCategory === '愛情'">愛情類</h2>
    <h2 class="text-white" v-if="tempCategory === '動畫'">動畫類</h2>
    <Card/>
    <Pagination :pagination="pagination" @event="getProduct"
      v-if="tempCategory===''"></Pagination>
  </div>
</template>

<script>
import $ from 'jquery';
import Pagination from '@/components/pagination.vue';
import Card from '@/components/card.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      OnceProduct: {},
      status: {
        loadingItem: '',
      },
    };
  },
  components: {
    Pagination,
    Card,
  },
  methods: {
    getProduct(page = 1) {
      this.$store.dispatch('productModules/getProduct', page);
    },
    getOnceProduct(id) {
      const vm = this;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`;
      vm.$http.get(api).then((response) => {
        if (response.data.success) {
          vm.OnceProduct = response.data.product;
          vm.OnceProduct.num = 1;
          $('#productModal').modal('show');
        }
      });
    },
    ...mapActions('productModules', ['getAllProducts']),
  },
  computed: {
    ...mapGetters('productModules', ['products', 'categories', 'pagination', 'allproducts', 'tempCategory']),
    // 拿到資料
  },
  created() {
    this.getProduct();
    this.getAllProducts();
  },
};
</script>

<style scoped>
</style>
