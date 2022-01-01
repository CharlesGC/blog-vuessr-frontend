import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import layout from "@/layout/Index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Posts",
    component: layout,
    children: [
      {
        path: "",
        component: () => import("../views/Posts.vue"),
      },
    ],
  },
  {
    path: "/post/:id",
    name: "Post",
    component: layout,
    children: [
      {
        path: "",
        component: () => import("../views/Post.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
