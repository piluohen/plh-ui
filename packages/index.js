/**
 * @name plh-ui
 * @author piluohen<1012106967@qq.com>
 */

import Button from './button'
import Countup from './countup'
import Form from './form'
import Search from './search'
import Table from './table'
import DatePicker from './date-picker'
import Upload from './upload'
import Preview from './preview'
import TableForm from './table-form'
import ScrollList from './scroll-list'

const install = Vue => {
  Vue.use(Button)
  Vue.use(Countup)
  Vue.use(Form)
  Vue.use(Search)
  Vue.use(Table)
  Vue.use(DatePicker)
  Vue.use(Upload)
  Vue.use(Preview)
  Vue.use(TableForm)
  Vue.use(ScrollList)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export { Button, Countup, Form, Search, Table, DatePicker, Upload, Preview, TableForm, ScrollList }

export default { install }
