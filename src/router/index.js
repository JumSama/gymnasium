import { createRouter, createWebHashHistory } from 'vue-router'
import { useStore } from '@/store/globalStore'
import createMsg from '@/utils/createMessage.js'
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
    redirect: '/gym/category/1',
    children: [
      {
        path: '/gym/category/:part_id',
        component: () => import('@/views/Category.vue')
      },
      {
        path: '/gym/execise/:id',
        component: () => import('@/views/Detail.vue')
      }
    ],

    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    component: () => import('@/views/login.vue'),
    name: 'Login'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  const store = useStore()
  // 如果没有登录
  if (!store.isLogin) {
    // 检测有没有token
    if (store.token) {
      // 验证token的合法性
      await store.authVerify()
    }
  }
  if (to.meta.requiresAuth && !store.isLogin) {
    createMsg('WARNING', '请先登入!')
    next('login')
  }
  next()
})

export default router
