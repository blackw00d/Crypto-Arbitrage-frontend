import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";

Vue.config.productionTip = false

new Vue({
    router,
    store,
    beforeCreate() {
        this.$store.commit('initialiseStore')
    },
    render: h => h(App)
}).$mount('#app')


router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresLogin)) {
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