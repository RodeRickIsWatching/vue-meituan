import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/changeCity',
      name: 'changeCity',
      component: () => import('./views/changeCity.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/register.vue')
    },
    {
      path: '/p',
      name: 'product',
      component: () => import('./views/product.vue')
    }
  ]
})