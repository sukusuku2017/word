<template lang="html">
  <div class="home container">
    <h1>Home</h1>
    <course></course>

    <router-link to="/chapter/13" class="nav-item">
      Go to Chapter13
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
