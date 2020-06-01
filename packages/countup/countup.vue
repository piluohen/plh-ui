<template>
  <span class="plh-countup"></span>
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
      required: true
    },
    duration: {
      type: Number,
      required: false,
      default: 1000
    },
    decimalPlaces: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      instance: null,
      delay: this.duration / 1000
    }
  },
  mounted() {
    this.create()
  },
  beforeDestroy() {
    this.instance = null
  },
  watch: {
    endVal: {
      handler(value) {
        if (this.instance) {
          return this.instance.update(value)
        }
      },
      deep: false
    }
  },
  methods: {
    create() {
      if (this.instance) {
        return
      }
      const dom = this.$el
      const instance = new CountUp(dom, this.endVal, {
        startVal: this.startVal,
        duration: this.delay,
        decimalPlaces: this.decimalPlaces
      })
      if (instance.error) {
        return
      }
      this.instance = instance
      if (this.delay < 0) {
        this.$emit('ready', instance, CountUp)
        return
      }
      setTimeout(() => {
        instance.start(() => {
          this.$emit('ready', instance, CountUp)
        })
      }, this.duration)
    },
    reset() {
      if (this.instance) {
        return this.instance.reset()
      }
    }
  }
}
</script>
