import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import About from './components/About.vue'
import Chapter from './components/chapter/Chapter.vue'
import App from './components/App.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/home', component: Home },
  { path: '/about', component: About },
  { path: '/chapter', component: Chapter }
]

const router = new VueRouter({
  routes
})

const vm = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
