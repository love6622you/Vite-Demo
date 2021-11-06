import i18n from '@/plugins/i18nPlugin'
import '@/plugins/permission'

const install = (Vue: any) => {
  Vue.config.globalProperties.$baseUrl = import.meta.env.VITE_APP_BASE_API
  Vue.use(i18n)
  Vue.config.productionTip = false
}

export default { install }
