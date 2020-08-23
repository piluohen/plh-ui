import { btnTypeList } from './setting'

export const radioItem = {
  tag: 'el-radio-group',
  children: {
    tag: 'el-radio-button',
    options: [
      { label: '是', value: true },
      { label: '否', value: false }
    ]
  }
}

export const searchs = {
  size: {
    tag: 'el-radio-group',
    label: '尺寸(size)',
    key: 'size',
    children: {
      tag: 'el-radio-button',
      options: [
        { label: 'large', value: 'large' },
        { label: 'medium', value: 'medium' },
        { label: 'small', value: 'small' },
        { label: 'mini', value: 'mini' }
      ]
    }
  },
  tootipEffect: {
    tag: 'el-radio-group',
    label: '主题(effect)',
    key: 'effect',
    children: {
      tag: 'el-radio-button',
      options: [
        { label: 'dark', value: 'dark' },
        { label: 'light', value: 'light' }
      ]
    }
  },
  btnType: (options) => {
    return {
      tag: 'el-radio-group',
      label: '按钮类型(type)',
      key: 'type',
      children: {
        tag: 'el-radio-button',
        options: btnTypeList.map(item => {
          const data = { label: item, value: item }
          return data
        })
      },
      ...options
    }
  }
}
