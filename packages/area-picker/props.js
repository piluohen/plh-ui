export default {
  value: {
    type: [String, Array]
  },
  props: {
    type: Object,
    default: () => {
      return {}
    }
  },
  clearable: {
    type: Boolean,
    default: true
  },
  placeholder: {
    type: String,
    default: '请选择'
  }
}
