
import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '@/pages/homepage/Homepage.vue'
import WorldGreeting from '../pages/helloWorld/WorldGreeting.vue'
import NineMensMorris from '@/pages/nineMensMorris/NineMensMorris.vue'
import VueReference from '@/pages/refSheet/VueReference.vue'

declare module 'vue-router' {
  interface RouteMeta {
    imagePath: string
  }
}

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Homepage,
      meta: {
        imagePath: '/src/assets/logo.svg'
      },
    },
    {
      path: '/world-greeting',
      name: 'Greetings',
      component: WorldGreeting,
      meta: {
        imagePath: '/src/pages/helloWorld/logo-greeting.svg'
      },
    },
    {
      path: '/refSheet',
      name: 'Vue Reference',
      component: VueReference,
      meta: {
        imagePath: '/src/pages/refSheet/ref-sheet-icon.svg'
      },
    },
    {
      path: '/nine-mens-morris',
      name: 'Nine Men\'s Morris',
      component: NineMensMorris,
      meta: {
        imagePath: '/src/pages/nineMensMorris/platform.svg'
      },
    },
    ]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: "routeActiveLink",
  linkExactActiveClass: "routeExactActiveLink",
})

export default router