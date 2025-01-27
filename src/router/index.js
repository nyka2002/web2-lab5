import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("../views/HomePage.vue") },
  { path: "/about", component: () => import("../views/AboutPage.vue") },
  { path: "/login", component: () => import("../views/LoginPage.vue") },
  { path: "/register", component: () => import("../views/RegisterPage.vue") },
  { path: "/dashboard", component: () => import("../views/DashboardPage.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const user = auth.currentUser;
  
  if (to.meta.requiresAuth && !user) {
    next("/login");
  } else {
    next();
  }
});

export default router;