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
        <tr v-for="(list, index) in listtrading" @mouseover="ontable(index)" @mouseout="offtable(index)">
          <td :id="'table'+index" class="td_del" @click="del('table'+index)" style="visibility: hidden">удалить</td>
          <td>{{ list.exchange }}</td>
          <td>{{ list.pair }}</td>
          <td><input type="text" class="write"
                     onkeyup="this.value=this.value.replace(/[^\d.]+/g,'')"
                     :value="list.amount" maxlength="10" size="5"></td>
          <td><input type="text" class="write"
                     onkeyup="this.value=this.value.replace(/[^\d.]+/g,'')"
                     :value="list.price" maxlength="10" size="5"></td>
          <td>{{ list.price_now }}</td>
          <td><input type="text" class="write" onkeyup="this.value=this.value.replace(/[^\d.]+/g,'')"
                     :value=list.stoploss maxlength="10" size="5"></td>
          <td>
            <label class="control control--checkbox">
              <input type="checkbox" :checked="list.trailingstoploss">
              <div class="control__indicator"></div>
            </label>
          </td>
          <td><input type="text" class="write" onkeyup="this.value=this.value.replace(/[^\d.]+/g,'')"
                     :value=list.takeprofit maxlength="10" size="5"></td>
          <td>
            <label class="control control--checkbox">
              <input type="checkbox" :checked="list.trailingtakeprofit">
              <div class="control__indicator"></div>
            </label>
          </td>
          <td><input type="text" class="write" onkeyup="this.value=this.value.replace(/[^\d.]+/g,'')"
                     :value=list.trailingtakeprofitprocent maxlength="10" size="5"></td>
          <td>
            <label class="control control--checkbox">
              <input type="checkbox" :checked="list.active">
              <div class="control__indicator"></div>
            </label>
          </td>
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
    <input type="button" class="button" value="Применить" @click="write_table()">

  </div>
</template>

<script>

import router from "@/router";

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
      fetch(`${this.$store.getters.getServerUrl}/trading/change/${data["id"]}`, requestOptions).then(
          response => {
            if (response.status === 401)
              router.push({name: 'login'})
            else if (response.status === 400)
              $('#message').append("<br>Ошибка изменения<br>")
          }
      )
    },
    async dellisttrading(id) {
      const requestOptions = {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.$store.state.accessToken}`
        },
      }
      fetch(`${this.$store.getters.getServerUrl}/trading/change/${id}`, requestOptions).then(
          response => {
            if (response.status === 401)
              router.push({name: 'login'})
            else if (response.status === 204)
              this.$emit('reLoad')
            else
              $('#message').append("<br>Ошибка удаления<br>")
          }
      )
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

      let tr = document.querySelectorAll('#trading_table tbody tr')
      tr.forEach((tr_el, i) => {
        data[i] = []
        let td = tr_el.querySelectorAll('td')
        td.forEach((td_el, j) => {
          let input = td_el.querySelector('input')
          if (input) {
            if (input.value === 'on') {
              data[i][j] = input.checked ? 1 : 0
            } else {
              data[i][j] = parseFloat(input.value)
            }
          } else {
            data[i][j] = !isNaN(parseFloat(td_el.innerText)) ? parseFloat(td_el.innerText) : td_el.innerText
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
      $('#message').append("Данные обновлены")
    }
  }
}

</script>

<style scoped>

.write {
  font-size: 12px;
  border: none;
  height: 31px;
  background: var(--track-trade-color);
  outline: 2px solid red;
  outline-offset: 1px;
  width: 80px
}

#trading_table {
  border-collapse: separate;
  border-spacing: 0 10px;
}

#trading_table tbody tr {
  padding-bottom: 2px;
}

#trading_table tbody tr td:nth-child(2){
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
}

#trading_table tbody tr td:nth-child(14){
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
}

#trading_table td, th {
  padding: 10px;
  text-align: center;
  width: 80px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

#trading_table th {
  font-weight: 640;
  font-size: 14px;
}

#trading_table td {
  font-weight: 400;
  font-size: 12px;
}

#trading_table thead th:first-child {
  width: 50px;
}

#trading_table tbody tr td:first-child {
  border: none;
  background: var(--white-color);
}

#trading_table tbody tr {
  background: var(--track-trade-color);
}

#trading_table tbody tr:hover {
  background: var(--track-trade-hover);
}

#trading_table tbody tr:hover td input{
  background: var(--track-trade-hover);
}

select {
  width: 120px;
}

.td_del {
  visibility: hidden;
  color: red;
}

.control {
  display: inline-flex;
}

.control input {
  z-index: -1;
  opacity: 0;
}

.control__indicator {
  position: absolute;
  height: 15px;
  width: 15px;
  border-radius: 4px;
  border: 2px solid #a7a7a7;
  background: transparent;
}

.control:hover input ~ .control__indicator {
  border: 2px solid #007bff;
}

.control input:checked ~ .control__indicator {
  border: 2px solid #007bff;
  background: #007bff;
}

.control__indicator:after {
  content: url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20height%3D%2218px%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2218px%22%20fill%3D%22%23FFFFFF%22%3E%3Cpath%20d%3D%22M0%200h24v24H0V0z%22%20fill%3D%22none%22/%3E%3Cpath%20d%3D%22M9%2016.2L4.8%2012l-1.4%201.4L9%2019%2021%207l-1.4-1.4L9%2016.2z%22/%3E%3C/svg%3E);
  position: absolute;
  display: none;
}

.control input:checked ~ .control__indicator:after {
  display: block;
  color: #fff;
}

.control--checkbox .control__indicator:after {
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -45%);
  -ms-transform: translate(-50%, -45%);
  transform: translate(-50%, -45%);
}

.button {
  border-radius: 5px;
  display: inline-block;
  background-color: #0084D4;
  border: none;
  color: var(--always-white);
  text-decoration: none;
  line-height: 2.2;
  font-size: 15px !important;
  margin: 15px 0 5px 0;
  padding: 0 20px;
}

.button:hover {
  color: #111111;
}

</style>