<template>
  <div id="tracking_menu">
    Монета<br>
    <table style="border: solid 0">
      <tr>
        <template v-for="(coins, coin_name) in pairs">
          <td>
            <select :id="coin_name" @change="selecting_track(coin_name)">
              <option selected>{{ coin_name }}</option>
              <option v-for="coin in coins" :data-price="coin.price" :data-volume="coin.volume">{{ coin.name }}</option>
            </select>
          </td>
        </template>
      </tr>
    </table>
  </div>
</template>

<script>
import exchange from "../views/exchange";
import router from "@/router";

export default {
  name: "trackmenu",
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
          price: this.listexchange[i].price,
          volume: parseFloat(this.listexchange[i].volume).toFixed(0)
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
    async sendexchange(arr) {
      let data = {
        exchange: arr[0],
        pair: arr[1],
        price: arr[2],
        volume: arr[3],
      }
      const requestOptions = {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.$store.state.accessToken}`
        },
        body: JSON.stringify(data)
      }
      fetch(`${this.$store.getters.getServerUrl}/tracking/add`, requestOptions).then(
          response => {
            if (response.status === 401)
              router.push({name: 'login'})
            else if (response.status === 201)
              this.$emit('reLoad')
            else
              $('#message').append("<br>Ошибка создания<br>")
          }
      ).catch(() => router.push('error'))
    },
    selecting_track(item) {
      let el = $("#" + item).children('option:selected')
      let pair = el.text() ? el.text() : ''
      let price = el.attr('data-price') ? el.attr('data-price') : 0
      let volume = el.attr('data-volume') ? el.attr('data-volume') : 0
      this.sendexchange([this.exchange, pair, price, volume])
    },
  }
}

</script>

<style scoped>

select {
  width: 120px;
}

#tracking_menu {
  margin-left: 20px
}

</style>