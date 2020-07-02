# Preview 图片预览

> plh-form 组件依赖于 el-dialog 组件

## 用法

<preview-base></preview-base>

```vue
<template>
  <div class="demo demo-preview">
    <div class="img-list">
      <div class="item" v-for="(item, index) in fileList" :key="index">
        <el-image :src="item.url" fit="cover" @click="handlePreview(index)"></el-image>
      </div>
    </div>
    <plh-preview v-model="visible" :list="fileList" :index="activeIndex"></plh-preview>
  </div>
</template>
<script>
import { radioItem, searchs } from '../../js/search'
export default {
  name: 'DemoPreviewBase',
  data() {
    return {
      visible: false,
      activeIndex: 0,
      fileList: [
        { url: 'http://oss.htcxcloud.com/3219dc07-a031-4dab-a7ad-b8c5d0c6d1da/曹操.jpg' },
        { url: 'http://oss.htcxcloud.com/3d1c471e-c5ae-4fc8-a805-433830e8dd43/貂蝉.jpg' },
        { url: 'http://oss.htcxcloud.com/e0e57bb4-af01-45af-a481-be2263793491/关羽.jpg' },
        { url: 'http://oss.htcxcloud.com/110ac643-35d9-4c73-8562-8a73f637a48f/黄忠.jpg' },
        { url: 'http://oss.htcxcloud.com/3c325ce8-b5fc-42bf-af0e-092420c8c9f4/廖化.jpg' }
      ]
    }
  },
  methods: {
    handlePreview(index) {
      this.visible = true
      this.activeIndex = index
    }
  }
}
</script>
<style lang="stylus">
.img-list {
  display: flex;

  .item {
    width: 200px;
    height: 300px;
    margin: 10px;

    .el-image {
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
  }
}
</style>
```

## Api

| 参数    |       描述       |  类型   |    可选值     | 必须 | 默认值      |
| ------- | :--------------: | :-----: | :-----------: | :--: | ----------- |
| v-model |   是否显示预览   | boolean | true \| false |  是  | false       |
| list    |     图片列表     |  array  |               |  是  | [{url: ''}] |
| index   | 当前展示图片索引 | number  |               |  是  | 0           |
