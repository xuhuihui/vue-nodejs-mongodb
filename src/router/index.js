import Vue from 'vue'
import Router from 'vue-router'

// import NotFound from '@/components/404.vue'
// import Home from '@/components/Home.vue'
// import Main from '@/components/Main.vue'
// import Table from '@/components/nav1/Table.vue'
import Form from '@/components/nav1/Form.vue'
// import user from '@/components/nav1/user.vue'
// import Page4 from '@/components/nav2/Page4.vue'
// import Page5 from '@/components/nav2/Page5.vue'
// import Page6 from '@/components/nav3/Page6.vue'
const Home = resolve => require(['../components/Home'], resolve)

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Login',
    component: resolve => require(['../components/Login'], resolve)
  }, {
    path: '/home',
    component: Home,
    name: '消息管理',
    iconCls: 'el-icon-message',
    children: [
      // { path: '/main', component: Main, name: '主页', hidden: true }
      // { path: '/table', component: Table, name: 'Table' }
      { path: '/form', component: Form, name: 'Form' }
      // { path: '/user', component: user, name: '列表' }
    ]
  }, {
    path: '/',
    component: Home,
    name: '设置管理',
    iconCls: 'el-icon-setting',
    children: [
      // { path: '/page4', component: Page4, name: '页面4' },
      // { path: '/page5', component: Page5, name: '页面5' }
    ]
  }, {
    path: '/404',
    component: resolve => require(['../components/404'], resolve),
    name: '404'
  }]
})
