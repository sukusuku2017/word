<template lang="html">
  <div class="card card-subject">
    <header class="card-header">
      <audio controls="controls" preload="none">
        <source :src="`/mp3/sentences/st${chapter}.mp3`" type="audio/mp3">
      </audio>
    </header>
    <div class="card-content">
      <div class="content">
        <ruby-sentence :sentence="subject"></ruby-sentence>
      </div>
    </div>
    <footer class="card-footer">
      <div class="card-footer-item">
        {{ subject.mean }}
      </div>
    </footer>
  </div>
</template>

<script>
import RubySentence from 'components/common/RubySentence.vue'

export default {
  components: { RubySentence },
  props: ['chapter', 'subject']
}
</script>

<style lang="css">
.card-subject audio {
  height: 36px;
}

.card-subject .card-content {
  font-size: 2rem;
}
</style>
