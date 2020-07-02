# Table 表格

> plh-table 组件依赖 el-table、el-pagination 组件，配置化生成表格，集成 api 请求

## 基本用法

<table-base></table-base>

```vue
<template>
  <plh-table
    ref="table"
    :columns="columns"
    :tableData="tableData"
    style="width: 100%"
    :size="params.size"
    :stripe="params.stripe"
    :border="params.border"
    :fit="params.fit"
    :show-header="params['show-header']"
    :highlight-current-row="params['highlight-current-row']"
    :tooltip-effect="params['tooltip-effect']"
    :show-summary="params['show-summary']"
    :sum-text="params['sum-text']"
    :select-on-indeterminate="params['select-on-indeterminate']"
    :pagination="{ pageIndex: 1, pageSize: params.pageSize }"
    @selection-change="handleSelectionChange"
  ></plh-table>
</template>
<script>
const dataItem = {
  name: '刘备',
  male: true,
  remark:
    '汉昭烈帝刘备（161年－223年6月10日），字玄德，涿郡涿县（今河北省涿州市）人，西汉中山靖王刘胜之后，蜀汉开国皇帝（221年9月22日－223年6月10日）、政治家。史家多称其为先主。'
}

export default {
  name: 'DemoTableBase',
  data() {
    return {
      params: {
        size: 'medium',
        stripe: false,
        border: false,
        fit: true,
        'show-header': true,
        'tooltip-effect': 'dark',
        'show-summary': false,
        'sum-text': '合计',
        'select-on-indeterminate': true,
        pageSize: 10
      },
      tableData: [],
      total: 34,
      columns: [
        {
          type: 'expand',
          fixed: 'left',
          render: (h, { row }) => {
            return (
              <el-form label-position="left" inline={false} class="demo-table-expand">
                <el-form-item label="姓名">
                  <span>{row.name}</span>
                </el-form-item>
                <el-form-item label="性别">
                  <span>{row.male ? '男' : '女'}</span>
                </el-form-item>
                <el-form-item label="介绍">
                  <span>{row.remark}</span>
                </el-form-item>
              </el-form>
            )
          }
        },
        {
          type: 'selection',
          fixed: 'left'
        },
        {
          label: 'ID',
          prop: 'id',
          width: '60px'
        },
        {
          title: '姓名',
          key: 'name',
          width: '140px',
          align: 'center',
          renderHeader: (h, { column }) => {
            return <span>{`render ${column.label}`}</span>
          }
        },
        {
          label: '性别',
          prop: 'male',
          width: '80px',
          format: (row, column, cellValue, index) => {
            return <span>{cellValue ? '男' : '女'}</span>
          }
        },
        {
          label: '介绍',
          prop: 'remark',
          showOverflowTooltip: true
        },
        {
          title: '操作',
          key: 'operation',
          width: '80px',
          fixed: 'right',
          render: (h, { row }) => {
            return <plh-button type="primary">编辑</plh-button>
          }
        }
      ]
    }
  },
  created() {
    this.createData()
  },
  methods: {
    createData() {
      for (let i = 0; i < this.total; i++) {
        this.tableData.push({ ...dataItem, id: i + 1 })
      }
    },
    handleSearch(data) {
      this.params = { ...data }
    },
    handleSelectionChange(val) {
      console.log('selection', val)
    }
  }
}
</script>
```

## 固定表头

<table-fixed></table-fixed>

```vue
<template>
  <plh-table
    ref="table"
    :columns="columns"
    :tableData="tableData"
    :height="params.height"
    :max-height="params['max-height']"
  ></plh-table>
</template>
<script>
const dataItem = {
  name: '刘备',
  male: true,
  remark:
    '汉昭烈帝刘备（161年－223年6月10日），字玄德，涿郡涿县（今河北省涿州市）人，西汉中山靖王刘胜之后，蜀汉开国皇帝（221年9月22日－223年6月10日）、政治家。史家多称其为先主。'
}

export default {
  name: 'DemoTableFixed',
  data() {
    return {
      params: {
        height: 400,
        'max-height': 500
      },

      tableData: [],
      total: 34,
      columns: [
        {
          label: 'ID',
          prop: 'id',
          width: '60px'
        },
        {
          title: '姓名',
          key: 'name',
          width: '140px',
          align: 'center',
          renderHeader: (h, { column }) => {
            return <span>{`render ${column.label}`}</span>
          }
        },
        {
          label: '性别',
          prop: 'male',
          width: '80px',
          format: (row, column, cellValue, index) => {
            return <span>{cellValue ? '男' : '女'}</span>
          }
        },
        {
          label: '介绍',
          prop: 'remark',
          showOverflowTooltip: true
        },
        {
          title: '操作',
          key: 'operation',
          width: '80px',
          fixed: 'right',
          render: (h, { row }) => {
            return <plh-button type="primary">编辑</plh-button>
          }
        }
      ]
    }
  },
  created() {
    this.createData()
  },
  methods: {
    createData() {
      for (let i = 0; i < this.total; i++) {
        this.tableData.push({ ...dataItem, id: i + 1 })
      }
    },
    handleSearch(data) {
      this.params = { ...data }
    }
  }
}
</script>
```

## 树结构

<table-tree></table-tree>

