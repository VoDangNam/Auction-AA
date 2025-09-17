import { createRouter, createWebHistory } from 'vue-router';  // cài vue-router: npm install vue-router@next --save

// import checkAdmin from "./checkAdmin";
// import checkUser from "./checkUser";

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Khachhang/Login/index.vue'),
    meta: { layout: "blank" },
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Khachhang/Register/index.vue'),
    meta: { layout: "blank" },
  },

  // trước login - ko cần checkUser
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Khachhang/Home/index.vue'),
    // meta: { layout: "client" },
    // beforeEnter: checkUser,
  },
  {
    path: '/about-us',
    name: 'about_us',
    component: () => import('../views/Khachhang/AboutUs/index.vue'),
    // meta: { layout: "client" },
    // beforeEnter: checkUser,
  },
  {
    path: '/help',
    name: 'help',
    component: () => import('../views/Khachhang/Help/index.vue'),
    // meta: { layout: "client" },
    // beforeEnter: checkUser,
  },

  // sau login - phải checkUser
  {
    path: '/client/home',
    name: 'home_client',
    component: () => import('../views/Client/Home/index.vue'),
    // meta: { layout: "client" },
    // beforeEnter: checkUser,
  },
  {
    path: '/client/auction',
    name: 'auction',
    component: () => import('../views/Client/Auction/index.vue'),
    // meta: { layout: "client" },
    // beforeEnter: checkUser,
  },
  {
    path: '/client/profile',
    name: 'profile',
    component: () => import('../views/Client/Profile/index.vue'),
    meta: { layout: "client" },

    children: [
      {
        path: '',
        redirect: '/client/profile/art-management'
      },
      {
        path: 'art-management',
        name: 'profile-art-management',
        component: () => import('../views/Client/Profile/Management/index.vue')
      },
      {
        path: 'history',
        name: 'profile-history',
        component: () => import('../views/Client/Profile/History/index.vue')
      },
      {
        path: 'invoices',
        name: 'profile-invoices',
        component: () => import('../views/Client/Profile/Invoices/index.vue')
      },
      {
        path: 'e-wallet',
        name: 'profile-e-wallet',
        component: () => import('../views/Client/Profile/EWallet/index.vue')
      },
    ]
    // beforeEnter: checkUser,
  },


]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
export default router
