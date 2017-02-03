import Vue from 'vue'
import Vuex from 'vuex'

import words from './modules/words.js'
import sentences from './modules/sentences'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    words,
    sentences
  }
})

export default store
