import { createApp } from "vue";
import "./style.scss";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import { isLogined } from "./utils/tools";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("./views/Home.vue"),
    },
    {
      path: "/list",
      name: "List",
      component: () => import("./views/List.vue"),
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("./views/Login.vue"),
    },
    {
      path: "/reg",
      name: "Reg",
      component: () => import("./views/Reg.vue"),
    },
    {
      path: "/notivces",
      name: "Notivces",
      component: () => import("./views/Notivces.vue"),
    },
    {
      path: "/post",
      name: "Post",
      component: () => import("./views/Post.vue"),
    },
    {
      path: "/postpuslish",
      name: "postPuslish",
      component: () => import("./views/postPuslish.vue"),
    },
    {
      path: "/user",
      name: "User",
      component: () => import("./views/User.vue"),
      meta: {
        needLogin: true, //需要登录才能访问
      },
    },
    {
      path: "/userinfo",
      name: "UserInfo",
      component: () => import("./views/userinfo.vue"),
      meta: {
        needLogin: true, //需要登录才能访问
      },
    },
  ],
});
// 看看是否登录，没登录需要先登录
router.beforeEach((to, from, next) => {
  if (to.meta.needLogin) {
    if (isLogined()) {
      next();
    } else {
      next({ name: "Login" });
    }
  } else {
    next();
  }
});

createApp(App).use(router).mount("#app");
