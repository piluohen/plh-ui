import { radioItem, searchs } from '../../js/search'

export const searchList = [
  { ...searchs.size },
  {
    ...radioItem,
    label: '允许清除(clearable)',
    key: 'clearable'
  },
  {
    ...radioItem,
    label: '禁用(disabled)',
    key: 'disabled'
  },
  {
    ...radioItem,
    label: '显示选中值完整路径(show-all-levels)',
    key: 'show-all-levels'
  },
  {
    ...radioItem,
    label: '多选模式是否折叠tag(collapse-tags)',
    key: 'collapse-tags'
  },
  {
    tag: 'el-input',
    label: '选项分隔符(separator)',
    key: 'separator'
  },
  {
    tag: 'el-input',
    label: 'placeholder',
    key: 'placeholder'
  },
  {
    tag: 'el-radio-group',
    label: '展开方式(expandTrigger)',
    key: 'expandTrigger',
    children: {
      tag: 'el-radio-button',
      options: [
        { label: 'click', value: 'click' },
        { label: 'hover', value: 'hover' }
      ]
    }
  },
  {
    ...radioItem,
    label: '是否多选(multiple)',
    key: 'multiple'
  },
  {
    ...radioItem,
    label: '取消父子节点关联(checkStrictly)',
    key: 'checkStrictly'
  }
]
