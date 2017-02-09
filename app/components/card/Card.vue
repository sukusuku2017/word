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
    <div class="card-content has-text-centered is-warning">
      <ruby class="wf-notosansjapanese">
        <template v-if="word.base">
          {{ word.base }}
          <template v-if="word.ruby">
            <rp>(</rp><rt>{{ word.ruby }}</rt><rp>)</rp>
          </template>
        </template>
        <template v-else v-for="ch in word.characters">
          {{ ch.base }}
          <rp v-if="ch.ruby">(</rp>
          <rt>{{ ch.ruby }}</rt>
          <rp v-if="ch.ruby">)</rp>
        </template>
      </ruby>
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
export default {

  props: ['word']
}
</script>

<style lang="css">
.card-word .card-content {
  font-size: 2rem;
}
</style>
