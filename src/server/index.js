import axios from "axios";
import { ACCESSTOKEN, ENDPOINT } from "../constants";
import Cookies from "js-cookie";

export const requies = axios.create({
  baseURL: `${ENDPOINT}api`,
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${Cookies.get(ACCESSTOKEN)}`,
  },
});
