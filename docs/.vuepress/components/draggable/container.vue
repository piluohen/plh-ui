<template>
  <div class="demo demo-draggable">
    <div class="tag-list">
      <plh-draggable v-model="value" containerSelector=".el-tabs__nav" draggableClassName="el-tabs__item">
        <el-tabs v-model="activeTab">
          <el-tab-pane v-for="item in value" :key="item.name" class="item" :label="item.title" :name="item.name">
            {{ item.title }}
          </el-tab-pane>
        </el-tabs>
      </plh-draggable>
      <p class="code">
        {{ JSON.stringify(value) }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo-draggable-container',
  data() {
    return {
      activeTab: '1',
      value: [
        { title: 'tab1', name: '1' },
        { title: 'tab2', name: '2' },
        { title: 'tab3', name: '3' },
        { title: 'tab4', name: '4' }
      ]
    }
  },
  mounted() {},
  methods: {}
}
</script>
<style lang="stylus">
.tag-list {
  padding: 10px 0;
}
</style>
