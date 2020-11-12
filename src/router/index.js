import Vue from 'vue'
import VueRouter from 'vue-router'
import Manhua from "../views/manhua/Manhua";
import Membership from "../views/member/Membership";
import Fanju from "../views/fanju/Fanju";

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
  {
    path: '/fanju',
    name: 'Fanju',
    component: Fanju
  },
]

const router = new VueRouter({
  routes
})

export default router
