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
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: routes// short for `routes: routes`
})
const app = createApp(App)
app.use(router)
app.mount('#app')
