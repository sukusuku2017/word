<template lang="html">
  <div class="sukusuku-app">
    <h1>{{ title }}</h1>

    <router-link to="/home">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link>
    <!-- route outlet -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'SukuSuku 2017'
    }
  }
}
</script>

<style lang="css">
</style>
