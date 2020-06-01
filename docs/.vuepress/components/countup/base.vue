<template>
  <div class="demo demo-countup">
    <plh-button type="primary" @click="handleChange">改变随机值</plh-button>
    <div style="padding: 10px 0 20px 0">
      <div>整数： <plh-countup :endVal="value"></plh-countup></div>
      <div>修改duration： <plh-countup :endVal="value" :duration="2000"></plh-countup></div>
      <div>保留小数位： <plh-countup :endVal="value1" :decimalPlaces="2"></plh-countup></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo-countup',
  data() {
    return {
      value: 0,
      value1: 435.45
    }
  },
  mounted() {
    this.handleChange()
  },
  methods: {
    handleChange() {
      this.value = Math.floor(Math.random() * 2000)
      this.value1 = Math.random() * 2000
    }
  }
}
</script>
