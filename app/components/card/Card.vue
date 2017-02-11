<template lang="html">
  <div class="card card-word">
    <header class="card-header">
      <p class="card-header-title">
        {{ word.mean }}
      </p>
      <a class="card-header-icon">
        <span class="icon">
          <i class="fa fa-angle-down"></i>
        </span>
      </a>
    </header>
    <div class="card-content has-text-centered">
      <ruby-word class="wf-notosansjapanese" :word="word"></ruby-word>
    </div>
    <footer class="card-footer">
      <template v-if="!word.characters">
        <div class="card-footer-item">
          -
        </div>
      </template>
      <template v-else v-for="ch in word.characters">
        <div v-if="ch.mean" class="card-footer-item">
          <span class="wf-notosansjapanese">{{ ch.base }}</span>
          &nbsp;
          <span>{{ ch.mean }}</span>
        </div>
      </template>
    </footer>
  </div>
</template>

<script>
import RubyWord from 'components/common/RubyWord.vue'

export default {
  components: { RubyWord },
  props: ['word']
}
</script>

<style lang="css">
.card-word .card-content {
  font-size: 2rem;
}
</style>
