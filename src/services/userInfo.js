import { put } from "../utils/request";
/**
 * 修改个人信息
 */
export const changeuserinfoAPI = (data) => {
  return put("/api/v1/user/modify", data);
};
