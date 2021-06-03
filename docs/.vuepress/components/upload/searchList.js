import { radioItem, searchs } from '../../js/search'

export const searchList = [
  {
    tag: 'el-radio-group',
    label: '类型(type)',
    key: 'type',
    children: {
      tag: 'el-radio-button',
      options: ['picture', 'file', 'button', 'video'].map(item => {
        return { label: item, value: item }
      })
    }
  },
  {
    ...radioItem,
    label: '禁用(disabled)',
    key: 'disabled'
  }
]
