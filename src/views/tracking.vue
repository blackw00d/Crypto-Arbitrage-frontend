<template>
  <div id="tracking" class="tracking">
    <div id="tracking_div">
      <table>
        <tbody>
        <tr>
          <td>
            Биржа<br>
            <select v-model="selected" id="exchange_select">
              <option>Binance</option>
              <option>Bittrex</option>
              <option>Poloniex</option>
              <option>HitBTC</option>
              <option>Livecoin</option>
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
            <Trackmenu :exchange="selected" @reLoad="loadlisttracking"/>
          </td>
        </tr>
        </tbody>
      </table>
      <br><br>
      <Track :listtracking="listtracking" @reLoad="loadlisttracking"/>
    </div>
  </div>
</template>

<script>
import Trackmenu from "../components/trackmenu";
import Track from "../components/track";
import router from "@/router";

export default {
  name: "tracking",
  components: {Track, Trackmenu},
  data() {
    return {
      selected: 'Binance',
      listtracking: [],
    }
  },
  created() {
    if (!this.$store.state.timeToken) router.push('login')
    this.loadlisttracking()
  },
  methods: {
    async loadlisttracking() {
      const requestOptions = {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.$store.state.accessToken}`
        },
        body: JSON.stringify(this.$store.state.username)
      }
      this.listtracking = await fetch(`${this.$store.getters.getServerUrl}/tracking`, requestOptions).then(responce => responce.json()).catch(() => router.push('error'))
    },
  }
}
</script>

<style scoped>

#tracking_div {
  display: table;
  margin: 0 auto
}

#tracking_div table {
  border: none;
  margin: 50px auto 0px
}

</style>