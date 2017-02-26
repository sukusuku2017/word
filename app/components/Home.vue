<template lang="html">
  <div class="home">
    <hero></hero>
    <feature></feature>
    <course></course>
    <hr class="is-maginless">
    <sentence></sentence>
    <hr class="is-maginless">
    <list></list>
    <hr class="is-maginless">
    <card></card>
  </div>
</template>

<script>
import Hero from './home/Hero.vue'
import Feature from './home/Feature.vue'
import Course from './home/Course.vue'
import Sentence from './home/Sentence.vue'
import List from './home/List.vue'
import Card from './home/Card.vue'

export default {
  components: { Hero, Feature, Course, Sentence, List, Card }
}
</script>

<style lang="css">
</style>
