import { radioItem, searchs } from '../../js/search'

export const searchList = [
  {
    tag: 'el-radio-group',
    label: '类型(type)',
    key: 'type',
    children: {
      tag: 'el-radio-button',
      options: ['line', 'circle', 'dashboard'].map(item => {
        return { label: item, value: item }
      })
    }
  },
  {
    tag: 'el-radio-group',
    label: '环形两端的形状(stroke-linecap)',
    key: 'stroke-linecap',
    children: {
      tag: 'el-radio-button',
      options: ['butt', 'round', 'square'].map(item => {
        return { label: item, value: item }
      })
    }
  },
  {
    ...radioItem,
    label: '是否显示进度条文字(show-text)',
    key: 'show-text'
  },
  {
    ...radioItem,
    label: '文字显示在进度条内(text-inside)',
    key: 'text-inside'
  },
  {
    tag: 'el-radio-group',
    label: '状态(status)',
    key: 'status',
    children: {
      tag: 'el-radio-button',
      options: [
        { label: '无', value: null },
        ...['success', 'exception', 'warning'].map(item => {
          return { label: item, value: item }
        })
      ]
    }
  },
  {
    tag: 'el-input',
    label: '进度条颜色(color)',
    key: 'color'
  },
  {
    tag: 'el-input',
    label: '轨道背景色(stroke-color)',
    key: 'stroke-color'
  },
  {
    tag: 'el-input-number',
    label: '值(percentage)',
    key: 'percentage',
    props: {
      min: 0,
      max: 100,
      step: 2,
      precision: 0
    }
  },
  {
    tag: 'el-input-number',
    label: '环形进度条画布宽度(width)',
    key: 'width',
    props: {
      min: 40,
      max: 200,
      step: 4,
      precision: 0
    }
  },
  {
    tag: 'el-input-number',
    label: '进度条宽度(stroke-width)',
    key: 'stroke-width',
    props: {
      min: 2,
      max: 40,
      step: 2,
      precision: 0
    }
  }
]
