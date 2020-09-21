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
import logout from "../views/logout";

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
        component: trading
    },
    {
        path: '/tracking',
        name: 'tracking',
        component: tracking
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
        path: '/logout',
        name: 'logout',
        component: logout
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
