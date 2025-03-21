import axios from "axios";
import axiosRetry from "axios-retry";

export const PublicAxios = axios.create({
  baseURL: "",
  // timeout: 2000 ,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("")}`,
  },
});

axiosRetry(PublicAxios, {
  retries: 8000, // عدد مرات إعادة المحاولة
  retryDelay: axiosRetry.exponentialDelay, // تأخير بين كل محاولة
  retryCondition: (error) => {
    return axiosRetry.isNetworkOrIdempotentRequestError(error);
  },
});

PublicAxios.interceptors.request.use(
  async (c) => {
    let token = localStorage.getItem("auth-Token");
    if (token) c.headers.Authorization = `Bearer ${token}`;
    return c;
  },
  (error) => {
    return Promise.reject(error);
  }
);
