import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
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
    component: () => import('../views/Front/Product/Product.vue'),
    children: [
      {
        path: 'category',
        name: 'Category',
        component: () => import('../views/Front/Product/page/Category.vue'),
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
    path: '/cart',
    name: '/Customer_Cart',
    component: () => import('../views/Cart/Cart.vue'),
    children: [
      {
        path: 'checkproduct',
        name: 'CheckProduct',
        component: () => import('../views/Cart/CheckProduct.vue'),
      },
      {
        path: 'cartform',
        name: 'CheckForm',
        component: () => import('../views/Cart/CheckForm.vue'),
      },
      {
        path: 'checkout/:orderId',
        name: 'Checkout',
        component: () => import('../views/Cart/Checkout.vue'),
      },
    ],
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
  {
    path: '*',
    redirect: '/',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
