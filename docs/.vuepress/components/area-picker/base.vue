<template>
  <div class="demo area-date-picker">
    <h3>配置项</h3>
    <plh-search
      :params="params"
      :searchList="searchList"
      :showSubmit="false"
      :collapse="false"
      @submit="handleSearch"
    ></plh-search>
    <div class="mt20">
      <h3>示例</h3>
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
  </div>
</template>

<script>
import { searchList } from './searchList'
export default {
  name: 'DemoAreaPickerBase',
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
    handleSearch(data) {
      this.params = { ...data }
    },
    handleChange(val) {
      console.log('改变值', val)
    }
  }
}
</script>
<style lang="stylus"></style>
