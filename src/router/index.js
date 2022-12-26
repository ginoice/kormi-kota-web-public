import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component:  () => import(/* webpackChunkName: "about" */ '@/views/home')
  },
  {
    path: '/user-cats',
    name: 'user-cats',
    component:  () => import(/* webpackChunkName: "about" */ '@/views/user-cats')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
