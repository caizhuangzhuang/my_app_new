import { post } from "../utils/request";

export const loginAPI = (data) => {
  return post("/api/v1/auth/login", data);
};
