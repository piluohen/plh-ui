<template>
  <div class="demo demo-table">
    <h3>配置项</h3>
    <plh-search
      :params="params"
      :searchList="searchList"
      :showSubmit="false"
      :collapse="false"
      @submit="handleSearch"
    ></plh-search>
    <div class="mt10">是不是不能根据表单重新渲染表格？先不管了，知道初始化能用就行了。</div>
    <div class="mt10">
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
    </div>
  </div>
</template>
<script>
import { expandSearchList } from './searchList'
import { dataItem } from './mock'

export default {
  name: 'DemoTableTree',
  data() {
    return {
      searchList: [...expandSearchList],
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
