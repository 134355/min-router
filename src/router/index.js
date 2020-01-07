
import { router } from '@/utils/min-router'

// 全局路由拦截器
router.beforeEach((to, from, next) => {
  next()
})

export default router
