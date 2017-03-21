import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import App from 'components/App.vue'
import Home from 'components/Home.vue'
import Course from 'components/Course.vue'
import Sentence from 'components/Sentence.vue'
import List from 'components/List.vue'
import Card from 'components/Card.vue'
import Exception from 'components/Exception.vue'
import About from 'components/About.vue'

import store from 'store'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/course', component: Course },
  { path: '/sentence/:chapter_id', component: Sentence },
  { path: '/list/:chapter_id', component: List },
  { path: '/card/:chapter_id', component: Card },
  { path: '/exception/:chapter_id', component: Exception },
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
