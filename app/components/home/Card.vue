<template lang="html">
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column has-text-centered">
          <h1 class="title is-1">
            <button class="button is-primary is-large">C</button>
            カード
          </h1>
        </div>
      </div>
      <list :currentWords="currentWords"></list>
    </div>
  </section>
</template>

<script>
import List from 'components/card/List.vue'

export default {

  components: { List },

  data() {
    return {
      currentWords: {
        chapter: '00',
        content: [
          {
            "characters": [
              {
                "base": "真",
                "mean": "참 진",
                "ruby": "ま"
              },
              {
                "base": "面",
                "mean": "낯 면",
                "ruby": "じ"
              },
              {
                "base": "目",
                "mean": "눈 목",
                "ruby": "め"
              },
              {
                "base": "だ"
              }
            ],
            "mean": "성실하다"
          },
          {
            "characters": [
              {
                "base": "元",
                "mean": "의뜸 원",
                "ruby": "げん"
              },
              {
                "base": "気",
                "mean": "기운 기",
                "ruby": "き"
              },
              {
                "base": "だ"
              }
            ],
            "mean": "건강하다"
          },
          {
            "characters": [
              {
                "base": "丈",
                "mean": "어른 장",
                "ruby": "じょう"
              },
              {
                "base": "夫",
                "mean": "지아비 부",
                "ruby": "ぶ"
              },
              {
                "base": "だ"
              }
            ],
            "mean": "튼튼하다"
          }
        ]
      }
    }
  }
}
</script>

<style lang="css">
</style>
