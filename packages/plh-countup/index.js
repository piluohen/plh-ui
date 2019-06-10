import { CountUp } from 'countup.js'

export default {
  name: 'plh-countup',
  props: {
    startVal: {
      type: Number,
      default: 0
    },
    endVal: {
      type: Number,
      required: true
    },
    decimals: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 2
    },
    options: {
      type: Object
    }
  },
  watch: {
    endVal: 'update'
  },
  methods: {
    start (callback) {
      if (this.countup) this.countup.start(callback)
    },
    pauseResume () {
      if (this.countup) this.countup.pauseResume()
    },
    reset () {
      if (this.countup) this.countup.reset()
    },
    update (endVal) {
      if (this.countup) this.countup.update(endVal)
    }
  },
  mounted () {
    this.countup = new CountUp(this.$el, this.startVal, this.endVal, this.decimals, this.duration, this.options)
  },
  beforeDestroy () {
    this.countup = null
  },
  render (h) {
    return <span />
  }
}
