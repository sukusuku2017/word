import axios from 'axios'

export default {

  getCourse() {
    return axios.get('/api/course/course.json')
                .then(response => response.data)
                .catch(error => error)
  },

  getSentence({ chapter_id }) {
    return axios.get(`/api/sentences/st${chapter_id}.json`)
                .then(response => response.data)
                .catch(error => error)
  },

  getWord({ chapter_id }) {
    return axios.get(`/api/words/wd${chapter_id}.json`)
                .then(response => response.data)
                .catch(error => error)
  }
}
