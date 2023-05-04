import axios from "axios";
import nprogress from "nprogress";
import "nprogress/nprogress.css";

export const serverUrl = "http://localhost:1337";

const instance = axios.create({
  baseURL: serverUrl,
  timeout: 5000,
});

/**
 * get请求
 * @param {*} url
 * @param {*} params
 * @returns
 */
export const get = (url, params) =>
  instance.get(
    url,
    /**
     * params 表示url中传递的参数
     */

    { params }
  );

/**
 * Post请求
 * @param {*} url
 * @param {*} data
 * @returns
 */
export const post = (url, data) => instance.post(url, data);

// 全局拦截
// 添加请求拦截器
axios.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么

    //显示loding效果
    nprogress.start();

    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    //隐藏loding效果
    nprogress.done();
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  },
  function (error) {
    //如果报错也隐藏loding效果
    nprogress.done();
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
