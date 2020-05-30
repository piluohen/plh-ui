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
    <div class="mt10">
      <plh-table
        ref="table"
        :columns="columns"
        :tableData="tableData"
        :height="params.height"
        :max-height="params['max-height']"
      ></plh-table>
    </div>
  </div>
</template>
<script>
import { fixedSearchList } from './searchList'
import { dataItem } from './mock'

export default {
  name: 'DemoTableBase',
  data() {
    return {
      searchList: [...fixedSearchList],
      params: {
        height: 400,
        'max-height': 500
      },

      tableData: [],
      total: 34,
      columns: [
        {
          label: '索引',
          type: 'index'
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
          prop: 'ramark',
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
        this.tableData.push({ ...dataItem, id: i })
      }
    },
    handleSearch(data) {
      this.params = { ...data }
    }
  }
}
</script>
