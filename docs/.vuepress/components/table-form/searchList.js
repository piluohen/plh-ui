import { radioItem, searchs } from '../../js/search'

export const searchList = [
  { ...searchs.size },
  {
    tag: 'el-input-number',
    label: '限制数量(limitNum)',
    key: 'limitNum',
    props: {
      min: 1,
      max: 10,
      step: 1,
      precision: 0,
      'step-strictly': true
    }
  },
  {
    ...radioItem,
    label: '禁用(disabled)',
    key: 'disabled'
  },
  {
    ...radioItem,
    label: '显示按钮(showBtn)',
    key: 'showBtn'
  }
]
