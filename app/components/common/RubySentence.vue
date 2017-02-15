<template lang="html">
  <p class="ruby-sentence">
    <template v-for="ch in sentence.characters">
      <template v-if="ch.ruby">
        <ruby :class="{ bold: ch.bold, color: ch.color}">
          {{ ch.base }} <rp>(</rp><rt>{{ ch.ruby }}</rt><rp>)</rp>
        </ruby>
      </template>
      <template v-else>
        <span :class="{ bold: ch.bold, color: ch.color}">{{ ch.base }}</span>
      </template>
    </template>
  </p>
</template>

<script>
export default {
  props: ['sentence']
}
</script>

<style lang="css">
.bold {
  font-weight: bold;
  color: #00008b;
}
.color {
  color: #ff8c00;
}
</style>
