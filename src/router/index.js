import Home from '../views/Home.vue'
import balance from '../views/balance'
import trading from '../views/trading'
import arbitrage from "../views/arbitrage";
import tracking from "../views/tracking";
import listing from "../views/listing";
import exchange from "../views/exchange";
import settings from "../views/settings";
import login from "../views/login";
import auth from "../views/auth";
import logout from "../views/logout";
import error from "../components/error";
import store from "@/store";
import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/exchange',
        name: 'exchange',
        component: exchange,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/balance',
        name: 'balance',
        component: balance,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/trading',
        name: 'trading',
        component: trading,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/tracking',
        name: 'tracking',
        component: tracking,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/listing',
        name: 'listing',
        component: listing,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/arbitrage',
        name: 'arbitrage',
        component: arbitrage,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/settings',
        name: 'settings',
        component: settings,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/auth',
        name: 'auth',
        component: auth
    },
    {
        path: '/logout',
        name: 'logout',
        component: logout,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/error',
        name: 'error',
        component: error
    },
    {
        path: '/:pathMatch(.*)*',
        component: error
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        const log = store.state.accessToken != null && store.state.timeToken > new Date().setDate(new Date().getMinutes())
        if (!log) {
            store.commit('destroyToken')
            next({name: 'login'})
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router
