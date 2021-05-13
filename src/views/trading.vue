<template>
  <div id="trading">
    <div id="trading_div">
      <table>
        <tbody>
        <tr>
          <form></form>
          <td>
            Биржа<br>
            <select v-model="selected" id="exchange_select_trade">
              <option>Binance</option>
              <option>Bittrex</option>
              <option>Poloniex</option>
              <option>HitBTC</option>
              <option>Kucoin</option>
              <option>Kraken</option>
              <option>Huobi</option>
              <option>OKex</option>
              <option>Gate.io</option>
              <option>Coinex</option>
              <option>Bit-Z</option>
              <option>Bibox</option>
            </select></td>
          <td>
            <TradeMenu :exchange="selected" @reLoad="loadlisttrading"/>
          </td>
        </tr>
        </tbody>
      </table>
      <br><br>
      <Trade :listtrading="listtrading"/>
    </div>
  </div>
</template>

<script>
import Trade from "../components/trade";
import TradeMenu from "../components/trademenu";
import router from "@/router";

export default {
  name: "trading",
  components: {Trade, TradeMenu},
  data() {
    return {
      selected: 'Binance',
      listtrading: [],
    }
  },
  created() {
    if (!this.$store.state.timeToken)
      router.push('login')
    else
      this.loadlisttrading()
  },
  methods: {
    async loadlisttrading() {
      const requestOptions = {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.$store.state.accessToken}`
        },
        body: JSON.stringify(this.$store.state.username)
      }
      this.listtrading = await fetch(`${this.$store.getters.getServerUrl}/trading`, requestOptions).then(
          response => response.json().then(data => {
            if (response.status === 401)
              router.push({name: 'login'})
            else if (response.status === 200)
              return data
            else
              router.push('error')
          })
      ).catch(() => router.push('error'))
    }
  }
}
</script>

<style scoped>

#trading_div {
  display: table;
  margin: 0 auto
}

#trading_div table {
  border: none;
  margin: 50px auto 0
}

</style>