<template lang="html">
  <div class="container">
    <nav class="panel">
      <p class="panel-heading">
        {{ currentChapter }}과
      </p>
      <p class="panel-tabs">
        <a v-for="(val, key) in viewModes"
            :class="{ 'is-active': visibility === key }"
            @click="visibility = key">
          {{ val }}
        </a>
      </p>
      <word v-for="word in currentWordarr" :word="word">
      </word>
    </nav>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

import * as types from '../../store/types'
import Word from './Word.vue'

const viewModes = {
  all: '전체',
  jap: '일본어',
  kor: '한국어'
}

export default {

  components: { Word },

  data() {
    return {
      visibility: 'all',
      viewModes: viewModes
    }
  },

  computed: {
    currentChapter() {
      return this.$store.state.words.currentChapter
    },
    currentWordarr() {
      let currentWords = this.$store.getters.currentWords
      return currentWords ? currentWords.content : []
    }
  },

  created() {
    this.fetchData()
  },

  watch: {
    '$route': 'fetchData'
  },

  methods: {
    fetchData() {
      console.log('fetchData');
      let chapter_num = this.$route.params.chapter_num

      this.$store.commit({
        type: types.SWITCH_CHAPTER,
        chapter_num
      })

      console.log('fetchData midding');

      if (!this.$store.getters.currentWords) {
        this.$store.dispatch({
          type: types.FETCH_WORD,
          chapter_num
        })
      }
    }
  }
}
</script>

<style lang="css">
</style>
