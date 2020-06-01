# Scroll-list 滚动列表

## 用法

<scroll-list-base></scroll-list-base>

```vue
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
```

## Api

| 参数        |     描述     |  类型  | 可选值 | 必须  |  默认值  |
| ----------- | :----------: | :----: | :----: | :---: | :------: |
| data        |   滚动数据   | array  |        | true  |          |
| itemHeight  | 滚动子项高度 | number |        | false |    60    |
| count       | 展示子项数量 | number |        | false |    6     |
| scrollCount | 滚动子项数量 | number |        | false |    1     |
| speed       | 子项滚动时间 | number |        | false | 300(ms)  |
| delay       | 滚动间隔时间 | number |        | false | 2000(ms) |

## Slot

```vue
// 支持slot，可以自定义slot子项的内容， 如 item为data的子项
<template slot-scope="{ item }">
  <div class="alert-item">
    <div class="title">{{ item.title }}</div>
    <div class="desc">{{ item.desc }}</div>
  </div>
</template>
```

## Events

| 事件  |     描述     |   参数   |
| ----- | :----------: | :------: |
| click | 子项点击事件 | 子项数据 |
