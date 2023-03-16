import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/view/Home.vue";
import Error404 from "@/view/ErrorPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "*",
      name: "Error",
      meta: { title: `Page not found` },
      component: Error404,
    },
  ],
});

createApp(App).mount("#app");
