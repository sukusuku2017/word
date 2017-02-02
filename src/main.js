import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import Home from 'components/Home.vue'
import About from 'components/About.vue'
import Course from 'components/Course.vue'
import List from 'components/List.vue'
import App from 'components/App.vue'

import store from 'store'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/course/:course_ordinal', component: Course },
  { path: '/list/:chapter_id', component: List },
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
