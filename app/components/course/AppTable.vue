<template lang="html">
  <table class="table">
    <thead>
      <tr>
        <th>チャプター</th>
        <th>センテンス</th>
        <th>ワード</th>
        <th>アップデート</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="record in currentCourse">
        <th>{{ record.ch }}</th>
        <td>{{ record.st }}</td>
        <td>
          {{ record.wd }}
          <template v-if="record.wd">
            <router-link :to="`/list/${record.ch}`"
                class="button is-primary is-outlined">
              L
            </router-link>
            <router-link :to="`/card/${record.ch}`"
                class="button is-primary is-outlined">
              C
            </router-link>
          </template>
          <template v-else>
            <button class="button is-primary is-outlined is-disabled">
              L
            </button>
            <button class="button is-primary is-outlined is-disabled">
              C
            </button>
          </template>
        </td>
        <td>{{ record.ud }}</td>
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
