<template>
  <div class="demo demo-countup">
    <h3>配置项</h3>
    <plh-search
      :params="params"
      :searchList="searchList"
      :showSubmit="false"
      :collapse="false"
      @submit="handleSearch"
    ></plh-search>

    <h3>示例</h3>
    <plh-button type="primary" @click="handleChange">改变随机值</plh-button>
    <div style="padding: 10px 0 20px 0; font-size: 36px">
      <plh-countup :endVal="value" :options="params" @ready="handleReady"></plh-countup>
    </div>
  </div>
</template>

<script>
import { searchList } from './searchList'
export default {
  name: 'demo-countup',
  data() {
    return {
      value: 0,
      searchList: [...searchList],
      params: {
        startVal: 0,
        decimalPlaces: 1,
        duration: 2,
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: ''
      }
    }
  },
  mounted() {
    this.handleChange()
  },
  methods: {
    handleSearch(data) {
      this.params = { ...data }
    },
    handleChange() {
      this.value = Math.floor(Math.random() * 20000)
    },
    handleReady(val, val1) {}
  }
}
</script>
