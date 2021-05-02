<template>
  <div style="text-align: center">

    <div>
      <table id="trading_table">
        <thead>
        <tr>
          <th rowspan="2" style="visibility: hidden"></th>
          <th rowspan="2">Exchange</th>
          <th rowspan="2">Pair</th>
          <th rowspan="2">Amount</th>
          <th rowspan="2">Buy Price</th>
          <th rowspan="2">Now Price</th>
          <th rowspan="2">Stop Loss, %</th>
          <th rowspan="2">Trailing Stop Loss</th>
          <th rowspan="2">Take Profit, %</th>
          <th colspan="2">Trailing Take Profit</th>
          <th rowspan="2">Active</th>
          <th rowspan="2">Stop Loss Value</th>
          <th rowspan="2">Take Profit Value</th>
        </tr>
        <tr>
          <th>Active</th>
          <th>Trailing Procent, %</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(list, index) in listtrading" class="tr_bd" @mouseover="ontable(index)" @mouseout="offtable(index)">
          <td :id="'table'+index" class="td_del" @click="del('table'+index)" style="visibility: hidden">удалить</td>
          <td>{{ list.exchange }}</td>
          <td>{{ list.pair }}</td>
          <td><input type="text" class="write"
                     onkeyup="this.value=this.value.replace(/[^\d\.]+/g,'')"
                     :value="list.amount" maxlength="10" size="5"></td>
          <td><input type="text" class="write"
                     onkeyup="this.value=this.value.replace(/[^\d\.]+/g,'')"
                     :value="list.price" maxlength="10" size="5"></td>
          <td>{{ list.price_now }}</td>
          <td><input type="text" class="write" onkeyup="this.value=this.value.replace(/[^\d\.]+/g,'')"
                     :value=list.stoploss maxlength="10" size="5"></td>
          <td><input type="checkbox" :checked="list.trailingstoploss"></td>
          <td><input type="text" class="write" onkeyup="this.value=this.value.replace(/[^\d\.]+/g,'')"
                     :value=list.takeprofit maxlength="10" size="5"></td>
          <td><input type="checkbox" :checked="list.trailingtakeprofit"></td>
          <td><input type="text" class="write" onkeyup="this.value=this.value.replace(/[^\d\.]+/g,'')"
                     :value=list.trailingtakeprofitprocent maxlength="10" size="5"></td>
          <td><input type="checkbox" :checked="list.active"></td>
          <td>
            {{ list.stoplossvalue > 1 ? getScore(list.stoplossvalue, 2) : getScore(list.stoplossvalue, 10) }}
          </td>
          <td>
            {{ list.takeprofitvalue > 1 ? getScore(list.takeprofitvalue, 2) : getScore(list.takeprofitvalue, 10) }}
          </td>
          <td style="display: none">{{ list.id }}</td>
        </tr>
        </tbody>
      </table>
    </div>

    <br>

    <div id="message"></div>
    <input type="button" value="Применить" @click="write_table()">

  </div>
</template>

<script>

export default {
  name: "trade",
  props: ['listtrading'],
  data() {
    return {}
  },
  created() {
  },
  updated() {
  },
  methods: {
    async sendlisttrading(arr) {
      let data = {
        amount: arr[2],
        price: arr[3],
        last_price: arr[4],
        stoploss: arr[5],
        trailingstoploss: arr[6],
        takeprofit: arr[7],
        trailingtakeprofit: arr[8],
        trailingtakeprofitprocent: arr[9],
        active: arr[10],
        stoplossvalue: arr[3] * (1 - arr[5] / 100),
        stoplosstrailingvalue: arr[3] * (1 - arr[5] / 100),
        takeprofitvalue: arr[3] * (1 + arr[7] / 100),
        takeprofittrailingvalue: 0,
        id: arr[13]
      }
      const requestOptions = {
        method: "patch",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.$store.state.accessToken}`
        },
        body: JSON.stringify(data)
      }
      fetch(`${this.$store.getters.getServerUrl}/trading/change/${data["id"]}`, requestOptions).then()
    },
    async dellisttrading(id) {
      const requestOptions = {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.$store.state.accessToken}`
        },
      }
      fetch(`${this.$store.getters.getServerUrl}/trading/change/${id}`, requestOptions).then()
    },
    del(item) {
      let data = document.getElementById(item).parentElement.children[14].innerHTML
      this.dellisttrading(data)
      document.getElementById(item).parentElement.remove()
    },
    ontable(item) {
      document.getElementById('table' + item).style.setProperty('visibility', 'visible')
    },
    offtable(item) {
      document.getElementById('table' + item).style.setProperty('visibility', 'hidden')
    },
    getScore(val, p) {
      return parseFloat(val).toFixed(p)
    },
    write_table() {
      let data = []
      let out = false
      $('#trading_table tbody tr').each(function (i) {
        data[i] = []
        $(this).children('td').each(function (ii) {
          if ($(this).children().is('input')) {
            if ($(this).children('input').val() === 'on') {
              if ($(this).children('input').prop('checked'))
                data[i][ii] = 1
              else
                data[i][ii] = 0
            } else
              data[i][ii] = parseFloat($(this).children('input').val())
          } else {
            if (!isNaN(parseFloat($(this).text())))
              data[i][ii] = parseFloat($(this).text())
            else
              data[i][ii] = $(this).text()
          }
        })
        data[i].splice(0, 1)
        if (data[i][2] === 0) {
          $('#message').html("Количество не может быть ноль")
          out = true
          return
        }
        if (data[i][3] === 0) {
          $('#message').html("Цена не может быть 0")
          out = true
        }
      })
      if (out === true) return []
      $('#message').html("")
      for (let i = 0; i < data.length; i++)
        this.sendlisttrading(data[i])
      $('#message').html("Данные обновлены")
    }
  }
}

</script>

<style scoped>

.bd_td {
  outline: 2px solid red;
  outline-offset: -2px
}

.write {
  font-size: 12px;
  border: none;
  height: 31px;
  background: rgb(222, 232, 228);
  outline: 2px solid red;
  outline-offset: 1px;
  width: 80px
}

#trading_table {
  width: 750px;
  border-collapse: collapse;
  font-size: 13px;
  text-align: center;
}

#trading_table td, th {
  padding: 3px;
  border: 1px solid black;
  text-align: center;
  width: 80px;
}

#trading_table thead th:first-child {
  border: 1px solid;
  border-bottom-style: hidden;
  width: 50px;
}

#trading_table tbody tr td {
  border: 1px solid;
}

#trading_table tbody tr td:first-child {
  border: none;
  background: white;
}

select {
  width: 120px;
}

.tr_bd {
  background: #dee8e4;
}

.td_del {
  background: none;
  visibility: hidden;
  color: red;
}

</style>