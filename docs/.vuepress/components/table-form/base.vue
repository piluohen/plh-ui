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
    </div>
  </div>
</template>
<script>
import { radioItem, searchs } from '../../js/search'
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
      searchList: [
        { ...searchs.size },
        {
          tag: 'el-input-number',
          label: '限制数量(limitNum)',
          key: 'limitNum',
          props: {
            min: 1,
            max: 10,
            step: 1,
            precision: 0,
            'step-strictly': true
          }
        },
        {
          ...radioItem,
          label: '禁用(disabled)',
          key: 'disabled'
        },
        {
          ...radioItem,
          label: '显示按钮(showBtn)',
          key: 'showBtn'
        }
      ],
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
    handleSearch(data) {
      this.params = { ...data }
    },
    handleInput(val) {}
  }
}
</script>
