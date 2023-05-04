import { createApp } from "vue";
import "./style.scss";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";

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
    },
  ],
});

createApp(App).use(router).mount("#app");
