<template>
  <div>
    <div class="top">
      <img src="img\image\logo.png" width="150" height="150" style="float: left; margin-left: 10px">
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
      <a href="index_arb.php/?action=out">Выход</a>
      <a><img src="img/image/ru.png" height="15" width="20"></a>
      <a><img src="img/image/en.png" height="15" width="20"></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav"
}
</script>

<style scoped>

</style>