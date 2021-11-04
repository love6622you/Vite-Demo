import i18n from "@/plugins/i18nPlugin";

// console.log(import.meta.env.VUE_APP_BASE_API);
const install = (Vue: any) => {
  Vue.config.globalProperties.$baseUrl = process.env.VUE_APP_BASE_API;
  Vue.use(i18n);
  Vue.config.productionTip = false;
};


export default { install };
