<template lang="html">
  <div class="panel-block" style="display: block;">
    <div class="level">
        <div class="level-left">
          <ruby class="subtitle is-2">
            <template v-for="ch in word.characters">
              {{ ch.base }}
              <rp v-if="ch.ruby">(</rp>
              <rt >{{ ch.ruby }}</rt>
              <rp v-if="ch.ruby">)</rp>
            </template>
          </ruby>
        </div>
        <div class="level-right">
          {{ word.mean }}
        </div>
    </div>
  </div>
</template>

<script>
export default {

  props: ['word']
}
</script>

<style lang="css">
</style>
