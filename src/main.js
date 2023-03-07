import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import CounterComponent from "./components/CounterComponent.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "counter",
      component: CounterComponent,
    },
  ],
});
createApp(App).use(router).mount("#app");
