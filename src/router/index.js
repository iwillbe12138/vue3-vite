import { createRouter, createWebHashHistory } from "vue-router";
import index from "@/views/index.vue";
import home from "@/views/home/home.vue";
import test from "@/views/home/test.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: index,
      children: [
        {
          path: "/home",
          component: home,
        },
        {
          path: "/test",
          component: test,
        },
      ],
    },
  ],
});
