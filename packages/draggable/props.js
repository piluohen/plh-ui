export default {
  value: {
    type: Array,
    required: false,
    default: () => {
      return []
    }
  },
  noTransitionOnDrag: {
    type: Boolean,
    default: false
  },
  clone: {
    type: Function,
    default: original => {
      return original
    }
  },
  move: {
    type: Function,
    default: null
  },
  componentData: {
    type: Object,
    required: false,
    default: null
  },
  containerSelector: {
    type: String,
    default: null
  },
  draggableClassName: {
    type: String,
    default: null
  }
}
