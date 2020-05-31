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
      <plh-button
        v-for="item in list"
        tooltip
        :type="item"
        :content="item"
        :effect="params.effect"
        :placement="params.placement"
        :visible-arrow="params['visible-arrow']"
        :enterable="params.enterable"
        :disabled="params.disabled"
        :offset="params.offset"
        :open-delay="params['open-delay']"
        :hide-after="params['hide-after']"
        >{{ item ? item : '默认' }}
      </plh-button>
    </div>
  </div>
</template>
<script>
import { tooltipSearchList } from './searchList'
export default {
  name: 'DemoButtonTooltip',
  data() {
    return {
      list: ['', 'primary', 'success', 'warning', 'danger', 'info', 'text'],
      params: {
        effect: 'dark',
        placement: 'top',
        'visible-arrow': true,
        enterable: true,
        disabled: false,
        offset: 0,
        'open-delay': 0,
        'hide-after': 0
      },
      searchList: [...tooltipSearchList]
    }
  },
  methods: {
    handleSearch(data) {
      this.params = { ...data }
    }
  }
}
</script>
<style lang="stylus">
.btn-list {
  .plh-button {
    margin-top: 10px;
  }
}
</style>
