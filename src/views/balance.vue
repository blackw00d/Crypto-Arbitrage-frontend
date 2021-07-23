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
    {{ drawCircle(".box") }}
  </div>
</template>

<script>
import router from "@/router";

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
    if (!this.$store.state.timeToken)
      router.push('login')
    else
      this.loadlistbalance()
  },
  computed: {
    BalanceArray: function () {
      let balance = []
      if (this.listbalance.balance === "0" || this.listbalance.length === 0) {
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
      this.listbalance = await fetch(`${this.$store.getters.getServerUrl}/balance`, requestOptions).then(
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
    getScore(val, p) {
      return parseFloat(val).toFixed(p)
    },
    drawCircle(selector) {
      const boxes = document.querySelectorAll(selector)
      const container = document.querySelector(".container")
      if (!container) return
      const container_width = container.clientWidth
      let radius = container_width / 2 - 50
      let x = radius * 0.9
      let y = radius
      let total = boxes.length
      let alpha = Math.PI * 2 / total
      boxes.forEach(function (box, index) {
        let theta = alpha * index
        let pointx = Math.floor(Math.cos(theta) * radius)
        let pointy = Math.floor(Math.sin(theta) * radius)
        box.style.marginLeft = pointx + x + 'px'
        box.style.marginTop = pointy + y + 'px'
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
  background-position: 0 0;
  background-color: yellow;
  position: absolute;
  background-repeat: no-repeat;
  color: var(--always-black);
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
  background-position: 0 0;
  background-color: greenyellow;
  position: absolute;
  background-repeat: no-repeat;
  border: 10px solid #666666;
  color: var(--always-black);
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

@media (max-width: 1024px) {
  .container {
    width: 600px;
  }

  .box_center {
    width: 120px;
    height: 120px;
    font-size: 12px;
    margin-left: 200px;
    margin-top: 230px;
    border: 7px solid #666666;
  }

  .box {
    width: 80px;
    height: 80px;
    font-size: 11px;
    border: 7px solid #666666;
  }

  .box:hover {
    border: 7px solid #111;
    z-index: 1;
    height: 110px;
    width: 110px;
    font-size: 13px;
    transform: translate(-10px, -10px)
  }
}
</style>