import Axios from "axios";


const baseURL = "https://api.github.com";

const axios = Axios.create({
  baseURL,
  timeout: 600000
});

axios.interceptors.request.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response && error.response.data) {
      const code = error.response.status;
      const msg = error.response.data.message;
      console.log(error.response);
    }

    return Promise.reject(error);
  }
);

export default axios