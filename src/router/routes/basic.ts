import type { RouteRecordRaw } from 'vue-router'


// 根路由
export const RootRoute: RouteRecordRaw = {
  path: '/',
  name: 'home',
  redirect: '/home',
  meta: {
    title: 'Root',
  },
}
// 根路由
export const HOME_ROUTE: RouteRecordRaw = {
  path: '/',
  name: 'home',
  redirect: '/empty',
  component: () => import('@/Layout/index.vue'),
  meta: {
    title: '主页',
  },
  children: [
    {
      path: '/test',
      name: 'test',
      component: () => import('@/views/Test/index.vue'),
      meta: {
        title: '测试1',
      },
    }
  ]
}
// 登录
export const LOGIN_ROUTE: RouteRecordRaw = {
  path: '/login',
  name: 'login',
  component: () => import('@/views/Login/index.vue'),
  meta: {
    title: '登录',
    hideMenu: true,
  },
}
// 404 on a page
export const PAGE_NOT_FOUND_ROUTE: RouteRecordRaw = {
  path: '/404',
  name: '404',
  component: () => import('@/views/404/index.vue'),
  meta: {
    title: '404',
    hideMenu: true,
  }
}
// 404 on a page
export const PAGE_EMPTY_ROUTE: RouteRecordRaw = {
  path: '/empty',
  name: 'empty',
  component: () => import('@/views/Empty/index.vue'),
  meta: {
    title: 'empty',
    hideMenu: true,
  }
}
