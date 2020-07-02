# Date-picker 日期选择

> plh-date-picker 组件依赖于 el-date-picker 组件，优化了部分初始化设置

## 用法

<date-picker-base></date-picker-base>

```vue
<template>
  <plh-date-picker
    v-model="value"
    :type="params.type"
    :size="params.size"
    :readonly="params.readonly"
    :disabled="params.disabled"
    :editable="params.editable"
    :clearable="params.clearable"
    :align="params.align"
    :placeholder="params.placeholder"
    :start-placeholder="params['start-placeholder']"
    :end-placeholder="params['end-placeholder']"
    :range-separator="params['range-separator']"
    :value-format="params['value-format']"
  ></plh-date-picker>
</template>
<script>
export default {
  name: 'DemoButtonBase',
  data() {
    return {
      value: '',
      params: {
        type: 'date',
        size: 'medium',
        'value-format': 'timestamp',
        readonly: false,
        disabled: false,
        editable: true,
        clearable: true,
        placeholder: '请选择',
        'start-placeholder': '开始日期',
        'end-placeholder': '结束日期',
        'range-separator': '至',
        align: 'left'
      }
    }
  },
  methods: {}
}
</script>
```

## API

| 参数              | 描述             | 类型                              | 可选值                           | 必须 | 默认值    |
| ----------------- | ---------------- | --------------------------------- | -------------------------------- | ---- | --------- |
| vuale \| v-model  | 值               | string \| date \| array \| number |                                  | 是   |           |
| type              | 类型             | string                            |                                  | 否   | date      |
| size              | 尺寸             | string                            | large \| medium \| small \| mini | 否   | medium    |
| value-format      | 格式化值         | string                            |                                  | 否   | timestamp |
| range-separator   | 分割符文案       | string                            |                                  | 否   | 至        |
| start-placeholder | 开始时间描述文案 | string                            |                                  | 否   | 开始日期  |
| end-placeholder   | 结束时间描述文案 | string                            |                                  | 否   | 结束日期  |

详细 API 参考：

- [日期格式 API](https://element.eleme.cn/#/zh-CN/component/date-picker#ri-qi-ge-shi)
- [el-date-picker Api](https://element.eleme.cn/#/zh-CN/component/date-picker#attributes)

## 注意事项

1. 使用日期范围选择（daterange/datetimerange）的类型时，固定 default-time 为 [00:00:00, 23:59:59]
2. 使用 week 的类型时，vue-format 必须重置为空，否则无法显示
