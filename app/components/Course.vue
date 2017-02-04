<template lang="html">
  <div>
    <hero :course_ordinal="course_ordinal"></hero>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-6 is-offset-3">
            <course-table :course_ordinal="course_ordinal"></course-table>
          </div>
        </div>
      </div>
    </section>
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

</style>
