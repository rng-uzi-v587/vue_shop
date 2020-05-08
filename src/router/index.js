import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    component: () => import('../components/Login')
  },
  {
    path: '/home',
    component: () => import('../components/Home'),
    children: [
      {
        path: '/users',
        component: () => import('../components/user/Users')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
