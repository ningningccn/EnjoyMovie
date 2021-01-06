<template>
  <div>
    <div class='text-right mt-4'>
      <button type='button' class='btn btn-primary' @click='openModal(true)' >建立新的產品</button>
    </div>
    <!-- 主要內容 -->
    <table class='table mt-4 text-white'>
      <thead>
        <tr>
          <th width='60'></th>
          <th width ='120'>分類</th>
          <th >產品名稱</th>
          <th width ='120' >原價</th>
          <th width ='120'>售價</th>
          <th width ='100'>是否啟用</th>
          <th width ='150'>編輯</th>
        </tr>
      </thead>
      <tbody class='itemlist'>
        <tr v-for='item in products' :key='item.id'>
          <td><img :src='item.imageUrl' alt='Product-imageUrl' width='60'></td>
          <td>{{ item.category }} </td>
          <td>{{ item.title }} </td>
          <td class='text-right'>
            {{ item.origin_price | currency }}
          </td>
          <td class='text-right'>
            {{ item.price | currency }}
          </td>
          <td>
            <span v-if='item.is_enabled' class='text-success'>啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class='btn-group'>
              <button type='button' class='btn btn-outline-primary btn-sm'
                @click='openModal(false, item)'>編輯</button>
              <button type='button' class='btn btn-outline-danger btn-sm'
                @click='delModal(item)'>刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 建立新產品 Modal Start -->
    <div class='modal fade' id='productModal' tabindex='-1' role='dialog'
      aria-labelledby='exampleModalLabel' aria-hidden='true'>
      <div class='modal-dialog modal-lg' role='document'>
        <div class='modal-content border-0'>
          <div class='modal-header bg-dark text-white'>
            <h5 class='modal-title' id='exampleModalLabel'>
              <span>新增電影</span>
            </h5>
            <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div class='modal-body'>
            <div class='row'>
              <div class='col-sm-4'>
                <div class='form-group'>
                  <label for='image'>輸入圖片網址</label>
                  <input type='text' class='form-control' id='image'
                    placeholder='請輸入圖片連結'
                    v-model='tempProduct.imageUrl'>
                </div>
                <div class='form-group'>
                  <label for='customFile'>或 上傳圖片
                    <i class='fas fa-spinner fa-spin' v-if='status.fileUploading'></i>
                  </label>
                  <input type='file' id='customFile' class='form-control'
                    ref='files' @change='uploadFile'>
                </div>
                <img img='https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80'
                  class='img-fluid' alt='link' :src='tempProduct.imageUrl'>
              </div>
              <div class='col-sm-8'>
                <div class='form-group'>
                  <label for='title'>電影名稱</label>
                  <input type='text' class='form-control' id='title'
                    placeholder='請輸入標題'
                    v-model='tempProduct.title'>
                </div>
                <div class='form-row'>
                  <div class='form-group col-md-6'>
                    <label for='category'>類別</label>
                    <input type='text' class='form-control' id='category'
                      placeholder='請輸入分類'
                      v-model='tempProduct.category'>
                  </div>
                  <div class='form-group col-md-6'>
                    <label for='price'>單位</label>
                    <input type='unit' class='form-control' id='unit'
                      placeholder='請輸入單位'
                      v-model='tempProduct.unit'>
                  </div>
                </div>
                <div class='form-row'>
                  <div class='form-group col-md-6'>
                  <label for='origin_price'>原價</label>
                    <input type='number' class='form-control' id='origin_price'
                      placeholder='請輸入原價'
                      v-model='tempProduct.origin_price'>
                  </div>
                  <div class='form-group col-md-6'>
                    <label for='price'>售價</label>
                    <input type='number' class='form-control' id='price'
                      placeholder='請輸入售價'
                      v-model='tempProduct.price'>
                  </div>
                </div>
                <hr>
                <div class='form-group'>
                  <label for='description'>電影簡介</label>
                  <textarea type='text' class='form-control' id='description'
                    placeholder='請輸入電影簡介'
                    v-model='tempProduct.description'></textarea>
                </div>
                <div class='form-group'>
                  <label for='description'>片長(分鐘)</label>
                  <input type='number' class='form-control' id='description'
                    placeholder='請輸入片長'
                    v-model='tempProduct.content'></input>
                </div>
                <div class='form-group'>
                  <div class='form-check'>
                    <input class='form-check-input' type='checkbox'
                      id='is_enabled'
                      v-model='tempProduct.is_enabled'
                      :true-value='1'
                      :false-value='0'>
                      <!-- 如果有 勾 就會給予值 -->
                    <label class='form-check-label' for='is_enabled'>
                      是否啟用
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class='modal-footer'>
            <button type='button' class='btn btn-outline-secondary' data-dismiss='modal'>取消</button>
            <button type='button' class='btn btn-primary' @click='updateProduct'>確認</button>
          </div>
        </div>
      </div>
    </div>
    <!-- 建立新產品/修改 Modal End -->
    <!-- 刪除 Modal Start -->
    <div class='modal'  id='productModalDel' tabindex='-1'>
      <div class='modal-dialog'>
        <div class='modal-content'>
          <div class='modal-header'>
            <h5 class='modal-title'>刪除商品</h5>
            <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div class='modal-body'>
            <p>產品名稱:{{ tempProduct.title }}</p>
          </div>
          <div class='modal-footer'>
            <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>
            <button type='button' class='btn btn-primary' @click.prevent='delProduct'>確定刪掉</button>
          </div>
        </div>
      </div>
    </div><!-- 刪除 Modal End -->
    <Pagination :pagination='pagination' @event='getapiProducts'></Pagination>
  </div>
