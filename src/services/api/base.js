import axios from "axios";
import * as localStorageService from "../localStorage";

export const BASE_URL = "https://js1.10up.com/wp-json/";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorageService.getAccessToken();
    if (token) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export const doPost = async (url, data = {}) => {
  try {
    const result = await instance.post(url, data);
    return result.data;
  } catch (e) {
    return { error: e.response.data.message };
  }
};

export const doGet = async (url) => {
  try {
    const result = await instance.get(url);
    return result.data;
  } catch (e) {
    return { error: e.response.data.message };
  }
};
