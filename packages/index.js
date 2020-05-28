/**
 * @name plh-ui
 * @description 基础非业务组件库
 * @author piluohen
 */

import Button from './button'
import Form from './form'
import Search from './search'
import Table from './table'
import DatePicker from './date-picker'
import Upload from './upload'
import Preview from './preview'
import TableForm from './table-form'

const install = Vue => {
  Vue.component(Button.name, Button)
  Vue.component(Form.name, Form)
  Vue.component(Search.name, Search)
  Vue.component(Table.name, Table)
  Vue.component(DatePicker.name, DatePicker)
  Vue.component(Upload.name, Upload)
  Vue.component(Preview.name, Preview)
  Vue.component(TableForm.name, TableForm)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export { Button, Form, Search, Table, DatePicker, Upload, Preview, TableForm }

export default { install }
