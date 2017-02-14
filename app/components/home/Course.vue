<template lang="html">
  <section class="section">
    <div class="container">
      <div class="columns is-multiline">
        <div class="column is-6" v-for="(co, index) in courses">
<div class="card">
  <div class="card-content">
    <button class="button is-large is-primary is-outlined">
      {{ co.title }}
    </button>
    <div class="content">
      <p>{{ co.description }}</p>
      <br>
      <small>11:09 PM - 1 Jan 2016</small>
    </div>
  </div>
</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import courses from './courses.json'

export default {

  data() {
    return { courses }
  }
}
</script>

<style lang="css">
</style>
