export const radioItem = {
  tag: 'el-radio-group',
  children: {
    tag: 'el-radio-button',
    options: [
      { label: '是', value: true },
      { label: '否', value: false }
    ]
  }
}

export const inputNumberItem = {
  tag: 'el-input-number',
  props: {
    min: 0,
    max: 10000,
    step: 100,
    precision: 0,
    'step-strictly': true
  }
}

export const searchs = {
  size: {
    tag: 'el-radio-group',
    label: '尺寸(size)',
    key: 'size',
    children: {
      tag: 'el-radio-button',
      options: [
        { label: 'large', value: 'large' },
        { label: 'medium', value: 'medium' },
        { label: 'small', value: 'small' },
        { label: 'mini', value: 'mini' }
      ]
    }
  }
}
