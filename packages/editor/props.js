export default {
  value: {
    type: String,
    default: ''
  },
  accept: {
    default: 'image/jpeg,image/jpg,image/png',
    type: String
  },
  uploadFn: {
    type: Function
  },
  options: {
    type: Object
  }
}