```vue
<template>
  <plh-table
    ref="table"
    :columns="columns"
    :tableData="tableData"
    row-key="id"
    :default-expand-all="params['default-expand-all']"
    :indent="params.indent"
    :lazy="params.lazy"
    :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
  ></plh-table>
</template>
<script>
const dataItem = {
  name: '刘备',
  male: true,
  remark:
    '汉昭烈帝刘备（161年－223年6月10日），字玄德，涿郡涿县（今河北省涿州市）人，西汉中山靖王刘胜之后，蜀汉开国皇帝（221年9月22日－223年6月10日）、政治家。史家多称其为先主。'
}
export default {
  name: 'DemoTableTree',
  data() {
    return {
      params: {
        'default-expand-all': false,
        indent: 16,
        lazy: false
      },
      tableData: [],
      total: 34,
      columns: [
        {
          label: 'ID',
          prop: 'id',
          width: '120px'
        },
        {
          title: '姓名',
          key: 'name',
          width: '140px',
          align: 'center',
          renderHeader: (h, { column }) => {
            return <span>{`render ${column.label}`}</span>
          }
        },
        {
          label: '性别',
          prop: 'male',
          width: '80px',
          format: (row, column, cellValue, index) => {
            return <span>{cellValue ? '男' : '女'}</span>
          }
        },
        {
          label: '介绍',
          prop: 'remark',
          showOverflowTooltip: true
        },
        {
          title: '操作',
          key: 'operation',
          width: '80px',
          fixed: 'right',
          render: (h, { row }) => {
            return <plh-button type="primary">编辑</plh-button>
          }
        }
      ]
    }
  },
  created() {
    this.createData()
  },
  methods: {
    createData() {
      for (let i = 0; i < this.total; i++) {
        this.tableData.push({ ...dataItem, id: i + 1, children: [{ id: `${100 + i}`, ...dataItem }] })
      }
    },
    handleSearch(data) {
      this.params = { ...data }
    }
  }
}
</script>
```

## 无数据

<table-empty></table-empty>

```vue
<template>
  <plh-table ref="table" :columns="columns" :tableData="tableData" :empty-text="params['empty-text']"></plh-table>
</template>
<script>
export default {
  name: 'DemoTableFixed',
  data() {
    return {
      params: {
        'empty-text': '暂无数据'
      },
      tableData: [],
      columns: [
        {
          label: 'ID',
          prop: 'id',
          width: '60px'
        },
        {
          title: '姓名',
          key: 'name',
          width: '140px',
          align: 'center',
          renderHeader: (h, { column }) => {
            return <span>{`render ${column.label}`}</span>
          }
        },
        {
          label: '性别',
          prop: 'male',
          width: '80px',
          format: (row, column, cellValue, index) => {
            return <span>{cellValue ? '男' : '女'}</span>
          }
        },
        {
          label: '介绍',
          prop: 'remark',
          showOverflowTooltip: true
        },
        {
          title: '操作',
          key: 'operation',
          width: '80px',
          fixed: 'right',
          render: (h, { row }) => {
            return <plh-button type="primary">编辑</plh-button>
          }
        }
      ]
    }
  },
  created() {},
  methods: {
    handleSearch(data) {
      this.params = { ...data }
    }
  }
}
</script>
```

## Api

| 参数            | 描述                        |   类型   |              可选值              | 必须 | 默认值                      |
| --------------- | --------------------------- | :------: | :------------------------------: | :--: | --------------------------- |
| api             | 接口地址与 tableData 二选一 | function |                                  |  是  |                             |
| tableData       | 表格数据                    |  arrary  |                                  |  否  |                             |
| params          | 请求参数                    |  object  |                                  |  否  |                             |
| defaultParams   | 预设的参数                  |  arrary  |                                  |  否  |                             |
| columns         | 列表字段对象                |  arrary  |                                  |  否  |                             |
| pollInterval    | 自动刷新间隔                |  number  |                                  |  否  | 0                           |
| size            | 尺寸                        |  string  | large \| medium \| small \| mini |  否  | medium                      |
| path            | 自定义接口路径              |  string  |                                  |  否  |                             |
| paginationable  | 是否开启分页                | boolean  |                                  |  否  | true                        |
| pagination      | 分页配置                    |  object  |                                  |  否  | {pageIndex: 1,pageSize: 10} |
| pageSizeOptions | 分页 sizes 配置             |  array   |                                  |  否  | [10, 20, 30, 40, 50, 100]   |

详细配置，同[el-table](https://element.eleme.cn/#/zh-CN/component/table#table-attributes)

## Columns Api

| 参数   | 描述                   | 类型               | 可选值 | 必须 | 默认值 |
| ------ | ---------------------- | ------------------ | ------ | ---- | ------ |
| title  | 标题，同 label         | string             |        | 否   |        |
| key    | 列数据 key 值，同 prop | string             |        | 否   |        |
| render | render 单元格          | Function(h, props) |        | 否   |        |

详细配置，同[el-table Column](https://element.eleme.cn/#/zh-CN/component/table#table-column-attributes)

## 其他配置

参考：

- Events [el-table Event](https://element.eleme.cn/#/zh-CN/component/table#table-events)
- Methods [el-table Methods](https://element.eleme.cn/#/zh-CN/component/table#table-methods)
