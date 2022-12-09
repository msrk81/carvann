import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/HomeView')
    },
    {
        path: '/guide',
        name: 'guide',
        component: () => import('../views/guideView')
    }

]

const router = new VueRouter({
    routes
})

export default router
