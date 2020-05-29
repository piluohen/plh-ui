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
import { formList } from './formList.js'
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
      searchList: [
        { ...searchs.size },
        {
          ...radioItem,
          label: '行内显示(inline)',
          key: 'inline'
        },
        {
          tag: 'el-radio-group',
          label: '分列(col)',
          key: 'col',
          children: {
            tag: 'el-radio-button',
            options: [6, 8, 12, 24].map(item => {
              return { label: item, value: item }
            })
          }
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
<style lang="stylus">
.btn-list {
  .plh-button {
    margin-top: 10px;
  }
}
</style>
