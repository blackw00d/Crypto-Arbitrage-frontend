<template>
  <div>
    <div class="top">
      <a href="/">
        <img src="../assets/img/logo.png" alt="Crypto Arbitrage">
      </a>
      <span>Crypto Arbitrage</span>
      <div id="top_menu">
        <ul v-if="loggedIn">
          <li id="exc">
            <router-link to="exchange">Exchange</router-link>
          </li>
          <li id="list">
            <router-link to="listing">Coin listing</router-link>
          </li>
          <li id="arb">
            <router-link to="arbitrage">Arbitrage</router-link>
          </li>
          <li id="track">
            <router-link to="tracking">Tracking</router-link>
          </li>
          <li id="trade">
            <router-link to="trading">Trading BOT</router-link>
          </li>
          <li id="balance">
            <router-link to="balance">Balance</router-link>
          </li>
          <li id="settings">
            <router-link to="settings">Settings</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="login" v-if="loggedIn">
      <span>Привет, {{ username }}</span><br>
      <router-link :to="{ name:'logout' }">Выход <i class="fas fa-sign-out-alt"></i></router-link>
      <div id="dark-btn">
        <input type="checkbox" class="checkbox" id="chk" @click="changeTheme"
               v-bind:class="[darkTheme ? 'dark-btn-on' : '']">
        <label class="label" for="chk">
          <i class="fas fa-moon"></i>
          <i class="fas fa-sun"></i>
          <div class="ball"></div>
        </label>
      </div>
    </div>
    <div class="login" v-else>
      <router-link :to="{ name:'login' }">Войти <i class="fas fa-sign-out-alt"></i></router-link><br>
      <router-link :to="{ name:'auth' }">Регистрация <i class="fas fa-user-circle"></i></router-link>
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'

export default {
  name: "NavBar",
  computed: {
    ...mapState(['username', 'darkTheme']),
    ...mapGetters(['loggedIn']),
  },
  methods: {
    changeTheme() {
      this.$store.dispatch('changeTheme')
    }
  },
}
</script>

<style scoped>

#dark-btn {
  position: relative;
  right: 20px;
  float: right;
}

.checkbox {
  opacity: 0;
  position: absolute;
}

.label {
  background-color: #ccc;
  border-radius: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.2rem;
  position: relative;
  height: 1rem;
  width: 2.6rem;
  transform: scale(0.9);
  transition: background-color 0.3s;
}

.label .ball {
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  left: 2px;
  height: 1.1rem;
  width: 1.1rem;
  transform: translateX(0);
  transition: transform 0.3s linear;
}

.dark-btn-on + .label {
  background-color: #fff;
}

.dark-btn-on + .label .ball {
  transform: translateX(1.6rem);
  background-color: #111;
}

.fa-moon {
  color: #f1c40f;
}

.fa-sun {
  color: #f39c12;
}

#top_menu {
  width: 100%;
  height: 59px;
  background: url(../assets/img/nav/top_menu_bg.png) repeat-x;
  font: 12px/18px Tahoma, Arial, Helvetica, sans-serif;
}

#top_menu ul {
  list-style: none;
  margin: 0 auto;
  width: 750px;
}

#top_menu li {
  list-style: none;
  display: block;
  float: left;
  height: 59px;
  line-height: 59px;
}

#top_menu li a {
  display: block;
  float: left;
  color: #a7a7a7;
  text-transform: uppercase;
  font-size: 11px;
  font-weight: bold;
  line-height: 59px;
  text-decoration: none;
  padding: 0 20px;
}

#top_menu li a:hover {
  color: #fff;
  background: url(../assets/img/nav/top_menu_h.png) no-repeat bottom;
}

#top_menu li a.router-link-exact-active {
  display: block;
  float: left;
  background: url(../assets/img/nav/top_menu_h.png) no-repeat bottom;
  color: var(--always-white);
}

.top {
  font-family: myfont, serif;
  font-size: 120px;
  text-align: center;
  margin-bottom: 50px;
}

.top img {
  width: 120px;
  height: 120px;
  float: left;
  margin: 15px
}

.login {
  width: 150px;
  position: absolute;
  top: 9px;
  right: 6px;
}

.login a {
  color: var(--black-color);
  text-decoration: none;
}

.login a:hover {
  color: red;
}

@media (max-width: 1024px) {
  #top_menu li a {
    font-size: 9px;
    padding: 0 15px;
  }

  .top {
    font-size: 100px;
  }

  .top img {
    width: 100px;
    height: 100px;
  }

  .login {
    width: 120px;
    right: 0;
  }

  .login span, a {
    font-size: 12px;
  }

  .label {
    transform: scale(0.7);
  }
}

@media (max-width: 720px) {
  #top_menu li a {
    font-size: 8px;
    padding: 0 10px;
  }

  .top {
    font-size: 70px;
  }

  .top img {
    width: 70px;
    height: 70px;
  }

  .login {
    width: 100px;
    right: 0;
  }

  .login span, a {
    font-size: 10px;
  }

  #dark-btn {
    right: 0;
  }

  .label {
    transform: scale(0.6);
  }
}

</style>