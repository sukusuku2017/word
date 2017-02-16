<template lang="html">
  <div class="container">
    <nav class="nav">
      <div class="nav-left">
        <router-link to="/" class="nav-item">
          <img src="./logo.png" alt="">
        </router-link>
      </div>
      <div class="nav-center">
        <router-link class="nav-item"
            to="/"
            active-class="is-active" exact>
          ホーム
        </router-link>
        <router-link class="nav-item"
            to="/course"
            active-class="is-active">
          コース
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
