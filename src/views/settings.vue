<template>
  <div>
    <table>
      <thead>
      <tr>
        <th colspan="5">Данные для доступа к биржам</th>
      </tr>
      </thead>

      <template v-for="(exchange, id) in exchanges">
        <tbody class="labels">
        <tr onclick="$(this).parents('tbody').next('tbody').toggle()">
          <td colspan="5">
            {{ exchange }}
          </td>
        </tr>
        </tbody>
        <tbody class="hide">
        <tr>
          <td>API Key</td>
          <td>
            <input type="text" class="write" :id="id+'_key'" :value="userkeys[id+'_key']" maxlength="70" size="5"
                   @change="sendkeys($event)">
          </td>
        </tr>
        <tr>
          <td>Secret Key</td>
          <td>
            <input type="text" class="write" :id="id+'_secret'" :value="userkeys[id+'_secret']" maxlength="70" size="5"
                   @change="sendkeys($event)">
          </td>
        </tr>
        </tbody>
      </template>

    </table>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "settings",
  data() {
    return {
      userkeys: [],
      exchanges: {
        binance: 'Binance',
        bittrex: 'Bittrex',
        poloniex: 'Poloniex',
        hitbtc: 'HitBTC',
        kucoin: 'Kucoin',
        kraken: 'Kraken',
        huobi: 'Huobi',
        okex: 'OKex',
        gateio: 'Gate.io',
        coinex: 'Coinex',
        bitz: 'Bit-Z',
        bibox: 'Bibox'
      },
    }
  },
  created() {
    if (!this.$store.state.timeToken) router.push('login')
    this.loadkeys()
  },
  methods: {
    async loadkeys() {
      const requestOptions = {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.$store.state.accessToken}`
        },
        body: JSON.stringify(this.$store.state.username)
      }
      this.userkeys = await fetch(`${this.$store.getters.getServerUrl}/user`, requestOptions).then(
          response => response.json().then(data => {
            if (response.status === 401)
              router.push({name: 'login'})
            return data
          })
      ).catch(() => router.push('error'))
    },
    async sendkeys(e) {
      let data = {
        user: this.$store.state.username
      }
      data[e.target.id] = e.target.value
      const requestOptions = {
        method: "patch",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.$store.state.accessToken}`
        },
        body: JSON.stringify(data)
      }
      fetch(`${this.$store.getters.getServerUrl}/user`, requestOptions).then()
    },
  },
}
</script>

<style scoped>
table {
  width: 750px;
  border-collapse: collapse;
  margin: 50px auto;
}

th {
  background: #0084D4;
  color: white;
  font-weight: bold;
}

td, th {
  padding: 10px;
  border: 1px solid #ccc;
  text-align: left;
  font-size: 13px;
}

td:not(:first-child) {
  padding: 1px 1px 1px 3px;
}

tbody tr td:first-child {
  width: 20%;
}

.labels tr td {
  background-color: #2B3441;
  font-weight: bold;
  color: #ffffff;
}

.labels tr td, thead tr th {
  font-size: 16px;
}

.label tr td label {
  display: block;
}

.hide {
  display: none;
}

.write {
  font-size: 13px;
  border: none;
  height: 32px;
  width: 99%
}

</style>