<script>
export default {
  name: 'plh-form',
  props: {
    value: {
      type: Object
    },
    items: {
      type: Array,
      default: () => []
    },
    size: {
      type: String,
      default: 'small'
    },
    inline: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    model: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    validate(...args) {
      return this.$refs.form.validate(...args)
    },
    validateField(...args) {
      return this.$refs.form.validateField(...args)
    },
    resetFields(...args) {
      return this.$refs.form.resetFields(...args)
    },
    clearValidate(...args) {
      return this.$refs.form.clearValidate(...args)
    },
    validateHandle(...args) {
      this.$emit('validate', ...args)
    },
    // 生成placeholder
    placeholder(data) {
      const keys = ['select', 'picker', 'cascader']
      let text = '输入'
      let isSelect = keys.some(v => {
        return data.tag && data.tag.indexOf(v) > -1
      })
      if (isSelect) {
        text = '选择'
      }
      return (data.attrs && data.attrs.placeholder) || `请${text}${data.label || '内容'}`
    },
    // render formItem
    renderFormItem(item, index, render) {
      return (
        <el-form-item key={index} prop={item.key} label={item.label} label-width={item.labelWidth} rules={item.rules}>
          {render}
        </el-form-item>
      )
    },
    // render 子项
    renderItem(h) {
      return this.items.map((item, index) => {
        let input = val => {
          let obj = {}
          obj[item.key] = val
          this.model = {
            ...this.model,
            ...obj
          }
        }
        let value = this.model[item.key]
        // 渲染控件
        let render = item.render
          ? item.render(h, { model: this.model, item, value, input })
          : h(
              item.tag || 'el-input',
              {
                ref: item.ref,
                attrs: {
                  clearable: true,
                  ...item.attrs,
                  placeholder: this.placeholder(item)
                },
                props: {
                  ...item.props,
                  value
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
        if (!this.inline) {
          return <el-col span={item.col}>{this.renderFormItem(item, index, render)}</el-col>
        } else {
          return this.renderFormItem(item, index, render)
        }
      })
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
          if (
            childrenTag === 'el-radio' ||
            childrenTag === 'el-radio-button' ||
            childrenTag === 'el-checkbox' ||
            childrenTag === 'el-checkbox-button'
          ) {
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
    }
  },
  render(h) {
    const createElement = this.$parent && this.$parent.$createElement ? this.$parent.$createElement : h
    return (
      <el-form
        ref="form"
        /**
         * 必须写为props={{ model: this.model }}
         * props-model={this.formItems}不能正常工作
         * 否则不能正确解析
         * 参考https://github.com/vuejs/jsx/issues/49
         */
        props={{ model: this.model }}
        attrs={this.$attrs}
        size={this.size}
        inline={this.inline}
        onValidate={this.validateHandle}>
        <el-row class="from-list-all">{this.renderItem(createElement)}</el-row>
      </el-form>
    )
  }
}
</script>
<style lang="stylus">
.el-form--label-top {
  margin: 0 -10px;
  .el-form-item {
    padding: 0 10px;
    .el-form-item__label {
      padding: 0;
    }
  }
}
</style>
