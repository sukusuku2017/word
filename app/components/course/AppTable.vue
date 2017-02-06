<template lang="html">
  <table class="table">
    <thead>
      <tr>
        <th>과정</th>
        <th>문장</th>
        <th>단어</th>
        <th>업데이트</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="record in currentCourse">
        <th>{{ record.ch }}</th>
        <td>{{ record.st }}</td>
        <td>
          {{ record.wd }}
          <router-link :to="`/list/${record.ch}`"
              class="button is-primary is-outlined">
            L
          </router-link>
          <router-link :to="`/card/${record.ch}`"
              class="button is-primary is-outlined">
            C
          </router-link>
        </td>
        <td>{{ record.ud }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import ct from './ct.json'

export default {

  props: ['course_ordinal'],

  computed: {
    currentCourse() {
      return ct[this.course_ordinal]
    }
  }
}
</script>

<style lang="css">
</style>
