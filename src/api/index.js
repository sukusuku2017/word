import axios from 'axios'

export default {

  getWord({ chapter_num }) {
    axios.get(`/api/ch${chapter_num}.json`)
      .then(response => response)
      .catch(error => error)
  }
}
