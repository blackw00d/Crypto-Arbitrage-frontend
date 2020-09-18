<template>
  <div id="exchange">
    {{exchange}}
    <template v-for="(data, exchange) in exchange">
      <template v-for="(coin, index) in data">
        {{ coin }} {{ index }}<br><br>
      </template>
    </template>
    <!--      <template v-for="(exchange, exchange_name) in all">-->
    <!--        <template v-for="(coin, coin_name) in exchange">-->
    <!--&lt;!&ndash;          <div :id="exchange_name+'_div'" class='exchange_lite_div'>&ndash;&gt;-->
    <!--&lt;!&ndash;            <table :id="exchange_name+'_table'" border='1' class='exchange_lite'>&ndash;&gt;-->
    <!--&lt;!&ndash;              <thead>&ndash;&gt;-->
    <!--&lt;!&ndash;              <tr>&ndash;&gt;-->
    <!--&lt;!&ndash;                <th>Pair</th>&ndash;&gt;-->
    <!--&lt;!&ndash;                <th>Price</th>&ndash;&gt;-->
    <!--&lt;!&ndash;                <th>ASK</th>&ndash;&gt;-->
    <!--&lt;!&ndash;                <th>BID</th>&ndash;&gt;-->
    <!--&lt;!&ndash;                <th>Volume</th>&ndash;&gt;-->
    <!--&lt;!&ndash;              </tr>&ndash;&gt;-->
    <!--&lt;!&ndash;              </thead>&ndash;&gt;-->
    <!--&lt;!&ndash;              <tbody>&ndash;&gt;-->
    <!--             {{exchange}} {{ exchange_name }}<br>-->

    <!--        </template>-->
    <!--      </template>-->
    <!--    </template>-->

  </div>
</template>

<script>
export default {
  name: "exchange",
  data() {
    return {
      listexchange: [],
    }
  },
  created() {
    this.loadlistexchange()
  },
  computed: {
    exchange() {
      let exchange = []
      for (let [key, value] of Object.entries(this.listexchange)) {
        for (let [keyin, valuein] of Object.entries(value)) {
          let coin = valuein.name.split('-')[0]
          if (key in exchange) {
          } else {
            exchange[key] = []
          }
          if (coin in exchange[key]) {
          } else {
            exchange[key][coin] = []
          }
          exchange[key][coin].push({
            name: valuein.name,
            price: valuein.price,
            ask: valuein.ask,
            bid: valuein.bid,
            volume: valuein.volume,
          })
        }
      }
      console.log(exchange)
      return exchange
    }
  },
  methods: {
    async loadlistexchange() {
      this.listexchange = await fetch("http://127.0.0.1:8000/exchange").then(responce => responce.json())
    }
  }
}
</script>

<style scoped>
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

.exchange_lite thead,
.exchange_lite tbody tr {
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
</style>