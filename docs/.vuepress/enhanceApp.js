import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import PlhUi from '../../packages'
import { handleDisabled } from './js/disabled'

export default ({ Vue }) => {
  Vue.use(ElementUi)
  Vue.use(PlhUi)
  handleDisabled()
}
