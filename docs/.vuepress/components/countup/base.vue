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
    <div style="padding: 10px 0 20px 0">
      <div>整数： <plh-countup :endVal="0" :options="params" @ready="handleReady"></plh-countup></div>
      <div>修改duration： <plh-countup :endVal="value" :duration="2000" @ready="handleReady"></plh-countup></div>
      <div>保留小数位： <plh-countup :endVal="value1" :decimalPlaces="2"></plh-countup></div>
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
      value1: 435.45,
      searchList: [...searchList],
      options: {},
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
      this.value = Math.floor(Math.random() * 2000)
      this.value1 = Math.random() * 2000
    },
    handleReady(val, val1) {
      console.log(val, val1)
    }
  }
}
</script>
