import type { RouteRecordRaw } from 'vue-router'

import { RootRoute, LOGIN_ROUTE, PAGE_NOT_FOUND_ROUTE, HOME_ROUTE, PAGE_EMPTY_ROUTE } from '@/router/routes/basic'

// 基础路由
export const basicRoutes: RouteRecordRaw[] = [LOGIN_ROUTE, RootRoute, PAGE_NOT_FOUND_ROUTE, HOME_ROUTE, PAGE_EMPTY_ROUTE]

