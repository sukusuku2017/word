<template lang="html">
  <section class="section">
    <div class="container">
      <template v-if="currentSentences">
        <list :currentSentences="currentSentences"></list>
      </template>
      <template v-else>
        <p>loading...</p>
      </template>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

import * as types from 'store/types'
import List from './sentence/List.vue'

export default {
  components: { List },

  computed: mapGetters([
    'currentSentences'
  ]),

  created() {
    this.fetchData()
  },

  methods: {
    fetchData() {
      let chapter_id = this.$route.params.chapter_id

      this.$store.commit({
        type: types.SWITCH_SENTENCE,
        chapter_id
      })

      if (!this.$store.getters.currentSentences) {
        this.$store.dispatch({
          type: types.FETCH_SENTENCE,
          chapter_id
        })
      }
    }
  }
}
</script>

<style lang="css">
</style>
