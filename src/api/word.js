import axios from 'axios'

export default {

  getList({ chapter_id }) {
    return axios.get(`/api/wd${chapter_id}.json`)
             .then(response => response.data)
             .catch(error => error)
  }
}
