<template lang="html">
  <div class="card card-sentence">
    <div class="card-content">
      <ruby-sentence :sentence="sentence"></ruby-sentence>
    </div>
    <footer class="card-footer">
      <div class="card-footer-item">
        {{ sentence.mean }}
      </div>
    </div>
  </article>
</template>

<script>
import RubySentence from 'components/common/RubySentence.vue'

export default {
  components: { RubySentence },
  props: ['sentence']
}
</script>

<style lang="css">
.card-sentence .card-content {
  font-size: 2rem;
}
.card-sentence .card-footer-item {
  font-size: 1.5rem;
  justify-content: flex-start;
  padding-left: 1.5rem;
}

</style>
