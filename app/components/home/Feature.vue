<template lang="html">
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container">
        <nav class="columns">
          <router-link to="/course" class="column has-text-centered" >
            <h3 class="title is-3"><strong>4</strong></h3>
            <p class="subtitle"><strong>Course</strong></p>
          </router-link>
          <router-link to="/course" class="column has-text-centered" >
            <h3 class="title is-3"><strong>40</strong></h3>
            <p class="subtitle"><strong>Chapter</strong></p>
          </router-link>
          <router-link to="/course" class="column has-text-centered" >
            <h3 class="title is-3"><strong>789</strong></h3>
            <p class="subtitle"><strong>Sentences</strong></p>
          </router-link>
          <router-link to="/course" class="column has-text-centered" >
            <h3 class="title is-3"><strong>456K</strong></h3>
            <p class="subtitle"><strong>Words</strong></p>
          </router-link>
        </nav>
      </div>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="css">
.hero.is-primary a.column:hover .title strong {
  border-bottom: 1px solid;
}
</style>
