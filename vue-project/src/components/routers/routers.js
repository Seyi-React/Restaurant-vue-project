import Home from '../../components/Home.vue'
import { createRouter, createWebHistory } from "vue-router";
import SignUp from "../../components/SignUp.vue";

const routes = [
  {
    name: "Home",
    component: Home,
    path: "/",
  },
  {
    name: "sign-up",
    component: SignUp,
    path: "/sign-up",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
