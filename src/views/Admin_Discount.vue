<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="text-right mt-4">
      <button type="button" class="btn btn-primary" @click="opendDiscountModal(true)" >
        建立新的優惠卷
      </button>
    </div>
    <table class="table mt-4 text-white">
      <thead>
        <tr>
          <th width ="150">名稱</th>
          <th width ="100" >折扣百分比</th>
          <th width ="100">到期日</th>
          <th width ="80">是否啟用</th>
          <th width ="80">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in discounts" :key="item.id">
          <td>{{ item.title }}</td>
          <td>{{ item.percent }}</td>
          <td>{{ item.due_date }}</td>
          <td>
            <span v-if="item.is_enabled" class="text-success">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button type="button" class="btn btn-outline-primary btn-sm"
                @click="opendDiscountModal(false,item)">編輯
              </button>
              <button type="button" class="btn btn-outline-danger btn-sm"
                @click="openDel_discountModal(item)">刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 切換頁 Start-->
    <Pagination :pagination="pagination" @event="getDiscounts"></Pagination>
      <!-- 建立 Modal -->
    <div class="modal fade" id="DiscountModal" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>新增優惠卷 </span>
            </h5>
            <!-- 右上角關閉 -->
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <!-- modal-body -->
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="recipient-name" class="col-form-label">名稱:</label>
                <input type="text" class="form-control" id="title" v-model="tempDiscounts.title">
              </div>
              <div class="form-group">
                <label for="message-text" class="col-form-label">優惠碼:</label>
                <input class="form-control " id="code" v-model="tempDiscounts.code">
              </div>
              <div class="form-group">
                <label for="message-text" class="col-form-label">到期日:</label>
                <input type="date" class="form-control" id="due_date"
                v-model="tempDiscounts.due_date">
              </div>
              <div class="form-group">
                <label for="message-text" class="col-form-label">百份比:</label>
                <input class="form-control" id="percent" v-model="tempDiscounts.percent">
              </div>
              <div class="form-group">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="is_enabled"
                    v-model="tempDiscounts.is_enabled"
                    :true-value="1"
                    :false-value="0">
                  <label class="form-check-label" for="is_enabled">
                    是否啟用
                  </label>
                </div>
              </div>
            </form>
          </div>
          <!-- modal-body -->
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="updateCoupons" >確認</button>
          </div>
        </div>
      </div>
    </div>
    <!-- delModal -->
    <div class="modal"  id="openDeldiscountModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">刪除優惠</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>優惠名稱:{{ tempDiscounts.title }}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="delDiscount">確定刪掉</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import Pagination from '@/components/pagination.vue';

export default {
  data() {
    return {
      discounts: [],
      tempDiscounts: {},
      pagination: {},
      isNew: false,
      isLoading: false,
    };
  },
  components: {
    Pagination,
  },
  methods: {
    getDiscounts(page = 1) {
      const vm = this;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupons?page=${page}`;
      vm.isLoading = true;
      vm.$http.get(api).then((response) => {
        // eslint-disable-next-line no-console
        console.log(response.data);
        vm.isLoading = false;
        vm.discounts = response.data.coupons;
        vm.pagination = response.data.pagination;
      });
    },
    opendDiscountModal(isNew, item) {
      if (isNew) {
        this.tempDiscounts = {};
        this.isNew = true;
      } else {
        const temparray = {};
        this.tempDiscounts = Object.assign(temparray, item);
        this.isNew = false;
      }
      $('#DiscountModal').modal('show');
    },
    updateCoupons() {
      const vm = this;
      let api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon`;
      let httpMethod = 'post';
      vm.isLoading = true;
      if (!vm.isNew) {
        api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${vm.tempDiscounts.id}`;
        httpMethod = 'put';
      }
      vm.$http[httpMethod](api, { data: vm.tempDiscounts }).then((response) => {
        if (response.data.success) {
          $('#DiscountModal').modal('hide');
          vm.getDiscounts();
          vm.isLoading = false;
        } else {
          $('#DiscountModal').modal('hide');
        }
      });
    },
    openDel_discountModal(item) {
      const vm = this;
      const temparray = {};
      vm.tempDiscounts = Object.assign(temparray, item);
      $('#openDeldiscountModal').modal('show');
    },
    delDiscount() {
      const vm = this;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${vm.tempDiscounts.id}`;
      vm.$http.delete(api).then((response) => {
        if (response.data.success) {
          vm.getDiscounts();
          $('#openDeldiscountModal').modal('hide');
          vm.tempDiscounts = {}; // 重置tempDiscounts 內容
        }
      });
    },
  },
  created() {
    this.getDiscounts();
  },
};
</script>
