<template lang="html">
  <p class="ruby-sentence">
    <span v-if="word.base && !word.ruby">
      {{ word.base }}
    </span>
    <ruby v-else-if="word.base && word.ruby">
      {{ word.base }}
      <rp>(</rp><rt>{{ word.ruby }}</rt><rp>)</rp>
    </ruby>
    <template v-else-if="word.characters">
      <template v-for="ch in word.characters">
        <span v-if="ch.base && !ch.ruby">{{ ch.base }}</span>
        <ruby v-else-if="ch.base && ch.ruby">
          {{ ch.base }} <rp>(</rp><rt>{{ ch.ruby }}</rt><rp>)</rp>
        </ruby>
      </template>
    </template>
    <span v-else>
      Data Error
    </span>
  </p>
</template>

<script>
export default {
  props: ['word']
}
</script>

<style lang="css">
</style>
