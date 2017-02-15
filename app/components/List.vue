<template lang="html">
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-6 is-offset-3">
          <template v-if="currentWords">
            <panel :currentWords="currentWords"></panel>
          </template>
          <template v-else>
            <p>loading...</p>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

import * as types from 'store/types'
import Panel from './list/Panel.vue'

export default {

  components: { Panel },

  computed: mapGetters([
    'currentWords'
  ]),

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
        type: types.SWITCH_WORD,
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
