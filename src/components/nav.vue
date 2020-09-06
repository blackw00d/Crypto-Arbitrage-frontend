<template>
  <div>
    <div class="top">
      <img src="../assets/img/logo.png" width="150" height="150" style="float: left; margin-left: 10px">
      Crypto Arbitrage
      <div id="top_menu">
        <ul>
          <li id="exc"><a href="#" class="current" onclick="top_menu(this);activated(null,'left');">Exchange</a></li>
          <li id="list"><a href="#" onclick="top_menu(this);activated(null,'listing');">Coin listing</a></li>
          <li id="arb"><a href="#" onclick="top_menu(this);activated(null,'arbitrage');">Arbitrage</a></li>
          <li id="track"><a href="#" onclick="top_menu(this);activated(null,'tracking');">Tracking</a></li>
          <li id="trade"><a href="#" onclick="top_menu(this);activated(null,'trading');">Trading BOT</a></li>
          <li id="balance"><a href="#" onclick="top_menu(this);activated(null,'balances');">Balance</a></li>
        </ul>
      </div>
    </div>
    <div class="lang">
      <a href="#">Выход</a>
      <a><img src="../assets/img/ru.png" height="15" width="20"></a>
      <a><img src="../assets/img/en.png" height="15" width="20"></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav"
}
</script>

<style scoped>
#top_menu{
    width:100%;
    height:59px;
    background:url(../assets/img/nav/top_menu_bg.jpg) repeat-x;
    font:12px/18px Tahoma, Arial, Helvetica, sans-serif;
}
#top_menu ul{
    list-style:none;
    margin:0 auto;
    width: 750px;
}
#top_menu li{
    list-style:none;
    display:block;
    float:left;
    height:59px;
    line-height:59px;
}
#top_menu li a{
    display:block;
    float:left;
    color:#a7a7a7;
    text-transform:uppercase;
    font-size:11px;
    font-weight:bold;
    line-height:59px;
    text-decoration:none;
    padding:0 20px;
}
#top_menu li a:hover{
    color:#fff;
    background:url(../assets/img/nav/top_menu_h.jpg) no-repeat bottom;
}
#top_menu li a.current{
    display:block;
    float:left;
    background:url(../assets/img/nav/top_menu_h.jpg) no-repeat bottom;
    color:#fff;
    text-transform:uppercase;
    font-size:11px;
    font-weight:bold;
    line-height:59px;
    text-decoration:none;
    padding:0 20px;
}
#top_menu li a:hover.current{
    color:#fff;
}
</style>