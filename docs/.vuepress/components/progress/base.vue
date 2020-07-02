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
      <plh-progress
        :percentage="params.percentage"
        :type="params.type"
        :stroke-width="params['stroke-width']"
        :show-text="params['show-text']"
        :text-inside="params['text-inside']"
        :stroke-linecap="params['stroke-linecap']"
        :status="params.status"
        :color="params.color"
        :width="params.width"
        :stroke-color="params['stroke-color']"
      ></plh-progress>
    </div>
  </div>
</template>
<script>
import { searchList } from './searchList'
export default {
  name: 'DemoProgressBase',
  data() {
    return {
      params: {
        percentage: 28,
        type: 'line',
        status: null,
        'stroke-width': 6,
        'show-text': true,
        'text-inside': false,
        'stroke-linecap': 'round',
        'stroke-color': '#e5e9f2',
        color: '#409eff',
        width: 126
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
