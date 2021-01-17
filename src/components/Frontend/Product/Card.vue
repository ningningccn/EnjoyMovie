<template>
  <div>
    <div class="row">
      <div class="btn col-md-6 col-lg-4 mb-4"
        v-for="item in filterCategory" :key="item.id">
        <div class="movie-card mt-4"
          @click.prevent="product_detail(item.id)">
          <div class="card-img"
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
};
</script>
<style  lang='scss' scoped>
@import '~@/assets/scss/card.scss';
</style>
