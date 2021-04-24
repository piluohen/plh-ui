# Editor 富文本编辑器

> plh-editor 组件依赖于 tinymce

## 用法

<editor-base></editor-base>

```vue
<template>
  <div class="demo-editor">
    <plh-editor ref="editor" v-model="model"></plh-editor>
    <p class="code">
      {{ model }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'demo-editor',
  data() {
    return {
      model: ''
    }
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="stylus"></style>
```

## Api

accept

| 参数          |       描述       |   类型   | 可选值 | 必须 |             默认值             |
| ------------- | :--------------: | :------: | :----: | :--: | :----------------------------: |
| value/v-model |        值        |  string  |        |  是  |                                |
| accept        | 支持图片上传类型 |  string  |        |  否  | image/jpeg,image/jpg,image/png |
| uploadFn      |   图片上传方法   | function |        |  否  |                                |
| options       |  tinymce 配置项  |  object  |        |  否  |                                |

options 配置参考 tinymce：

- [tinymce](http://tinymce.ax-z.cn/configure/integration-and-setup.php)

## Events

| 事件   |    描述    | 参数 |
| ------ | :--------: | :--: |
| change | 值改变事件 |      |
