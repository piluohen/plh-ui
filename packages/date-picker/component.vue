<template>
  <el-date-picker
    v-model="model"
    :type="type"
    :size="size"
    :range-separator="rangeSeparator"
    :start-placeholder="startPlaceholder"
    :end-placeholder="endPlaceholder"
    :default-time="defaultTimeArr"
    v-bind="$attrs"
    :value-format="valueFormat"
    @change="handleChange"
  ></el-date-picker>
</template>

<script>
import props from './props'

export default {
  name: 'plh-date-picker',
  props: { ...props },
  computed: {
    model: {
      get() {
        return this.value || null
      },
      set(val) {
        this.$emit('input', val)
      }
    },
    defaultTimeArr() {
      if (this.type === 'daterange' || this.type === 'datetimerange') {
        return ['00:00:00', '23:59:59']
      } else {
        return this.defaultTime
      }
    }
  },
  methods: {
    handleChange(value) {
      this.$emit('change', value)
    }
  }
}
</script>
<style lang="stylus">
.el-date-editor .el-range-separator {
  width: auto;
}
</style>
