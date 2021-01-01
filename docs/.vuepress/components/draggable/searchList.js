import { radioItem, searchs } from '../../js/search'

export const searchList = [
  {
    tag: 'el-input-number',
    label: '开始值(startVal)',
    key: 'startVal',
    props: {
      min: 0,
      max: 1000,
      step: 10,
      precision: 0,
      'step-strictly': true
    }
  },
  {
    tag: 'el-input-number',
    label: '小数点位数(decimalPlaces)',
    key: 'decimalPlaces',
    props: {
      min: 0,
      max: 8,
      step: 1,
      precision: 0,
      'step-strictly': true
    }
  },
  {
    tag: 'el-input-number',
    label: '动画持续时间，单位s(duration)',
    key: 'duration',
    props: {
      min: 0.1,
      max: 5,
      step: 0.1,
      precision: 1,
      'step-strictly': true
    }
  },
  {
    ...radioItem,
    label: '简单动画(useEasing)',
    key: 'useEasing'
  },
  {
    ...radioItem,
    label: '字符分割(useGrouping)',
    key: 'useGrouping'
  },
  {
    tag: 'el-input',
    label: '分割符(separator)',
    key: 'separator'
  },
  {
    tag: 'el-input',
    label: '小数点符号(decimal)',
    key: 'decimal'
  },
  {
    tag: 'el-input',
    label: '前缀字符(prefix)',
    key: 'prefix'
  },
  {
    tag: 'el-input',
    label: '后缀字符(suffix)',
    key: 'suffix'
  }
]
