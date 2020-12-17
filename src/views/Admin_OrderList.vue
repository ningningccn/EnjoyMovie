<template>
  <div>
    <table class="table mt-4 text-white">
      <thead>
        <tr>
          <th width ="80">購買時間</th>
          <th width ="120">Email</th>
          <th width ="150">購買款項</th>
          <th width ="50">應付金額</th>
          <th width ="50">是否付款</th>
        </tr>
      </thead>
      <tbody v-for="item in orderlist" :key="item.id">
        <tr>
          <td>{{ item.create_at }}</td>
          <td>{{ item.user.email }}</td>
          <td>
            <ul class="list-unstyled">
              <li v-for="product in item.products" :key="product.id">
                {{ product.product.title }} : {{ product.qty }} {{ product.product.unit }}
              </li>
            </ul>
          </td>
          <td class="text-right"> {{ item.total | currency }}</td>
          <td>
            <span v-if="item.is_paid" class="text-success" >已付款</span>
            <span v-else class="text-danger">尚未付款</span>
          </td>
        </tr>

      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderlist: {},
    };
  },
  methods: {
    getOrderList(page = 1) {
      const vm = this;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/orders?page=${page}`;
      this.$http.get(api).then((response) => {
        vm.orderlist = response.data.orders;
      });
    },
  },
  created() {
    this.getOrderList();
  },
};
</script>
