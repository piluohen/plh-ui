<template>
  <div class="demo demo-form">
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
import { formList } from './formList.js'
import { searchList } from './searchList'
export default {
  name: 'DemoFormBase',
  data() {
    return {
      params: {
        size: 'medium',
        inline: false,
        disabled: false,
        col: 24,
        'label-position': 'right',
        'label-width': '100px',
        'label-suffix': '',
        'hide-required-asterisk': false,
        'show-message': true,
        'status-icon': false
      },
      searchList: [...searchList],
      model: {
        checkbox: []
      }
    }
  },
  computed: {
    formItems() {
      return formList.map(item => {
        item.col = this.params.col
        return item
      })
    }
  },
  methods: {
    handleSearch(data) {
      this.params = { ...data }
    }
  }
}
</script>
