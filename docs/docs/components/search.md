# Search 搜索

> plh-search 组件依赖 plh-form、plh-button 组件，自动配置化生成高级搜索与简单搜索

## 用法

<search-base></search-base>

```vue
<template>
  <plh-search
    :params="model"
    :searchList="searchList"
    :size="params.size"
    :showSubmit="params.showSubmit"
    :collapse="params.collapse"
    @submit="handleSearch"
  ></plh-search>
</template>
<script>
export default {
  name: 'DemoSearchBase',
  data() {
    const options = [
      { label: '选项一', value: '1' },
      { label: '选项二', value: '2' }
    ]
    return {
      params: {
        size: 'medium',
        showSubmit: true,
        collapse: true,
        disabled: false
      },
      searchList: [
        {
          tag: 'el-input',
          label: '输入框',
          key: 'input'
        },
        {
          tag: 'el-select',
          lable: '选择框',
          key: 'select',
          children: {
            tag: 'el-option',
            options: [...options]
          }
        },
        {
          tag: 'plh-date-picker',
          label: '时间选择',
          key: 'time',
          props: {
            type: 'daterange'
          }
        },
        {
          tag: 'el-radio-group',
          label: '单选',
          key: 'radio',
          children: {
            tag: 'el-radio',
            options: [...options]
          }
        },
        {
          tag: 'el-checkbox-group',
          label: '多选',
          key: 'checkbox',
          children: {
            tag: 'el-checkbox',
            options: [...options]
          }
        }
      ],
      model: {
        checkbox: []
      }
    }
  },
  methods: {
    handleSearch(data) {
      this.model = { ...data }
    }
  }
}
</script>
```

## Api

| 参数       |       描述       |  类型   |              可选值              | 必须 | 默认值                                        |
| ---------- | :--------------: | :-----: | :------------------------------: | ---- | --------------------------------------------- |
| searchList |      配置项      |  array  |                                  | 是   | 同 [plh-form items](form.html#items-api) 配置 |
| params     |     预设参数     | object  |                                  | 是   |                                               |
| size       |       尺寸       | string  | large \| medium \| small \| mini | 否   | medium                                        |
| showSubmit | 是否显示搜索按钮 | boolean |                                  | 否   | true                                          |
| collapse   |     是否收起     | boolean |                                  | 否   | true                                          |

## Events

| 事件名称 | 说明     | 回调参数       |
| -------- | :------- | -------------- |
| submit   | 提交按钮 | data（搜索项） |
