<template>
  <el-progress class="plh-progress" :type="type" v-bind="$attrs"></el-progress>
</template>
<script>
import props from './props'

export default {
  name: 'plh-progress',
  props: { ...props },
  watch: {
    strokeColor() {
      this.setStrokeColor(this.strokeColor)
    }
  },
  mounted() {
    this.setStrokeColor(this.strokeColor)
  },
  methods: {
    setStrokeColor(color) {
      if (this.type === 'line') {
        let el = this.$el.querySelector('.el-progress-bar__outer')
        el.style.backgroundColor = color || '#e5e9f2'
      } else {
        let el = this.$el.querySelector('.el-progress-circle__track')
        el.style.stroke = color || '#e5e9f2'
      }
    }
  }
}
</script>
<style lang="stylus">
.plh-progress {
}
</style>
