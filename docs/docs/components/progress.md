# Progress 进度条

## 用法

<progress-base></progress-base>

```vue
<template>
  <plh-progress
    :percentage="params.percentage"
    :type="params.type"
    :stroke-width="params['stroke-width']"
    :show-text="params['show-text']"
    :text-inside="params['text-inside']"
    :stroke-linecap="params['stroke-linecap']"
    :status="params.status"
    :color="params.color"
    :width="params.width"
    :stroke-color="params['stroke-color']"
  ></plh-progress>
</template>
<script>
import { searchList } from './searchList'
export default {
  name: 'DemoProgressBase',
  data() {
    return {
      params: {
        percentage: 28,
        type: 'line',
        'stroke-width': 6,
        'show-text': true,
        'text-inside': false,
        'stroke-linecap': 'round',
        status: null,
        color: '#409eff',
        width: 126,
        'stroke-color': '#e5e9f2'
      }
    }
  },
  methods: {}
}
</script>
```

## Api

| 参数         |    描述    |  类型  | 可选值 | 必须 | 默认值 |
| ------------ | :--------: | :----: | :----: | :--: | ------ |
| stroke-color | 轨道背景色 | string |        |  否  |        |

详细 API 参考：

[el-progress Api](https://element.eleme.cn/#/zh-CN/component/progress#attributes)
