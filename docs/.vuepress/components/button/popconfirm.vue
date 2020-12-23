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
        :hideMsgIcon="params.hideMsgIcon"
        :msgIcon="params.msgIcon"
        :msgIconColor="params.msgIconColor"
        @click="handleClick"
        @confirm="handleConfirm"
        @cancel="handleCancel"
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
        title: '你点开了气泡提书框，确认继续吗？',
        confirmButtonType: 'primary',
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        cancelButtonType: 'default',
        disabled: false,
        hideMsgIcon: false,
        msgIcon: 'el-icon-question',
        msgIconColor: '#f90'
      },
      searchList: [...popconfirmSearchList]
    }
  },
  methods: {
    handleSearch(data) {
      this.params = { ...data }
    },
    handleClick(event) {
      console.log('handleClick', event)
    },
    handleConfirm() {
      console.log('handleConfirm')
    },
    handleCancel() {
      console.log('handleCancel')
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
