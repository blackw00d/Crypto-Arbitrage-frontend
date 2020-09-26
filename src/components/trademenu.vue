<template>
  <div id="trading_menu">
    Монета<br>
    <table style="border: solid 0px">
      <tr>
        <template v-for="(coins, coin_name) in pairs">
          <td>
            <select :id="coin_name" @change="selecting_trade(coin_name)">
              <option selected>{{ coin_name }}</option>
              <option v-for="coin in coins">{{ coin.name }}</option>
            </select>
          </td>
        </template>
      </tr>
    </table>
  </div>
</template>

<script>
import exchange from "../views/exchange";

export default {
  name: "trademenu",
  props: ['exchange'],
  watch: {
    'exchange'() {
      this.loadexchange()
    }
  },
  data() {
    return {
      listexchange: [],
    }
  },
  created() {
    this.loadexchange()
  },
  updated() {
  },
  computed: {
    pairs() {
      let exchange = {}
      for (let i = 0; i < this.listexchange.length; i++) {
        let coin = this.listexchange[i].name.split('-')[0]
        if (!(coin in exchange)) exchange[coin] = []
        exchange[coin].push({
          name: this.listexchange[i].name,
          price: this.listexchange[i].price
        })
      }
      return exchange
    }
  },
  methods: {
    async loadexchange() {
      const requestOptions = {
        headers: {"Content-Type": "application/json", Authorization: `Bearer ${this.$store.state.accessToken}`}
      }
      this.listexchange = await fetch(`${this.$store.getters.getServerUrl}/exchange/${this.exchange}`, requestOptions).then(responce => responce.json())
    },
    async sendexchange(arr) {
      let data = {
        user: this.$store.state.username,
        exchange: arr[0],
        pair: arr[1],
        amount: 0,
        price: 0,
        stoploss: 0,
        trailingstoploss: 0,
        takeprofit: 0,
        trailingtakeprofit: 0,
        trailingtakeprofitprocent: 0,
        active: 0,
        stoplossvalue: 0,
        stoplosstrailingvalue: 0,
        takeprofitvalue: 0,
        takeprofittrailingvalue: 0
      }
      const requestOptions = {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.$store.state.accessToken}`
        },
        body: JSON.stringify(data)
      }
      fetch(`${this.$store.getters.getServerUrl}/trading/add`, requestOptions).then(responce => {
        responce.json()
        this.$emit('reLoad')
      })
    },
    selecting_trade(item) {
      let el = document.getElementById(item)
      let option = el.options[el.selectedIndex].text
      this.sendexchange([this.exchange, option])
    },
  }
}

</script>

<style scoped>

select {
  width: 120px
}

#trading_menu {
  margin-left: 20px
}

</style>