<template lang="html">
  <section class="section">
    <div class="container">
      <template v-if="currentExceptions">
        <list :currentWords="currentExceptions"></list>
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
import List from './exception/List.vue'

export default {

  components: { List },

  computed: mapGetters([
    'currentExceptions'
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
        type: types.SWITCH_EXCEPTION,
        chapter_id
      })

      if (!this.$store.getters.currentExceptions) {
        this.$store.dispatch({
          type: types.FETCH_EXCEPTION,
          chapter_id
        })
      }
    }
  }
}
</script>

<style lang="css">
</style>