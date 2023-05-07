import { serverUrl } from "./request";

export const dalImg = (url) => {
  if (url) {
    if (url.startsWith("http")) {
      return url;
    }
    return serverUrl + url;
  }
  return "https://image.baidu.com/search/detail?ct=503316480&z=&tn=baiduimagedetail&ipn=d&word=%E8%9C%A1%E7%AC%94%E5%B0%8F%E6%96%B0&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=-1&hd=&latest=&copyright=&cs=2600105037,3769892208&os=3973380964,3209450600&simid=2600105037,3769892208&pn=4&rn=1&di=7214885350303334401&ln=1727&fr=&fmq=1683415677590_R&ic=&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&is=0,0&istype=2&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=1e&objurl=https%3A%2F%2Fgimg2.baidu.com%2Fimage_search%2Fsrc%3Dhttp%253A%252F%252Fc-ssl.duitang.com%252Fuploads%252Fblog%252F202108%252F15%252F20210815113200_30e0c.jpeg%26refer%3Dhttp%253A%252F%252Fc-ssl.duitang.com%26app%3D2002%26size%3Df9999%2C10000%26q%3Da80%26n%3D0%26g%3D0n%26fmt%3Dauto%3Fsec%3D1686007676%26t%3Dec87acc8ef9c53eafea33cd90c62da99&rpstart=0&rpnum=0&adpicid=0&nojc=undefined&dyTabStr=MCwzLDIsNiw0LDEsNSw4LDcsOQ%3D%3D";
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
