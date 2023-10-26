import Home from '../../components/Home.vue'
import { createRouter, createWebHistory } from "vue-router";
import SignUp from "../../components/SignUp.vue";
import Login from '../../components/Login.vue'

const routes = [
  {
    name: "Home",
    component: Home,
    path: "/",
  },
  {
    name: "sign-up",
    component: SignUp,
    path: "/signup",
  },
  {
    name:'log-in',
    component:Login,
    path:'/login'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
