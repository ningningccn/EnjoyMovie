import Vue from 'vue';

Vue.prototype.$bus = new Vue();
// this.$bus.$emit('messsage:push', response.data.message , 'danger');
// danger(String) : Alert樣式
