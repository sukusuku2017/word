<template lang="html">
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-6 is-offset-3">
          <nav class="panel">
            <div class="panel-heading">
              <div class="is-clearfix">
                <div class="is-pulled-left">
                  {{ currentChapter }} 과
                </div>
                <div class="is-pulled-right">
                  <span class="tag is-white is-medium">
                    {{ currentWordarr.length }} 단어
                  </span>
                </div>
              </div>
            </div>
            <div class="panel-block panel-audio">
              <audio controls="controls" preload="none">
                <source src="/mp3/Track13.mp3" type="audio/mp3">
              </audio>
            </div>
            <p class="panel-tabs is-medium">
              <a v-for="view in viewModes"
                  :class="{ 'is-active': visibility === view.code }"
                  @click="visibility = view.code">
                {{ view.text }}
              </a>
            </p>
            <word v-for="word in currentWordarr"
                :word="word"
                :visibility="visibility">
            </word>
          </nav>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

import * as types from 'store/types'
import Word from './list/Word.vue'

const viewModes = [
  { code: 'ja',  text: '日本語' },
  { code: 'all', text: '全部'   },
  { code: 'ko',  text: '韓国語' }
]

export default {

  components: { Word },

  data() {
    return {
      visibility: 'all',
      viewModes
    }
  },

  computed: {
    currentChapter() {
      return this.$store.state.words.currentChapter
    },
    currentWordarr() {
      let currentWords = this.$store.getters.currentWords
      return currentWords ? currentWords.content : []
    }
  },

  created() {
    this.fetchData()
  },

  watch: {
    '$route': 'fetchData'
  },

  methods: {
    fetchData() {
      // console.log('fetchData')
      let chapter_id = this.$route.params.chapter_id

      this.$store.commit({
        type: types.SWITCH_CHAPTER,
        chapter_id
      })

      // console.log('fetchData midding')
      if (!this.$store.getters.currentWords) {
        this.$store.dispatch({
          type: types.FETCH_WORD,
          chapter_id
        })
      }
    }
  }
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
