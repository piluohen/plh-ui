import Vue from 'vue'
import App from './App.vue'
import Packages from '../packages'

Vue.config.productionTip = false
Vue.use(Packages)

new Vue({
  render: h => h(App)
}).$mount('#app')
