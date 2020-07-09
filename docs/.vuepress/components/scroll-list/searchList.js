import { radioItem, searchs } from '../../js/search'

export const searchList = [
  {
    tag: 'el-input-number',
    label: '显示数量(count)',
    key: 'count',
    props: {
      min: 1,
      max: 8,
      step: 1,
      precision: 0,
      'step-strictly': true
    }
  },
  {
    tag: 'el-input-number',
    label: '滚动数量(scrollCount)',
    key: 'scrollCount',
    props: {
      min: 1,
      max: 8,
      step: 1,
      precision: 0,
      'step-strictly': true
    }
  },
  {
    tag: 'el-input-number',
    label: '子项高度(itemHeight)',
    key: 'itemHeight',
    props: {
      min: 20,
      max: 100,
      step: 10,
      precision: 0,
      'step-strictly': true
    }
  },
  {
    tag: 'el-input-number',
    label: '滚动速度(speed)',
    key: 'speed',
    props: {
      min: 100,
      max: 3000,
      step: 100,
      precision: 0,
      'step-strictly': true
    }
  },
  {
    tag: 'el-input-number',
    label: '滚动延迟(delay)',
    key: 'delay',
    props: {
      min: 0,
      max: 3000,
      step: 100,
      precision: 0,
      'step-strictly': true
    }
  }
]
