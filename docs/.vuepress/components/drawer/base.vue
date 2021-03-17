<template>
  <div class="demo">
    <h3>配置项</h3>
    <plh-search
      :params="params"
      :searchList="searchList"
      :showSubmit="false"
      :collapse="false"
      @submit="handleSearch"
    ></plh-search>
    <h3>示例</h3>
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
  </div>
</template>

<script>
import { searchList } from './searchList'
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
      },
      searchList: [...searchList]
    }
  },
  mounted() {},
  methods: {
    handleSearch(data) {
      this.params = { ...data }
    },
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
