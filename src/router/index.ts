import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '@/pages/homepage/Homepage.vue'

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Homepage,
    },
    {
      path: '/world-greeting',
      name: 'Greetings',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/helloWorld/WorldGreeting.vue'),
    },
  ]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: ,
  link
})

export default router