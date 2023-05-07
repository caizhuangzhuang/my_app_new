import { get } from "../utils/request";

/**
 *
 * @returns 获取论坛模块
 */
export const loadForumsAPI = () => {
  return get("/api/v1/forums");
};
