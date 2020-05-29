<template>
  <div class="demo demo-button">
    <plh-search :params="params" :searchList="searchList" :showSubmit="false" @submit="handleSearch"></plh-search>
    <div class="btn-list">
      <plh-button
        v-for="item in list"
        :type="item"
        :plain="params.plain"
        :round="params.round"
        :circle="params.circle"
        :loading="params.loading"
        :disabled="params.disabled"
        :icon="params.icon ? 'el-icon-view' : ''"
        >{{ item ? item : '默认' }}</plh-button
      >
    </div>
  </div>
</template>
<script>
export default {
  name: 'DemoButtonBase',
  data() {
    const radioItem = {
      tag: 'el-radio-group',
      label: '朴素按钮',
      key: 'plain',
      children: {
        tag: 'el-radio-button',
        options: [
          { label: '是', value: true },
          { label: '否', value: false }
        ]
      }
    }
    return {
      list: ['', 'primary', 'success', 'warning', 'danger', 'info', 'text'],
      params: {
        plain: false,
        round: false,
        circle: false,
        loading: false,
        disabled: false,
        icon: false
      },
      searchList: [
        {
          ...radioItem,
          label: '朴素按钮',
          key: 'plain'
        },
        {
          ...radioItem,
          label: '圆角按钮',
          key: 'round'
        },
        {
          ...radioItem,
          label: '圆形按钮',
          key: 'circle'
        },
        {
          ...radioItem,
          label: '加载中',
          key: 'loading'
        },
        {
          ...radioItem,
          label: '禁用',
          key: 'disabled'
        },
        {
          ...radioItem,
          label: 'Icon',
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
