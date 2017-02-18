<template lang="html">
  <section class="section section-course">
    <div class="container">
      <div class="columns" v-for="(co, index) in courses">
        <div class="column">
          <h2 class="title is-2">
            {{ co.title }}
          </h2>
          <p href="" class="subtitle">
            {{ co.description }}
          </p>
        </div>

        <div class="column">
          <ul>
            <li v-for="chapter in co.courses">
              {{ chapter.contents }}
            </li>
          </ul>
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
.section-course .columns {
  border-top: solid 1px;
}
</style>
