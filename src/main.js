import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import Home from './components/Home.vue'
import About from './components/About.vue'
import Course from './components/Course.vue'
import Word from './components/Word.vue'
import App from './components/App.vue'

import store from './store'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/course/:course_ordinal', component: Course },
  { path: '/word/:chapter_id', component: Word },
  { path: '/about', component: About }
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
