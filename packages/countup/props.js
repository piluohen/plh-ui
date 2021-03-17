export default {
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
}
