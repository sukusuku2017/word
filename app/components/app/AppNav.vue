<template lang="html">
  <div class="container">
    <nav class="nav">
      <div class="nav-left">
        <router-link to="/" class="nav-item">
          すくすく
        </router-link>
      </div>
      <div class="nav-right nav-menu">
        <router-link class="nav-item"
            to="/"
            active-class="is-active" exact>
          Home
        </router-link>
        <router-link class="nav-item"
            to="/course/first"
            active-class="is-active">
          Course
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
