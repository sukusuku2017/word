<template lang="html">
  <div class="panel-block panel-word">
    <nav class="level is-mobile">
        <div class="level-left">
          <ruby-word class="wf-notosansjapanese"
              :word="word"
              v-show="visibility !== 'ko'">
          </ruby-word>
          <button class="button is-primary is-outlined"
              v-show="visibility === 'ko'"
              @click="changeVisibility('all')">
            表示
          </button>
        </div>

        <div class="level-right">
          <p v-show="visibility !== 'ja'">
            {{ word.mean }}
          </p>
          <button class="button is-primary is-outlined"
              v-show="visibility === 'ja'"
              @click="changeVisibility('all')">
            表示
          </button>
        </div>
    </nav>
  </div>
</template>

<script>
import RubyWord from 'components/common/RubyWord.vue'

export default {

  components: { RubyWord },

  props: ['word', 'panelVisibility'],

  data() {
    return {
      visibility: this.panelVisibility
    }
  },

  watch: {
    'panelVisibility': 'changeVisibility'
  },

  methods: {
    changeVisibility(newValue) {
      this.visibility = newValue || 'all'
    }
  }
}
</script>

<style lang="css">
.panel-word {
  font-size: 2rem;
  display: block;
}

.panel-word .level {
  min-height: 4.5rem;
}

.panel-word .level-right {
  margin-top: 0;
}
</style>
