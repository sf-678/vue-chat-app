import { createRouter, createWebHistory } from 'vue-router'
import ChatRoom from '../views/ChatRoom.vue'
import dispMessageArea from '@/components/dispMessageArea.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ChatRoom,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ChatRoom.vue'),
    },
  ],
})

export default router
