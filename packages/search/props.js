export default {
  searchList: {
    type: Array,
    default: () => []
  },
  params: {
    type: Object,
    default: () => {}
  },
  size: {
    type: String,
    default: 'medium'
  },
  showSubmit: {
    type: Boolean,
    default: true
  },
  collapse: {
    type: Boolean,
    default: true
  }
}
