<template>
  <div>

    <!-- ТАБЛИЦА КЛЮЧИ ОТ БИРЖ   -->
    <table>
      <thead>
      <tr>
        <th colspan="5">Данные для доступа к биржам</th>
      </tr>
      </thead>
      <template v-for="(exchange, id) in exchanges">
        <tbody class="labels">
        <tr onclick="$(this).parents('tbody').next('tbody').toggle('')">
          <td colspan="5">
            {{ exchange }}
          </td>
        </tr>
        </tbody>
        <tbody class="hide">
        <tr>
          <td>API Key</td>
          <td>
            <input class="write" :id="id+'_key'" :value="userkeys[id+'_key']" maxlength="70" size="5"
                   @change="send_keys($event)" type="password" @focusin="focusin" @focusout="focusout">
          </td>
        </tr>
        <tr>
          <td>Secret Key</td>
          <td>
            <input class="write" :id="id+'_secret'" :value="userkeys[id+'_secret']" maxlength="70" size="5"
                   @change="send_keys($event)" type="password" @focusin="focusin" @focusout="focusout">
          </td>
        </tr>
        <tr v-if="userkeys[id+'_password']">
          <td>Password</td>
          <td>
            <input class="write" :id="id+'_password'" :value="userkeys[id+'_password']" maxlength="70"
                   size="5" @change="send_keys($event)" type="password" @focusin="focusin" @focusout="focusout">
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

    <!-- ТАБЛИЦА TELEGRAM   -->
    <table>
      <thead>
      <tr>
        <th colspan="5">Контакт для связи</th>
      </tr>
      </thead>
      <tbody class="labels">
      <tr onclick="$(this).parents('tbody').next('tbody').toggle('')">
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
                 @change="send_keys($event)">
        </td>
      </tr>
      </tbody>
    </table>

    <!-- ТАБЛИЦА АККАУНТ   -->
    <table class="center">
      <thead>
      <tr>
        <th colspan="5">
          Аккаунт
          <a href="javascript:void(0)" onclick="$(this).parents('thead').next('tbody').toggle('')"
             class="buy">Оплатить</a>
        </th>
      </tr>
      </thead>
      <tbody class="hide">
      <tr>
        <td colspan="5">
          Срок в месяцах :
          <select id="month" name="month">
            <option value="1" :id=this.prices.try>1 месяц | {{ this.prices.try }} $</option>
            <option value="2" :id="this.prices.begginer">3 месяца | {{ this.prices.begginer }} $</option>
            <option value="3" :id="this.prices.trader">6 месяцев | {{ this.prices.trader }} $</option>
          </select>
          <br>
          <a href="javascript:void(0)" @click="buy" class="button">Продлить</a>
        </td>
      </tr>
      </tbody>
      <tbody class="labels">
      <tr>
        <td> Статус</td>
        <td> Осталось дней</td>
        <td> Оплачен до</td>
      </tr>
      </tbody>
      <tbody>
      <tr>
        <td v-if="this.account.days_to_deadline > 0"><span style="color: forestgreen"> Активен </span></td>
        <td v-else><span style="color: red"> Не активен </span></td>
        <td>{{ this.account.days_to_deadline }}</td>
        <td>{{ (new Date(this.account.deadline)).toLocaleDateString() }}</td>
      </tr>
      </tbody>
    </table>

    <!-- ТАБЛИЦА ПЛАТЕЖИ   -->
    <table class="center">
      <thead>
      <tr>
        <th colspan="5">Платежи</th>
      </tr>
      </thead>
      <tbody class="labels">
      <tr>
        <td>
          Дата платежа
        </td>
        <td>
          Оплачено, $
        </td>
        <td>
          Дней оплачено
        </td>
      </tr>
      </tbody>
      <template v-if="this.payments && this.payments.length > 0">
        <tbody v-for="payment in this.payments">
        <tr>
          <td>
            {{ (new Date(payment.pay_time)).toLocaleDateString() }}
          </td>
          <td>
            {{ payment.money }}
          </td>
          <td>
            {{ payment.pay_days }}
          </td>
        </tr>
        </tbody>
      </template>
      <template v-else>
        <tbody class="labels">
        <tr>
          <td colspan="5">
            Нет платежей
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
      account: [],
      payments: [],
      prices: {},
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
    else {
      this.load_keys()
      this.load_account()
      this.load_payments()
      this.load_prices()
    }
  },
  computed: {},
  methods: {
    focusin(e) {
      e.target.type = 'text'
    },
    focusout(e) {
      e.target.type = 'password'
    },
    async load_keys() {
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
    async load_account() {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.$store.state.accessToken}`
        }
      }
      this.account = await fetch(`${this.$store.getters.getServerUrl}/account`, requestOptions).then(
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
    async load_payments() {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.$store.state.accessToken}`
        }
      }
      this.payments = await fetch(`${this.$store.getters.getServerUrl}/payments`, requestOptions).then(
          response => response.json().then(data => {
            if (response.status === 401)
              router.push({name: 'login'})
            else if (response.status === 200) {
              return data
            } else
              router.push('error')
          })
      ).catch(() => router.push('error'))
    },
    async load_prices() {
      const requestOptions = {
        method: "GET"
      }
      this.prices = await fetch(`${this.$store.getters.getServerUrl}/prices`, requestOptions).then(
          response => response.json().then(data => {
            if (response.status === 401)
              router.push({name: 'login'})
            else if (response.status === 200)
              if (Object.keys(data).length === 3)
                return data
              else
                return {
                  'try': 20,
                  'begginer': 55,
                  'trader': 100
                }
            else
              router.push('error')
          })
      ).catch(() => router.push('error'))
    },
    async send_keys(e) {
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
    async buy() {
      let select = document.getElementById('month')
      let data = {'money': select.options[select.selectedIndex].id}
      const requestOptions = {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.$store.state.accessToken}`
        },
        body: JSON.stringify(data)
      }
      fetch(`${this.$store.getters.getServerUrl}/pay`, requestOptions).then(
          response => {
            if (response.status === 401)
              router.push({name: 'login'})
            else if (response.status === 400)
              router.push('error')
            else {
              this.load_account()
              this.load_payments()
            }
          }
      )
    },
  },
}
</script>

<style scoped>

.button {
  border-radius: 5px;
  display: inline-block;
  background-color: #0084D4;
  color: white;
  text-decoration: none;
  line-height: 2.2;
  font-size: 15px;
  margin: 15px 0 5px 0;
  padding: 0 20px;
}

.button:hover {
  color: #111111;
}

.center tbody td {
  text-align: center;
}

.center select {
  border: 1px solid rgb(210, 217, 219);
  border-radius: 3px;
  height: 30px;
  color: #606060;
  padding: 0 15px;
}

.buy {
  float: right;
  text-decoration: none;
  color: white;
}

.buy:hover {
  color: #111111;
}

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

@media (max-width: 1024px) {
  table {
    width: 600px;
  }

  .labels tr td, table thead tr th, td, th {
    font-size: 11px;
  }

  .write, .center select, .button {
    font-size: 11px;
  }
}

@media (max-width: 720px) {
  table {
    width: 500px;
  }

  .labels tr td, table thead tr th, td, th {
    font-size: 10px;
  }

  .write, .center select, .button {
    font-size: 10px;
  }
}

</style>