export default {
  value: {
    type: [String, Array]
  },
  // 上传类型 picture | file | button
  type: {
    type: String,
    default: 'picture'
  },
  // 上传地址
  action: {
    type: String,
    default: ''
  },
  // 覆盖默认的上传行为
  httpRequest: {
    type: Function
  },
  // 请求headers
  headers: {
    type: Object,
    default: () => {}
  },
  // 是否显示fileList
  showFileList: {
    type: Boolean,
    default: true
  },
  // list 类型 text/picture/picture-card
  listType: {
    type: String,
    default: 'text'
  },
  // 是否禁用
  disabled: {
    type: Boolean,
    default: false
  },
  // 配置项
  configs: {
    required: false,
    type: Object,
    default() {
      return {}
    }
  },
  // 按钮配置项
  btnConfig: {
    type: Object,
    default: () => {
      return {
        type: 'primary',
        size: 'medium',
        icon: '',
        round: false
      }
    }
  }
}
