<template lang="html">
  <div>
    <hero :course_ordinal="course_ordinal"></hero>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-6 is-offset-3">
            <app-table :currentCourse="currentCourse"></app-table>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import _ from 'lodash'

import * as types from 'store/types'
import Hero from './course/Hero.vue'
import AppTable from './course/AppTable.vue'

export default {

  components: { Hero, AppTable },

  data() {
    return {
      'course_ordinal': 'first'
    }
  },

  computed: mapState({
    content: state => state.course.content,

    currentCourse(state) {
      let course = _.find(state.course.content, { code: this.course_ordinal })
      return course ? course.content : []
    }
  }),

  created() {
    this.changeOrdinal()
  },

  watch: {
    '$route': 'changeOrdinal'
  },

  methods: {
    changeOrdinal() {
      this.course_ordinal = this.$route.params.course_ordinal

      if (!this.$store.state.course.content.length) {
        this.$store.dispatch({
          type: types.FETCH_COURSE
        })
      }
    }
  }
}
</script>

<style lang="css">
</style>
