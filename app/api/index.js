import axios from 'axios'

export default {

  getCourse() {
    return axios.get('/api/course.json')
                .then(response => response.data)
                .catch(error => error)
  },

  getWord({ chapter_id }) {
    return axios.get(`/api/wd${chapter_id}.json`)
                .then(response => response.data)
                .catch(error => error)
  }
}
