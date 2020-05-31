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
            console.log(row)
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
