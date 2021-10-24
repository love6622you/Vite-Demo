import Axios from "axios";
import store from "@/store";

const baseURL = "https://api.github.com";

const service = Axios.create({
  baseURL,
  withCredentials: false,
  timeout: 5000
});

service.interceptors.request.use(
  (config: any) => {
    config.headers["Route"] = "Mem";

    const token =
      window.localStorage.getItem("accessToken") ??
      store.getters["persistedState/token"];
    if (token) {
      // config.headers["authorization"] = "Bearer " + token;
      config.headers["authorization"] = token;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    if (response.status === 200 && response.data) {
      return response.data;
    } else {
      return response;
      // return Promise.reject(new Error(res.message || 'Error'));
    }
  },
  (error) => {
    const response = error.response;
    // if (error.response && error.response.data) {
    //   const code = error.response.status;
    //   const msg = error.response.data.message;
    //   console.log(error.response);
    // }

    return Promise.reject(response);
  }
);

export default service;
