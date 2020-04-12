import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import Home from '../views/Home.vue'
import LoginHeader from '../views/login/LoginHeader.vue'
import Index from "@/views/Layout/Index.vue";

Vue.use(VueRouter)

/**
 * hidden: true                   如果hidden为true则在左侧菜单栏展示，否则不显示
 * name:'router-name'             路由名称，必须填写
 * meta : {
    title: 'title'               对应路由在左侧菜单栏的标题名称
    icon: 'icon-class'           对应路由在左侧菜单栏的图标样式，样式使用fontawesome图标库
  }
 **/


export const asyncRouterMap = [
    {
        path: '/',
        name: 'dashboard',
        component:Index,
        hidden: true,
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'home',
                meta: { title: '首页', icon: 'fa fa-home' },
                component: () => import('@/views/Home.vue')
            }
        ]
    },
    {
        path: '/dataManage',
        name: 'dataManage',
        hidden: true,
        meta: { title: '数据管理', icon: 'fa fa-database' },
        component:Index,
        redirect: '/tableData',
        children: [
            {
                path: '/tableData',
                name: 'tableData',
                meta: { title: '表格管理', icon: 'fa fa-table' },
                component: () => import('@/views/DataManage/TableData.vue')
            },
            {
                path: '/chartsData',
                name: 'chartsData',
                meta: { title: '图表管理', icon: 'fa fa-bar-chart' },
                component: () => import('@/views/DataManage/ChartsData.vue')
            },
            {
                path: '/formData',
                name: 'formData',
                meta: {
                    title: '表单管理',
                    icon: 'fa fa-file-text-o',
                    roles: ['admin', 'editor']
                },
                component: () => import('@/views/DataManage/FormData.vue')
            }
        ]
    },
    {
        path: '/userManage',
        name: 'userManage',
        component:Index,
        hidden: true,
        redirect: '/accountData',
        children: [
            {
                path: '/accountData',
                name: 'accountData',
                meta: { title: '账户管理', icon: 'fa fa-user-plus', roles: ['admin'] },
                component: () => import('@/views/UserManage/AccountData.vue')
            }
        ]
    },
    {
        path: '/user',
        component:Index,
        redirect: '/userInfo',
        hidden: false,
        children: [
            {
                path: '/userInfo',
                name: 'userInfo',
                meta: { title: '个人中心' },
                component: () => import('@/views/UserManage/UserInfo.vue')
            }
        ]
    },
    {
        path: '/404',
        name: '404',
        hidden: false,
        meta: { title: '404' },
        component: () => import('@/views/404.vue')
    },
    {
        path: '*',
        redirect: '/404'
    },
    {
        path: '/login',
        name: 'login',
        hidden: false,
        meta: { title: '系统登录' },
        component: () => import('@/assets/Login/Login.vue')
    },
    {
        path: '/password',
        name: 'password',
        hidden: false,
        meta: { title: '找回密码' },
        component: () => import('@/assets/Login/Password.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes:asyncRouterMap
})

export default router
