<template lang="html">
  <div>
    <hero :course_ordinal="course_ordinal"></hero>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-6 is-offset-3">
            <app-table :course_ordinal="course_ordinal"></app-table>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Hero from './course/Hero.vue'
import AppTable from './course/AppTable.vue'

export default {

  components: { Hero, AppTable },

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
