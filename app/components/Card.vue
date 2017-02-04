<template lang="html">
  <section class="section">
    <div class="container">
      <h1>
        {{ currentChapter }}
      </h1>
      <div class="columns is-multiline">
        <div class="column is-3"
            v-for="word in currentWords">
          <app-card :word="word"></app-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

import * as types from 'store/types'
import AppCard from './card/AppCard.vue'

export default {

  components: { AppCard },

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
