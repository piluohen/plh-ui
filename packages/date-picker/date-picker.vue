<template>
  <el-date-picker
    v-model="currValue"
    :type="type"
    :size="size"
    range-separator="至"
    start-placeholder="开始日期"
    end-placeholder="结束日期"
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
      default: 'small'
    },
    'default-time': {
      type: [String, Array]
    },
    valueFormat: {
      type: String,
      default: 'timestamp'
    }
  },
  computed: {
    currValue: {
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
