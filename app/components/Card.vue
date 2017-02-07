<template lang="html">
  <section class="section">
    <div class="container">
      <list :currentChapter="currentChapter"
          :currentWords="currentWords">
      </list>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

import * as types from 'store/types'
import List from './card/List.vue'

export default {

  components: { List },

  computed: {
    currentChapter() {
      return this.$store.state.words.currentChapter
    },
    currentWords() {
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
      let chapter_id = this.$route.params.chapter_id

      this.$store.commit({
        type: types.SWITCH_CHAPTER,
        chapter_id
      })

      if (!this.$store.getters.currentWords) {
        this.$store.dispatch({
          type: types.FETCH_WORD,
          chapter_id
        })
      }
    }
  }
}
</script>

<style lang="css">
</style>
