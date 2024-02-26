import './assets/styles.scss'
import * as bootstrap from 'bootstrap'
import * as VueRouter from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'

const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('./views/PageAbout.vue')
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: () => import('./views/PageContacts.vue')

    },
    {
        path: '/menu',
        name: 'menu',
        component: () => import('./views/PageMenu.vue')

    },
    {
        path: '/vacations',
        name: 'vacations',
        component: () => import('./views/PageVacations.vue')

    },

    {
        path: '/registration',
        name: 'registration',
        component: () => import('./views/PageRegistration.vue')

    },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: routes// short for `routes: routes`
})
const app = createApp(App)
app.use(router)
app.mount('#app')
