# Countup 动态数字

## 用法

<countup-base></countup-base>

```vue
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
```

## Api

| 参数          |     描述     |  类型  | 可选值 | 必须 | 默认值   |
| ------------- | :----------: | :----: | :----: | :--: | -------- |
| startVal      |    开始值    | number |        |  否  | 0        |
| endVal        |    结束值    | number |        |  是  | 0        |
| decimalPlaces |    小数位    | number |        |  否  | 0        |
| duration      | 动画持续时间 | number |        |  否  | 1000(ms) |

## Event

| 名称  |     描述     | 返回值 |
| ----- | :----------: | ------ |
| ready | 动画结束返回 | -      |
