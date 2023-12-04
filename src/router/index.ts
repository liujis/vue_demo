import { createRouter, createWebHistory } from 'vue-router'
import type { App } from 'vue'

import { basicRoutes } from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: basicRoutes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

// config router
// 配置路由器
export function setupRouter(app: App<Element>) {
  app.use(router)
}