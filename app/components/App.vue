<template lang="html">
  <div class="sk-app">
    <app-nav></app-nav>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppNav from './app/AppNav.vue'
import AppFooter from './app/AppFooter.vue'

export default {
  components: { AppNav, AppFooter }
}
</script>

<style lang="css">
</style>
