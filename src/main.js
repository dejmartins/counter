import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import ErrorPage from "@/views/ErrorPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/counter",
      name: "Home",
      component: Home,
    },
    {
      path: "/",
      redirect: "/counter",
    },
    {
      path: "/:catchAll(.*)",
      name: "ErrorPage",
      meta: { title: `Page not found` },
      component: ErrorPage,
    },
  ],
});

createApp(App).use(router).mount("#app");
