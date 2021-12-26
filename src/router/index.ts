import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import layout from "@/layout/Index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: layout,
    children: [
      {
        path: "",
        component: () => import("../views/ArticleList.vue"),
      },
    ],
  },
  {
    path: "/article",
    name: "Article",
    component: layout,
    children: [
      {
        path: "",
        component: () => import("../views/Article.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
