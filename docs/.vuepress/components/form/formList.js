export const formList = [
  {
    label: '名称',
    tag: 'el-input',
    key: 'name',
    required: true,
    rules: [{ required: true, message: '请输入名称', trigger: 'change' }],
    attrs: {
      placeholder: '请输入名称',
      maxlength: 10
    },
    on: {
      change: val => {
        console.log('change', val)
      }
    }
  },
  {
    label: '开关',
    tag: 'el-switch',
    key: 'switch',
    on: {
      change: val => {
        console.log(val)
      }
    }
  },
  {
    label: '选择类型',
    tag: 'el-select',
    key: 'type',
    props: {
      clearable: true,
      filterable: true
    },
    children: {
      tag: 'el-option',
      options: [
        { label: '选项一', value: '1' },
        { label: '选项二', value: '2' },
        { label: '选项三', value: '3', disabled: true }
      ]
    },
    on: {
      change: val => {
        console.log(val)
      },
      'visible-change': val => {
        console.log(val)
      }
    }
  },
  {
    label: '单选组',
    tag: 'el-radio-group',
    key: 'radio',
    children: {
      tag: 'el-radio',
      options: [
        { label: '选项一', value: '1' },
        { label: '选项二', value: '2' },
        { label: '选项三', value: '3', disabled: true }
      ]
    },
    on: {
      change: val => {
        console.log(val)
      }
    }
  },
  {
    label: '多选组',
    tag: 'el-checkbox-group',
    key: 'checkbox',
    children: {
      tag: 'el-checkbox',
      props: {
        border: true,
        size: 'small'
      },
      options: [
        { label: '选项一', value: '1' },
        { label: '选项二', value: '2' },
        { label: '选项三', value: '3', disabled: true }
      ]
    },
    on: {
      change: val => {
        console.log(val)
      }
    }
  },
  {
    label: '数字输入',
    tag: 'el-input-number',
    key: 'number'
  },
  {
    label: '多层选择',
    tag: 'el-cascader',
    key: 'cascader',
    props: {
      options: [
        {
          value: 'zhinan',
          label: '指南',
          disabled: true,
          children: [
            {
              value: 'shejiyuanze',
              label: '设计原则',
              children: [
                {
                  value: 'yizhi',
                  label: '一致'
                },
                {
                  value: 'fankui',
                  label: '反馈'
                }
              ]
            },
            {
              value: 'daohang',
              label: '导航',
              children: [
                {
                  value: 'cexiangdaohang',
                  label: '侧向导航'
                },
                {
                  value: 'dingbudaohang',
                  label: '顶部导航'
                }
              ]
            }
          ]
        },
        {
          value: 'zujian',
          label: '组件',
          children: [
            {
              value: 'basic',
              label: 'Basic',
              children: [
                {
                  value: 'layout',
                  label: 'Layout 布局'
                },
                {
                  value: 'color',
                  label: 'Color 色彩'
                }
              ]
            },
            {
              value: 'form',
              label: 'Form',
              children: [
                {
                  value: 'radio',
                  label: 'Radio 单选框'
                },
                {
                  value: 'checkbox',
                  label: 'Checkbox 多选框'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    label: '滑块',
    tag: 'el-slider',
    key: 'slider'
  },
  {
    label: '时间选择',
    tag: 'plh-date-picker',
    key: 'time'
  },
  {
    label: '评分',
    tag: 'el-rate',
    key: 'rate'
  },
  {
    label: '颜色选择',
    tag: 'el-color-picker',
    key: 'color'
  },
  {
    label: '描述',
    tag: 'el-input',
    key: 'desc',
    props: {
      type: 'textarea'
    },
    attrs: {
      maxlength: 10,
      rows: 4
    }
  }
]
