<template lang="html">
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column has-text-centered">
          <h1 class="title is-1">
            <button class="button is-primary is-large">L</button>
            リスト
          </h1>
        </div>
        <div class="column">
          <panel :currentWords="currentWords"></panel>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Panel from 'components/list/Panel.vue'

export default {

  components: { Panel },

  data() {
    return {
      currentWords: {
        "chapter": "04",
        "content": [
          {
            "characters": [
              {
                "base": "暑",
                "mean": "더울 서",
                "ruby": "あつ"
              },
              {
                "base": "い"
              }
            ],
            "mean": "덥다"
          },
          {
            "characters": [
              {
                "base": "寒",
                "mean": "찰 한",
                "ruby": "さむ"
              },
              {
                "base": "い"
              }
            ],
            "mean": "춥다"
          },
          {
            "characters": [
              {
                "base": "高",
                "mean": "높을 고",
                "ruby": "たか"
              },
              {
                "base": "い"
              }
            ],
            "mean": "비싸다"
          },
          {
            "characters": [
              {
                "base": "安",
                "mean": "편안 안",
                "ruby": "やす"
              },
              {
                "base": "い"
              }
            ],
            "mean": "싸다"
          }
        ]
      }
    }
  }
}
</script>

<style lang="css">
</style>
