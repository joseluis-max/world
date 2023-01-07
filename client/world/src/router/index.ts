import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import WallView from "../views/WallView.vue";
import ProfileView from "../views/ProfileView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/wall",
      name: "wall",
      component: WallView,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
    }
  ],
});

export default router;
