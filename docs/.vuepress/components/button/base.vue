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
import { radioItem, searchs } from '../../js/search'
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
      searchList: [
        { ...searchs.size },
        {
          ...radioItem,
          label: '朴素按钮(plain)',
          key: 'plain'
        },
        {
          ...radioItem,
          label: '圆角按钮(round)',
          key: 'round'
        },
        {
          ...radioItem,
          label: '圆形按钮(circle)',
          key: 'circle'
        },
        {
          ...radioItem,
          label: '加载中(loading)',
          key: 'loading'
        },
        {
          ...radioItem,
          label: '禁用(disabled)',
          key: 'disabled'
        },
        {
          ...radioItem,
          label: '图标(icon)',
          key: 'icon'
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
<style lang="stylus">
.btn-list {
  .plh-button {
    margin-top: 10px;
  }
}
</style>
