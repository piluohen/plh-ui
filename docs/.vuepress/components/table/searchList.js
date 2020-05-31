import { radioItem, searchs } from '../../js/search'

const options = [
  { label: '选项一', value: '1' },
  { label: '选项二', value: '2' }
]
const height = {
  tag: 'el-input-number',
  label: '高度(height)',
  key: 'height',
  props: {
    min: 200,
    max: 1600,
    step: 100,
    precision: 0,
    'step-strictly': true
  }
}

export const baseSearchList = [
  { ...searchs.size },
  {
    ...radioItem,
    label: '斑马样式(stripe)',
    key: 'stripe'
  },
  {
    ...radioItem,
    label: '边框样式(border)',
    key: 'border'
  },
  {
    ...radioItem,
    label: '列自动撑开(fit)',
    key: 'fit'
  },
  {
    ...radioItem,
    label: '显示header(show-header)',
    key: 'show-header'
  },
  {
    ...searchs.tootipEffect,
    label: 'tooltip主题(tooltip-effect)',
    key: 'tooltip-effect'
  },
  {
    ...radioItem,
    label: '多选行为(select-on-indeterminate)',
    key: 'select-on-indeterminate'
  },
  {
    ...radioItem,
    label: '显示合计行(show-summary)',
    key: 'show-summary'
  },
  {
    tag: 'el-input',
    label: '合计数据(sum-text)',
    key: 'sum-text'
  },
  {
    tag: 'el-input-number',
    label: '默认分页数量(pageSize)',
    key: 'pageSize',
    props: {
      min: 1,
      max: 15,
      step: 1,
      precision: 0,
      'step-strictly': true
    }
  }
]

export const fixedSearchList = [
  { ...height },
  {
    ...height,
    label: '最大高度(max-height)',
    key: 'max-height'
  }
]

export const expandSearchList = [
  {
    ...radioItem,
    label: '是否懒加载(lazy)',
    key: 'lazy'
  },
  {
    ...radioItem,
    label: '默认展开全部(default-expand-all)',
    key: 'default-expand-all'
  },
  {
    tag: 'el-input-number',
    label: '缩进(indent)',
    key: 'indent',
    props: {
      min: 0,
      max: 40,
      step: 2,
      precision: 0,
      'step-strictly': true
    }
  }
]

export const emptySearchList = [
  {
    tag: 'el-input',
    label: '无数据(empty-text)',
    key: 'empty-text'
  }
]
