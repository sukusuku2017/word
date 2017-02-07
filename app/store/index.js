import Vue from 'vue'
import Vuex from 'vuex'

import course from './modules/course'
import words from './modules/words.js'
import sentences from './modules/sentences'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    course,
    words,
    sentences
  }
})

export default store
