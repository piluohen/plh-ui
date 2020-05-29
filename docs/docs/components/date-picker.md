# Date-picker 日期选择

## 用法

<date-picker-base></date-picker-base>

```vue
<template>
  <div class="demo demo-button">
    <h3>配置项</h3>
    <plh-search
      :params="params"
      :searchList="searchList"
      :showSubmit="false"
      :collapse="false"
      @submit="handleSearch"
    ></plh-search>
    <div class="mt20">
      <h3>示例</h3>
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
      <p class="code">
        {{ value }}
      </p>
    </div>
  </div>
</template>
<script>
import { radioItem, inputNumberItem, searchs } from '../../js/search'
export default {
  name: 'DemoButtonBase',
  data() {
    const type = 'year/month/date/dates/week/datetime/datetimerange/daterange/monthrange'
    return {
      value: null,
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
      },
      searchList: [
        {
          tag: 'el-select',
          label: '类型(type)',
          key: 'type',
          children: {
            tag: 'el-option',
            options: type.split('/').map(item => {
              return { label: item, value: item }
            })
          }
        },
        { ...searchs.size },
        {
          tag: 'el-select',
          label: '绑定格式(value-format)',
          key: 'value-format',
          children: {
            tag: 'el-option',
            options: ['timestamp', 'yyyy-MM-DD HH:mm', ''].map(item => {
              return { label: item ? item : '无', value: item }
            })
          }
        },
        {
          ...radioItem,
          label: '文本框可输入(editable)',
          key: 'editable'
        },
        {
          ...radioItem,
          label: '允许清除(clearable)',
          key: 'clearable'
        },
        {
          ...radioItem,
          label: '只读(readonly)',
          key: 'readonly'
        },
        {
          ...radioItem,
          label: '禁用(disabled)',
          key: 'disabled'
        },
        {
          tag: 'el-input',
          label: 'placeholder',
          key: 'placeholder'
        },
        {
          tag: 'el-input',
          label: 'start-placeholder',
          key: 'start-placeholder'
        },
        {
          tag: 'el-input',
          label: 'end-placeholder',
          key: 'end-placeholder'
        },
        {
          tag: 'el-input',
          label: 'range-separator',
          key: 'range-separator'
        },
        {
          tag: 'el-radio-group',
          key: '对齐方式(align)',
          key: 'align',
          children: {
            tag: 'el-radio-button',
            options: ['left', 'center', 'right'].map(item => {
              return { label: item, value: item }
            })
          }
        }
      ]
    }
  },
  methods: {
    handleSearch(data) {
      this.params = { ...data }
    }
  }
}
</script>
<style lang="stylus"></style>
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
