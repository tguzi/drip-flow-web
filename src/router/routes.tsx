/**
 * path 路由
 * name 命名
 * title 标题
 * [auth] 可选 authority 权限 String[]
 * [role] 可选 角色 String[]
 * [component] 可选 string ，如果没有设置这个，则会根据path去解析路由组件
 * [notRender] 可选 boolean，默认true，如果是true则用render模式，否则用component模式
 */
export default [
  {
    path: '/',
    name: 'homepage',
    title: '首页',
    exact: true,
    component: '/homepage',
  },
  {
    path: '/login',
    name: 'login',
    title: '登陆页',
  },
  {
    path: '/editor',
    name: 'editor',
    title: '编辑页',
  },
  {
    path: '/reading-notes',
    name: 'readingNotes',
    title: '札记'
  },
  {
    path: '/half-month-topic',
    name: 'halfMonthTopic',
    title: '两周一话'
  },
  {
    path: '/blog-detail',
    name: 'blogDetail',
    title: '博客详情'
  },
  {
    path: '/*',
    name: '404',
    title: '页面未找到',
    component: '/not-found',
  }
]
