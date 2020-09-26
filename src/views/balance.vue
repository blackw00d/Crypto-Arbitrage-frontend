<template>
  <div id="balances">
    <div class="container">
      <div v-for="coin in BalanceArray" class="box">
        {{ coin[0] }}<br>Amount: {{ getScore(coin[1][0], 1) }}<br>BTC: {{ getScore(coin[1][1], 7) }}<br>USD:
        {{ getScore(coin[1][2], 2) }}
      </div>
      <div class="box_center">
        TOTAL<br><br>BTC: {{ getScore(totalbtc, 7) }}<br>USD: {{ getScore(totalusd, 2) }}<br>
      </div>
    </div>
    {{ this.drawCircle(".box", 50, 350, 90, 310, 350) }}
  </div>
</template>

<script>
export default {
  name: "balance",
  data() {
    return {
      listbalance: [],
      totalbtc: 0,
      totalusd: 0
    }
  },
  created() {
    this.loadlistbalance()
  },
  computed: {
    BalanceArray: function () {
      let balance = []
      if (typeof this.listbalance.balance === 'undefined' || this.listbalance.length === 0) {
        return balance
      }
      balance = this.listbalance.balance.split(",").map(pair => pair.split(":"))
      balance.forEach((val) => {
        val[1] = val[1].split("-")
      })
      this.totalbtc = this.listbalance.totalbtc
      this.totalusd = this.listbalance.totalusd
      return balance
    },
  },
  methods: {
    async loadlistbalance() {
      const requestOptions = {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.$store.state.accessToken}`
        },
        body: JSON.stringify(this.$store.state.username)
      }
      this.listbalance = await fetch(`${this.$store.getters.getServerUrl}/balance`, requestOptions).then(responce => responce.json())
    },
    getScore(val, p) {
      return parseFloat(val).toFixed(p)
    },
    drawCircle(selector, center, radius, angle, x, y) {
      let total = $(selector).length
      let alpha = Math.PI * 2 / total
      $(selector).each(function (index) {
        let theta = alpha * index
        let pointx = Math.floor(Math.cos(theta) * radius)
        var pointy = Math.floor(Math.sin(theta) * radius)
        $(this).css('margin-left', pointx + x + 'px')
        $(this).css('margin-top', pointy + y + 'px')
      })
    }
  }
}
</script>

<style scoped>

.container {
  width: 800px;
  margin: 0 auto;
}

.box {
  -moz-border-radius: 300px;
  -webkit-border-radius: 300px;
  background-position: 0px 0px;
  -moz-box-shadow: 1px 1px 1px #FFFFFF;
  -webkit-box-shadow: 1px 1px 1px #FFFFFF;
  background-color: yellow;
  position: absolute;
  background-repeat: no-repeat;
  border: 10px solid #666666;
  float: left;
  height: 120px;
  margin: 18px;
  width: 120px;
  padding: 5px;
  font-size: 13px;
  text-align: center;
  display: -webkit-box;
  -webkit-box-pack: center;
  -webkit-box-align: center;
}

.box_center {
  -moz-border-radius: 300px;
  -webkit-border-radius: 300px;
  background-position: 0px 0px;
  -moz-box-shadow: 1px 1px 1px #FFFFFF;
  -webkit-box-shadow: 1px 1px 1px #FFFFFF;
  background-color: greenyellow;
  position: absolute;
  background-repeat: no-repeat;
  border: 10px solid #666666;
  height: 180px;
  width: 180px;
  padding: 5px;
  font-size: 15px;
  text-align: center;
  display: -webkit-box;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  margin-left: 280px;
  margin-top: 330px;
}

.box:hover {
  border: 10px solid #111;
  z-index: 1;
  height: 150px;
  width: 150px;
  font-size: 15px;
  transform: translate(-20px, -20px)
}
</style>