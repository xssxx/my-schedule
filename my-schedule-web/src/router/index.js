import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import ScheduleView from "../views/ScheduleView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: LoginView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/schedule",
      name: "schedule",
      component: ScheduleView,
    },
  ],
});

export default router;
