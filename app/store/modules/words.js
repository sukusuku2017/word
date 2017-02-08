import { set } from 'vue'
import API from 'api'
import * as types from 'store/types'

const wordsModule = {
  state: {
    currentChapter: '00',
    chapters: {
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
    currentWords: state => {
      return state.currentChapter
        ? state.chapters[state.currentChapter]
        : { chapter: 'loading', content: [] }
    }
  },

  actions: {
    [types.FETCH_WORD] (context, { chapter_id }) {
      API.getWord({ chapter_id })
        .then(words => {
          context.commit(types.RECEIVE_WORDS, { chapter_id, words })
        })
    }
  },

  mutations: {
    [types.SWITCH_CHAPTER] (state, { chapter_id }) {
      state.currentChapter = chapter_id
    },
    [types.RECEIVE_WORDS] (state, { chapter_id, words }) {
      set(state.chapters, chapter_id, words)
    }
  }
}

export default wordsModule
