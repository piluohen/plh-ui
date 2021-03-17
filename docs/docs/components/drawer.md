# Drawer 抽屉

## 用法

<drawer-base></drawer-base>

```vue
<template>
  <div class="demo-drawer">
    <plh-drawer
      ref="drawer"
      :visible.sync="visible"
      :width="params.width"
      :title="params.title"
      :type="params.type"
      :size="params.size"
      :hasFooter="params.hasFooter"
      @cancel="onCancel"
      @confirm="onConfirm"
    >
      <p>这是slot的内容</p>
    </plh-drawer>
    <plh-button type="success" @click="visible = true">显示drawer</plh-button>
  </div>
</template>

<script>
export default {
  name: 'demo-drawer',
  data() {
    return {
      visible: false,
      params: {
        size: 'small',
        width: 640,
        title: 'drawer标题',
        type: 'view',
        hasFooter: true
      }
    }
  },
  mounted() {},
  methods: {
    onCancel() {
      this.visible = false
      this.$message.info('你点击了取消按钮')
    },
    onConfirm() {
      this.visible = false
      this.$message.success('你点击了确定按钮')
    }
  }
}
</script>

<style lang="stylus"></style>
```

## Api

| 参数      |     描述      |       类型       |       可选值        | 必须 | 默认值 |
| --------- | :-----------: | :--------------: | :-----------------: | :--: | :----: |
| visible   |   是否显示    |     boolean      |                     |  是  |        |
| size      |     尺寸      |     按钮尺寸     |                     |  否  | small  |
| width     |  drawer 宽度  | number \| string |                     |  否  | 640px  |
| type      |     类型      |      string      | add \| edit \| view |  否  |  add   |
| title     |     标题      |      string      |                     |  否  |        |
| hasFooter | 是否有 footer |     boolean      |                     |  否  |  true  |

## slot

| name   | 描述                      | 版本 |
| ------ | ------------------------- | ---- |
| -      | drawer 的 body，默认 slot |      |
| title  | 标题 slot                 |      |
| footer | 底部 slot                 |      |

## Events

| 事件        |    描述     | 参数 |
| ----------- | :---------: | :--: |
| closeDrawer | 关闭 drawer |      |
