export default {
  // api请求
  api: {
    type: Function
  },
  // 组件外传入表格数据
  tableData: {
    type: Array,
    default: () => []
  },
  // 请求参数
  params: {
    type: Object,
    default: () => ({})
  },
  // 预设请求参数，需要通过计算属性获得
  defaultParams: {
    type: Object,
    default: () => ({})
  },
  // 列表字段
  columns: {
    type: Array,
    default: () => []
  },
  // 自动刷新间隔
  pollInterval: {
    type: Number,
    default: 0
  },
  // 是否分页
  paginationable: {
    type: Boolean,
    default: true
  },
  // 尺寸
  size: {
    type: String,
    default: 'medium'
  },
  // 分页
  pagination: {
    type: Object,
    default: () => {
      return {
        current: 1,
        pageSize: 10
      }
    }
  },
  // 分页sizes配置
  pageSizeOptions: {
    type: Array,
    default: () => {
      return [10, 20, 30, 40, 50, 100]
    }
  },
  keys: {
    type: Object,
    default: () => {}
  },
  total: {
    type: Number,
    default: 0
  },
  layout: {
    type: String,
    default: 'total, sizes, prev, pager, next, jumper'
  }
}
