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
          <table :id="exchange_name+'_table'" :class="[isActive(exchange_name) ? 'exchange_lite' : 'hidden']">
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
                <tr :id="exchange_name+coin_name+index" class="hidden" @dblclick="show_graph(exchange_name, coin.name)"
                    title="Двойной клик для отображения графика">
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
          <table :id="exchange_name+'_table2'" class='exchange_lite_table'>
            <template v-for="(coins, coin_name) in exchange">
              <tr @click="show_tr(exchange_name, (exchange_name+coin_name), coins.length)">
                <td>{{ coin_name }}</td>
              </tr>
            </template>
          </table>
        </div>

      </div>
    </template>

    <div id='graph' class="graph_off">
      <a id='graph_href' onclick='this.parentElement.className="graph_off"'>X</a><br>
      <div id="graph_label"></div>
      <div id="chartContainer" style="height: 500px; width: 1000px;"></div>
    </div>

  </div>

</template>

<script>
import router from "@/router";
import CanvasJS from "@/assets/js/canvasjs.stock.min"

export default {
  name: "exchange",
  data() {
    return {
      listexchange: [],
      activelink: 'binance',
      graph: [],
      chart: null,
      chartOptions: {
        theme: "light2",
        charts: [
          {
            axisX: {
              valueFormatString: "MMM-YY",
            },
            axisY: {
              title: "Price"
            },
            data: [
              {
                xValueType: "dateTime",
                type: "line",
                dataPoints: []
              }, {
                // name: "SMA10",
                name: "MACD12",
                showInLegend: true,
                xValueType: "dateTime",
                type: "line",
                dataPoints: []
              }, {
                // name: "SMA30",
                name: "MACD26",
                showInLegend: true,
                xValueType: "dateTime",
                type: "line",
                dataPoints: []
              }
            ]
          },
          {
            height: 80,
            axisX: {
              valueFormatString: "MMM-YY",
            },
            axisY: {
              prefix: "$",
              labelFormatter: function (e) {
                let suffixes = ["", "K", "M", "B"];
                let order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
                if (order > suffixes.length - 1)
                  order = suffixes.length - 1;
                let suffix = suffixes[order];
                return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
              },
              title: "Volume"
            },
            legend: {
              verticalAlign: "top"
            },
            data: [{
              xValueType: "dateTime",
              dataPoints: []
            }]
          },
          {
            height: 100,
            axisX: {
              valueFormatString: "MMM-YY",
            },
            axisY: {
              title: "CMO"
            },
            legend: {
              verticalAlign: "top"
            },
            data: [{
              xValueType: "dateTime",
              type: "line",
              dataPoints: []
            }]
          }
        ],
        navigator: {
          height: 30,
          data: [{
            xValueType: "dateTime",
            dataPoints: []
          }],
          slider: {
            minimum: new Date(new Date().getFullYear(), 0o1, 0o1)
          }
        }
      },
    }
  },
  created() {
    if (!this.$store.state.timeToken)
      router.push('login')
    else
      this.loadlistexchange()
  },
  computed: {
    exchange() {
      let exchange = {}
      for (let [key, value] of Object.entries(this.listexchange)) {
        exchange[key] = {}
        for (let [, valuein] of Object.entries(value)) {
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
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.$store.state.accessToken}`
        }
      }
      this.listexchange = await fetch(`${this.$store.getters.getServerUrl}/exchange`, requestOptions).then(
          response => response.json().then(data => {
            if (response.status === 401)
              router.push({name: 'login'})
            else if (response.status === 200)
              return data
            else
              router.push('error')
          })
      ).catch(() => router.push('error'))
    },
    async getgraph(exchange, coin) {
      let data = {
        coin: coin
      }
      const requestOptions = {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.$store.state.accessToken}`
        },
        body: JSON.stringify(data)
      }
      this.graph = await fetch(`${this.$store.getters.getServerUrl}/graph/${exchange}`, requestOptions).then(
          response => response.json().then(data => {
            if (response.status === 401)
              router.push({name: 'login'})
            else if (response.status === 200)
              return data
            else
              return []
          }))
    },
    getScore(val, p) {
      return parseFloat(val).toFixed(p)
    },
    isActive: function (link) {
      return this.activelink === link
    },
    setActive: function (link) {
      this.activelink = link
      document.getElementById('graph').className = "graph_off"
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
      let all_tr = document.querySelectorAll('[id^="' + this.activelink + '"].visibled')
      for (let i = 0; i < all_tr.length; i++) {
        if (!all_tr[i].id.includes('USDT')) return
      }
      let usdt = document.querySelectorAll('[id^="' + this.activelink + 'USDT"]')
      if (usdt.length === 0) usdt = document.querySelectorAll('[id^="' + this.activelink + 'USD"]')
      for (let j = 0; j < usdt.length; j++) {
        usdt[j].className = "visibled"
      }
    },
    async show_graph(exchange, coin) {
      await this.getgraph(exchange, coin)
      if (this.graph.length === 0 || this.graph[0].length === 0 || this.graph[1].length === 0) return

      console.log(this.graph)

      document.getElementById('graph').className = "graph_on"
      document.getElementById('graph_label').innerHTML = coin

      this.chart = new CanvasJS.StockChart("chartContainer", this.chartOptions)
      this.chartOptions.charts[0].data[0].dataPoints = this.graph[0]
      this.chartOptions.charts[1].data[0].dataPoints = this.graph[1]
      this.chartOptions.charts[2].data[0].dataPoints = this.graph[4]
      this.chartOptions.charts[0].data[1].dataPoints = this.graph[2]
      this.chartOptions.charts[0].data[2].dataPoints = this.graph[3]
      this.chartOptions.navigator.data[0].dataPoints = this.graph[0]
      this.chart.render()

      let menu = document.querySelectorAll('.canvasjs-chart-canvas')
      menu.item(0).remove()
      menu.item(0).remove()
    },
  }
}

</script>

<style scoped>

.graph_on {
  left: 50%;
  transform: translate(-50%, 0);
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  position: absolute;
}

.graph_off {
  display: none;
}

#graph_href {
  color: red;
  float: right;
  margin-top: 4px;
  margin-right: 7px;
}

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
  border: 0 solid; /* нет внешней границы таблицы */
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
  padding-bottom: 10px;
}

.exchange_lite tbody tr td:first-child, .exchange_lite thead tr th:first-child {
  border-left-style: none; /* нет левой границы tbody, нет левой границы thead */
}

.exchange_lite tbody tr td:last-child, .exchange_lite thead tr th:last-child {
  border-right-style: none; /* нет правой границы tbody, нет правой границы thead */
}

.exchange_lite tbody tr td {
  border-bottom-style: none; /* убираем двойные границы в строках */
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