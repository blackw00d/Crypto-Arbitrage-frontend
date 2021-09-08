import {createApp, h} from "vue";
import App from './App.vue'
import router from './router'
import store from "./store";


const app = createApp({
    setup() {
        store.commit('initialiseStore')
    },
    render() {
        return h(App)
    }
})

app.use(router).use(store).mount("#app");