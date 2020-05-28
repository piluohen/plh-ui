<template>
  <div class="plh-table-form">
    <plh-table
      ref="table"
      class="form-table"
      :size="size"
      :columns="newColumns"
      :tableData="list"
      :paginationable="false"
    ></plh-table>
    <div v-if="type !== 'view'" v-show="list.length < limitNum" class="add-btn" style="text-align: center">
      <plh-button type="primary" plain :size="size" icon="el-icon-plus" @click="handleAdd">增加</plh-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'plh-table-form',
  props: {
    value: {},
    limitNum: {
      type: Number,
      default: 6
    },
    columns: {
      type: Array,
      default: () => []
    },
    // add, view, edit
    type: {
      type: String,
      default: 'add'
    },
    size: {
      type: String,
      default: 'small'
    }
  },
  data() {
    return {}
  },
  computed: {
    list: {
      get() {
        return this.value || []
      },
      set(val) {
        this.$emit('input', val)
      }
    },
    dataItem() {
      let obj = {}
      const list = this.columns.filter(item => {
        return item.tag
      })
      list.forEach(item => {
        obj[item.key] = null
      })
      return obj
    },
    newColumns() {
      let columns = this.columns.map(item => {
        if (item.tag && !item.render) {
          item.render = (h, data) => {
            return this.renderColumn(h, data, item)
          }
        }

        if (item.required && !item.renderHeader) {
          item.renderHeader = this.renderHeader
        }
        return item
      })
      const operator = this.columns.find(item => {
        return item.key === 'operator'
      })
      if (!operator && this.type !== 'view') {
        columns = columns.concat({
          title: '操作',
          width: '80px',
          render: (h, { row, $index }) => {
            return this.renderOperator ? (
              this.renderOperator(h, { row, $index })
            ) : (
              <plh-button
                type="text"
                icon="el-icon-delete"
                onClick={() => {
                  this.handleDelete($index)
                }}>
                删除
              </plh-button>
            )
          }
        })
      }

      return columns
    }
  },
  methods: {
    /**
     * render 头部
     */
    renderHeader(h, { column }) {
      const { label } = column
      return (
        <div>
          <span class="text-danger">*</span> {label}
        </div>
      )
    },
    /**
     * render column
     */
    renderColumn(h, { row, column }, item) {
      let errorTemp = ''
      let errorMsg = ''
      let isError = false
      const { property } = column

      // 未通过校验的rule
      const validaters = this.validFiled(item.rules, row, property).find(rule => {
        return !rule.validate
      })
      // 显示未通过校验的rule
      if (validaters) {
        isError = true
        errorMsg = validaters.message
      }

      if (isError) {
        errorTemp = <div class="el-form-item__error">{errorMsg}</div>
      }
      return (
        <div class={{ 'table-input el-form-item': true, 'is-error': isError }}>
          {this.renderInput(item, row, property)}
          {errorTemp}
        </div>
      )
    },
    /**
     * render 表单
     */
    renderInput(item, row, property) {
      const h = this.$parent.$createElement
      let input = val => {
        row[property] = val
      }
      let value = row[property]
      const render = h(
        item.tag || 'el-input',
        {
          ref: item.ref,
          attrs: {
            clearable: true,
            ...item.attrs,
            ...(item.attrFn && item.attrFn(row))
          },
          props: {
            ...item.props,
            value,
            size: this.size
          },
          on: {
            ...item.on,
            input
          },
          nativeOn: {
            keydown: event => {
              if (event.keyCode === 13) {
                this.$emit('enter')
              }
            },
            ...item.nativeOn
          }
        },
        this.renderChildren(h, item)
      )
      return render
    },
    /**
     * render children
     * @param {*} h creatment
     * @param {*} item 子项
     */
    renderChildren(h, item) {
      return (
        item.children &&
        [...item.children.options].map((option, i) => {
          let childrenTag = item.children.tag
          let props = { ...option }
          if (childrenTag === 'el-radio' || childrenTag === 'el-checkbox') {
            props = {
              ...props,
              slot: option.label,
              label: option.value
            }
          }
          return h(
            item.children.tag,
            {
              key: i,
              attrs: option.attrs,
              props: {
                ...item.children.props,
                ...props
              }
            },
            props.slot || props.label
          )
        })
      )
    },
    /**
     * 检验数据
     */
    validFiled(rules = [], row, property) {
      let validaters = rules.map(rule => {
        let isError = false
        if (rule.required) {
          isError = !row[property]
        } else if (rule.validator) {
          isError = !rule.validator(row[property])
        }
        return {
          validate: !isError,
          message: rule.message
        }
      })
      return validaters
    },
    /**
     * 新增数据
     */
    handleAdd() {
      if (this.list.length >= this.limitNum) {
        this.$message.warning(`数量不能超过${this.limitNum}`)
        return
      }

      this.list = [...this.list, { ...this.dataItem }]
    },
    /**
     * 删除数据
     */
    handleDelete(index) {
      this.list = [...this.list].filter((item, i) => {
        return i !== index
      })
    },
    /**
     * 是否全部通过校验
     */
    validate() {
      const el = this.$refs.table.$el.querySelectorAll('.is-error')
      return el.length === 0
    }
  }
}
</script>
<style lang="stylus">
.plh-table-form {
  .text-danger {
    color: #f56c6c;
  }
  .add-btn {
    margin-top: 10px;
  }

  .form-table {
    td {
      padding: 0;
    }
  }

  .table-input {
    height: 70px;
    position: relative;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    .el-form-item__error {
      top: auto;
      bottom: 3px;
    }
  }
}
</style>
