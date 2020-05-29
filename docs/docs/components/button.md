# Button 按钮

## 用法

<button-base></button-base>

```vue
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
        >{{ item ? item : '默认' }}</plh-button
      >
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
```

## tooltip

<button-tooltip></button-tooltip>

```vue
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
        >{{ item ? item : '默认' }}</plh-button
      >
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
        {
          tag: 'el-radio-group',
          label: '主题(effect)',
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
```

## API

| 参数      | 描述             | 类型    | 可选值                           | 必须 | 默认值 |
| --------- | ---------------- | ------- | -------------------------------- | ---- | ------ |
| size      | 尺寸             | string  | large \| medium \| small \| mini | 否   | medium |
| tooltip   | 是否显示 tooltip | boolean |                                  | 否   | false  |
| placement | tooltip 位置     | string  |                                  | 否   | top    |

详细 API 参考：

- [el-button API](https://element.eleme.cn/#/zh-CN/component/button#attributes)
- [el-tooltip Api](https://element.eleme.cn/#/zh-CN/component/tooltip#attributes)
