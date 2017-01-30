import * as types from '../types'
import api from '../../api'

const wordsModule = {
  state: {
    words: {
      key: 'hhh',
      value: 12345
    }
  },

  getters: {

  },

  actions: {
    [types.FETCH_WORD] (context, payload) {
      console.log(api);
      console.log(context);
      console.log(payload);
      let chapter_num = 13;
      api.getWord({ chapter_num })
    }
  },

  mutations: {

  }
}

export default wordsModule
