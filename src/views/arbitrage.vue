<template>
  <div id="arbitrage">
    <table class="arb_menu_style">
      <tbody>
      <tr>
        <td><a @click="setActive('coin');setActiveTable('')" :class="{ activelink: isActive('coin') }">По
          монетам</a></td>
        <td><a @click="setActive('profit');setActiveTable('')" :class="{ activelink: isActive('profit') }">По
          профиту</a></td>
        <td><a @click="setActive('menu');setActiveTable('')" :class="{ activelink: isActive('menu') }">По
          биржам</a></td>
        <td></td>
      </tr>
      </tbody>
    </table>
    <br><br><br>
    <div id="arb_menu" ref="arb_menu" :class="[isActive('menu') ? 'arb_menu' : 'hidden']">
      <br>
      <table class="arb_menu_table">
        <tbody>
        <tr>
          <td><a @click="setActiveTable('binance_bittrex')">Binance / Bittrex</a></td>
          <td><a @click="setActiveTable('binance_hitbtc')">Binance / HitBTC</a></td>
          <td><a @click="setActiveTable('binance_kucoin')">Binance / Kucoin</a></td>
          <td><a @click="setActiveTable('binance_poloniex')">Binance / Poloniex</a></td>
          <td><a @click="setActiveTable('binance_kraken')">Binance / Kraken</a></td>
          <td><a @click="setActiveTable('binance_okex')">Binance / OKex</a></td>
          <td><a @click="setActiveTable('binance_gateio')">Binance / Gate.io</a></td>
          <td><a @click="setActiveTable('binance_bitz')">Binance / Bit-Z</a></td>
          <td><a @click="setActiveTable('binance_huobi')">Binance / Huobi</a></td>
        </tr>
        <tr>
          <td><a @click="setActiveTable('binance_coinex')">Binance / Coinex</a></td>
          <td><a @click="setActiveTable('binance_bibox')">Binance / Bibox</a></td>

          <td><a @click="setActiveTable('bittrex_hitbtc')">Bittrex / HitBTC</a></td>
          <td><a @click="setActiveTable('bittrex_kucoin')">Bittrex / Kucoin</a></td>
          <td><a @click="setActiveTable('bittrex_poloniex')">Bittrex / Poloniex</a></td>
          <td><a @click="setActiveTable('bittrex_kraken')">Bittrex / Kraken</a></td>
          <td><a @click="setActiveTable('bittrex_okex')">Bittrex / OKex</a></td>
          <td><a @click="setActiveTable('bittrex_gateio')">Bittrex / Gate.io</a></td>
          <td><a @click="setActiveTable('bittrex_bitz')">Bittrex / Bit-Z</a></td>
        </tr>
        <tr>
          <td><a @click="setActiveTable('bittrex_huobi')">Bittrex / Huobi</a></td>
          <td><a @click="setActiveTable('bittrex_coinex')">Bittrex / Coinex</a></td>
          <td><a @click="setActiveTable('bittrex_bibox')">Bittrex / Bibox</a></td>

          <td><a @click="setActiveTable('poloniex_hitbtc')">Poloniex / HitBTC</a></td>
          <td><a @click="setActiveTable('poloniex_kucoin')">Poloniex / Kucoin</a></td>
          <td><a @click="setActiveTable('poloniex_kraken')">Poloniex / Kraken</a></td>
          <td><a @click="setActiveTable('poloniex_okex')">Poloniex / OKex</a></td>
          <td><a @click="setActiveTable('poloniex_gateio')">Poloniex / Gate.io</a></td>
          <td><a @click="setActiveTable('poloniex_bitz')">Poloniex / Bit-Z</a></td>
        </tr>
        <tr>
          <td><a @click="setActiveTable('poloniex_huobi')">Poloniex / Huobi</a></td>
          <td><a @click="setActiveTable('poloniex_coinex')">Poloniex / Coinex</a></td>
          <td><a @click="setActiveTable('poloniex_bibox')">Poloniex / Bibox</a></td>

          <td><a @click="setActiveTable('hitbtc_kucoin')">HitBTC / Kucoin</a></td>
          <td><a @click="setActiveTable('hitbtc_kraken')">HitBTC / Kraken</a></td>
          <td><a @click="setActiveTable('hitbtc_okex')">HitBTC / OKex</a></td>
          <td><a @click="setActiveTable('hitbtc_gateio')">HitBTC / Gate.io</a></td>
          <td><a @click="setActiveTable('hitbtc_bitz')">HitBTC / Bit-Z</a></td>
          <td><a @click="setActiveTable('hitbtc_huobi')">HitBTC / Huobi</a></td>
        </tr>
        <tr>
          <td><a @click="setActiveTable('hitbtc_coinex')">HitBTC / Coinex</a></td>
          <td><a @click="setActiveTable('hitbtc_bibox')">HitBTC / Bibox</a></td>

          <td><a @click="setActiveTable('kucoin_kraken')">Kucoin / Kraken</a></td>
          <td><a @click="setActiveTable('kucoin_okex')">Kucoin / OKex</a></td>
          <td><a @click="setActiveTable('kucoin_gateio')">Kucoin / Gate.io</a></td>
          <td><a @click="setActiveTable('kucoin_bitz')">Kucoin / Bit-Z</a></td>
          <td><a @click="setActiveTable('kucoin_huobi')">Kucoin / Huobi</a></td>
          <td><a @click="setActiveTable('kucoin_coinex')">Kucoin / Coinex</a></td>
          <td><a @click="setActiveTable('kucoin_bibox')">Kucoin / Bibox</a></td>
        </tr>
        <tr>

          <td><a @click="setActiveTable('kraken_okex')">Kraken / OKex</a></td>
          <td><a @click="setActiveTable('kraken_gateio')">Kraken / Gate.io</a></td>
          <td><a @click="setActiveTable('kraken_bitz')">Kraken / Bit-Z</a></td>
          <td><a @click="setActiveTable('kraken_huobi')">Kraken / Huobi</a></td>
          <td><a @click="setActiveTable('kraken_coinex')">Kraken / Coinex</a></td>
          <td><a @click="setActiveTable('kraken_bibox')">Kraken / Bibox</a></td>

          <td><a @click="setActiveTable('okex_gateio')">OKex / Gate.io</a></td>
          <td><a @click="setActiveTable('okex_bitz')">OKex / Bit-Z</a></td>
          <td><a @click="setActiveTable('okex_huobi')">OKex / Huobi</a></td>
        </tr>
        <tr>
          <td><a @click="setActiveTable('okex_coinex')">OKex / Coinex</a></td>
          <td><a @click="setActiveTable('okex_bibox')">OKex / Bibox</a></td>

          <td><a @click="setActiveTable('gateio_bitz')">Gate.io / Bit-Z</a></td>
          <td><a @click="setActiveTable('gateio_huobi')">Gate.io / Huobi</a></td>
          <td><a @click="setActiveTable('gateio_coinex')">Gate.io / Coinex</a></td>
          <td><a @click="setActiveTable('gateio_bibox')">Gate.io / Bibox</a></td>

          <td><a @click="setActiveTable('bitz_huobi')">Bit-Z / Huobi</a></td>
          <td><a @click="setActiveTable('bitz_coinex')">Bit-Z / Coinex</a></td>
          <td><a @click="setActiveTable('bitz_bibox')">Bit-Z / Bibox</a></td>
        </tr>
        <tr>
          <td><a @click="setActiveTable('huobi_coinex')">Huobi / Coinex</a></td>
          <td><a @click="setActiveTable('huobi_bibox')">Huobi / Bibox</a></td>

          <td><a @click="setActiveTable('coinex_bibox')">Coinex / Bibox</a></td>
        </tr>
        </tbody>
      </table>
    </div>
    <br>

    <!--    По Таблицам-->
    <div v-for="(items, index) in this.list_arbitrage" :id="index" :ref="index"
         :class="[isActiveTable(index) ? 'arbitrage_table-visible' : 'hidden']">
      <template v-if="items.length > 0">
        <table cellpadding="2">
          <tr align="center">
            <td>Name</td>
            <td>{{ index.split('_')[0].charAt(0).toUpperCase() + index.split('_')[0].substr(1) }}</td>
            <td>{{ index.split('_')[1].charAt(0).toUpperCase() + index.split('_')[1].substr(1) }}</td>
            <td>Profit,%</td>
          </tr>
          <tr v-for="item in items">
            <td>{{ item.name }}</td>
            <template v-if="item.price_a > item.price_b">
              <td style='background-color: #FF6666;'>
                <a :href="item.link_a" title='Продать' target='_blank'>{{ getScore(item.price_a, 10) }}</a>
              </td>
              <td style='background-color: #00FF00;'>
                <a :href="item.link_b" title='Купить' target='_blank'>{{ getScore(item.price_b, 10) }}</a>
              </td>
            </template>
            <template v-else>
              <td style='background-color: #00FF00;'>
                <a :href="item.link_a" title='Купить' target='_blank'>{{ getScore(item.price_a, 10) }}</a>
              </td>
              <td style='background-color: #FF6666;'>
                <a :href="item.link_a" title='Продать' target='_blank'>{{ getScore(item.price_b, 10) }}</a>
              </td>
            </template>
            <td>{{ getScore(item.profit, 2) }}</td>
          </tr>
        </table>
      </template>
      <template v-else>
        No Arbitrage Data
      </template>
    </div>

    <!--    По Монетам -->
    <table border="1" id="table_exchange" ref="table_exchange"
           :class="[isActive('coin') ? 'table_exchange' : 'hidden']"
           align="center">
      <thead>
      <tr>
        <th>Coin</th>
        <th>Buy Price</th>
        <th>Sell Price</th>
        <th>Profit, %</th>
      </tr>
      </thead>
      <tbody>
      <template v-for="coin in coinArray">
        <tr v-if="coin.index===0">
          <td v-if="coin.amount > 1" :id="coin.name+'_td'" class='td_icon' @mouseover="signs(coin.name)"
              @mouseout="sign_out(coin.name)">
            <a :id="coin.name+'_on'" :class="coin.name+'_on'" @click="activate(coin.name,coin.amount)">
              {{ coin.name }}
            </a>
          </td>
          <td v-else :id="coin.name+'_td'">
            {{ coin.name }}
          </td>
          <template v-if="coin.price_a > coin.price_b">
            <td style='background-color: #00FF00;'>
              <a :href="coin.link_b"
                 :title='coin.exchange_b.charAt(0).toUpperCase() + coin.exchange_b.substr(1)'
                 target='_blank'>
                {{ coin.price_b > 1 ? getScore(coin.price_b, 1) : getScore(coin.price_b, 10) }}
              </a>
            </td>
            <td style='background-color: #FF6666;'>
              <a :href="coin.link_a"
                 :title='coin.exchange_a.charAt(0).toUpperCase() + coin.exchange_a.substr(1)'
                 target='_blank'>
                {{ coin.price_a > 1 ? getScore(coin.price_a, 1) : getScore(coin.price_a, 10) }}
              </a>
            </td>
          </template>
          <template v-else>
            <td style='background-color: #00FF00;'>
              <a :href="coin.link_a"
                 :title='coin.exchange_a.charAt(0).toUpperCase() + coin.exchange_a.substr(1)'
                 target='_blank'>
                {{ coin.price_a > 1 ? getScore(coin.price_a, 1) : getScore(coin.price_a, 10) }}
              </a>
            </td>
            <td style='background-color: #FF6666;'>
              <a :href="coin.link_b"
                 :title='coin.exchange_b.charAt(0).toUpperCase() + coin.exchange_b.substr(1)'
                 target='_blank'>
                {{ coin.price_b > 1 ? getScore(coin.price_b, 1) : getScore(coin.price_b, 10) }}
              </a>
            </td>
          </template>
          <td>{{ getScore(coin.profit, 2) }}</td>
        <tr v-else :id="coin.name+coin.index" class="hidden">
          <template v-if="coin.price_a > coin.price_b">
            <td style='background-color: #00FF00;'>
              <a :href="coin.link_b"
                 :title='coin.exchange_b.charAt(0).toUpperCase() + coin.exchange_b.substr(1)'
                 target='_blank'>
                {{ coin.price_b > 1 ? getScore(coin.price_b, 1) : getScore(coin.price_b, 10) }}
              </a>
            </td>
            <td style='background-color: #FF6666;'>
              <a :href="coin.link_a"
                 :title='coin.exchange_a.charAt(0).toUpperCase() + coin.exchange_a.substr(1)'
                 target='_blank'>
                {{ coin.price_a > 1 ? getScore(coin.price_a, 1) : getScore(coin.price_a, 10) }}
              </a>
            </td>
          </template>
          <template v-else>
            <td style='background-color: #00FF00;'>
              <a :href="coin.link_a"
                 :title='coin.exchange_a.charAt(0).toUpperCase() + coin.exchange_a.substr(1)'
                 target='_blank'>
                {{ coin.price_a > 1 ? getScore(coin.price_a, 1) : getScore(coin.price_a, 10) }}
              </a>
            </td>
            <td style='background-color: #FF6666;'>
              <a :href="coin.link_b"
                 :title='coin.exchange_b.charAt(0).toUpperCase() + coin.exchange_b.substr(1)'
                 target='_blank'>
                {{ coin.price_b > 1 ? getScore(coin.price_b, 1) : getScore(coin.price_b, 10) }}
              </a>
            </td>
          </template>
          <td>{{ getScore(coin.profit, 2) }}</td>
        </tr>
      </template>
      </tbody>
    </table>

    <!--    По Профиту -->
    <table border="1" id="table_profit" ref="table_profit" :class="[isActive('profit') ? 'table_profit' : 'hidden']"
           align="center">
      <thead>
      <tr>
        <th>Coin</th>
        <th>Buy Price</th>
        <th>Sell Price</th>
        <th>Profit, %</th>
      </tr>
      </thead>
      <tbody>
      <template v-for="profit in this.profit_array">
        <tr>
          <td>{{ profit.name }}</td>
          <template v-if="profit.price_a > profit.price_b">
            <td style='background-color: #00FF00;'>
              <a :href="profit.link_b" :title='profit.exchange_b.charAt(0).toUpperCase() + profit.exchange_b.substr(1)'
                 target='_blank'>
                {{ profit.price_b > 1 ? getScore(profit.price_b, 1) : getScore(profit.price_b, 10) }}
              </a>
            </td>
            <td style='background-color: #FF6666;'>
              <a :href="profit.link_a" :title='profit.exchange_a.charAt(0).toUpperCase() + profit.exchange_a.substr(1)'
                 target='_blank'>
                {{ profit.price_a > 1 ? getScore(profit.price_a, 1) : getScore(profit.price_a, 10) }}
              </a>
            </td>
          </template>
          <template v-else>
            <td style='background-color: #00FF00;'>
              <a :href="profit.link_a" :title='profit.exchange_a.charAt(0).toUpperCase() + profit.exchange_a.substr(1)'
                 target='_blank'>
                {{ profit.price_a > 1 ? getScore(profit.price_a, 1) : getScore(profit.price_a, 10) }}
              </a>
            </td>
            <td style='background-color: #FF6666;'>
              <a :href="profit.link_b" :title='profit.exchange_b.charAt(0).toUpperCase() + profit.exchange_b.substr(1)'
                 target='_blank'>
                {{ profit.price_b > 1 ? getScore(profit.price_b, 1) : getScore(profit.price_b, 10) }}
              </a>
            </td>
          </template>
          <td>{{ getScore(profit.profit, 2) }}</td>
        </tr>
      </template>
      </tbody>
    </table>

  </div>
