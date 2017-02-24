import { set } from 'vue'
import API from 'api'
import * as types from 'store/types'

const exceptionsModule = {
  state: {
    currentChapter: '00',
    exceptions: {
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
    currentExceptions: state => state.exceptions[state.currentChapter]
  },

  actions: {
    [types.FETCH_EXCEPTION] (context, { chapter_id }) {
      API.getException({ chapter_id })
        .then(exceptions => {
          context.commit(types.RECEIVE_EXCEPTION, { chapter_id, exceptions })
        })
    }
  },

  mutations: {
    [types.SWITCH_EXCEPTION] (state, { chapter_id }) {
      state.currentChapter = chapter_id
    },
    [types.RECEIVE_EXCEPTION] (state, { chapter_id, exceptions }) {
      set(state.exceptions, chapter_id, exceptions)
    }
  }
}

export default exceptionsModule