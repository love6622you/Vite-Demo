export default {
  namespaced: true,
  state: {
    loading: false,
    modalStatus: {
      isShow: false,
      type: ""
    },
    test: '123test'
  },
  getters: {
    loading: (state: any) => state.loading,
    modalStatus: (state: any) => state.modalStatus,
    test: (state: any) => state.test
  },
  mutations: {
    setLoading: (state: any, data: boolean) => {
      state.loading = data;
    }
    // setModalStatus: (state: any, data: object) => {
    //   state.modalStatus = {
    //     ...data,
    //   }
    // },
  },
  actions: {}
};
