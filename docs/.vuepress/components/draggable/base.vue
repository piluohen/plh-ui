<template>
  <div class="demo demo-draggable">
    <h3>配置项</h3>
    <plh-search
      :params="params"
      :searchList="searchList"
      :showSubmit="false"
      :collapse="false"
      @submit="handleSearch"
    ></plh-search>

    <h3>示例</h3>
    <div class="tag-list">
      <plh-draggable v-model="value" containerClass="div">
        <div>
          <div class="div">
            <el-tag v-for="item in value" :key="item" class="item">{{ item }}</el-tag>
          </div>
        </div>
      </plh-draggable>
      <p class="code">
        {{ JSON.stringify(value) }}
      </p>
    </div>
  </div>
</template>

<script>
import { searchList } from './searchList'
export default {
  name: 'demo-draggable',
  data() {
    return {
      value: [1, 2, 3, 4, 5, 6],
      searchList: [...searchList],
      params: {
        startVal: 0,
        decimalPlaces: 1,
        duration: 2,
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: ''
      }
    }
  },
  mounted() {},
  methods: {
    handleSearch(data) {
      this.params = { ...data }
    },
    handleReady(val, val1) {}
  }
}
</script>
<style lang="stylus">
.tag-list {
  padding: 10px 0;
  .el-tag {
    cursor: move;
  }
  .el-tag + .el-tag {
    margin-left: 10px;
  }
}
</style>
