import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    redirect: '/', // 輸入沒有的路徑會被帶回首頁
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // Coustomer
  {
    path: '/coustomer_Product',
    name: 'Coustomer_Product',
    component: () => import('../views/Coustomer/Product.vue'),
    children: [
      {
        path: 'category',
        name: 'Category',
        component: () => import('../views/Coustomer/Category.vue'),
      },
    ],
  },
  {
    path: '/product_detail/:productId',
    name: '/Product_detail',
    component: () => import('../views/Coustomer/Product.detail.vue'),
  },
  // Cart購物車
  {
    path: '/customer_checkout/:orderId',
    name: '/Coustomer_Checkout',
    component: () => import('../views/Cart/Checkout.vue'),
  },
  {
    path: '/customer_cart',
    name: '/Customer_Cart',
    component: () => import('../views/Cart/Cart.vue'),
  },
  // 後台
  {
    path: '/admin',
    name: 'dashboard',
    component: () => import('../views/Admin_Dashboard.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: 'product',
        name: 'Product',
        component: () => import('../views/Admin_Product.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'orderlist',
        name: 'OrderList',
        component: () => import('../views/Admin_OrderList.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'discount',
        name: 'Discount',
        component: () => import('../views/Admin_Discount.vue'),
        meta: { requiresAuth: true },
      },

    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
