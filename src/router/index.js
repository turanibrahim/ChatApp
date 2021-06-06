import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/auth',
    name: 'Auth',
    component: () => import(/* webpackChunkName: "auth" */ '../views/Auth/index'),
    redirect: '/auth/login',
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "auth" */ '../views/Auth/Login'),
        default: true,
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import(/* webpackChunkName: "auth" */ '../views/Auth/Register'),
      },
    ],
  },
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home'),
  },
  {
    path: '/deneme',
    name: 'deneme',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const { isAuthenticated } = store.getters;
  const paths = ['Login', 'Auth', 'Register'];

  if (!paths.includes(to.name) && !isAuthenticated) {
    next({
      name: 'Login',
      params: {
        from: to.path,
      },
    });
  } else if (paths.includes(to.name) && isAuthenticated) {
    next({ name: 'Home' });
  } else {
    next();
  }
});

export default router;
