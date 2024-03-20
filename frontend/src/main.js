import './assets/styles.scss'
import * as bootstrap from 'bootstrap'
import * as VueRouter from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios";
import store from "@/store.js";


axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;
axios.defaults.headers.common['Authorization'] = `bearer ${store.token}`
axios.defaults.headers.common['Accept'] = 'application/json'
axios.get('http://api.tastly.com/sanctum/csrf-cookie').then((response)=>console.log(response))

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
    {
        path: '/authentification',
        name: 'auth',
        component: () => import('./views/PageAuth.vue')
    },
    {
        path: '/pc',
        name: 'pc',
        component: () => import('./views/PersonCabinet.vue')
    },
    {
        path:'/adminPanel',
        name: 'adminPanel',
        component: () => import('./views/AdminPanel.vue')
    },
    {
        path: '/adminMenu',
        name: 'adminMenu',
        component: () => import('./views/AdminMenu.vue')
    },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: routes// short for `routes: routes`
})
const app = createApp(App)
app.use(router)
app.mount('#app')
