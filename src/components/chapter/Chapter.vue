<template lang="html">
  <div class="container">
    <div class="columns">
      <div class="column is-10 is-offset-1 is-6-desktop is-offset-3-desktop">
        <nav class="panel">
          <p class="panel-heading">
            <nav class="level">
              <div class="level-left">
                <div class="">
                  {{ currentChapter }} 과
                </div>
              </div>
              <div class="level-right">
                <div class="">
                  {{ currentWordarr.length }} 단어
                </div>
              </div>
            </nav>
          </p>
          <div class="panel-block">
            <audio controls="controls" preload="metadata">
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
</template>

<script>
import { mapState, mapGetters } from 'vuex'

import * as types from '../../store/types'
import Word from './Word.vue'

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
      let ch_num = this.$route.params.ch_num

      this.$store.commit({
        type: types.SWITCH_CHAPTER,
        ch_num
      })

      // console.log('fetchData midding')
      if (!this.$store.getters.currentWords) {
        this.$store.dispatch({
          type: types.FETCH_WORD,
          ch_num
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
.panel-block audio {
  height: 32px;
}
</style>
