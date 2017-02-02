import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import Home from './components/Home.vue'
import About from './components/About.vue'
import Course from './components/Course.vue'
import Chapter from './components/chapter/Chapter.vue'
import App from './components/App.vue'

import store from './store'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/course', component: Course },
  { path: '/about', component: About },
  { path: '/chapter/:chapter_num', component: Chapter }
]

const router = new VueRouter({
  routes
})

const vm = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
