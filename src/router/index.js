import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import balance from '../views/balance'
import trading from '../views/trading'
import arbitrage from "@/views/arbitrage";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: balance
  },
  {
    path: '/balance',
    name: 'balance',
    component: balance
  },
  {
    path: '/trading',
    name: 'trading',
    component: trading
  },
  {
    path: '/arbitrage',
    name: 'arbitrage',
    component: arbitrage
  }
  ]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
