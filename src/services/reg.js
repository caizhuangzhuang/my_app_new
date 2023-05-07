import { post } from "../utils/request";

/**
 * 注册
 * @param {*} data
 * @returns
 */
export const regAPI = (data) => {
  return post("/api/v1/auth/reg", data);
};
