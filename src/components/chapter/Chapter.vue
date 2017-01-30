<template lang="html">
  <nav class="panel">
    <p class="panel-heading">
      00과
    </p>
    <p class="panel-tabs">
      <a class="is-active">전부 표시</a>
      <a>일본어</a>
      <a>한글</a>
    </p>
    <div class="panel-block">
      <ruby>
        한글 <rp>(</rp><rt>한자</rt><rp>)</rp>
      </ruby>
    </div>
  </nav>
</template>

<script>
import * as types from '../../store/types'

export default {

  // data() {
  //   return this.$store.word
  // }

  mounted() {
    let chapter_num = this.$route.params.chapter_num

    this.$store.dispatch({
      type: types.FETCH_WORD,
      chapter_num
    })
  }
}
</script>

<style lang="css">
</style>
