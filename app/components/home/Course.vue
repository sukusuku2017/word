<template lang="html">
  <section class="section section-course">
    <div class="container">
      <div class="columns" v-for="(co, index) in courses">
        <div class="column is-8"
            v-bind:class="[ `is-offset-${index + 1}` ]">

          <div class="columns columns-course">
            <div class="column is-2">
              <button class="button is-primary is-outlined is-large"
                  v-on:click="route(index)">
                {{ co.title }}
              </button>
            </div>
            <div class="column is-10">
              <p class="title is-3">
                {{ co.description }}
              </p>
              <p class="subtitle is-4">
                {{ co.contents }}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import courses from './courses.json'
import * as types from 'store/types'

export default {

  data() {
    return { courses }
  },

  methods: {
    route(course) {
      this.$store.commit({
        type: types.SWITCH_COURSE,
        course
      })
      this.$router.push('course')
    }
  }
}
</script>

<style lang="css">
.columns-course {
  border-top: solid 1px;
  padding-top: 3rem;
  padding-bottom: 3rem;
}
</style>
