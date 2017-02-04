<template lang="html">
  <div class="panel-block panel-word">
    <nav class="level is-mobile">
        <div class="level-left">
          <ruby class=""
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
          <p class="" style=""
              v-show="visibility !== 'ja'">
            {{ word.mean }}
          </p>
          <button class="button is-primary is-outlined"
              v-show="visibility === 'ja'"
              @click="showAll">
            표시
          </button>
        </div>
    </nav>
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
.panel-word {
  font-size: 1.25rem;
  display: block;
}

.level {
  min-height: 3rem;
}

.panel-word .level-right {
  margin-top: 0;
}
</style>
