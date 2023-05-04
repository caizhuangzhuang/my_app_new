import { get } from "../utils/request";

/**
 *
 * @returns 获取轮播图数据
 */
export const loadBannersAPI = () => {
  return get("/api/v1/banners");
};
