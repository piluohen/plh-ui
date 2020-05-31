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
  </div>
</template>
<script>
import { searchList } from './searchList'
export default {
  name: 'DemoUploadBase',
  data() {
    return {
      params: {
        type: 'picture',
        disabled: false
      },
      searchList: [...searchList],
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
