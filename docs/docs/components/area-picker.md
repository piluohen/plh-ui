# Area-picker 地区选择

## 用法

<area-picker-base></area-picker-base>

```vue
<template>
  <div class="demo area-date-picker">
    <plh-area-picker
      v-model="value"
      :size="params.size"
      :props="props"
      :disabled="params.disabled"
      :clearable="params.clearable"
      :show-all-levels="params['show-all-levels']"
      :collapse-tags="params['collapse-tags']"
      :separator="params.separator"
      :placeholder="params.placeholder"
      @change="handleChange"
    ></plh-area-picker>
    <p class="code">
      {{ value }}
    </p>
  </div>
</template>

<script>
import { searchList } from './searchList'
export default {
  name: 'area-picker-base',
  data() {
    return {
      value: ['130000', '130200', '130202'],
      params: {
        size: 'medium',
        disabled: false,
        clearable: true,
        'show-all-levels': true,
        'collapse-tags': false,
        separator: '/',
        placeholder: '请选择',
        expandTrigger: 'click',
        multiple: false,
        checkStrictly: false
      },
      searchList: [...searchList]
    }
  },
  computed: {
    props() {
      const { expandTrigger, multiple, checkStrictly } = this.params
      return {
        expandTrigger,
        multiple,
        checkStrictly
      }
    }
  },
  mounted() {},
  methods: {
    handleChange(val) {
      console.log('改变值', val)
    }
  }
}
</script>
<style lang="stylus"></style>
```

## API

| 参数             | 描述         | 类型    | 可选值                                 | 必须 | 默认值                                                                                  |
| ---------------- | ------------ | ------- | -------------------------------------- | ---- | --------------------------------------------------------------------------------------- |
| vuale \| v-model | 值           | array   |                                        | 是   |                                                                                         |
| api              | 请求方法     |         | function                               | 否   | (params) => {return axios.get('https://uaa-openapi.hekr.me/lngAndLat/sub', { params })} |
| props            | 配置         | object  |                                        | 否   | {}                                                                                      |
| level            | 可选择级别   | string  | province \| city \| district \| street | 否   | district                                                                                |
| clearable        | 是否允许清除 | boolean |                                        | 是   |                                                                                         |

详细 API 参考：

[el-cascader Api](https://element.eleme.cn/#/zh-CN/component/cascader#cascader-attributes)

## Props Api

| 参数     | 描述          | 类型   | 可选值 | 必须 | 默认值 |
| -------- | ------------- | ------ | ------ | ---- | ------ |
| vuale    | value 属性    | string |        | 否   | id     |
| label    | label 属性    | string |        | 否   | name   |
| children | children 属性 | string |        | 否   | area   |

详细 API 参考：

[el-cascader Props Api](https://element.eleme.cn/#/zh-CN/component/cascader#props)
