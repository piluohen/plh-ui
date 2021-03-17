<template>
  <el-cascader
    class="plh-area-picker"
    v-model="model"
    :props="defaultProps"
    :clearable="clearable"
    :placeholder="this.placeholder"
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
        lazyLoad: (node, resolve) => {
          this.lazyLoad(node, resolve)
        },
        ...this.props,
        emitPath: true,
        lazy: true
      }
    },
    model: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
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
}
</style>
