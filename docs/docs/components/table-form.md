# Table-form 表格表单

> plh-table-form 组件依赖 plh-table、plh-button、el-input 等表单组件，async-validator 插件，配置化生成表格式表单

## 用法

<table-form-base></table-form-base>

```vue
<template>
  <plh-table-form
    ref="tableForm"
    v-model="tableData"
    :columns="columns"
    :size="params.size"
    :limitNum="params.limitNum"
    :disabled="params.disabled"
    :showBtn="params.showBtn"
    @input="handleInput"
  ></plh-table-form>
</template>
<script>
export default {
  name: 'DemoTableFormBase',
  data() {
    const options = [
      { label: '选项一', value: '1' },
      { label: '选项二', value: '2' }
    ]
    return {
      params: {
        size: 'medium',
        limitNum: 6,
        disabled: false,
        showBtn: true
      },
      tableData: [],
      columns: [
        {
          tag: 'el-input',
          title: '输入框',
          key: 'input'
        },
        {
          tag: 'el-select',
          title: '多选',
          key: 'select',
          children: {
            tag: 'el-option',
            options: [...options]
          }
        },
        {
          tag: 'plh-date-picker',
          title: '时间选择',
          key: 'time'
        },
        {
          title: '操作人',
          key: 'name',
          format: (row, column, cellValue, index) => {
            return <span>刘备</span>
          }
        }
      ]
    }
  },
  methods: {
    handleInput(val) {}
  }
}
</script>
```

## Api

| 参数             | 描述                   | 类型    | 可选值                           | 必须 | 默认值 |
| ---------------- | ---------------------- | ------- | -------------------------------- | ---- | ------ |
| value \| v-model | 值                     | array   |                                  | 是   | []     |
| columns          | 表格列数据             | array   |                                  | 是   |        |
| limitNum         | 限制数量               | number  |                                  | 否   | 6      |
| showBtn          | 是否显示增加与删除按钮 | boolean |                                  | 否   | true   |
| size             | 尺寸                   | string  | large \| medium \| small \| mini | 否   | medium |
| disabled         | 禁用                   | boolean |                                  | 否   | false  |

## columns Api

| 参数         | 描述                                    | 类型                        | 可选值 | 必须 | 默认值   |
| ------------ | --------------------------------------- | --------------------------- | ------ | ---- | -------- |
| tag          | 表单元素标签，无则显示文本              | string                      |        | 否   | el-input |
| attrFn       | 属性方法，用于动态设置属性，如 disabled | function(row)               |        | 否   | -        |
| defaultValue | 默认值                                  | string \| number \| boolean |        | 否   | -        |

- <font color="red">注意：使用 表单元素必须指给 tag，如 el-input，若不指定，则为普通表格元素</font>
- <font color="red">如果数据子项里面含有 disabled 属性且值为 true，则会对整行表格禁用</font>

其他参考：

- 有 tag： [plh-form items Api](./form.html#items-api)
- 无 tag： [plh-table columns Api](./table.html#columns-api)
