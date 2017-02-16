import { set } from 'vue'
import API from 'api'
import * as types from 'store/types'

const sentencesModule = {
  state: {
    currentChapter: '00',
    sentences: {
      /*
      chapter_id: {
        "chapter": "21",
        "update": "2017-02-15",
        "author": [],
        "subject": {},
        "content": []
      }
      */
    }
  },

  getters: {
    currentSentences: state => state.sentences[state.currentChapter]
  },

  actions: {
    [types.FETCH_SENTENCE] (context, { chapter_id }) {
      API.getSentence({ chapter_id })
        .then(sentences => {
          context.commit(types.RECEIVE_SENTENCE, { chapter_id, sentences })
        })
    }
  },

  mutations: {
    [types.SWITCH_SENTENCE] (state, { chapter_id }) {
      state.currentChapter = chapter_id
    },
    [types.RECEIVE_SENTENCE] (state, { chapter_id, sentences }) {
      set(state.sentences, chapter_id, sentences)
    }
  }
}

export default sentencesModule
