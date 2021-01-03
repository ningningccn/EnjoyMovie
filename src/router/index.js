import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Frontend/Login/Login.vue'),
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
    component: () => import('../views/Frontend/Product/Product.vue'),
    children: [
      {
        path: 'category',
        name: 'Category',
        component: () => import('../views/Frontend/Product/page/Category.vue'),
      },
    ],
  },
  {
    path: '/product_detail/:productId',
    name: '/Product_detail',
    component: () => import('../views/Frontend/Product/Product.detail.vue'),
  },
  // Cart購物車
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Frontend/Cart/Cart.vue'),
    children: [
      {
        path: 'checkproduct',
        name: 'CheckProduct',
        component: () => import('../views/Frontend/Cart/page/CheckProduct.vue'),
      },
      {
        path: 'cartform',
        name: 'CheckForm',
        component: () => import('../views/Frontend/Cart/page/CheckForm.vue'),
      },
      {
        path: 'checkout/:orderId',
        name: 'Checkout',
        component: () => import('../views/Frontend/Cart/page/Checkout.vue'),
      },
    ],
  },
  // Backend
  {
    path: '/admin',
    name: 'dashboard',
    component: () => import('../views/Backend/Dashboard.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: 'product',
        name: 'Product',
        component: () => import('../views/Backend/page/Product/Product.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'orderlist',
        name: 'OrderList',
        component: () => import('../views/Backend/page/OrderList/OrderList.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'discount',
        name: 'Discount',
        component: () => import('../views/Backend/page/Discount/Discount.vue'),
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
