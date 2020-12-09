<template>
  <div>
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item"
          :class="{'disabled':!pagination.has_pre}">

          <a class="page-link" href="#" aria-label="Previous"
          @click.prevent="getpage(pagination.current_page -1)" >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item" v-for="page in pagination.total_pages" :key="page"
        :class="{'active': pagination.current_page === page}" >
          <a class="page-link" href="#" @click.prevent="getpage(page)"> {{page}}</a>
        </li>
        <li class="page-item" :class="{'disabled':!pagination.has_next}">
          <a class="page-link" href="#" @click.prevent="getpage(pagination.current_page +1)"
          aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
  <!-- 如果 沒有上一頁 加入disabled -->
</template>
<script>
export default {
  props: ['pagination'],
  methods: {
    getpage(page) {
      // event = Products.vue 中的 @event
      // @event 在 Products.vue 指向 getProducts
      this.$emit('event', page);
    },
  },
};
</script>
<style scoped>
.page-item.active .page-link {
  z-index: 3;
  color: #000;
  background-color: #fff;
  border-color: #fff;
}
.page-item.disabled .page-link{
  background-color: #000;
}
.page-link {
  color:#fff;
  background-color: #000;
}
</style>
