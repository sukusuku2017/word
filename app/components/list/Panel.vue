<template lang="html">
  <nav class="panel">
    <div class="panel-heading">
      <div class="is-clearfix">
        <div class="is-pulled-left">
          第 {{ currentWords.chapter }} 課
        </div>
        <div class="is-pulled-right">
          <span class="tag is-white is-medium">
            {{ currentWords.content.length }} 個
          </span>
        </div>
      </div>
    </div>
    <div class="panel-block panel-audio">
      <audio controls="controls" preload="none">
        <source :src="`/mp3/words/wd${currentWords.chapter}.mp3`" type="audio/mp3">
      </audio>
    </div>
    <p class="panel-tabs is-medium">
      <a v-for="view in viewModes"
          :class="{ 'is-active': visibility === view.code }"
          @click="visibility = view.code">
        {{ view.text }}
      </a>
    </p>
    <word v-for="word in currentWords.content"
        :word="word"
        :panel-visibility="visibility">
    </word>
  </nav>
</template>

<script>
import Word from './Word.vue'

const viewModes = [
  { code: 'ja',  text: '日本語' },
  { code: 'all', text: '全部'   },
  { code: 'ko',  text: '韓国語' }
]

export default {

  components: { Word },

  props: ['currentWords'],

  data() {
    return {
      visibility: 'all',
      viewModes
    }
  },
}
</script>

<style lang="css">
.panel-tabs {
  font-size: 1.25em;
}

.panel-audio audio {
  height: 46px;
}
</style>
