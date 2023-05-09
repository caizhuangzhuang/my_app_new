import { get } from "../utils/request";

export const loadUserserAPI = () => get("/api/v1/user/info");
