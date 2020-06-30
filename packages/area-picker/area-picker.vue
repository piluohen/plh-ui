<template>
  <el-cascader
    class="plh-area-picker"
    ref="cascader"
    v-model="model"
    :props="defaultProps"
    :clearable="clearable"
    :class="{ 'dark-placeholder': this.showDefaultValue }"
    :placeholder="this.showDefaultValue ? this.defaultValue : this.placeholder"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template slot-scope="{ node, data }">
      <slot :node="node" :data="data"></slot>
    </template>
    <template slot="empty">
      <slot name="empty"></slot>
    </template>
  </el-cascader>
</template>

<script>
import axios from 'axios'
const levelList = ['province', 'city', 'district', 'street']
export default {
  name: 'plh-area-picker',
  props: {
    value: [String, Array],
    api: {
      type: Function,
      default: params => {
        return axios.get('https://uaa-openapi.hekr.me/lngAndLat/sub', { params })
      }
    },
    level: {
      type: String,
      validator: function(value) {
        return levelList
      },
      default: 'district'
    },
    props: {
      type: Object,
      default: () => {
        return {}
      }
    },
    clearable: {
      type: Boolean,
      default: true
    },
    defaultValue: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '请选择'
    }
  },
  data() {
    return {
      showCascader: false
    }
  },
  computed: {
    defaultProps() {
      return {
        value: 'id',
        label: 'name',
        children: 'area',
        expandTrigger: 'click',
        lazy: true,
        lazyLoad: (node, resolve) => {
          this.lazyLoad(node, resolve)
        },
        ...this.props
      }
    },
    model: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    },
    showDefaultValue() {
      return this.model && this.defaultValue
    }
  },
  mounted() {},
  methods: {
    lazyLoad(node, resolve) {
      let areaCode = node.value || ''
      this.api({ areaCode: areaCode })
        .then(res => {
          const { data } = res
          const nodes = data.map(item => {
            return {
              id: item.id,
              name: item.name,
              leaf: node.level >= levelList.indexOf(this.level) || !item.hasSubArea
            }
          })
          // 通过调用resolve将子节点数据返回，通知组件数据加载完成
          resolve(nodes)
        })
        .catch(e => console.log('error', e))
    }
  }
}
</script>
<style lang="stylus">
.el-cascader.plh-area-picker {
  width: 100%;
  &.dark-placeholder {
    .el-input input {
      &::-webkit-input-placeholder {
        /* WebKit browsers */
        color: #606266;
      }
      &:-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
        color: #606266;
      }
      &::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        color: #606266;
      }
      &:-ms-input-placeholder {
        /* Internet Explorer 10+ */
        color: #606266;
      }
    }
  }
}
</style>
