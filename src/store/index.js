import {createStore} from 'vuex'

const store = createStore({
    state: {
        backendUrl: "http://127.0.0.1:8000",
        accessToken: null,
        refreshToken: null,
        timeToken: null,
        username: "",
        darkTheme: false,
    },
    mutations: {
        initialiseStore(state) {
            if (localStorage.getItem('store')) {
                this.replaceState(
                    Object.assign(state, JSON.parse(localStorage.getItem('store')))
                );
            }
        },
        updateStorage(state, {access, refresh, username}) {
            state.accessToken = access
            state.refreshToken = refresh
            state.timeToken = new Date().setDate(new Date().getMinutes() + 1440)
            state.username = username
        },
        destroyToken(state) {
            state.accessToken = null
            state.refreshToken = null
            state.timeToken = null
            state.username = ""
            state.darkTheme = false
        },
        setTheme(state) {
            state.darkTheme = !state.darkTheme
        }
    },
    actions: {
        userLogout(context) {
            if (context.getters.loggedIn) {
                context.commit('destroyToken')
            }
        },
        userLogin(context, usercredentials) {
            return new Promise((resolve, reject) => {
                const requestOptions = {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({
                        username: usercredentials.username,
                        password: usercredentials.password
                    })
                }
                fetch(`${this.getters.getServerUrl}/api-token/`, requestOptions)
                    .then(response => (response.json()))
                    .then(data => {
                        if (data.access && data.refresh) {
                            context.commit('updateStorage', {
                                access: data.access,
                                refresh: data.refresh,
                                username: usercredentials.username
                            })
                            resolve()
                        } else resolve({'error': true})
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
        },
        changeTheme(context) {
            context.commit('setTheme')
        },
    },
    getters: {
        getServerUrl: state => {
            return state.backendUrl
        },
        getServelHost: state => {
            return new URL(state.backendUrl).hostname
        },
        loggedIn: state => {
            return (state.accessToken != null && state.timeToken > new Date().setDate(new Date().getMinutes()))
        }
    },
})

store.subscribe((mutation, state) => {
    localStorage.setItem('store', JSON.stringify(state));
})

export default store