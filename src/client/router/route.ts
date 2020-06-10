/**
 * path 路由
 * name 命名
 * title 标题
 * authority 权限
 * [component] 可选 String[] ，如果没有设置这个，则会根据path去解析路由组件
 */
export default [
  {
    path: '/',
    name: 'homepage',
    title: '首页',
    exact: true,
    component: '/homepage'
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
    path: '/*',
    name: '404-notfound',
    title: '页面不存在',
    component: '/not-found'
  }
]
