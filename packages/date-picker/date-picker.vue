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
export default {
  name: 'plh-date-picker',
  props: {
    value: {
      type: [String, Date, Number, Array]
    },
    // year/month/date/dates/week/datetime/datetimerange/daterange/monthrange
    type: {
      type: String,
      default: 'date'
    },
    size: {
      type: String,
      default: 'medium'
    },
    'default-time': {
      type: [String, Array]
    },
    'value-format': {
      type: String,
      default: 'timestamp'
    },
    'range-separator': {
      type: String,
      default: '至'
    },
    'start-placeholder': {
      type: String,
      default: '开始日期'
    },
    'end-placeholder': {
      type: String,
      default: '结束日期'
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
