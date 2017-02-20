<template lang="html">
  <section class="hero is-primary is-medium">
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
            <li v-for="(course, index) in courses"
                :class="{ 'is-active': currentCourse.code === course.code }">
              <a @click="switchCourse(index)">
                {{ course.text }}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </section>
</template>

<script>
export default {
  props: ['currentCourse', 'courses'],

  methods: {
    switchCourse(index) {
      this.$emit('switchCourse', index)
    }
  }
}
</script>

<style lang="css">
</style>
