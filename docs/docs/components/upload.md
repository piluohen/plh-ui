# Upload 上传

> plh-upload 依赖 el-upload、el-progress、el-image、el-button 组件，集成 el-upload 文件与图片上传功能

## 用法

<upload-base></upload-base>

```vue
<template>
  <div class="mt10">
    <plh-upload
      v-model="fileList"
      :type="params.type"
      :action="action"
      :configs="configs"
      :disabled="params.disabled"
      @complate="handleComplate"
    ></plh-upload>
    <plh-button type="primary" size="small" :loading="loading" :disabled="loading" @click="handleSubmit">
      提交表单
    </plh-button>
  </div>
</template>
<script>
export default {
  name: 'DemoUploadBase',
  data() {
    return {
      params: {
        type: 'picture',
        disabled: false
      },
      action: `https://jsonplaceholder.typicode.com/posts/`,
      configs: {
        limitNum: 10,
        limitSize: 2,
        limitType: 'image/png,image/jpeg,image/gif'
      },
      fileList: [
        { url: 'http://oss.htcxcloud.com/3219dc07-a031-4dab-a7ad-b8c5d0c6d1da/曹操.jpg', name: '曹操.jpg' },
        { url: 'http://oss.htcxcloud.com/3d1c471e-c5ae-4fc8-a805-433830e8dd43/貂蝉.jpg', name: '貂蝉.jpg' },
        { url: 'http://oss.htcxcloud.com/e0e57bb4-af01-45af-a481-be2263793491/关羽.jpg', name: '关羽.jpg' },
        { url: 'http://oss.htcxcloud.com/110ac643-35d9-4c73-8562-8a73f637a48f/黄忠.jpg', name: '黄忠.jpg' },
        { url: 'http://oss.htcxcloud.com/3c325ce8-b5fc-42bf-af0e-092420c8c9f4/廖化.jpg', name: '廖化.jpg' }
      ],
      loading: false
    }
  },
  methods: {
    handleSearch(data) {
      this.params = { ...data }
    },
    handleComplate(val) {
      this.loading = !val
    },
    handleSubmit() {
      if (!this.loading) {
        this.$message.success('可以提交了')
      } else {
        this.$message.warning('正在上传中，禁止提交')
      }
    }
  }
}
</script>
```

## Api

| 参数      |     描述     |  类型   |                           可选值                           | 必须  | 默认值                            |
| --------- | :----------: | :-----: | :--------------------------------------------------------: | :---: | --------------------------------- |
| type      |   上传类型   | string  |                    picture/file/button                     | true  | picture                           |
| action    |   上传地址   | string  |                                                            | true  |                                   |
| headers   | 请求 headers | object  |                                                            | false |                                   |
| configs   |    配置项    | object  |                                                            | false |                                   |
| btnConfig |  按钮配置项  | object  | type(类型) \| size(大小) \| icon(icon 图标) \| round(圆角) | false | primary \| small \| 空值 \| false |
| disabled  |   禁用与否   | boolean |                       true \| false                        |  否   | true                              |

## configs 配置项

| 参数         |       描述       |  类型  |            可选值             | 必须  | 默认值                         |
| ------------ | :--------------: | :----: | :---------------------------: | :---: | ------------------------------ |
| limitNum     |   限制上传数量   | number |                               | false | 10                             |
| limitSize    |   限制文件大小   | number |                               | false | 1                              |
| limitUnit    | 限制文件存储单位 | string | B \| KB \| M \| MB \| G \| GB | false | M                              |
| limitSizeMsg | 显示大小提示文案 | string |                               | false |                                |
| limitType    |   限制文件类型   | string |                               | false | image/png,image/jpeg,image/gif |
| btnName      |     按钮文案     | string |                               | false | 点击上传                       |

## Events

| 事件     |         描述         |    参数    |
| -------- | :------------------: | :--------: |
| complate | 监听上传是否已经结束 | true/false |
