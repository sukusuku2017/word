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
        <th>{{ record.ch }} 과</th>
        <td>{{ record.st }} 문장</td>
        <td>
          <router-link :to="'/list/' + record.ch ">
            {{ record.wd }} 단어
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
