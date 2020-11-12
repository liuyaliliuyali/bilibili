import Vue from 'vue'
import VueRouter from 'vue-router'
import Manhua from "../views/manhua/Manhua";
import Membership from "../views/member/Membership";
import Youxizhongxin from "../views/youxizhongxin/Youxizhongxin";

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
    path: '/youxizhongxin',
    name: 'Youxizhongxin',
    component: Youxizhongxin
  },
]

const router = new VueRouter({
  routes
})

export default router
