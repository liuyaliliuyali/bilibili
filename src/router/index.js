import Vue from 'vue'
import VueRouter from 'vue-router'
import Manhua from "../views/manhua/Manhua";
import Membership from "../views/member/Membership";
import match from "../views/match/match";
import Youxizhongxin from "../views/youxizhongxin/Youxizhongxin";
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
    path:'/match',
    name:'match',
    component:match
  },

  {
    path: '/fanju',
    name: 'Fanju',
    component: Fanju
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
