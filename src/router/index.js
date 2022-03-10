import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/Display.vue'),
    name: 'Display'
  },
  {
    path: '/gym',
    component: () => import('@/views/OnlineGym.vue'),
    name: 'Category',
    children: [
      {
        path: '/gym/category/:category',
        component: () => import('@/views/Category.vue')
      },
      {
        path: '/gym/execise/:id',
        component: () => import('@/views/Detail.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
