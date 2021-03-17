<template>
  <span ref="countup" class="plh-countup"></span>
</template>

<script>
import { CountUp } from 'countup.js'

export default {
  name: 'plh-countup',
  props: {
    startVal: {
      type: Number,
      required: false,
      default: 0
    },
    endVal: {
      type: Number,
      required: true,
      default: 0
    },
    duration: {
      type: Number,
      required: false,
      default: 1000
    },
    decimalPlaces: {
      type: Number,
      default: 0
    },
    options: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      // instance: null,
      delay: this.duration / 1000
    }
  },
  computed: {
    instance() {
      const dom = this.$el
      const instance = new CountUp(dom, this.endVal, {
        startVal: this.startVal,
        duration: this.delay,
        decimalPlaces: this.decimalPlaces,
        ...this.options
      })
      return instance
    }
  },
  mounted() {
    if (this.endVal === 0) {
      this.create()
    }
  },
  beforeDestroy() {},
  watch: {
    endVal: {
      handler(value) {
        this.create()
      },
      deep: false
    }
  },
  methods: {
    create() {
      if (this.instance.error) {
        return
      }
      if (this.delay < 0) {
        this.$emit('ready', this.instance, CountUp)
        return
      }
      this.instance.start(() => {
        setTimeout(() => {
          this.$emit('ready', this.instance, CountUp)
        }, this.duration)
      })
    },
    reset() {
      if (this.instance) {
        return this.instance.reset()
      }
    }
  }
}
</script>
<style lang="stylus">
.plh-countup {
}
</style>
