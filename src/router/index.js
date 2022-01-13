
import Layout from '@/Layout/BaseLayout'
import NotFound from '@/pages/404'
import Login from '@/pages/user/login'
import FormBasic from '@/pages/form/basic'
import FormHeight from '@/pages/form/height'
export const LOGIN_ROUTES = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  // {
  //   path: '*',
  //   name: 'redirect',
  //   redirect: '/login'
  // }
]
export const dynamicRoutes = [
  {
    path: '/form',
    name: 'form',
    meta: { title: '表单', hidden: false },
    component: Layout,
    children: [
      {
        path: '',
        name: 'basic',
        meta: { title: '基础表单', hidden: false },
        component: FormBasic
      },
      {
        path: 'height',
        name: 'height',
        meta: { title: '高级表单', hidden: false },
        component: FormHeight
      }
    ]
  }
]
export const NOT_FOUND_ROUTES = [
  {
    path: '/404',
    name: '404',
    component: NotFound
  },
  {
    path: '*',
    name: '*',
    redirect: '/404'
  }
]