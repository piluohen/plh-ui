<template>
  <div class="plh-scroll-list" :style="listStyle" @mouseover="handleMouseover" @mouseout="handleMouseout">
    <div class="plh-scroll-list-content" :style="contentStyle" @transitionend="handleEnd">
      <div
        class="plh-scroll-list-item"
        v-for="(item, i) in totalList"
        :key="i"
        :style="itemStyle"
        @click="handleClick(item)"
      >
        <slot :item="item" :index="i"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import props from './props'

export default {
  name: 'plh-scroll-list',
  props: { ...props },
  data() {
    return {
      y: 0,
      curr: 0,
      list: [],
      nextList: [],
      inAnimation: false,
      inEnter: false
    }
  },
  computed: {
    totalList() {
      return [...this.list, ...this.nextList]
    },
    contentHeight() {
      return this.itemHeight * this.count
    },
    scrollHeight() {
      return this.scrollCount * this.itemHeight
    },
    listStyle() {
      let style = {
        height: this.contentHeight + 'px'
      }
      return style
    },
    contentStyle() {
      let time = this.inAnimation ? this.speed + 'ms' : ''
      let style = {
        transition: time,
        marginTop: -(this.curr * this.itemHeight) + 'px'
      }
      return style
    },
    itemStyle() {
      let style = {
        height: this.itemHeight + 'px'
      }
      return style
    }
  },
  methods: {
    reset() {
      this.timer && clearTimeout(this.timer)
      this.y = 0
      this.curr = 0
      this.inAnimation = false
      this.loop()
    },
    handleMouseover() {
      this.inEnter = true
      this.timer && clearTimeout(this.timer)
    },
    handleMouseout() {
      this.inEnter = false
      this.loop()
    },
    handleEnd() {
      this.inAnimation = false
      this.curr = 0
      this.loop()
    },
    loop() {
      if (this.inEnter) return
      this.getList()
      this.timer && clearTimeout(this.timer)
      if (this.data.length >= this.count) {
        this.getNextList()
        this.timer = setTimeout(() => {
          this.inAnimation = true
          this.y += this.scrollCount
          this.curr += this.scrollCount
        }, this.delay)
      }
    },
    getList() {
      let { y, count, data } = this
      let curr = y % data.length
      let list = data.slice(curr, curr + count)
      // 补不足
      if (list.length < count && this.data.length >= count) {
        list = [...list, ...data.slice(0, count - list.length)]
      }
      this.list = list
    },
    getNextList() {
      let { y, count, scrollCount, data } = this
      let curr = (y + count) % data.length
      let nextList = data.slice(curr, curr + scrollCount)
      // 补不足
      if (nextList.length < scrollCount) {
        nextList = [...nextList, ...data.slice(0, scrollCount - nextList.length)]
      }
      this.nextList = nextList
    },
    handleClick(row) {
      this.$emit('click', row)
    }
  }
}
</script>

<style lang="stylus">
.plh-scroll-list {
  overflow: hidden;

  .plh-scroll-list-item {
    cursor: pointer;
  }
}
</style>
