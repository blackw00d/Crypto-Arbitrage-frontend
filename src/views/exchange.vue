<template>

  <div>
    <div id="left" class="left">
      <div class="menu2"><br></div>
      <div class="menu"><a href="#" @click="setActive('binance')" v-bind:class="[isActive('binance') ? 'active' : '']">Binance</a>
      </div>
      <div class="menu2"><br></div>
      <div class="menu"><a href="#" @click="setActive('bittrex')" v-bind:class="[isActive('bittrex') ? 'active' : '']">Bittrex</a>
      </div>
      <div class="menu2"><br></div>
      <div class="menu"><a href="#" @click="setActive('poloniex')"
                           v-bind:class="[isActive('poloniex') ? 'active' : '']">Poloniex</a></div>
      <div class="menu2"><br></div>
      <div class="menu"><a href="#" @click="setActive('hitbtc')" v-bind:class="[isActive('hitbtc') ? 'active' : '']">HitBTC</a>
      </div>
      <div class="menu2"><br></div>
      <div class="menu"><a href="#" @click="setActive('livecoin')"
                           v-bind:class="[isActive('livecoin') ? 'active' : '']">Livecoin</a></div>
      <div class="menu2"><br></div>
      <div class="menu"><a href="#" @click="setActive('kucoin')" v-bind:class="[isActive('kucoin') ? 'active' : '']">Kucoin</a>
      </div>
      <div class="menu2"><br></div>
      <div class="menu"><a href="#" @click="setActive('kraken')" v-bind:class="[isActive('kraken') ? 'active' : '']">Kraken</a>
      </div>
      <div class="menu2"><br></div>
      <div class="menu"><a href="#" @click="setActive('huobi')"
                           v-bind:class="[isActive('huobi') ? 'active' : '']">Huobi</a></div>
      <div class="menu2"><br></div>
      <div class="menu"><a href="#" @click="setActive('okex')"
                           v-bind:class="[isActive('okex') ? 'active' : '']">OKex</a></div>
      <div class="menu2"><br></div>
      <div class="menu"><a href="#" @click="setActive('gateio')" v-bind:class="[isActive('gateio') ? 'active' : '']">Gate.io</a>
      </div>
      <div class="menu2"><br></div>
      <div class="menu"><a href="#" @click="setActive('coinex')" v-bind:class="[isActive('coinex') ? 'active' : '']">Coinex</a>
      </div>
      <div class="menu2"><br></div>
      <div class="menu"><a href="#" @click="setActive('bitz')"
                           v-bind:class="[isActive('bitz') ? 'active' : '']">Bit-Z</a></div>
      <div class="menu2"><br></div>
      <div class="menu"><a href="#" @click="setActive('bibox')"
                           v-bind:class="[isActive('bibox') ? 'active' : '']">Bibox</a></div>
    </div>

    <template v-for="(exchange, exchange_name) in exchange">
      <div :id="exchange_name" :class="[isActive(exchange_name) ? 'table-visible' : 'table']">
        <div :id="exchange_name+'_div'" :class="[isActive(exchange_name) ? 'exchange_lite_div' : 'hidden']">
          <table :id="exchange_name+'_table'" border='1'
                 :class="[isActive(exchange_name) ? 'exchange_lite' : 'hidden']">
            <thead>
            <tr>
              <th>Pair</th>
              <th>Price</th>
              <th>ASK</th>
              <th>BID</th>
              <th>Volume</th>
            </tr>
            </thead>
            <tbody>
            <template v-for="(coins, coin_name) in exchange">
              <template v-for="(coin, index) in coins">
                <tr :id="exchange_name+coin_name+index" class="hidden">
                  <td>{{ coin.name }}</td>
                  <td>{{ coin.price < 1 ? getScore(coin.price, 9) : getScore(coin.price, 2) }}</td>
                  <td>{{ coin.ask < 1 ? getScore(coin.ask, 9) : getScore(coin.ask, 2) }}</td>
                  <td>{{ coin.bid < 1 ? getScore(coin.bid, 9) : getScore(coin.bid, 2) }}</td>
                  <td v-if="coin.volume > 0">{{ getScore(coin.volume, 2) }}</td>
                  <td v-else></td>
                </tr>
              </template>
            </template>
            </tbody>
          </table>
        </div>

        <div :id="exchange_name+'_div2'" class='exchange_lite_div2'>
          <table :id="exchange_name+'_table2'" border='0' class='exchange_lite_table'>
            <template v-for="(coins, coin_name) in exchange">
              <tr @click="show_tr(exchange_name, (exchange_name+coin_name), coins.length)">
                <td>{{ coin_name }}</td>
              </tr>
            </template>
          </table>
        </div>

      </div>
    </template>
  </div>

</template>

