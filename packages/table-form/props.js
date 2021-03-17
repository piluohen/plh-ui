export default {
  value: {
    type: Array,
    default: () => []
  },
  limitNum: {
    type: Number,
    default: 6
  },
  columns: {
    type: Array,
    default: () => []
  },
  showBtn: {
    type: Boolean,
    default: true
  },
  size: {
    type: String,
    default: 'medium'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  onAdd: {
    type: Function,
    default: null
  }
}
