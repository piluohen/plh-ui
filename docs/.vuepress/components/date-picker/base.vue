<template>
  <div class="demo demo-date-picker">
    <h3>配置项</h3>
    <plh-search
      :params="params"
      :searchList="searchList"
      :showSubmit="false"
      :collapse="false"
      @submit="handleSearch"
    ></plh-search>
    <div class="mt20">
      <h3>示例</h3>
      <plh-date-picker
        v-model="value"
        :type="params.type"
        :size="params.size"
        :readonly="params.readonly"
        :disabled="params.disabled"
        :editable="params.editable"
        :clearable="params.clearable"
        :align="params.align"
        :placeholder="params.placeholder"
        :start-placeholder="params['start-placeholder']"
        :end-placeholder="params['end-placeholder']"
        :range-separator="params['range-separator']"
        :value-format="params['value-format']"
      ></plh-date-picker>
      <p class="code">
        {{ value }}
      </p>
    </div>
  </div>
</template>
<script>
import { radioItem, inputNumberItem, searchs } from '../../js/search'
export default {
  name: 'DemoDatePickerBase',
  data() {
    const type = 'year/month/date/dates/week/datetime/datetimerange/daterange/monthrange'
    return {
      value: null,
      params: {
        type: 'date',
        size: 'medium',
        'value-format': 'timestamp',
        readonly: false,
        disabled: false,
        editable: true,
        clearable: true,
        placeholder: '请选择',
        'start-placeholder': '开始日期',
        'end-placeholder': '结束日期',
        'range-separator': '至',
        align: 'left'
      },
      searchList: [
        {
          tag: 'el-select',
          label: '类型(type)',
          key: 'type',
          children: {
            tag: 'el-option',
            options: type.split('/').map(item => {
              return { label: item, value: item }
            })
          }
        },
        { ...searchs.size },
        {
          tag: 'el-select',
          label: '绑定格式(value-format)',
          key: 'value-format',
          children: {
            tag: 'el-option',
            options: ['timestamp', 'yyyy-MM-DD HH:mm', ''].map(item => {
              return { label: item ? item : '无', value: item }
            })
          }
        },
        {
          ...radioItem,
          label: '文本框可输入(editable)',
          key: 'editable'
        },
        {
          ...radioItem,
          label: '允许清除(clearable)',
          key: 'clearable'
        },
        {
          ...radioItem,
          label: '只读(readonly)',
          key: 'readonly'
        },
        {
          ...radioItem,
          label: '禁用(disabled)',
          key: 'disabled'
        },
        {
          tag: 'el-input',
          label: 'placeholder',
          key: 'placeholder'
        },
        {
          tag: 'el-input',
          label: 'start-placeholder',
          key: 'start-placeholder'
        },
        {
          tag: 'el-input',
          label: 'end-placeholder',
          key: 'end-placeholder'
        },
        {
          tag: 'el-input',
          label: 'range-separator',
          key: 'range-separator'
        },
        {
          tag: 'el-radio-group',
          key: '对齐方式(align)',
          key: 'align',
          children: {
            tag: 'el-radio-button',
            options: ['left', 'center', 'right'].map(item => {
              return { label: item, value: item }
            })
          }
        }
      ]
    }
  },
  methods: {
    handleSearch(data) {
      this.params = { ...data }
    }
  }
}
</script>
