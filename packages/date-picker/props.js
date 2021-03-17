export default {
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
}
