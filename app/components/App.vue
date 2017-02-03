<template lang="html">
  <div class="sukusuku-app">
    <!-- route outlet -->
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppFooter from './app/AppFooter.vue'

export default {
  components: { AppFooter }
}
</script>

<style lang="css">
</style>
