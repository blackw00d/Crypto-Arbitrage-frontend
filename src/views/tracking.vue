<template>
  <div id="tracking" class="tracking">
    <div id="tracking_div">
      <table>
        <tbody>
        <tr>
          <td>
            Биржа<br>
            <select onchange="track(this);" id="exchange_select">
              <option selected="selected">Binance</option>
              <option>Bittrex</option>
              <option>Poloniex</option>
              <option>HitBTC</option>
              <option>Livecoin</option>
              <option>Kucoin</option>
              <option>Kraken</option>
              <option>OKex</option>
              <option>Gate.io</option>
              <option>OctaEx</option>
              <option>Bit-Z</option>
              <option>Huobi</option>
            </select></td>
          <td>
            <div id="tracking_menu"></div>
          </td>
        </tr>
        </tbody>
      </table>
      <br><br>
      <div>
        <table id="tracking_table">
          <thead>
          <tr>
            <th style="visibility: hidden"></th>
            <th rowspan="2">Exchange</th>
            <th rowspan="2">Pair</th>
            <th colspan="4">Price Tracking</th>
            <th colspan="4">Volume Tracking</th>
          </tr>
          <tr>
            <th style="visibility: hidden"></th>
            <th>Price</th>
            <th>Price value change</th>
            <th>Price value procent</th>
            <th>Price active</th>
            <th>Volume</th>
            <th>Volume value change</th>
            <th>Volume value procent</th>
            <th>Volume active</th>
          </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
      <br><input type="button" value="Применить" onclick="writing();"></div>
  </div>
</template>

<script>
export default {
  name: "tracking"
}
</script>

<style scoped>

#tracking_div {
  display: table;
  margin: 0 auto;
  text-align: center
}

#tracking_div table {
  border: none;
  margin-top: 50px
}

#tracking_div table select {
  width: 120px;
}

#tracking_table {
  width: 800px;
  border-collapse: collapse;
  font-size: 13px;
  text-align: center;
}

#tracking_table td, th {
  padding: 3px;
  border: 1px solid black;
  text-align: center;
  width: 80px;
}

#tracking_table thead tr th:first-child {
  border: 1px solid;
  border-bottom-style: hidden;
}

#tracking_table tbody tr td {
  border: 1px solid;
}

#tracking_table tbody tr td:first-child {
  border: none;
  background: white;
}

</style>