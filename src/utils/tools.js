import { serverUrl } from "./request";

export const dalImg = (url) => {
  if (url) {
    if (url.startsWith("http")) {
      return url;
    }
    return serverUrl + url;
  }
  return "https://img0.baidu.com/it/u=1217304799,3113310756&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500";
};

// token读写
/**
 * 设置token
 * @param {*} token
 */
export const setToken = (token) => {
  console.log(1);
  sessionStorage.setItem("token", token);
};

/**
 * 获取token
 * @returns
 */
export const getToken = () => sessionStorage.getItem("token");

/**
 * 删除token
 * @returns
 */
export const removeToken = () => sessionStorage.removeItem("token");

/**
 * 是否登录
 * @returns
 */
export const isLogined = () => (getToken() ? true : false);
