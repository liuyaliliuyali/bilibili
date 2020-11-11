import Vue from 'vue'
import VueRouter from 'vue-router'
import Manhua from "../views/manhua/Manhua";

Vue.use(VueRouter)

const routes = [
  {
    path: '/manhua',
    name: 'Manhua',
    component: Manhua
  },
]

const router = new VueRouter({
  routes
})

export default router
