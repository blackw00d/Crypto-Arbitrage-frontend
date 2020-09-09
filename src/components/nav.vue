<template>
  <div>
    <div class="top">
      <img src="../assets/img/logo.png" alt="Crypto Arbitrage">
      <span>Crypto Arbitrage</span>
      <div id="top_menu">
        <ul>
          <li id="exc"><router-link to="exchange">Exchange</router-link></li>
          <li id="list"><router-link to="listing">Coin listing</router-link></li>
          <li id="arb"><router-link to="arbitrage">Arbitrage</router-link></li>
          <li id="track"><router-link to="tracking">Tracking</router-link></li>
          <li id="trade"><router-link to="trading">Trading BOT</router-link></li>
          <li id="balance"><router-link to="balance">Balance</router-link></li>
        </ul>
      </div>
    </div>
    <div class="login">
      <span>Привет, User</span><br>
      <a href="#">Выход
        <i class="fas fa-sign-out-alt"></i>
      </a>
    </div>
  </div>
</template>

<script>

export default {
  name: "nav"
}
</script>

<style scoped>

#top_menu {
  width: 100%;
  height: 59px;
  background: url(../assets/img/nav/top_menu_bg.jpg) repeat-x;
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
  background: url(../assets/img/nav/top_menu_h.jpg) no-repeat bottom;
}

#top_menu li a.router-link-exact-active {
  display: block;
  float: left;
  background: url(../assets/img/nav/top_menu_h.jpg) no-repeat bottom;
  color: #fff;
  text-transform: uppercase;
  font-size: 11px;
  font-weight: bold;
  line-height: 59px;
  text-decoration: none;
  padding: 0 20px;
}

.top {
  font-family: myfont,serif;
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
  color: black;
  text-decoration: none;
}

</style>