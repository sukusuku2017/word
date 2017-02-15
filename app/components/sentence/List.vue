<template lang="html">
  <div class="app-card-list">
    <h2 class="title is-2">
      Sentence List
    </h2>
    <div class="columns is-multiline">
      <template v-for="(sentence, index) in currentSentences.content">
        <div class="column is-1">
          <a class="button is-large">
            {{ index + 1 }}
          </a>
        </div>
        <div class="column is-11">
          <message :sentence="sentence"></message>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import Message from './Message.vue'

export default {
  components: { Message },
  props: ['currentSentences']
}
</script>

<style lang="css">
</style>
