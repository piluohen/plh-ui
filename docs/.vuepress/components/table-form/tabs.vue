<template>
  <div class="demo">
    <el-tabs v-model="model.activeIndex" type="card" tab-position="top" @tab-click="handleTabsClick">
      <el-tab-pane v-for="(item, index) in data.children" :key="`${index}`" :label="item.title" :name="`${index}`">
        <template v-if="item.columns && item.columns.length > 0">
          <plh-table-form
            ref="tableForm"
            v-model="tableData"
            :columns="item.columns"
            @input="handleInput"
          ></plh-table-form>
        </template>
      </el-tab-pane>
    </el-tabs>

    <p class="code">
      {{ JSON.stringify(model) }}
    </p>
  </div>
</template>

<script>
const options = [
  { label: '选项一', value: '1' },
  { label: '选项二', value: '2' }
]

export default {
  name: 'demo-table-form-tabs',
  data() {
    return {
      columns: [
        {
          tag: 'el-input',
          title: '输入框',
          key: 'input',
          required: true,
          rules: [
            { required: true, message: '请输入' },
            { max: 6, message: '最大个数不超过6' }
          ],
          attrs: {
            placeholder: '请输入'
          }
        },
        {
          tag: 'el-select',
          title: '多选',
          key: 'select',
          children: {
            tag: 'el-option',
            options: [...options]
          }
        },
        {
          tag: 'plh-date-picker',
          title: '时间选择',
          key: 'time'
        },
        {
          tag: 'el-switch',
          title: '开关',
          key: 'switch',
          defaultValue: true
        },
        {
          title: '操作人',
          key: 'name',
          format: (row, column, cellValue, index) => {
            return <span>刘备</span>
          }
        }
      ],
      model: {
        activeIndex: '0',
        data: [
          {
            data: [{ input: '1-1', select: '1', time: '', switch: false }, { input: '1-2' }]
          },
          {
            data: [
              { input: '2-1', time: null, switch: true },
              { input: '2-2', select: '2', time: '', switch: false }
            ]
          }
        ]
      }
    }
  },
  computed: {
    data() {
      return {
        children: [
          { title: '表单一', columns: [...this.columns] },
          { title: '表单二', columns: [...this.columns] }
        ]
      }
    },
    tableData: {
      get() {
        const { activeIndex } = this.model
        return this.model.data[Number(activeIndex)].data
      },
      set(val) {
        const { activeIndex } = this.model
        this.model.data[Number(activeIndex)].data = val
      }
    }
  },
  watch: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {
    handleTabsClick(val) {
      this.model = { ...this.model, activeIndex: val.name }
    },
    handleInput(val, options) {
      const { activeIndex } = this.model
      console.log('tableForm_@input', activeIndex, val, options)
    }
  }
}
</script>
<style lang="scss"></style>
