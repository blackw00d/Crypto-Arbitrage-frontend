<template>
  <div id="trading">
    <div id="trading_div">
      <table>
        <tbody>
        <tr>
          <form></form>
          <td>
            Биржа<br>
            <select onchange="track_trade(this);" id="exchange_select_trade">
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
            <div id="trading_menu"></div>
          </td>
        </tr>
        </tbody>
      </table>
      <br><br>
      <div>
        <table id="trading_table">
          <thead>
          <tr>
            <th rowspan="2" style="visibility: hidden"></th>
            <th rowspan="2">Exchange</th>
            <th rowspan="2">Pair</th>
            <th rowspan="2">Amount</th>
            <th rowspan="2">Buy Price</th>
            <th rowspan="2">Now Price</th>
            <th rowspan="2">Stop Loss, %</th>
            <th rowspan="2">Trailing Stop Loss</th>
            <th rowspan="2">Take Profit, %</th>
            <th colspan="2">Trailing Take Profit</th>
            <th rowspan="2">Active</th>
            <th rowspan="2">Stop Loss Value</th>
            <th rowspan="2">Take Profit Value</th>
          </tr>
          <tr>
            <th>Active</th>
            <th>Trailing Procent, %</th>
          </tr>
          </thead>
          <tbody>
          <tr class="tr_bd" @mouseover="ontable(0)" @mouseout="offtable(0)">
            <td id="table0" class="td_del" @click="del('table0')" style="visibility: hidden;">удалить</td>
            <td>Bittrex</td>
            <td>USDT-BCH</td>
            <td><input type="text" class="write" onkeyup="this.value=this.value.replace(/[^\d\.]+/g,'')"
                       value="12" maxlength="10" size="5"></td>
            <td><input type="text" class="write" onkeyup="this.value=this.value.replace(/[^\d\.]+/g,'')"
                       value="12" maxlength="10" size="5"></td>
            <td>226.692</td>
            <td><input type="text" class="write" onkeyup="this.value=this.value.replace(/[^\d\.]+/g,'')"
                       value="0" maxlength="10" size="5"></td>
            <td><input type="checkbox"></td>
            <td><input type="text" class="write" onkeyup="this.value=this.value.replace(/[^\d\.]+/g,'')"
                       value="0" maxlength="10" size="5"></td>
            <td><input type="checkbox"></td>
            <td><input type="text" class="write" onkeyup="this.value=this.value.replace(/[^\d\.]+/g,'')"
                       value="1" maxlength="10" size="5"></td>
            <td><input type="checkbox"></td>
            <td>12</td>
            <td>12</td>
          </tr>
          <tr class="tr_bd" @mouseover="ontable(1);" @mouseout="offtable(1);">
            <td id="table1" class="td_del" @click="del('table1')" style="visibility: hidden;">удалить</td>
            <td>Bittrex</td>
            <td>USDT-BTC</td>
            <td><input type="text" class="write" onkeyup="this.value=this.value.replace(/[^\d\.]+/g,'')"
                       value="100" maxlength="10" size="5"></td>
            <td><input type="text" class="write" onkeyup="this.value=this.value.replace(/[^\d\.]+/g,'')"
                       value="10192" maxlength="10" size="5"></td>
            <td>10192.5</td>
            <td><input type="text" class="write" onkeyup="this.value=this.value.replace(/[^\d\.]+/g,'')"
                       value="10" maxlength="10" size="5"></td>
            <td><input type="checkbox" checked=""></td>
            <td><input type="text" class="write" onkeyup="this.value=this.value.replace(/[^\d\.]+/g,'')"
                       value="20" maxlength="10" size="5"></td>
            <td><input type="checkbox"></td>
            <td><input type="text" class="write" onkeyup="this.value=this.value.replace(/[^\d\.]+/g,'')"
                       value="1" maxlength="10" size="5"></td>
            <td><input type="checkbox"></td>
            <td>9172.8</td>
            <td>12230.4</td>
          </tr>
          </tbody>
        </table>
      </div>
      <br>
      <div id="message"></div>
      <input type="button" value="Применить" onclick="writing_trade();"></div>
  </div>
</template>

<script>
export default {
  name: "trading",
  methods: {
    del(item) {
      document.getElementById(item).parentElement.remove()
    },
    ontable(item) {
      document.getElementById('table' + item).style.setProperty('visibility', 'visible')
    },
    offtable(item) {
      document.getElementById('table' + item).style.setProperty('visibility', 'hidden')
    }
  }
}
</script>

<style scoped>

.bd_td {
  outline: 2px solid red;
  outline-offset: -2px
}

.write {
  font-size: 12px;
  border: none;
  height: 31px;
  background: rgb(222, 232, 228);
  outline: 2px solid red;
  outline-offset: 1px;
}

#trading_div {
  display: table;
  margin: 0 auto;
  text-align: center;
}

#trading_div table {
  border: none;
  margin-top: 50px
}

#trading_table {
  width: 750px;
  border-collapse: collapse;
  font-size: 13px;
  text-align: center;
}

#trading_table td, th {
  padding: 3px;
  border: 1px solid black;
  text-align: center;
  width: 80px;
}

#trading_table thead tr:first-child th:first-child {
  border: 1px solid;
  border-bottom-style: hidden;
  width: 50px;
}

#trading_table tbody tr td {
  border: 1px solid;
}

#trading_table tbody tr td:first-child {
  border: none;
  background: white;
}

select {
  width: 120px;
}

.tr_bd {
  background: #dee8e4;
}

.td_del {
  background: none;
  visibility: hidden;
  color: red;
}

</style>