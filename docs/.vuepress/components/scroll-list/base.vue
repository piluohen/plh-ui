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
    <div class="demo-scroll-list">
      <plh-scroll-list
        ref="scroll"
        :data="list"
        :count="params.count"
        :itemHeight="params.itemHeight"
        :scrollCount="params.scrollCount"
        :speed="params.speed"
        :delay="params.delay"
        @click="handleClick"
      >
        <template slot-scope="{ item }">
          <div class="alert-item">
            <div class="title">{{ item.title }}</div>
            <div class="desc">{{ item.desc }}</div>
          </div>
        </template>
      </plh-scroll-list>
    </div>
  </div>
</template>

<script>
import { searchList } from './searchList'
export default {
  name: 'demo-scroll-list',
  data() {
    return {
      params: {
        count: 4,
        itemHeight: 60,
        scrollCount: 1,
        speed: 300,
        delay: 2000
      },
      searchList: [...searchList]
    }
  },
  computed: {
    list() {
      let arr = []
      for (let i = 1; i <= 10; i++) {
        arr.push({
          title: `第${i}个标题`,
          desc: `这是第${i}个描述呀呀呀呀呀`
        })
      }
      return arr
    }
  },
  mounted() {
    this.$refs.scroll.reset()
  },
  methods: {
    handleSearch(data) {
      this.params = { ...data }
    },
    handleClick(data) {
      console.log(data)
      this.$message.success('你点击了滚动条目')
    }
  }
}
</script>

<style lang="stylus">
.demo-scroll-list {
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #dedede;
}
</style>
