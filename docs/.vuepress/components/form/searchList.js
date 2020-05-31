import { radioItem, searchs } from '../../js/search'

export const searchList = [
  { ...searchs.size },
  {
    ...radioItem,
    label: '行内显示(inline)',
    key: 'inline'
  },
  {
    tag: 'el-radio-group',
    label: '分列(col)',
    key: 'col',
    children: {
      tag: 'el-radio-button',
      options: [6, 8, 12, 24].map(item => {
        return { label: item, value: item }
      })
    }
  },
  {
    tag: 'el-radio-group',
    label: '标签位置(label-position)',
    key: 'label-position',
    children: {
      tag: 'el-radio-button',
      options: ['left', 'right', 'top'].map(item => {
        return { label: item, value: item }
      })
    }
  },
  {
    tag: 'el-input',
    label: '标签宽度(label-width)',
    key: 'label-width'
  },
  {
    tag: 'el-input',
    label: '标签后缀(label-suffix)',
    key: 'label-suffix'
  },
  {
    ...radioItem,
    label: '显示*号(hide-required-asterisk)',
    key: 'hide-required-asterisk'
  },
  {
    ...radioItem,
    label: '显示校验错误信息(show-message)',
    key: 'show-message'
  },
  {
    ...radioItem,
    label: '是否显示反馈图标(status-icon)',
    key: 'status-icon'
  },
  {
    ...radioItem,
    label: '禁用(disabled)',
    key: 'disabled'
  }
]
