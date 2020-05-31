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
    <div class="mt10">
      <plh-table ref="table" :columns="columns" :tableData="tableData" :empty-text="params['empty-text']"></plh-table>
    </div>
  </div>
</template>
<script>
import { emptySearchList } from './searchList'
import { dataItem } from './mock'

export default {
  name: 'DemoTableFixed',
  data() {
    return {
      searchList: [...emptySearchList],
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
