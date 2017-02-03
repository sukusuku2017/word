<template lang="html">
  <div class="">
    <hero :course_ordinal="course_ordinal"></hero>
    <div class="container">
      <div class="columns course-columns">
        <div class="column is-10 is-offset-1 is-6-desktop is-offset-3-desktop">
          <course-table :course_ordinal="course_ordinal"></course-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from './course/Hero.vue'
import CourseTable from './course/CourseTable.vue'

export default {

  components: { Hero, CourseTable },

  data() {
    return {
      course_ordinal: 'first'
    }
  },

  created() {
    this.changeOrdinal()
  },

  watch: {
    '$route': 'changeOrdinal'
  },

  methods: {
    changeOrdinal() {
      this.course_ordinal = this.$route.params.course_ordinal
    }
  }
}
</script>

<style lang="css">
.course-columns {
  padding-top: 3rem;
  padding-bottom: 3rem;
}
</style>
