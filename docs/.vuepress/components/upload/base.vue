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
        type: 'video',
        disabled: false
      },
      searchList: [...searchList],
      action: `https://jsonplaceholder.typicode.com/posts/`,
      configs: {
        limitNum: 10,
        limitSize: 500,
        limitUnit: 'M',
        limitType: 'image/png,image/jpeg,image/gif,video/mp4'
      },
      fileList: [
        { url: 'http://oss.htcxcloud.com/3d1c471e-c5ae-4fc8-a805-433830e8dd43/貂蝉.jpg', name: '貂蝉.jpg' },
        // { url: 'http://vd4.bdstatic.com/mda-jbmhv3u6sw67pk8g/sc/mda-jbmhv3u6sw67pk8g.mp4', name: '视频.mp4' },
        {
          url:
            'http://mpvideo.qpic.cn/0bf2teaawaaa5uairawwbrpfbgodbomqacya.f10002.mp4?dis_k=6912cf00b43709b41ccec156c24348b8&dis_t=1622727821&vid=wxv_1367752295282327553&format_id=10002&support_redirect=0&mmversion=false',
          name: '视频2.mp4'
        }
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
