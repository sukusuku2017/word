<template lang="html">
  <div class="panel-block" style="display: block;">
    <div class="level is-flex-mobile">
        <div class="level-left">
          <ruby class="title is-2"
              v-show="visibility !== 'ko'">
            <template v-for="ch in word.characters">
              {{ ch.base }}
              <rp v-if="ch.ruby">(</rp>
              <rt>{{ ch.ruby }}</rt>
              <rp v-if="ch.ruby">)</rp>
            </template>
          </ruby>
          <button class="button is-primary is-outlined"
              v-show="visibility === 'ko'"
              @click="showAll">
            表示
          </button>
        </div>
        <div class="level-right">
          <p class="title is-3"
              v-show="visibility !== 'ja'">
            {{ word.mean }}
          </p>
          <button class="button is-primary is-outlined"
              v-show="visibility === 'ja'"
              @click="showAll">
            표시
          </button>
        </div>
    </div>
  </div>
</template>

<script>
export default {

  props: ['word', 'visibility'],

  methods: {
    showAll() {
      this.visibility = 'all'
    }
  }
}
</script>

<style lang="css">
.level {
  min-height: 7rem;
}
</style>
