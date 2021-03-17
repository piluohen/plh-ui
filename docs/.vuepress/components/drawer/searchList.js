import { radioItem, searchs } from '../../js/search'

export const searchList = [
  { ...searchs.size },
  { ...radioItem, label: '显示footer(hasFooter)', key: 'hasFooter' },
  {
    tag: 'el-radio-group',
    label: '类型(type)',
    key: 'type',
    children: {
      tag: 'el-radio-button',
      options: [
        { label: 'view', value: 'view' },
        { label: 'edit', value: 'edit' }
      ]
    }
  },
  {
    tag: 'el-input-number',
    label: '宽度(width)',
    key: 'width',
    props: {
      min: 400,
      max: 1600,
      step: 100,
      precision: 0,
      'step-strictly': true
    }
  },
  {
    tag: 'el-input',
    label: '标题(title)',
    key: 'title'
  }
]
