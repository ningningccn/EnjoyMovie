<template>
  <div>
    <h2 class="text-white" v-if="tempCategory === ''">所有電影</h2>
    <h2 class="text-white" v-if="tempCategory === '動作'">動作類</h2>
    <h2 class="text-white" v-if="tempCategory === '劇情'">劇情類</h2>
    <h2 class="text-white" v-if="tempCategory === '愛情'">愛情類</h2>
    <h2 class="text-white" v-if="tempCategory === '動畫'">動畫類</h2>
    <Card></Card>
    <!-- <div class="row mt-4">
      <div class="col-md-6 col-lg-4 mb-4" v-for="item in activeProducts" :key="item.id" >
        <div class="card border-0 shadow-sm "
          >
          <div style="height: 350px; background-size: cover; background-position: center"
          :style="{backgroundImage: `url(${item.imageUrl})`}">
          </div>
          <div class="card-body">
            <span class="badge badge-secondary float-right ml-2">{{item.category}}</span>
            <h5 class="card-title">
              <a href="#" class="text-dark">{{item.title}}</a>
            </h5>
            <p class="card-text">{{item.content}}</p> -->
            <!-- <div class="d-flex justify-content-between align-items-baseline"> -->
            <!-- <div>
              <div class="h5" v-if="!item.origin_price"> {{item.price}} 元</div>
              <del class="h6"
                v-if="item.price && item.origin_price">原價 {{ item.origin_price }} 元</del>
              <div class="h5"
                v-if="item.price && item.origin_price">現在只要 {{ item.price }} 元</div>
            </div>
          </div>
          <div class="card-footer d-flex">
            <button type="button" class="btn btn-outline-secondary btn-sm"
              :disabled="item.is_enabled === 0"
              @click.prevent="getOnceProduct(item.id)">
              <i class="fas fa-spinner fa-spin"
                v-if="status.loadingItem === item.id">
              </i>
              查看更多
            </button>
            <button type="button" class="btn btn-outline-danger btn-sm ml-auto"
            :disabled="item.is_enabled === 0"
              @click.prevent="addToCart(item.id)">
              <i class="fas fa-spinner fa-spin"
                  v-if="status.loadingItem === item.id">
              </i>
              加到購物車
            </button>
          </div>
        </div>
      </div>
    </div> -->

    <!-- 指定Prouduct Modal -->
    <!-- <div class="modal fade" id="productModal" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{ OnceProduct.title }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img :src="OnceProduct.imageUrl" class="img-fluid" alt="">
            <blockquote class="blockquote mt-3">
              <p class="mb-0">{{ OnceProduct.content }}</p>
              <footer class="blockquote-footer text-right">{{ OnceProduct.description }}</footer>
            </blockquote>
            <div class="d-flex justify-content-between align-items-baseline">
              <div class="h4" v-if="!OnceProduct.price">{{ OnceProduct.origin_price }} 元</div>
              <del class="h6" v-if="OnceProduct.price">原價 {{ OnceProduct.origin_price }} 元</del>
              <div class="h4" v-if="OnceProduct.price">現在只要 {{ OnceProduct.price }} 元</div>
            </div>
            <select name="" class="form-control mt-3"
              v-model="OnceProduct.num">
              <option :value="num" v-for="num in 10" :key="num">
                選購 {{num}} {{OnceProduct.unit}}
              </option>
            </select>
          </div>
          <div class="modal-footer">
            <div class="text-muted text-nowrap mr-3">
              小計 <strong>{{OnceProduct.num}},
                {{ OnceProduct.num * OnceProduct.price }}</strong> 元
            </div>
            <button type="button" class="btn btn-primary"
              @click="addtoCart(OnceProduct.id, OnceProduct.num)"> -->
              <!-- <i class="fas fa-spinner fa-spin" v-if="OnceProduct.id
              === status.loadingItem"></i> -->
              <!--加到購物車
            </button>
          </div>
        </div>
      </div>
    </div> -->
    <Pagination :pagination="pagination" @event="getProduct"
    v-if="tempCategory===''"></Pagination>
      <!-- <Card :item="item" v-for="item in products" :key="item.id"
      class="col-md-6 col-lg-4 mb-4"
      @onceid="getOnceProduct"></Card> -->
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
      // const api = `${process.env.VUE_APP_API}/api/
      // ${process.env.VUE_APP_CUSTOMPATH}/products?page=${page}`;
      // const vm = this;
      // // vm.$store.state.isLoading = true;
      // vm.$store.dispatch('updateLoading', true);
      // this.$http.get(api).then((response) => {
      //   console.log(response.data);
      //   vm.products = response.data.products;
      //   vm.pagination = response.data.pagination;
      //   vm.getCategories();
      //   vm.$store.dispatch('updateLoading', false);
      // });
    },
    // getCategories() {
    //   const vm = this;
    //   const categories = new Set();
    //   vm.products.forEach((item) => {
    //     console.log(item.category);
    //     categories.add(item.category);
    //   });
    //   vm.categories = Array.from(categories);
    // },
    getOnceProduct(id) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`;
      const vm = this;
      // vm.status.loadingItem = id;
      this.$http.get(api).then((response) => {
        if (response.data.success) {
          console.log(response.data);
          vm.OnceProduct = response.data.product;
          vm.OnceProduct.num = 1;
          $('#productModal').modal('show');
        } else {
          console.log(response.data.message);
        }
      });
    },
    addToCart(id, qty = 1) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      const cart = {
        product_id: id,
        qty,
      };
      this.$http.post(api, { data: cart }).then((response) => {
        if (response.data.success) {
          console.log(response.data.message);
        }
      });
    },
    ...mapActions('productModules', ['getAllProducts']),
  },
  computed: {
    // isLoading() {
    //   return this.$store.state.isLoading;
    // },
    // activeProducts() {
    //   const vm = this;
    //   if (vm.tempCategory === '') {
    //     return vm.products;
    //   } return vm.allproducts.filter(
    //     (item) => item.category === vm.tempCategory,
    //   );
    // },
    // products() { return this.$store.state.products;},
    // categories() {return this.$store.state.categories;},
    // pagination() {return this.$store.state.pagination;},
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
