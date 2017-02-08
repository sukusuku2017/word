<template lang="html">
  <section class="section">
    <div class="container">
      <template v-if="currentWords">
        <list :currentWords="currentWords"></list>
      </template>
      <template v-else>
        <p>loading...</p>
      </template>
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
    currentWords() {
      return this.$store.getters.currentWords
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
