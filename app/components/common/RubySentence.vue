<template lang="html">
  <p class="ruby-sentence">
    <template v-for="ch in word.characters">
      <span v-if="ch.base && !ch.ruby">{{ ch.base }}</span>
      <ruby v-else-if="ch.base && ch.ruby">
        {{ ch.base }} <rp>(</rp><rt>{{ ch.ruby }}</rt><rp>)</rp>
      </ruby>
    </template>
  </p>
</template>

<script>
export default {
  props: ['word']
}
</script>

<style lang="css">
</style>
