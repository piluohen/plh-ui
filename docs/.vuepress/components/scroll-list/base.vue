<template>
  <div class="demo demo-scroll-list">
    <plh-scroll-list
      ref="scroll"
      :data="list"
      :count="count"
      :itemHeight="60"
      :scrollCount="1"
      :speed="300"
      :delay="2000"
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
</template>

<script>
export default {
  name: 'demo-scroll-list',
  data() {
    return {
      count: 4
    }
  },
  computed: {
    list() {
      let arr = []
      for (let i = 1; i < 10; i++) {
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

