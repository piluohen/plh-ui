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
import { radioItem, inputNumberItem } from '../../js/search'
export default {
  name: 'DemoButtonTooltip',
  data() {
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
        { ...searchs.tootipEffect },
        {
          tag: 'el-select',
          label: '位置(placement)',
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
          label: '箭头(visible-arrow)',
          key: 'visible-arrow'
        },
        {
          ...radioItem,
          label: '鼠标是否允许进入(enterable)',
          key: 'enterable'
        },
        {
          ...radioItem,
          label: '禁用(disabled)',
          key: 'disabled'
        },
        {
          tag: 'el-input-number',
          label: '偏移量(offset)',
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
          label: '出现延迟(open-delay)',
          key: 'open-delay'
        },
        {
          ...inputNumberItem,
          label: '隐藏延时(hide-after)',
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
