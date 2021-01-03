# Draggable 拖拽组件

> plh-draggable 组件依赖于 sortablejs 插件，支持插件几乎全部功能，更简易实用。

## 基础用法

<draggable-base></draggable-base>

```vue
<template>
  <plh-draggable v-model="value">
    <el-tag v-for="item in value" :key="item" class="item">{{ item }}</el-tag>
  </plh-draggable>
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
```

## 深层级容器

<draggable-container></draggable-container>

```vue
<template>
  <plh-draggable v-model="value" containerSelector=".el-tabs__nav" draggableClassName="el-tabs__item">
    <el-tabs v-model="activeTab">
      <el-tab-pane v-for="item in value" :key="item.name" class="item" :label="item.title" :name="item.name">
        {{ item.title }}
      </el-tab-pane>
    </el-tabs>
  </plh-draggable>
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
```

## 表格拖拽

<draggable-table></draggable-table>

```vue
<template>
  <plh-draggable
    v-model="tableData"
    containerSelector=".el-table__body-wrapper tbody"
    draggableClassName="el-table__row"
  >
    <plh-table ref="table" :columns="columns" :tableData="tableData"></plh-table>
  </plh-draggable>
</template>

<script>
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
```

## Api

| 参数               |       描述       |  类型   | 可选值 | 必须 | 默认值 |
| ------------------ | :--------------: | :-----: | :----: | :--: | ------ |
| value/v-model      |     排序数组     |  array  |        |  是  | []     |
| noTransitionOnDrag |  是否有过渡动画  | boolean |        |  否  | false  |
| containerSelector  |  拖拽容器选择器  | string  |        |  否  | null   |
| draggableClassName | 可拖拽元素的类名 | string  |        |  否  | null   |

更多配置：

[sortablejs Options Api](https://github.com/SortableJS/Sortable#options)

## Event

| 名称 |             描述             | 返回值      |
| ---- | :--------------------------: | ----------- |
| end  | 列表单元拖放结束后的回调函数 | CustomEvent |
