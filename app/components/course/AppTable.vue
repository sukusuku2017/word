<template lang="html">
  <table class="table">
    <thead>
      <tr>
        <th>課</th>
        <th>文章</th>
        <th>センテンス</th>
        <th>單語</th>
        <th>リスト</th>
        <th>カード</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="record in currentCourse.content">
        <td>
          <span class="tag is-dark">{{ record.ch }}</span>
        </td>
        <td>{{ record.st || '-' }}</td>
        <td>
          <router-link class="button is-primary"
              :to="`/sentence/${record.ch}`"
              v-if="record.st">
            S
          </router-link>
          <button v-else class="button is-primary is-outlined is-disabled">
            S
          </button>
        </td>
        <td>{{ record.wd || '-' }}</td>
        <template v-if="record.wd">
          <td>
            <router-link :to="`/list/${record.ch}`"
                class="button is-primary">
              L
            </router-link>
          </td>
          <td>
            <router-link :to="`/card/${record.ch}`"
                class="button is-primary">
              C
            </router-link>
          </td>
        </template>
        <template v-else>
          <td>
            <button class="button is-primary is-outlined is-disabled">
              L
            </button>
          </td>
          <td>
            <button class="button is-primary is-outlined is-disabled">
              C
            </button>
          </td>
        </template>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {

  props: ['currentCourse']

}
</script>

<style lang="css">
</style>
