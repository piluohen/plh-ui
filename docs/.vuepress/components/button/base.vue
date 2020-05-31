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
        :type="item"
        :size="params.size"
        :plain="params.plain"
        :round="params.round"
        :circle="params.circle"
        :loading="params.loading"
        :disabled="params.disabled"
        :icon="params.icon ? 'el-icon-view' : ''"
        >{{ item ? item : '默认' }}
      </plh-button>
    </div>
  </div>
</template>
<script>
import { baseSearchList } from './searchList'
export default {
  name: 'DemoButtonBase',
  data() {
    return {
      list: ['', 'primary', 'success', 'warning', 'danger', 'info', 'text'],
      params: {
        size: 'medium',
        plain: false,
        round: false,
        circle: false,
        loading: false,
        disabled: false,
        icon: false
      },
      searchList: [...baseSearchList]
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
