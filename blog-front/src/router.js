import {createRouter, createWebHashHistory} from 'vue-router'



let routes = [
  {
    path: '/',
    name: '/',
    component:() => import('@/view/layout/index')
  },
  {
    path: '/blogList',
    name: 'blogList',
    component: () => import('@/view/blog/blogList')
  },
  {
    path: '/blogDetail/:blogId',
    name: 'blogDetail',
    component: () => import('@/view/blog/blogDetail')
  },
  {
    path: '/archive',
    name: 'archive',
    component: () => import('@/view/blog/archive')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/view/login/index')
  },
  {
    path: '/blogManagement',
    name: 'blogManagement',
    component: () => import('@/view/backstage/blogManagement')
  },
  {
    path: '/createBlog/:blogId?',
    name: 'createBlog',
    component: () => import('@/view/backstage/createBlog')
  },

  {
    path: '/labelManagement',
    name: 'labelManagement',
    component: () => import('@/view/backstage/labelManagement')
  },
  {
    path: '/blogSettings',
    name: 'blogSettings',
    component: () => import('@/view/backstage/blogSettings')
  }
]

export const router =  createRouter({
  history: createWebHashHistory(),
  routes,
})
