<template lang="html">
  <section class="hero is-primary is-bold is-medium">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
          すくすく
        </h1>
        <h2 class="subtitle">
          日本語
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
  { code: 'first',  text: '1コース' },
  { code: 'second', text: '2コース' },
  { code: 'third',  text: '3コース' },
  { code: 'fourth', text: '4コース' }
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
