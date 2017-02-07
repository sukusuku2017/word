<template lang="html">
  <div class="app-card-list">
    <h3 class="title is-3">
      第 {{ currentChapter }} 課
    </h3>
    <div class="columns is-multiline">
      <div class="column is-6-tablet is-4-desktop"
          v-for="word in currentWords">
        <card :word="word"></card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from './Card.vue'

export default {

  components: { Card },

  props: ['currentChapter', 'currentWords']
}
</script>

<style lang="css">
</style>
