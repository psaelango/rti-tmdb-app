import axios from "axios";

axios.interceptors.request.use(
  function (config) {
    console.log(
      "API Service request",
      config.method?.toUpperCase(),
      config.url,
      config.params || ""
    );
    return config;
  },
  function (error) {
    console.log("ERROR: API Service request", error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    console.log("API Service response", response.config.url, response.status);
    return response;
  },
  function (error) {
    console.log("ERROR: API Service response", error);
    return Promise.reject(error);
  }
);

export default axios;
