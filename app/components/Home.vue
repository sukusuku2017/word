<template lang="html">
  <div class="home">
    <hero></hero>
    <feature></feature>
    <state></state>
  </div>
</template>

<script>
import Hero from './home/Hero.vue'
import Feature from './home/Feature.vue'
import State from './home/State.vue'

export default {

  components: { Hero, Feature, State }
}
</script>

<style lang="css">
</style>
