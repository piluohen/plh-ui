import { radioItem, searchs } from '../../js/search'

export const searchList = [
  { ...searchs.size },
  {
    ...radioItem,
    label: '显示查询按钮(showSubmit)',
    key: 'showSubmit'
  },
  {
    ...radioItem,
    label: '是否收起(collapse)',
    key: 'collapse'
  },
  {
    ...radioItem,
    label: '禁用(disabled)',
    key: 'disabled'
  }
]
