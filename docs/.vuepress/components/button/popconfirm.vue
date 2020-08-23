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
        popconfirm
        :type="item"
        :title="params.title"
        :confirmButtonType="params.confirmButtonType"
        :confirmButtonText="params.confirmButtonText"
        :cancelButtonType="params.cancelButtonType"
        :cancelButtonText="params.cancelButtonText"
        :disabled="params.disabled"
        :hideIcon="params.hideIcon"
        :icon="params.icon"
        :iconColor="params.iconColor"
        >{{ item }}
      </plh-button>
    </div>
  </div>
</template>
<script>
import { popconfirmSearchList } from './searchList'
import { btnTypeList } from '../../js/setting'

export default {
  name: 'DemoButtonTooltip',
  data() {
    return {
      list: [...btnTypeList],
      params: {
        title: '这是提示标题',
        confirmButtonType: 'primary',
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        cancelButtonType: 'default',
        disabled: false,
        hideIcon: false,
        popIcon: 'el-icon-question',
        iconColor: '#f90'
      },
      searchList: [...popconfirmSearchList]
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
