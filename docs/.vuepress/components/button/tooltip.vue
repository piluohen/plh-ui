<template>
  <div class="demo demo-button">
    <plh-search :params="params" :searchList="searchList" :showSubmit="false" @submit="handleSearch"></plh-search>
    <div class="btn-list">
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
        >{{ item ? item : '默认' }}</plh-button
      >
    </div>
  </div>
</template>
<script>
export default {
  name: 'DemoButtonTooltip',
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
    const inputNumberItem = {
      tag: 'el-input-number',
      props: {
        min: 0,
        max: 10000,
        step: 100,
        precision: 0,
        'step-strictly': true
      }
    }
    // 位置
    const placement =
      'top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end'
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
      searchList: [
        {
          tag: 'el-radio-group',
          label: '主题',
          key: 'effect',
          children: {
            tag: 'el-radio-button',
            options: [
              { label: 'dark', value: 'dark' },
              { label: 'light', value: 'light' }
            ]
          }
        },
        {
          tag: 'el-select',
          label: '位置',
          key: 'placement',
          children: {
            tag: 'el-option',
            options: placement.split('/').map(item => {
              return { label: item, value: item }
            })
          }
        },
        {
          ...radioItem,
          label: '箭头',
          key: 'visible-arrow'
        },
        {
          ...radioItem,
          label: '鼠标是否允许进入',
          key: 'enterable'
        },
        {
          ...radioItem,
          label: '禁用',
          key: 'disabled'
        },
        {
          tag: 'el-input-number',
          label: '偏移量',
          key: 'offset',
          props: {
            min: 0,
            max: 100,
            step: 1,
            precision: 0,
            'step-strictly': true
          }
        },
        {
          ...inputNumberItem,
          label: '出现延迟',
          key: 'open-delay'
        },
        {
          ...inputNumberItem,
          label: '隐藏延时',
          key: 'hide-after'
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
