import { radioItem, searchs } from '../../js/search'

export const baseSearchList = [
  { ...searchs.size },
  {
    ...radioItem,
    label: '朴素按钮(plain)',
    key: 'plain'
  },
  {
    ...radioItem,
    label: '圆角按钮(round)',
    key: 'round'
  },
  {
    ...radioItem,
    label: '圆形按钮(circle)',
    key: 'circle'
  },
  {
    ...radioItem,
    label: '加载中(loading)',
    key: 'loading'
  },
  {
    ...radioItem,
    label: '禁用(disabled)',
    key: 'disabled'
  },
  {
    ...radioItem,
    label: '图标(icon)',
    key: 'icon'
  }
]

// 位置
const placement =
  'top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end'

const inputNumberItem = {
  tag: 'el-input-number',
  props: {
    min: 0,
    max: 10000,
    step: 100,
    precision: 0,
    'step-strictly': true
  }
}

export const tooltipSearchList = [
  { ...searchs.tooltipEffect },
  {
    tag: 'el-select',
    label: '位置(placement)',
    key: 'placement',
    children: {
      tag: 'el-option',
      options: placement.split('/').map(item => {
        return { label: item, value: item }
      })
    }
  },
  {
    ...radioItem,
    label: '箭头(visible-arrow)',
    key: 'visible-arrow'
  },
  {
    ...radioItem,
    label: '鼠标是否允许进入(enterable)',
    key: 'enterable'
  },
  {
    ...radioItem,
    label: '禁用(disabled)',
    key: 'disabled'
  },
  {
    tag: 'el-input-number',
    label: '偏移量(offset)',
    key: 'offset',
    props: {
      min: 0,
      max: 100,
      step: 1,
      precision: 0,
      'step-strictly': true
    }
  },
  {
    ...inputNumberItem,
    label: '出现延迟(open-delay)',
    key: 'open-delay'
  },
  {
    ...inputNumberItem,
    label: '隐藏延时(hide-after)',
    key: 'hide-after'
  }
]

export const popconfirmSearchList = [
  {
    tag: 'el-input',
    label: '标题(title)',
    key: 'title'
  },
  {
    tag: 'el-input',
    label: '确认按钮文字(confirmButtonText)',
    key: 'confirmButtonText'
  },
  {
    tag: 'el-input',
    label: '取消按钮文字(cancelButtonText)',
    key: 'cancelButtonText'
  },
  {
    ...searchs.btnType({
      label: '确定按钮类型(confirmButtonType)',
      key: 'confirmButtonType'
    })
  },
  {
    ...searchs.btnType({
      label: '取消按钮类型(cancelButtonType)',
      key: 'cancelButtonType'
    })
  },
  {
    ...radioItem,
    label: '禁用(disabled)',
    key: 'disabled'
  },
  {
    ...radioItem,
    label: '隐藏图标(hideMsgIcon)',
    key: 'hideMsgIcon'
  },
  {
    tag: 'el-input',
    label: '图标(msgIcon)',
    key: 'msgIcon'
  },
  {
    tag: 'el-color-picker',
    label: '图标颜色(msgIconColor)',
    key: 'msgIconColor'
  }
]
