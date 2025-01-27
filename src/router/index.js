import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("../views/HomePage.vue") },
  { path: "/about", component: () => import("../views/AboutPage.vue") },
  { path: "/login", component: () => import("../views/LoginPage.vue") },
  { path: "/register", component: () => import("../views/RegisterPage.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;