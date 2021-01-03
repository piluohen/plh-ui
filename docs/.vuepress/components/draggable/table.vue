<template>
  <div class="demo demo-draggable">
    <div class="tag-list">
      <plh-draggable
        v-model="tableData"
        containerSelector=".el-table__body-wrapper tbody"
        draggableClassName="el-table__row"
      >
        <plh-table ref="table" :columns="columns" :tableData="tableData"></plh-table>
      </plh-draggable>
      <p class="code">
        {{ JSON.stringify(tableData) }}
      </p>
    </div>
  </div>
</template>

<script>
import { searchList } from './searchList'
export default {
  name: 'demo-draggable-table',
  data() {
    return {
      tableData: [],
      columns: [
        {
          label: 'ID',
          prop: 'id'
        }
      ]
    }
  },
  created() {
    this.createData()
  },
  mounted() {},
  methods: {
    createData() {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.tableData.push({ id: i + 1 })
        }
      }, 500)
    }
  }
}
</script>
<style lang="stylus">
.tag-list {
  padding: 10px 0;
}
</style>
