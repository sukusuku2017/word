<template lang="html">
  <table class="table">
    <thead>
      <tr>
        <th>과정</th>
        <th><abbr title="">문장</abbr></th>
        <th><abbr title="">단어</abbr></th>
        <th><abbr title="">업데이트</abbr></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="record in currentCourse">
        <th>{{ record.ch }} 과</th>
        <td>{{ record.st }} 문장</td>
        <td>
          <router-link :to="'list/' + record.ch ">
            {{ record.wd }} 단어
          </router-link>
        </td>
        <td>{{ record.ud }}</td>
      </tr>
    <tbody>
  <table>
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
