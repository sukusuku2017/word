<template lang="html">
  <div class="app-card-list">
    <div class="columns is-multiline">
      <div class="column is-1">
        <span class="tag is-dark is-large">
          第 {{ currentSentences.chapter }} 課
        </span>
      </div>
      <div class="column is-11">
        <subject :subject="currentSentences.subject"
            :chapter="currentSentences.chapter">
        </subject>
      </div>
      <template v-for="(sentence, index) in currentSentences.content">
        <div class="column is-1">
          <span class="tag is-light is-large">
            {{ index + 1 }}
          </span>
        </div>
        <div class="column is-11">
          <card :sentence="sentence"></card>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import Subject from './Subject.vue'
import Card from './Card.vue'

export default {
  components: { Subject, Card },
  props: ['currentSentences']
}
</script>

<style lang="css">
</style>
