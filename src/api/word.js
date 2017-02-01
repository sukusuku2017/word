import axios from 'axios'

export default {

  getList({ chapter_num }) {
    return axios.get(`/api/ch${chapter_num}.json`)
             .then(response => response.data)
             .catch(error => error)
  }
}