</template>

<script>

import router from "@/router";

export default {
  name: "arbitrage",
  data() {
    return {
      activelink: 'profit',
      activetable: '',
      arbitrage_data: [],
      list_arbitrage: [],
      coin_array: [],
      profit_array: [],
    }
  },
  created() {
    if (!this.$store.state.timeToken)
      router.push('login')
    else
      this.loadlistarbitrage()
  },
  computed: {
    coinArray: function () {
      const coinarr = this.coin_array
      if (coinarr.length === 0) return []
      let index = 0
      for (let i = 1; i < coinarr.length; i += 1) {
        if (coinarr[i].name === coinarr[i - 1].name) {
          index += 1
          coinarr[i].index = index
        } else {
          coinarr[i - 1 - index].amount = index + 1
          index = 0
        }
      }
      if (coinarr[coinarr.length - 1].name === coinarr[coinarr.length - 2].name) {
        coinarr[coinarr.length - 1 - index].amount = index + 1
      }
      return coinarr
    },
  },
  methods: {
    async loadlistarbitrage() {
      const requestOptions = {
        headers: {"Content-Type": "application/json", Authorization: `Bearer ${this.$store.state.accessToken}`}
      }
      this.arbitrage_data = await fetch(`${this.$store.getters.getServerUrl}/arbitrage`, requestOptions).then(
          response => response.json().then(data => {
            if (response.status === 401)
              router.push({name: 'login'})
            else if (response.status === 200)
              return data
            else
              router.push('error')
          })
      ).catch(() => router.push('error'))
      this.list_arbitrage = this.arbitrage_data[0]
      this.profit_array = this.arbitrage_data[1]
      this.coin_array = this.arbitrage_data[2]
    },
    getScore(val, p) {
      return parseFloat(val).toFixed(p)
    },
    isActive: function (link) {
      return this.activelink === link
    },
    setActive: function (link) {
      this.activelink = link
    },
    isActiveTable: function (table) {
      return this.activetable === table
    },
    setActiveTable: function (table) {
      this.activetable = table
    },
    activate(text, item) {
      let b = document.getElementById(text + "_td")
      for (let i = 1; i < item; i++) {
        let a = document.getElementById(text + i)
        if (a.className === "visible") {
          a.className = "hidden";
          b.setAttribute("rowspan", "1")
        } else {
          a.className = "visible";
          b.setAttribute("rowspan", item)
        }
      }
      b.style.backgroundImage = "";
    },
    signs(text) {
      let a = document.getElementById(text + 1)
      let b = document.getElementById(text + "_td")
      if (a.className === "visible") {
        b.style.backgroundImage = "url(" + require("../assets/img/minus.png") + ")"
      } else {
        b.style.backgroundImage = "url(" + require("../assets/img/plus.png") + ")"
      }
    },
    sign_out(text) {
      let b = document.getElementById(text + "_td")
      b.style.backgroundImage = ""
    }
  }
}
</script>

