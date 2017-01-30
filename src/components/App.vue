<template lang="html">
  <div class="sukusuku-app">
    <div class="container">
      <nav class="nav">
        <div class="nav-left">
          <a class="nav-item">{{ title }}</a>
        </div>
        <div class="nav-right nav-menu">
          <router-link to="/home" class="nav-item">
            Go to Home
          </router-link>
          <router-link to="/about" class="nav-item">
            Go to About
          </router-link>
        </div>
      </nav>
    </div>
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
