import { set } from 'vue'
import API from 'api'
import * as types from 'store/types'

const wordsModule = {
  state: {
    currentChapter: '00',
    words: {
      /*
      chapter_id: {
        "chapter": "04",
        "update": "2017-02-07",
        "author": [],
        "content": []
      }
      */
    }
  },

  getters: {
    currentWords: state => state.words[state.currentChapter]
  },

  actions: {
    [types.FETCH_WORD] (context, { chapter_id }) {
      API.getWord({ chapter_id })
        .then(words => {
          context.commit(types.RECEIVE_WORD, { chapter_id, words })
        })
    }
  },

  mutations: {
    [types.SWITCH_WORD] (state, { chapter_id }) {
      state.currentChapter = chapter_id
    },
    [types.RECEIVE_WORD] (state, { chapter_id, words }) {
      set(state.words, chapter_id, words)
    }
  }
}

export default wordsModule
