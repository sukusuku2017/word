<template lang="html">
  <section class="hero is-primary is-bold is-medium">
    <!-- Hero header: will stick at the top -->
    <div class="hero-head">
      <header class="nav">
        <div class="container">
          <div class="nav-left">
            <router-link to="/" class="nav-item">
              すくすく
            </router-link>
          </div>
          <div class="nav-right nav-menu">
            <router-link to="/" class="nav-item">
              Home
            </router-link>
            <router-link to="/course" class="nav-item is-active">
              Course
            </router-link>
          </div>
        </div>
      </header>
    </div>

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
          すくすく　日本語
        </h1>
        <h2 class="subtitle">
          단어장
        </h2>
      </div>
    </div>

    <!-- Hero footer: will stick at the bottom -->
    <div class="hero-foot">
      <nav class="tabs">
        <div class="container">
          <ul>
            <li class="is-active"><a>1코스</a></li>
            <li><a>2코스</a></li>
            <li><a>3코스</a></li>
            <li><a>4코스</a></li>
          </ul>
        </div>
      </nav>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
