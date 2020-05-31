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
import { searchList } from './searchList'
export default {
  name: 'DemoDatePickerBase',
  data() {
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
      searchList: [...searchList]
    }
  },
  methods: {
    handleSearch(data) {
      this.params = { ...data }
    }
  }
}
</script>