</template>
<script>
import $ from 'jquery';
import Pagination from '@/components/Pagination.vue';

export default {
  components: {
    Pagination,
  },
  data() {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: false,
      status: {
        fileUploading: false,
      },
    };
  },
  // 方法
  methods: {
    getapiProducts(page = 1) {
      const vm = this;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/products?page=${page}`;
      vm.$store.dispatch('updateLoading', true);
      vm.$http.get(api).then((response) => {
        vm.products = response.data.products;
        vm.pagination = response.data.pagination;
        vm.$store.dispatch('updateLoading', false);
      });
    },
    openModal(isNew, item) {
      if (isNew) {
        this.tempProduct = {};
        this.isNew = true;
      } else {
        this.tempProduct = { ...item }; // ({},item) es6 方法將item 物件傳入 避免有參考特性
        this.isNew = false;
      }
      $('#productModal').modal('show');
    },
    updateProduct() {
      const vm = this;
      let api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product`;
      let httpMethod = 'post';
      if (!vm.isNew) {
        api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.tempProduct.id}`;
        httpMethod = 'put';
      }
      vm.$http[httpMethod](api, { data: vm.tempProduct }).then((response) => {
        if (response.data) {
          $('#productModal').modal('hide'); // 將modal視窗關閉
          vm.getapiProducts();
        } else {
          $('#productModal').modal('hide');
        }
      });
    },
    delModal(item) {
      const vm = this;
      vm.tempProduct = { ...item };
      $('#productModalDel').modal('show');
    },
    delProduct() {
      const vm = this;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.tempProduct.id}`;
      vm.$http.delete(api).then((response) => {
        if (response.data.success) {
          $('#productModalDel').modal('hide');
          vm.getapiProducts();
        } else {
          $('#productModalDel').modal('hide');
        }
      });
    },
    // 上傳圖檔
    uploadFile() {
      const vm = this;
      const uploadedFile = this.$refs.files.files[0];
      const formData = new FormData();
      formData.append('file-to-upload', uploadedFile);
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/upload`;
      vm.status.fileUploading = true; // 令上傳圖片時 有loading效果 開始
      vm.$http.post(api, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then((response) => {
        vm.status.fileUploading = false; // 令上傳圖片時 有loading效果 關閉
        if (response.data.success) {
          vm.$set(vm.tempProduct, 'imageUrl', response.data.imageUrl); // 強制(位置),(欄位),(上傳的連結)
        } else {
          vm.$bus.$emit('messsage:push', response.data.message, 'danger');
        }
      });
    },
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
  },
  // 預先讀取
  created() {
    const vm = this;
    vm.getapiProducts();
  },
};
</script>

<style scoped>
.itemlist tr td{
  vertical-align: middle;
}
.table {
  border-radius:15px ;
}
</style>
