import Vue from 'vue'
import Vuex from 'vuex'

import course from './modules/course'
import sentences from './modules/sentences'
import words from './modules/words.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    course,
    sentences,
    words
  }
})

export default store
