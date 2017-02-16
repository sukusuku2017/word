<template lang="html">
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column has-text-centered">
          <h1 class="title is-1">
            <button class="button is-primary is-large">S</button>
            センテンス
          </h1>
        </div>
      </div>
      <list :currentSentences="currentSentences"></list>
    </div>
  </section>
</template>

<script>
import List from 'components/sentence/List.vue'

export default {

  components: { List },

  data() {
    return {
      currentSentences: {
        "chapter": "00",
        "update": "2017-02-16",
        "author": [
          "Phil"
        ],
        "subject": {
          "characters": [
            {
              "base": "中",
              "ruby": "なか"
            },
            {
              "base": "村",
              "ruby": "むら"
            },
            {
              "base": "さんが"
            },
            {
              "base": "結",
              "ruby": "けっ"
            },
            {
              "base": "婚",
              "ruby": "こん"
            },
            {
              "base": "するそうです。"
            }
          ],
          "mean": "나까무라 씨가 결혼한다고 합니다."
        },
        "content": [
          {
            "characters": [
              {
                "base": "友",
                "ruby": "とも"
              },
              {
                "base": "だちの"
              },
              {
                "base": "話",
                "ruby": "はなし"
              },
              {
                "base": "によると",
                "color": true
              },
              {
                "base": "、"
              },
              {
                "base": "彼",
                "ruby": "かれ"
              },
              {
                "base": "の"
              },
              {
                "base": "趣",
                "ruby": "しゅ"
              },
              {
                "base": "味",
                "ruby": "み"
              },
              {
                "base": "は"
              },
              {
                "base": "旅",
                "ruby": "りょ"
              },
              {
                "base": "行",
                "ruby": "こう"
              },
              {
                "base": "だ"
              },
              {
                "base": "そうです"
              },
              {
                "base": "。"
              }
            ],
            "mean": "친구의 말에 의하면, 그의 취미는 여행이라고 합니다."
          }
        ]
      }
    }
  }
}
</script>

<style lang="css">
</style>
