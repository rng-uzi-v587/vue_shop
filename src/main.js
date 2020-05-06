import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

//  导入全局样式
import './assets/css/global.css'

//  导入axios
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
Vue.prototype.$http = axios

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  const token = window.sessionStorage.getItem('token')
  if (!token) return next('/login')
  next()
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