<script>
export default {
  name: "exchange",
  data() {
    return {
      listexchange: [],
      activelink: 'binance',
    }
  },
  created() {
    this.loadlistexchange()
  },
  computed: {
    exchange() {
      let exchange = {}
      for (let [key, value] of Object.entries(this.listexchange)) {
        exchange[key] = {}
        for (let [keyin, valuein] of Object.entries(value)) {
          let coin = valuein.name.split('-')[0]
          if (!(coin in exchange[key])) exchange[key][coin] = []
          exchange[key][coin].push({
            name: valuein.name,
            price: valuein.price,
            ask: valuein.ask,
            bid: valuein.bid,
            volume: valuein.volume,
          })
        }
      }
      return exchange
    }
  },
  updated() {
    this.show_usdt()
  },
  methods: {
    async loadlistexchange() {
      this.listexchange = await fetch(`${this.$store.getters.getServerUrl}/exchange`).then(responce => responce.json())
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
    show_tr(exchange, coin, count) {
      let all_tr = document.getElementById(exchange + '_table').getElementsByTagName("tbody")[0].rows
      for (let i = 0; i < all_tr.length; i++) {
        all_tr[i].className = "hidden"
      }
      for (let j = 0; j < count; j++) {
        document.getElementById(coin + j).className = "visibled"
      }
    },
    show_usdt() {
      let usdt = document.querySelectorAll('[id^="' + this.activelink + 'USDT"]')
      for (let j = 0; j < usdt.length; j++) {
        usdt[j].className = "visibled"
      }
    },
  }
}
</script>

<style scoped>

div {
  text-align: center;
}

a { /* Цвет ссылок при наведении */
  color: black;
  text-decoration: none;
}

.active { /* класс посещенной ссылки */
  color: red;
}

.left { /* Меню бирж */
  position: absolute;
  width: 14%;
  height: 20%;
  float: left;
}

.menu {
  /*background: #CCCCFF;*/
}

.menu:hover {
  /*background: #CC99FF; !* Цвет фона при наведении *!*/
}

.menu2 {
  line-height: 4px;
}

.table {
  display: none;
}

.table-visible { /* Блок отображения таблицы биржи */
  position: absolute;
  left: 33%;
  padding: 10px;
}


.exchange_lite {
  font-size: 13px;
  border: 0px solid; /* нет внешней границы таблицы */
  border-collapse: collapse; /* нет двойных линий */
  text-align: center; /* выравнивание текста в ячейках */
  table-layout: auto; /*  Неподвижная шапка НАЧАЛО  */
  display: flex;
  flex-flow: column;
  max-height: 100%;
}

.exchange_lite thead, tbody tr {
  display: table;
  table-layout: fixed;
}

.exchange_lite thead {
  width: calc(567px - 17px);
}

.exchange_lite tbody {
  flex: 1 1 auto;
  display: block;
  overflow-y: auto;
  font-size: 12px;
}

.exchange_lite tbody tr {
  width: 550px;
}

/*  Неподвижная шапка КОНЕЦ  */
/*  Скрываем скролл в tbody таблице биржи  */
.exchange_lite tbody::-webkit-scrollbar {
  width: 0;
}

/* хром, сафари */
.exchange_lite tbody {
  -ms-overflow-style: none;
}

/* ie 10+ */
.exchange_lite tbody {
  overflow: -moz-scrollbars-none;
}

/* фф (свойство больше не работает, других способов тоже нет)*/
.exchange_lite td, th {
  border: 1px green solid;
  width: 80px; /* ширина ячеек */
  padding: 0.2em; /* отступ от границ в ячейках */
}

.exchange_lite thead th {
  border: 1px green solid;
  border-top-style: none; /* нет верхней границы thead */
}

.exchange_lite tbody tr td:first-child {
  border-left-style: none; /* нет левой границы tbody */
}

.exchange_lite thead tr th:first-child {
  border-left-style: none; /* нет левой границы thead */
}

.exchange_lite tbody tr td:last-child {
  border-right-style: none; /* нет правой границы tbody */
}

.exchange_lite thead tr th:last-child {
  border-right-style: none; /* нет правой границы tbody */
}

.exchange_lite tbody tr:hover {
  background: #f3bd48; /* Цвет фона при наведении */
  color: #fff; /* Цвет текста при наведении */
}

.exchange_lite_div { /* DIV, в котором таблица */
  width: 550px;
  height: 700px;
  padding: 50px;
  background: #e8ffdb;
  float: left;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.exchange_lite_div2 { /* DIV, в котором ссылки пар */
  float: left;
  margin-top: 70px;
  margin-left: 4px;
}

.exchange_lite_table { /* таблица со сслыками на пары*/
  width: 100px;
  font-size: 13px;
  float: left;
  text-align: center;
}

.exchange_lite_table tr:hover { /* при наведении на BTC/ETH/USDT меняется цвет фона */
  background: #e8ffdb;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.visibled {
  visibility: visible;
}

.hidden {
  display: none;
}

</style>