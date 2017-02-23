<template lang="html">
  <section class="hero is-medium">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column">
            <h1 class="title is-1">
              すくすく
            </h1>
            <h2 class="subtitle is-2">
              日本語
            </h2>
          </div>
          <div class="column-narrow">
            <youtube></youtube>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Youtube from './Youtube.vue'

export default {
  components: { Youtube }
}
</script>

<style lang="css">
</style>
