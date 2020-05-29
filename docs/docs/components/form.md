# Form 表单

## 用法

<form-base></form-base>

```vue
<template>
  <div class="demo demo-button">
    <h3>配置项</h3>
    <plh-search
      :params="params"
      :searchList="searchList"
      :showSubmit="false"
      :collapse="false"
      @submit="handleSearch"
    ></plh-search>
    <div class="mt20">
      <el-row :gutter="20">
        <el-col :span="16">
          <plh-form
            ref="form"
            v-model="model"
            :items="formItems"
            :size="params.size"
            :inline="params.inline"
            :disabled="params.disabled"
            :label-position="params['label-position']"
            :label-width="params['label-width']"
            :label-suffix="params['label-suffix']"
            :hide-required-asterisk="params['hide-required-asterisk']"
            :show-message="params['show-message']"
            :status-icon="params['status-icon']"
          ></plh-form>
        </el-col>
        <el-col :span="8">
          <p class="code">
            {{ model }}
          </p>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import { radioItem, searchs } from '../../js/search'
export default {
  name: 'DemoFormBase',
  data() {
    return {
      params: {
        size: 'medium',
        inline: false,
        disabled: false,
        'label-position': 'right',
        'label-width': '100px',
        'label-suffix': '',
        'hide-required-asterisk': false,
        'show-message': true,
        'status-icon': false
      },
      searchList: [
        { ...searchs.size },
        {
          ...radioItem,
          label: '行内显示(inline)',
          key: 'inline'
        },
        {
          tag: 'el-radio-group',
          label: '标签位置(label-position)',
          key: 'label-position',
          children: {
            tag: 'el-radio-button',
            options: ['left', 'right', 'top'].map(item => {
              return { label: item, value: item }
            })
          }
        },
        {
          tag: 'el-input',
          label: '标签宽度(label-width)',
          key: 'label-width'
        },
        {
          tag: 'el-input',
          label: '标签后缀(label-suffix)',
          key: 'label-suffix'
        },
        {
          ...radioItem,
          label: '显示*号(hide-required-asterisk)',
          key: 'hide-required-asterisk'
        },
        {
          ...radioItem,
          label: '显示校验错误信息(show-message)',
          key: 'show-message'
        },
        {
          ...radioItem,
          label: '是否显示反馈图标(status-icon)',
          key: 'status-icon'
        },
        {
          ...radioItem,
          label: '禁用(disabled)',
          key: 'disabled'
        }
      ],
      model: {
        checkbox: []
      },
      formItems: [
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
    }
  },
  methods: {
    handleSearch(data) {
      this.params = { ...data }
    }
  }
}
</script>
<style lang="stylus">
.btn-list {
  .plh-button {
    margin-top: 10px;
  }
}
</style>
```

## Api

| 参数    |   描述   |  类型  |              可选值              | 必须 | 默认值 |
| ------- | :------: | :----: | :------------------------------: | :--: | ------ |
| v-model | 表单数据 | object |                                  |  是  |        |
| items   | 表单子项 | array  |                                  |  是  |        |
| size    |   尺寸   | string | large \| medium \| small \| mini |  否  | medium |

更多配置请参考：[el-form](https://element.eleme.cn/#/zh-CN/component/form)

<font color="red">注意：使用 el-checkbox-group 组件时，v-model 必须传入 el-checkbox-group 默认值[]，否则报错</font>

## items Api

| 参数     |                    描述                    |  类型   |         可选值         | 必须 | 默认值   |
| -------- | :----------------------------------------: | :-----: | :--------------------: | :--: | -------- |
| label    |                 label 文字                 | string  |                        |  是  |          |
| tag      |                标签元素名称                | string  | el-input 等/自定义组件 |  否  | el-input |
| key      |             表单 model 的名称              | string  |                        |  是  |          |
| props    |              组件 props 传参               | object  |                        |  否  |          |
| attrs    | 组件 attrs 传参，如 input 的原生 maxLength | object  |                        |  否  |          |
| on       |               组件绑定的事件               | object  |        click 等        |  否  |          |
| col      |                表单子项宽列                | integer |    0-24 之间的整数     |  否  | 24       |
| children |                组件子项配置                | object  |      el-option 等      |  否  |          |

## children Api

使用  
[el-select](https://element.eleme.cn/#/zh-CN/component/select) /
[el-radio-group](https://element.eleme.cn/#/zh-CN/component/radio) /
[el-checkbox-group](https://element.eleme.cn/#/zh-CN/component/checkbox) 的时候需要配置

| 参数    |     描述     |  类型  |                              可选值                               | 必须 | 默认值 |
| ------- | :----------: | :----: | :---------------------------------------------------------------: | :--: | ------ |
| tag     | 标签元素名称 | string | el-option/el-radio/el-radio-button/el-checkbox/el-checkbox-button |  否  |        |
| options |   子项配置   | object |                                                                   |  否  |        |

## children options Api

此处只列出常用三项，其他参看

- [el-select](https://element.eleme.cn/#/zh-CN/component/select)
- [el-radio-group](https://element.eleme.cn/#/zh-CN/component/radio)
- [el-checkbox-group](https://element.eleme.cn/#/zh-CN/component/checkbox)

| 参数     |   描述   |  类型   | 可选值 | 必须 | 默认值 |
| -------- | :------: | :-----: | :----: | :--: | ------ |
| label    | 显示文字 | string  |        |  否  |        |
| value    |    值    | string  |        |  否  |        |
| disabled | 是否禁用 | boolean |        |  否  |        |
