<template>
  <div class="plh-table-form">
    <plh-table
      ref="table"
      class="form-table"
      :size="size"
      :columns="newColumns"
      :tableData="list"
      :paginationable="false"
    />
    <div v-if="showBtn" v-show="list.length < limitNum" class="add-btn" style="text-align: center;">
      <plh-button type="primary" plain :size="size" icon="el-icon-plus" :disabled="disabled" @click="handleAdd">
        增加
      </plh-button>
    </div>
  </div>
</template>
<script>
import AsyncValidator from 'async-validator'
import props from './props'

export default {
  name: 'plh-table-form',
  props: { ...props },
  data() {
    return {}
  },
  computed: {
    dataItem() {
      let obj = {}
      const list = this.columns.filter(item => {
        return item.tag
      })
      list.forEach(item => {
        obj[item.key] = item.defaultValue || null
      })
      return obj
    },
    list: {
      get() {
        return [...this.value]
      },
      set(val) {
        this.$emit('input', val, {})
      }
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
      if (!operator && this.showBtn) {
        columns = columns.concat({
          title: '操作',
          width: '80px',
          render: (h, { row, $index }) => {
            return (
              <plh-button
                type="text"
                icon="el-icon-delete"
                size={this.size}
                disabled={this.disabled || row.disabled}
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
    renderColumn(h, data, item) {
      const { row, column } = data
      let errorTemp = ''
      const { property } = column

      let { isError, errorMsg } = this.validFiled(item.rules, row, property)

      const disabled = this.disabled || row.disabled
      if (disabled) {
        isError = false
      }

      if (isError) {
        errorTemp = <div class="el-form-item__error">{errorMsg}</div>
      }
      return (
        <div class={{ 'table-input el-form-item': true, 'is-error': isError }}>
          {this.renderInput({ item, data, property })}
          {errorTemp}
        </div>
      )
    },
    /**
     * render 表单
     */
    renderInput({ item, data: { $index, row, column }, property }) {
      const h = this.$parent.$createElement
      let input = val => {
        row[property] = val

        this.list[$index] = row

        this.$emit('input', this.list, { item, $index, row, column, property, self: this })
      }
      let value = row[property] || null

      const render = h(
        item.tag || 'el-input',
        {
          ref: item.ref,
          attrs: {
            clearable: true,
            disabled: this.disabled || row.disabled,
            size: this.size,
            ...item.attrs,
            ...(item.attrFn && item.attrFn(row))
          },
          props: {
            ...item.props,
            value
          },
          on: {
            ...item.on,
            input,
            change: val => {
              const options = { item, $index, row, column, property, self: this }
              this.$emit('change', this.list, options)
              return item.on && item.on.change && item.on.change(val, { data: this.list, ...options })
            }
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
      let validaters = {}
      const descriptor = {}
      descriptor[property] = rules

      const validator = new AsyncValidator(descriptor)
      validator.validate(row, { firstFields: true }, errors => {
        validaters = {
          isError: !!errors,
          errorMsg: errors ? errors[0].message : ''
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
      let list = [...this.list, { ...this.dataItem }]
      if (this.onAdd) {
        list = this.onAdd(this.list, this.dataItem)
      }
      this.list = [...list]
      this.$emit('change', list, {})
    },
    /**
     * 删除数据
     */
    handleDelete(index) {
      const list = [...this.list].filter((item, i) => {
        return i !== index
      })
      this.list = [...list]
      this.$emit('change', list, {})
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
