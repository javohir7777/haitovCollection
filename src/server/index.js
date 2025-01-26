// import axios from "axios";
// import { ACCESSTOKEN, ENDPOINT } from "../constants";
// import Cookies from "js-cookie";

// export const requies = axios.create({
//   baseURL: `${ENDPOINT}api`,
//   timeout: 10000,
//   headers: {
//     Authorization: `Bearer ${Cookies.get(ACCESSTOKEN)}`,
//   },
// });
import axios from "axios";
import { ACCESSTOKEN, ENDPOINT } from "../constants";
import Cookies from "js-cookie";

export const requies = axios.create({
  baseURL: `${ENDPOINT}api`,
  timeout: 10000,
  // headers: {
  //   "Content-Type": "multipart/form-data",
  // },
});

requies.interceptors.request.use(
  (config) => {
    const token = Cookies.get(ACCESSTOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

requies.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error("Unauthorized, redirecting to login...");

      Cookies.remove(ACCESSTOKEN);
    }
    return Promise.reject(error);
  }
);
