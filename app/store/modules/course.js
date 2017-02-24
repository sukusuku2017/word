import { set } from 'vue'
import _ from 'underscore'
import API from 'api'
import * as types from 'store/types'

const courseModule = {
  state: {
    currentCourse: 0,
    content: [
      /*
      {
        "code": "first",
        "text": "1코스",
        "content": [
          { "ch": "01", "st": "-", "wd": "", "ud": "----/--/--" },
        ]
      }
      */
    ]
  },

  getters: {
    currentCourse: state => state.content[state.currentCourse],

    courses: (state) => {
      return _.map(state.content, (course) => {
        return _.pick(course, ['code', 'text'])
      })
    }
  },

  actions: {
    [types.FETCH_COURSE] (context) {
      API.getCourse()
        .then(course => {
          context.commit(types.RECEIVE_COURSE, { course })
        })
    }
  },

  mutations: {
    [types.SWITCH_COURSE] (state, { course }) {
      set(state, 'currentCourse', course)
    },
    [types.RECEIVE_COURSE] (state, { course }) {
      set(state, 'content', course)
    }
  }
}

export default courseModule
