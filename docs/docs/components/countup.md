# Countup 动态数字

> plh-countup 组件依赖于 countup.js 插件，更简易实用。

## 用法

<countup-base></countup-base>

```vue
<template>
  <plh-countup :endVal="value" :options="params" @ready="handleReady"></plh-countup>
</template>

<script>
import { searchList } from './searchList'
export default {
  name: 'demo-countup',
  data() {
    return {
      value: 0,
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
  mounted() {},
  methods: {
    handleReady(val, val1) {}
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
| options       |    配置项    | object |        |  否  |          |

## Options Api

| 参数          |     描述     |  类型  | 可选值 | 必须 | 默认值 |
| ------------- | :----------: | :----: | :----: | :--: | ------ |
| startVal      |    开始值    | number |        |  否  | 0      |
| decimalPlaces |    小数位    | number |        |  否  | 0      |
| duration      | 动画持续时间 | number |        |  否  | 2(s)   |

更多配置：

[Countup.js Api](https://www.npmjs.com/package/countup.js#usage)

## Event

| 名称  |     描述     | 返回值 |
| ----- | :----------: | ------ |
| ready | 动画结束返回 | -      |
