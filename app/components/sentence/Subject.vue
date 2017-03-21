<template lang="html">
  <div class="card card-subject">
    <header class="card-header">
      <word-audio :chapter="chapter" type="sentences"></word-audio>
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
import WordAudio from 'components/common/WordAudio.vue'
import RubySentence from 'components/common/RubySentence.vue'

export default {
  components: { WordAudio, RubySentence },
  props: ['chapter', 'subject']
}
</script>

<style lang="css">
.card-subject .card-header {
  padding: 0.5em 0.75em;
}

.card-subject .card-content {
  font-size: 2rem;
}

.card-subject .card-footer-item {
  font-size: 1.5rem;
  justify-content: flex-start;
  padding-left: 1.5rem;
}
</style>
