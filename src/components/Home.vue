<template lang="html">
  <div class="home container">
    <h1>Home</h1>
    <course></course>

    <router-link to="/chapter" class="nav-item">
      Go to Chapter
    </router-link>
  </div>
</template>

<script>
import Course from './Course.vue'

export default {
  components: {
    Course
  }
}
</script>

<style lang="css">
</style>
