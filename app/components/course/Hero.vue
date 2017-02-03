<template lang="html">
  <section class="hero is-primary is-bold is-medium">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
          すくすく　日本語
        </h1>
        <h2 class="subtitle">
          단어장
        </h2>
      </div>
    </div>

    <div class="hero-foot">
      <nav class="tabs is-boxed">
        <div class="container">
          <ul>
            <li v-for="course in courseData"
                :class="{ 'is-active': course_ordinal === course.code }">
              <router-link :to="`/course/${course.code}`">
                {{ course.text }}
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </section>
</template>

<script>
const courseData = [
  { code: 'first',  text: '1코스' },
  { code: 'second', text: '2코스' },
  { code: 'third',  text: '3코스' },
  { code: 'fourth', text: '4코스' }
]

export default {

  data() {
    return {
      courseData
    }
  },

  props: ['course_ordinal']
}
</script>

<style lang="css">
</style>
