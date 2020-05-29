<template>
  <div class="demo demo-search">
    <h3>配置项</h3>
    <plh-search
      :params="params"
      :searchList="searchList"
      :showSubmit="false"
      :collapse="false"
      @submit="handleSearch"
    ></plh-search>
    <div class="mt10">
      <h3>示例</h3>
      <plh-search
        :params="model"
        :searchList="formList"
        :size="params.size"
        :showSubmit="params.showSubmit"
        :collapse="params.collapse"
        @submit="handleExampleSearch"
      ></plh-search>
      <p class="code">{{ model }}</p>
    </div>
  </div>
</template>
<script>
import { radioItem, searchs } from '../../js/search'
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
        { ...searchs.size },
        {
          ...radioItem,
          label: '显示查询按钮(showSubmit)',
          key: 'showSubmit'
        },
        {
          ...radioItem,
          label: '是否收起(collapse)',
          key: 'collapse'
        },
        {
          ...radioItem,
          label: '禁用(disabled)',
          key: 'disabled'
        }
      ],
      model: {
        checkbox: []
      },
      formList: [
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
      ]
    }
  },
  methods: {
    handleSearch(data) {
      this.params = { ...data }
    },
    handleExampleSearch(data) {
      this.model = { ...data }
    }
  }
}
</script>
