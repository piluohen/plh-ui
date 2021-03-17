export default {
  value: {
    type: Object
  },
  items: {
    type: Array,
    default: () => []
  },
  size: {
    type: String,
    default: 'medium'
  },
  inline: {
    type: Boolean,
    default: false
  }
}
