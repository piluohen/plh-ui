<template>
  <div class="demo demo-draggable">
    <div class="tag-list">
      <plh-draggable v-model="value" :multiDrag="true" selectedClass="sortable-selected" :animation="150">
        <el-tag v-for="item in value" :key="item" class="item">{{ item }}</el-tag>
      </plh-draggable>
      <p class="code">
        {{ JSON.stringify(value) }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo-draggable-base',
  data() {
    return {
      value: [1, 2, 3, 4, 5, 6]
    }
  },
  mounted() {},
  methods: {}
}
</script>
<style lang="stylus">
.tag-list {
  padding: 10px 0;
  .el-tag {
    cursor: move;
    &.sortable-selected {
      outline: 1px solid $badgeErrorColor;
    }
  }
  .el-tag + .el-tag {
    margin-left: 10px;
  }
}
</style>
