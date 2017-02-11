<template lang="html">
  <ruby class="ruby-word">
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
</template>

<script>
export default {
  props: ['word']
}
</script>

<style lang="css">
</style>
