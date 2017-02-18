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
        "chapter": "11",
        "update": "2017-02-17",
        "author": [
          "Phil"
        ],
        "subject": {
          "characters": [
            {
              "base": "旅",
              "ruby": "りょ"
            },
            {
              "base": "行",
              "ruby": "こう"
            },
            {
              "base": "は"
            },
            {
              "base": "８",
              "ruby": "はち"
            },
            {
              "base": "月",
              "ruby": "がつ"
            },
            {
              "base": "４日",
              "ruby": "よっか"
            },
            {
              "base": "まででした。"
            }
          ],
          "mean": "여행은 8월 4일까지였습니다."
        },
        "content": [
          {
            "characters": [
              {
                "base": "今日",
                "ruby": "きょう"
              },
              {
                "base": "は"
              },
              {
                "base": "何",
                "ruby": "なん",
                "color": true
              },
              {
                "base": "月",
                "ruby": "がつ",
                "color": true
              },
              {
                "base": "何",
                "ruby": "なん",
                "color": true
              },
              {
                "base": "日",
                "ruby": "にち",
                "color": true
              },
              {
                "base": "ですか",
                "color": true
              },
              {
                "base": "。"
              }
            ],
            "mean": "오늘은 몇 월 며칠입니까?"
          },
          {
            "characters": [
              {
                "base": "お"
              },
              {
                "base": "誕",
                "ruby": "たん"
              },
              {
                "base": "生",
                "ruby": "じょう"
              },
              {
                "base": "日",
                "ruby": "び"
              },
              {
                "base": "はいつですか",
                "color": true
              },
              {
                "base": "。"
              }
            ],
            "mean": "생일은 언제입니까?"
          }
        ]
      }


    }
  }
}
</script>

<style lang="css">
</style>
