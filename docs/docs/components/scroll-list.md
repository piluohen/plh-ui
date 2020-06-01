# Scroll-list 滚动列表

## 用法

<scroll-list-base></scroll-list-base>

## Api

| 参数        |     描述     |  类型  | 可选值 | 必须  |  默认值  |
| ----------- | :----------: | :----: | :----: | :---: | :------: |
| data        |   滚动数据   | array  |        | true  |          |
| itemHeight  | 滚动子项高度 | number |        | false |    60    |
| count       | 展示子项数量 | number |        | false |    6     |
| scrollCount | 滚动子项数量 | number |        | false |    1     |
| speed       | 子项滚动时间 | number |        | false | 300(ms)  |
| delay       | 滚动间隔时间 | number |        | false | 2000(ms) |

## Slot

```vue
// 支持slot，可以自定义slot子项的内容， 如 item为data的子项
<template slot-scope="{ item }">
  <div class="alert-item">
    <div class="title">{{ item.title }}</div>
    <div class="desc">{{ item.desc }}</div>
  </div>
</template>
```

## Events

| 事件  |     描述     |   参数   |
| ----- | :----------: | :------: |
| click | 子项点击事件 | 子项数据 |
