# Table-form 表格表单

> plh-table-form 组件依赖 plh-table、plh-button、el-input 等表单组件，async-validator 插件，配置化生成表格式表单

## 用法

<table-form-base></table-form-base>

```vue
<template>
  <div class="demo demo-button">
    <div class="mt10">
      <plh-table-form
        ref="tableForm"
        v-model="tableData"
        :columns="columns"
        :size="params.size"
        :limitNum="params.limitNum"
        :disabled="params.disabled"
        :showBtn="params.showBtn"
        :onAdd="params.onAdd ? handleAdd : null"
        @input="handleInput"
        @change="handleChange"
      ></plh-table-form>
    </div>
    <div class="mt10">
      <plh-button type="primary" @click="handleClick">提交</plh-button>
    </div>
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
        showBtn: true,
        onAdd: false
      },
      tableData: [{ input: '12', disabled: true, select: '1', name: '刘备' }],
      columns: [
        {
          tag: 'el-input',
          title: '输入框',
          key: 'input',
          required: true,
          rules: [
            { required: true, message: '请输入' },
            { max: 6, message: '最大个数不超过6' }
          ],
          attrs: {
            placeholder: '请输入'
          }
        },
        {
          tag: 'el-select',
          title: '多选',
          key: 'select',
          children: {
            tag: 'el-option',
            options: [...options]
          },
          on: {
            change: (val, options) => {
              console.log('select', val, options)
            }
          }
        },
        {
          tag: 'plh-date-picker',
          title: '时间选择',
          key: 'time'
        },
        {
          tag: 'el-switch',
          title: '开关',
          key: 'switch',
          defaultValue: true,
          on: {
            change: (val, options) => {
              console.log('select', val, options)
            }
          }
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
    handleSearch(data) {
      this.params = { ...data }
    },
    handleInput(val, { item, $index, row, column, property }) {
      console.log('tableForm_@input', val, item, $index, row, column, property)
    },
    handleChange(val, { item, $index, row, column, property }) {
      console.log('tableForm_@change', val, item, $index, row, column, property)
    },
    handleClick() {
      let validate = this.$refs.tableForm.validate()
      if (validate) {
        this.$message.success('通过校验')
      } else {
        this.$message.error('未通过校验')
      }
    },
    handleAdd(list, item) {
      const data = [...list]
      data.splice(list.length - 1, 0, { ...item })
      return data
    }
  }
}
</script>

```

## 多层级嵌入

<table-form-tabs></table-form-tabs>

```vue
<template>
  <div class="demo">
    <el-tabs v-model="model.activeIndex" type="card" tab-position="top" @tab-click="handleTabsClick">
      <el-tab-pane v-for="(item, index) in data.children" :key="`${index}`" :label="item.title" :name="`${index}`">
        <template v-if="item.columns && item.columns.length > 0">
          <plh-table-form
            ref="tableForm"
            v-model="tableData"
            :columns="item.columns"
            @input="handleInput"
          ></plh-table-form>
        </template>
      </el-tab-pane>
    </el-tabs>

    <p class="code">
      {{ JSON.stringify(model) }}
    </p>
  </div>
</template>

<script>
const options = [
  { label: '选项一', value: '1' },
  { label: '选项二', value: '2' }
]

export default {
  name: 'demo-table-form-tabs',
  data() {
    return {
      columns: [
        {
          tag: 'el-input',
          title: '输入框',
          key: 'input',
          required: true,
          rules: [
            { required: true, message: '请输入' },
            { max: 6, message: '最大个数不超过6' }
          ],
          attrs: {
            placeholder: '请输入'
          }
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
          tag: 'el-switch',
          title: '开关',
          key: 'switch',
          defaultValue: true
        },
        {
          title: '操作人',
          key: 'name',
          format: (row, column, cellValue, index) => {
            return <span>刘备</span>
          }
        }
      ],
      model: {
        activeIndex: '0',
        data: [
          {
            data: [{ input: '1-1', select: '1', time: '', switch: false }, { input: '1-2' }]
          },
          {
            data: [
              { input: '2-1', time: null, switch: true },
              { input: '2-2', select: '2', time: '', switch: false }
            ]
          }
        ]
      }
    }
  },
  computed: {
    data() {
      return {
        children: [
          { title: '表单一', columns: [...this.columns] },
          { title: '表单二', columns: [...this.columns] }
        ]
      }
    },
    tableData: {
      get() {
        const { activeIndex } = this.model
        return this.model.data[Number(activeIndex)].data
      },
      set(val) {
        const { activeIndex } = this.model
        this.model.data[Number(activeIndex)].data = val
      }
    }
  },
  watch: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {
    handleTabsClick(val) {
      this.model = { ...this.model, activeIndex: val.name }
    },
    handleInput(val, options) {
      const { activeIndex } = this.model
      console.log('tableForm_@input', activeIndex, val, options)
    }
  }
}
</script>
<style lang="scss"></style>
```

## Api

| 参数             | 描述                   | 类型                                    | 可选值                           | 必须 | 默认值 |
| ---------------- | ---------------------- | --------------------------------------- | -------------------------------- | ---- | ------ |
| value \| v-model | 值                     | array                                   |                                  | 是   | []     |
| columns          | 表格列数据             | array                                   |                                  | 是   |        |
| limitNum         | 限制数量               | number                                  |                                  | 否   | 6      |
| showBtn          | 是否显示增加与删除按钮 | boolean                                 |                                  | 否   | true   |
| size             | 尺寸                   | string                                  | large \| medium \| small \| mini | 否   | medium |
| disabled         | 禁用                   | boolean                                 |                                  | 否   | false  |
| onAdd            | 自定义新增方法         | function(list<当前 list>, item<默认项>) |                                  | 否   | null   |

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

## Event

| 名称   |        描述         | 返回值                                                                                                                                                                      |
| ------ | :-----------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| input  | 表单 input 监听事件 | {value<表单值，object>, { item<触发 input 的元素>, \$index<触发 input 的元素索引>, row<行>, column<列>, property<触发 input 的元素 key 值> }}                               |
| change |    表单改变事件     | {value<触发 change 的元素值>, { data<表单值，object>, item<触发 change 的元素>, \$index<触发 change 的元素索引>, row<行>, column<列>, property<触发 input 的元素 key 值> }} |
