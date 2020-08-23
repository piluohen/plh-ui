# Button 按钮

> plh-button 组件依赖于 el-button、el-tooltip 组件，集成了两个组件

<button-popconfirm></button-popconfirm>

## 用法

<button-base></button-base>

```vue
<template>
  <div class="btn-list">
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
</template>
<script>
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
      }
    }
  },
  methods: {}
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
</template>
<script>
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
      }
    }
  },
  methods: {}
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
