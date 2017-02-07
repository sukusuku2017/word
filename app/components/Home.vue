<template lang="html">
  <div class="home">
    <hero></hero>
    <feature></feature>
    <list></list>
    <hr class="is-maginless">
    <card></card>
  </div>
</template>

<script>
import Hero from './home/Hero.vue'
import Feature from './home/Feature.vue'
import List from './home/List.vue'
import Card from './home/Card.vue'


export default {

  components: { Hero, Feature, List, Card }
}
</script>

<style lang="css">
</style>
