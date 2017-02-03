import { set } from 'vue'
import WordAPI from 'api/word'
import * as types from 'store/types'

const wordsModule = {
  state: {
    currentChapter: '',
    chapters: {
      /*
      chapter_id: {
        chapter: 'ch13',
        content: []
      }
      */
    }
  },

  getters: {
    currentWords: state => {
      return state.currentChapter
        ? state.chapters[state.currentChapter]
        : {}
    }
  },

  actions: {
    [types.FETCH_WORD] (context, { chapter_id }) {
      // console.log('FETCH_WORD')
      WordAPI.getList({ chapter_id })
        .then(words => {
          context.commit(types.RECEIVE_WORDS, { chapter_id, words })
        })
    }
  },

  mutations: {
    [types.SWITCH_CHAPTER] (state, { chapter_id }) {
      // console.log('SWITCH_CHAPTER')
      state.currentChapter = chapter_id
    },
    [types.RECEIVE_WORDS] (state, { chapter_id, words }) {
      set(state.chapters, chapter_id, words)
    }
  }
}

export default wordsModule
