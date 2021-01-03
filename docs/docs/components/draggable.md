# Draggable 拖拽组件

> plh-draggable 组件依赖于 sortablejs 插件，更简易实用。

## 基础用法

<draggable-table></draggable-table>

<draggable-base></draggable-base>

<draggable-container></draggable-container>

```vue

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
