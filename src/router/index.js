import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import balance from '../views/balance'
import trading from '../views/trading'
import arbitrage from "../views/arbitrage";
import tracking from "../views/tracking";
import listing from "../views/listing";
import exchange from "../views/exchange";
import login from "../views/login";
import auth from "../views/auth";
import logout from "../views/logout";
import error from "../components/error";
import store from "@/store";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/exchange',
        name: 'exchange',
        component: exchange,
        meta: {
            requiresLogin: true
        }
    },
    {
        path: '/balance',
        name: 'balance',
        component: balance,
        meta: {
            requiresLogin: true
        }
    },
    {
        path: '/trading',
        name: 'trading',
        component: trading,
        meta: {
            requiresLogin: true
        }
    },
    {
        path: '/tracking',
        name: 'tracking',
        component: tracking,
        meta: {
            requiresLogin: true
        }
    },
    {
        path: '/listing',
        name: 'listing',
        component: listing,
        meta: {
            requiresLogin: true
        }
    },
    {
        path: '/arbitrage',
        name: 'arbitrage',
        component: arbitrage,
        meta: {
            requiresLogin: true
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
            requiresLogin: true
        }
    },
    {
        path: '/404',
        name: 'error',
        component: error
    },
    {
        path: '*',
        redirect: '/404'
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresLogin)) {
        // const log = store.state.accessToken != null && store.state.timeToken > new Date().setDate(new Date().getMinutes())
        if (!store.getters.loggedIn) {
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
