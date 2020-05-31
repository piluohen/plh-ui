import { radioItem, searchs } from '../../js/search'

const type = 'year/month/date/dates/week/datetime/datetimerange/daterange/monthrange'

export const searchList = [
  {
    tag: 'el-select',
    label: '类型(type)',
    key: 'type',
    children: {
      tag: 'el-option',
      options: type.split('/').map(item => {
        return { label: item, value: item }
      })
    }
  },
  { ...searchs.size },
  {
    tag: 'el-select',
    label: '绑定格式(value-format)',
    key: 'value-format',
    children: {
      tag: 'el-option',
      options: ['timestamp', 'yyyy-MM-DD HH:mm', ''].map(item => {
        return { label: item ? item : '无', value: item }
      })
    }
  },
  {
    ...radioItem,
    label: '文本框可输入(editable)',
    key: 'editable'
  },
  {
    ...radioItem,
    label: '允许清除(clearable)',
    key: 'clearable'
  },
  {
    ...radioItem,
    label: '只读(readonly)',
    key: 'readonly'
  },
  {
    ...radioItem,
    label: '禁用(disabled)',
    key: 'disabled'
  },
  {
    tag: 'el-input',
    label: 'placeholder',
    key: 'placeholder'
  },
  {
    tag: 'el-input',
    label: 'start-placeholder',
    key: 'start-placeholder'
  },
  {
    tag: 'el-input',
    label: 'end-placeholder',
    key: 'end-placeholder'
  },
  {
    tag: 'el-input',
    label: 'range-separator',
    key: 'range-separator'
  },
  {
    tag: 'el-radio-group',
    key: '对齐方式(align)',
    key: 'align',
    children: {
      tag: 'el-radio-button',
      options: ['left', 'center', 'right'].map(item => {
        return { label: item, value: item }
      })
    }
  }
]
