import { set } from 'vue'
import word from '../../api/word.js'
import * as types from '../types'

const wordsModule = {
  state: {
    currentChapter: '',
    chapters: {
      /*
      chapter_num: {
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
    [types.FETCH_WORD] (context, { chapter_num }) {
      // console.log('FETCH_WORD')
      word.getList({ chapter_num })
        .then(words => {
          context.commit(types.RECEIVE_WORDS, { chapter_num, words })
        })
    }
  },

  mutations: {
    [types.SWITCH_CHAPTER] (state, { chapter_num }) {
      // console.log('SWITCH_CHAPTER')
      state.currentChapter = chapter_num
    },
    [types.RECEIVE_WORDS] (state, { chapter_num, words }) {
      set(state.chapters, chapter_num, words)
    }
  }
}

export default wordsModule
