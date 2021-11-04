export default {
  namespaced: true,
  state: {
    loading: false,
    lang: 'en',
    modalStatus: {
      isShow: false,
      type: ""
    },
    test: '123test'
  },
  getters: {
    loading: (state: any) => state.loading,
    lang: (state: any) => state.lang,
    modalStatus: (state: any) => state.modalStatus,
    test: (state: any) => state.test
  },
  mutations: {
    setLoading: (state: any, data: boolean) => {
      state.loading = data;
    },
    setLang: (state:any ,value: any) => {
      state.lang = value
    }
    // setModalStatus: (state: any, data: object) => {
    //   state.modalStatus = {
    //     ...data,
    //   }
    // },
  },
  actions: {}
};
