<template lang="html">
  <audio v-if="audioSrc" controls="controls" preload="none">
    <source :src="audioSrc" type="audio/mp3">
  </audio>
</template>

<script>
import * as firebase from 'firebase'
import { MP3_SE, MP3_WD } from 'store/types'

export default {
  props: ['chapter', 'type'],
  data() {
    return {
      audioSrc: ''
    }
  },
  created() {
    this.getAudioSrc()
  },
  methods: {
    getAudioSrc() {
      let url = this.type == 'sentences' ? MP3_SE : MP3_WD
      let uri = `${url}${this.chapter}.mp3`
      let storage = firebase.storage()
      let gsReference = storage.refFromURL(uri)
      gsReference.getDownloadURL().then(url => {
        return this.audioSrc = url
      })
    }
  }
}
</script>

<style lang="css">
audio {
  height: 46px;
}
</style>
