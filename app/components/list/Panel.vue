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
      <word-audio :chapter="currentWords.chapter" type="word"></word-audio>
    </div>
    <p class="panel-tabs is-medium">
      <a v-for="view in viewModes" :key="view.code"
          :class="{ 'is-active': visibility === view.code }"
          @click="visibility = view.code">
        {{ view.text }}
      </a>
    </p>
    <word v-for="(word, idx) in currentWords.content" :key="idx"
        :word="word"
        :panel-visibility="visibility">
    </word>
  </nav>
</template>

<script>
import WordAudio from 'components/common/WordAudio.vue'
import Word from './Word.vue'

const viewModes = [
  { code: 'ja',  text: '日本語' },
  { code: 'all', text: '全部'   },
  { code: 'ko',  text: '韓国語' }
]

export default {
  components: { WordAudio, Word },
  props: ['currentWords'],
  data() {
    return {
      visibility: 'all',
      viewModes
    }
  }
}
</script>

<style lang="css">
.panel-tabs {
  font-size: 1.25em;
}

/*.panel-audio audio {
  height: 46px;
}*/
</style>
