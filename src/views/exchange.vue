<template>
  <div id="exchange_div" class="loading">

    <div id="left" class="left">
      <template v-for="(none , exchange_name) in listexchange">
        <div class="menu2"><br></div>
        <div class="menu">
          <a href="#" @click="setActive(exchange_name)" v-bind:class="[isActive(exchange_name) ? 'active' : '']">
            {{ capitalize(exchange_name) }}
          </a>
        </div>
      </template>
    </div>

    <template v-for="(exchange, exchange_name) in listexchange">
      <div :id="exchange_name" :class="[isActive(exchange_name) ? 'table-visible' : 'table']">
          <span class="last_update">
            Last Update:
            <template v-if="exchange['update']['last_update']">
            {{ (new Date(exchange['update']['last_update'])).toLocaleString() }}
            </template>
            <template v-else>
              None
            </template>
          </span>
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
            <template v-for="(coins, coin_name) in exchange['data']">
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
            <template v-for="(coins, coin_name) in exchange['data']">
              <tr @click="show_tr(exchange_name, (exchange_name+coin_name), coins.length)">
                <td>{{ coin_name }}</td>
              </tr>
            </template>
          </table>
        </div>

      </div>
    </template>

    <div id="popup" class="graph_off">
      <a class="popup_area" @click="closeWindow"></a>
      <div class="graph_on">
        <a id='graph_href' @click="closeWindow">X</a><br>
        <div id="graph_label"></div>
        <div id="chartContainer"></div>
      </div>
    </div>

  </div>
</template>

<script>
import router from "@/router";
import CanvasJS from "@/assets/js/canvasjs.stock.min"
import {mapState} from "vuex";

export default {
  name: "exchange",
  data() {
    return {
      listexchange: [],
      activelink: 'binance',
      graph: {},
      chart: null,
      chartOptions: {
        theme: "light2",
        // backgroundColor: "white",
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
              title: "CMO14"
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
    if (!this.$store.getters.loggedIn)
      router.push('login')
    else {
      this.loadlistexchange()
      if (this.darkTheme)
        this.chartOptions.theme = "dark1"
    }
  },
  computed: mapState(['darkTheme']),
  watch: {
    darkTheme: function () {
      this.chartOptions.theme = "light2"
      if (this.darkTheme)
        this.chartOptions.theme = "dark1"
    }
  },
  updated() {
    this.show_usdt()
  },
  methods: {
    async loadlistexchange() {
      const requestOptions = {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.$store.state.accessToken}`
        }
      }
      this.listexchange = await fetch(`${this.$store.getters.getServerUrl}/exchange`, requestOptions).then(
          response => response.json().then(data => {
            if (response.status === 401)
              router.push({name: 'login'})
            else if (response.status === 200) {
              document.getElementById('exchange_div').classList.remove('loading')
              return data
            } else
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
              return {}
          }))
    },
    closeWindow() {
      document.getElementById('popup').className = 'graph_off'
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
    capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
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
      if (Object.keys(this.graph).length === 0) return

      document.getElementById('popup').className = "popup"
      document.getElementById('graph_label').innerHTML = coin

      this.chart = new CanvasJS.StockChart("chartContainer", this.chartOptions)
      this.chartOptions.charts[0].data[0].dataPoints = this.graph['exchange']['price']
      this.chartOptions.charts[1].data[0].dataPoints = this.graph['exchange']['volume']
      this.chartOptions.charts[2].data[0].dataPoints = this.graph['cmo14']
      this.chartOptions.charts[0].data[1].dataPoints = this.graph['macd12']
      this.chartOptions.charts[0].data[2].dataPoints = this.graph['macd26']
      this.chartOptions.navigator.data[0].dataPoints = this.graph['exchange']['price']
      this.chart.render()

      let menu = document.querySelectorAll('.canvasjs-chart-canvas')
      menu.item(0).remove()
      menu.item(1).remove()

    },
  }
}

</script>

<style scoped>

.last_update {
  position: absolute;
  top: 20px;
  color: var(--always-black);
  font-size: 14px;
}

.graph_on {
  left: 50%;
  top: 25%;
  transform: translate(-50%, 0);
  background: var(--chart-background);
  box-shadow: 0 0 10px var(--black-color);
  position: absolute;
  color: var(--black-color);
}

.graph_off {
  display: none;
}

.popup_area {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
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

a {
  color: var(--black-color);
  text-decoration: none;
}

.menu a:hover {
  color: red;
}

.active {
  color: red;
}

.left { /* Меню бирж */
  position: absolute;
  width: 14%;
  height: 20%;
  float: left;
}

.menu2 {
  line-height: 4px;
}

.table {
  display: none;
}

.table-visible { /* Блок отображения таблицы биржи */
  display: table;
  margin: 0 auto;
  transform: translateX(+50px);
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

.exchange_lite thead, .exchange_lite tbody tr {
  width: 550px;
}

.exchange_lite tbody {
  flex: 1 1 auto;
  display: block;
  overflow-y: auto;
  font-size: 12px;
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
  color: var(--always-black);
  border: 1px green solid;
  width: 80px; /* ширина ячеек */
  padding: 0.2em; /* отступ от границ в ячейках */
}

.exchange_lite thead th {
  border: 1px green solid;
  border-top-style: none; /* нет верхней границы thead */
  border-bottom-style: none;
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
  color: var(--always-black); /* Цвет текста при наведении */
}

.exchange_lite_div { /* DIV, в котором таблица */
  width: 550px;
  height: 700px;
  padding: 50px;
  background: #e8ffdb;
  float: left;
  box-shadow: 0 0 10px var(--black-color);
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

.exchange_lite_table tr:hover td { /* при наведении на BTC/ETH/USDT меняется цвет фона */
  background: #f3bd48;
  box-shadow: 0 0 5px var(--black-color);
}

.visibled {
  visibility: visible;
}

.hidden {
  display: none;
}

#chartContainer {
  width: 1024px;
  height: 550px;
}

@media (max-width: 1280px) {

  #chartContainer {
    width: 850px;
    height: 450px;
  }

}

@media (max-width: 1024px) {

  .exchange_lite_table, .last_update {
    font-size: 11px;
  }

  .menu a {
    font-size: 13px;
  }

  .exchange_lite_div {
    padding: 30px;
  }

  .exchange_lite, .exchange_lite tbody {
    font-size: 11px;
  }

  .exchange_lite_div, .exchange_lite thead, .exchange_lite tbody tr {
    width: 450px;
  }

  #chartContainer {
    width: 680px;
    height: 420px;
  }

}

@media (max-width: 720px) {

  #chartContainer {
    width: 600px;
    height: 400px;
  }

}

</style>