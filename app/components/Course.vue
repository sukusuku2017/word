<template lang="html">
  <div>
    <hero :currentCourse="currentCourse"
        :courses="courses"
        v-on:switchCourse="switchCourse">
    </hero>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-6 is-offset-3">
            <app-table v-if="currentCourse" :currentCourse="currentCourse"></app-table>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import * as types from 'store/types'
import Hero from './course/Hero.vue'
import AppTable from './course/AppTable.vue'

export default {

  components: { Hero, AppTable },

  computed: mapGetters([
    'currentCourse',
    'courses'
  ]),

  created() {
    this.fetchCourse()
  },

  methods: {
    fetchCourse() {
      if (!this.$store.state.course.content.length) {
        this.$store.dispatch({
          type: types.FETCH_COURSE
        })
      }
    },
    switchCourse(course) {
      this.$store.commit({
        type: types.SWITCH_COURSE,
        course
      })
    }
  }
}
</script>

<style lang="css">
</style>
