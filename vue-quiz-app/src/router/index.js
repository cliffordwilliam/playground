import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import QuizDetail from "../views/QuizDetail.vue";
import QuizDetailChild from "../components/QuizDetailChild.vue";
import NotFound from "../views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/home", redirect: "/" },
    { path: "/about", name: "about", component: About },
    {
      path: "/quiz/:id",
      name: "quiz",
      component: QuizDetail,
      children: [{ path: "child", component: QuizDetailChild }],
    },
    { path: "/:catchall(.*)*", name: "Not Found", component: NotFound },
  ],
});

export default router;
