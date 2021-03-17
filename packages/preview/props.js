export default {
  value: {
    type: Boolean,
    default: false
  },
  // 图片数据
  list: {
    type: Array,
    default: () => []
  },
  // 图片索引
  index: {
    type: Number,
    default: 0
  }
}
