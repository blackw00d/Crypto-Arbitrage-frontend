<template>
  <div id="trading">
    <div id="trading_div">
      <table>
        <tbody>
        <tr>
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
            </select>
          </td>
          <td>
            <TradeMenu :exchange="selected" :list_trading=listtrading @reLoad="loadlisttrading"/>
          </td>
        </tr>
        </tbody>
      </table>
      <br><br>
      <Trade :listtrading="listtrading" @reLoad="loadlisttrading"/>
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
    if (!this.$store.getters.loggedIn)
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

select {
  width: 120px;
  padding: .2rem 1rem;
  margin: 0.1rem;
  border-radius: 1rem;
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'), linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
  background-repeat: no-repeat, repeat;
  background-position: right .5rem top 50%;
  background-size: .6rem auto, 100%;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
}

select:hover, select:focus {
  box-shadow: 0 0 1px 1px rgba(59, 153, 252, .7);
}

select::-webkit-scrollbar {
  display: none;
}

select option {
  background-color: var(--white-color);
  color: var(--black-color);
}

#trading_div table {
  border: none;
  margin: 50px auto 0
}

@media (max-width: 1024px) {

  select {
    width: 100px;
    font-size: 12px;
  }

}

@media (max-width: 720px) {

  select {
    width: 90px;
    font-size: 11px;
  }

}

</style>