<style scoped>

a {
  color: black;
  text-decoration: none;
}

.visible {
  display: table-row;
}

.hidden {
  display: none;
}

.arb_menu_table td:hover {
  background: #f3bd48; /* Цвет фона при наведении */
  color: #fff; /* Цвет текста при наведении */
}

.activetable {
  background: #f3bd48; /* Цвет фона при наведении */
  color: #fff; /* Цвет текста при наведении */
}

.arb_menu_style {
  float: right;
}

.arb_menu_style a:hover {
  color: red;
}

.activelink {
  color: red;
}

.arb_menu {
  display: block;
}

.arb_menu_style td {
  border: none;
  width: 120px;
}

.arb_menu_table {
  border-collapse: separate;
  border-spacing: 5px;
  font-size: 13px;
  margin: auto;
}

.arb_menu_table td {
  padding: 5px 3px; /* Поля вокруг содержимого таблицы */
  border: 1px solid black; /* Параметры рамки */
  text-align: center;
  border-radius: 5px;
  height: 20px;
}

.td_icon {
  background-repeat: no-repeat;
  background-size: 10px 10px;
  background-position: left 15% center;
}

.table_exchange {
  border-collapse: collapse;
  font-size: 13px;
  text-align: center;
}

.table_exchange td {
  width: 111px;
}

.table_profit {
  border-collapse: collapse;
  font-size: 13px;
  text-align: center;
}

.table_profit td {
  width: 111px;
}

.arbitrage_table-visible { /* Таблицы арбитража */
  display: table;
  margin: 0 auto;
}

.arbitrage_table-visible table {
  border-collapse: collapse;
  font-size: 13px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.arbitrage_table-visible td {
  border: 1px solid black;
}

</style>