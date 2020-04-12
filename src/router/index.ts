import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import Home from '../views/Home.vue'
import LoginHeader from '../views/login/LoginHeader.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'loginHeader',
        component:LoginHeader,
    },
    {
        path: '/login',
        name: 'Login',
        component:()=>import('@/views/login/Login.vue'),
    },
    {
        path: '/password',
        name: 'Password',
        component:()=>import('@/views/login/Password.vue'),
    },
    {
        path: '/header',
        name: 'Header',
        component:()=>import('@/views/Layout/LayoutHeader.vue'),
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
