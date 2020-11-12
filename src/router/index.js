import Vue from 'vue'
import VueRouter from 'vue-router'
import Manhua from "../views/manhua/Manhua";
import Membership from "../views/member/Membership";

Vue.use(VueRouter)

const routes = [
  {
    path: '/manhua',
    name: 'Manhua',
    component: Manhua
  },
  {
    path: '/member',
    name: 'Membership',
    component: Membership
  },
]

const router = new VueRouter({
  routes
})

export default router
