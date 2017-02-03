<template lang="html">
  <section class="hero is-primary is-bold is-medium">
    <!-- Hero header: will stick at the top -->
    <div class="hero-head">
      <header class="nav">
        <div class="container">
          <div class="nav-left">
            <router-link to="/" class="nav-item">
              すくすく
            </router-link>
          </div>
          <div class="nav-right nav-menu">
            <router-link to="/" class="nav-item">
              Home
            </router-link>
            <router-link to="/course/first" class="nav-item is-active">
              Course
            </router-link>
          </div>
        </div>
      </header>
    </div>

    <!-- Hero content: will be in the middle -->
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

    <!-- Hero footer: will stick at the bottom -->
    <div class="hero-foot">
      <nav class="tabs is-boxed is-fullwidth">
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
