export default {
  visible: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'small'
  },
  width: {
    type: [String, Number],
    default: '640px'
  },
  type: {
    type: String,
    default: 'add' // add, edit, view
  },
  title: {
    type: String,
    default: ''
  },
  hasFooter: {
    type: Boolean,
    default: true
  }
}
