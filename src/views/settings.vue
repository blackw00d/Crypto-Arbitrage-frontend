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
        <tr v-if="userkeys[id+'_password']">
          <td>Password</td>
          <td>
            <input type="text" class="write" :id="id+'_password'" :value="userkeys[id+'_password']" maxlength="70"
                   size="5"
                   @change="sendkeys($event)">
          </td>
        </tr>
        </tbody>
      </template>
      <thead>
      <tr>
        <th colspan="5">
          API ключи без привязки к IP адресу действительны 90 дней<br>
          Для неограниченного срока действия укажите IP адрес:
          <span style="color: #2B3441">{{ this.$store.getters.getServelHost }}</span>
        </th>
      </tr>

      </thead>
    </table>

    <table>
      <thead>
      <tr>
        <th colspan="5">Контакт для связи</th>
      </tr>
      </thead>

      <tbody class="labels">
      <tr onclick="$(this).parents('tbody').next('tbody').toggle()">
        <td colspan="5">
          Telegram
        </td>
      </tr>
      </tbody>
      <tbody class="hide">
      <tr>
        <td>nickname</td>
        <td>
          <input type="text" class="write" id="telegram" :value="userkeys['telegram']" maxlength="20" size="5"
                 @change="sendkeys($event)">
        </td>
      </tr>
      </tbody>
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
        kucoin: 'Kucoin API V2',
        kraken: 'Kraken',
        huobi: 'Huobi',
        okex: 'OKex API V3',
        gateio: 'Gate.io API V4',
        coinex: 'Coinex',
        bitz: 'Bit-Z',
        bibox: 'Bibox'
      },
    }
  },
  created() {
    if (!this.$store.state.timeToken)
      router.push('login')
    else
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
            else if (response.status === 200)
              return data
            else
              router.push('error')
          })
      ).catch(() => router.push('error'))
    },
    async sendkeys(e) {
      let data = {}
      data[e.target.id] = e.target.value
      const requestOptions = {
        method: "patch",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.$store.state.accessToken}`
        },
        body: JSON.stringify(data)
      }
      fetch(`${this.$store.getters.getServerUrl}/user`, requestOptions).then(
          response => {
            if (response.status === 401)
              router.push({name: 'login'})
            else if (response.status === 400)
              router.push('error')
          }
      )
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