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
    <div class="btn-list mt10">
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
        :empty-text="params['empty-text']"
        :default-expand-all="params['default-expand-all']"
        :tooltip-effect="params['tooltip-effect']"
        :show-summary="params['show-summary']"
        :sum-text="params['sum-text']"
        :select-on-indeterminate="params['select-on-indeterminate']"
        :indent="params.indent"
        :lazy="params.lazy"
        @selection-change="handleSelectionChange"
      ></plh-table>
    </div>
  </div>
</template>
<script>
import { baseSearchList } from './searchList'
import { dataItem } from './mock'

export default {
  name: 'DemoTableBase',
  data() {
    return {
      searchList: [...baseSearchList],
      params: {
        size: 'medium',
        stripe: false,
        border: false,
        fit: true,
        'show-header': true,
        'empty-text': '暂无数据',
        'default-expand-all': false,
        'tooltip-effect': 'dark',
        'show-summary': false,
        'sum-text': '合计',
        'select-on-indeterminate': true,
        indent: 16,
        lazy: false
      },
      tableData: [],
      total: 34,
      columns: [
        {
          type: 'selection',
          fixed: 'left'
        },
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
    },
    handleSelectionChange(val) {
      console.log('selection', val)
    }
  }
}
</script>
