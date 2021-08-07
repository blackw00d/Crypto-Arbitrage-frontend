<template>
  <div id="trading_menu">
    Монета<br>
    <template v-for="(coins, coin_name) in listexchange">
      <select :id="coin_name" @change="selecting_trade(coin_name)">
        <option selected disabled hidden>{{ coin_name }}</option>
        <option v-for="coin in coins" :data-price="coin.price">
          {{ coin.name }}
        </option>
      </select>
    </template>
  </div>
</template>

<script>
import exchange from "../views/exchange";
import router from "@/router";

export default {
  name: "trademenu",
  props: ['exchange', 'list_trading'],
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
  methods: {
    async loadexchange() {
      const requestOptions = {
        headers: {"Content-Type": "application/json", Authorization: `Bearer ${this.$store.state.accessToken}`}
      }
      this.listexchange = await fetch(`${this.$store.getters.getServerUrl}/exchange/${this.exchange}`, requestOptions).then(
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
    selecting_trade(item) {
      let el = document.querySelector('#' + item).selectedOptions[0]
      let pair = el.innerHTML ? el.innerHTML : ''
      let price = el.getAttribute('data-price') ? el.getAttribute('data-price') : 0

      this.list_trading.push({
        exchange: this.exchange,
        id: 0,
        pair: pair,
        price: 0,
        amount: 0,
        last_price: parseFloat(price),
        stoploss: 0,
        trailingstoploss: 0,
        takeprofit: 0,
        trailingtakeprofit: 0,
        trailingtakeprofitprocent: 0,
        active: 0,
        stoplosstrailingvalue: 0,
        takeprofitvalue: 0,
        takeprofittrailingvalue: 0
      })
    },
  }
}

</script>

<style scoped>

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

#trading_menu {
  margin-left: 20px
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