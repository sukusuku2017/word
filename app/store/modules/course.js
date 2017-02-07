import { set } from 'vue'
import API from 'api'
import * as types from 'store/types'

const courseModule = {
  state: {
    course: [
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

  actions: {
    [types.FETCH_COURSE] (context) {
      API.getCourse()
        .then(course => {
          context.commit(types.RECEIVE_COURSE, { course })
        })
    }
  },

  mutations: {
    [types.RECEIVE_COURSE] (state, { course }) {
      set(state.course, course)
    }
  }
}

export default courseModule
