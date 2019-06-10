import PlhCountup from './plh-countup'

export const install = (Vue) => {
  Vue.component(PlhCountup.name, PlhCountup)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  PlhCountup
}

export default install
