import PlhUi from '../../packages'
import { handleDisabled } from './js/disabled'

export default ({ Vue }) => {
  Vue.use(PlhUi)
  handleDisabled()
}
