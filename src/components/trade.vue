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
          <td :id="'table'+index" class="td_del" @click="del(index)">удалить</td>
          <td>{{ list.exchange }}</td>
          <td>{{ list.pair }}</td>
          <td><input type="text" class="write"
                     onkeyup="this.value=this.value.replace(/[^\d.]+/g,'')"
                     v-model.number.lazy="list.amount" maxlength="10" size="5" @change=trackChange(index)></td>
          <td><input type="text" class="write"
                     onkeyup="this.value=this.value.replace(/[^\d.]+/g,'')"
                     v-model.number.lazy="list.price" maxlength="10" size="5" @change=trackChange(index)></td>
          <td>{{ list.last_price }}</td>
          <td><input type="text" class="write" onkeyup="this.value=this.value.replace(/[^\d.]+/g,'')"
                     v-model.number.lazy="list.stoploss" maxlength="10" size="5" @change=trackChange(index)>
          </td>
          <td>
            <label class="control control--checkbox">
              <input type="checkbox" v-model.number="list.trailingstoploss" :true-value="1" :false-value="0">
              <div class="control__indicator"></div>
            </label>
          </td>
          <td><input type="text" class="write" onkeyup="this.value=this.value.replace(/[^\d.]+/g,'')"
                     v-model.number.lazy=list.takeprofit maxlength="10" size="5" @change=trackChange(index)></td>
          <td>
            <label class="control control--checkbox">
              <input type="checkbox" v-model.number="list.trailingtakeprofit" :true-value="1" :false-value="0">
              <div class="control__indicator"></div>
            </label>
          </td>
          <td><input type="text" class="write" onkeyup="this.value=this.value.replace(/[^\d.]+/g,'')"
                     v-model.number.lazy=list.trailingtakeprofitprocent maxlength="10" size="5"
                     @change=trackChange(index)></td>
          <td>
            <label class="control control--checkbox">
              <input type="checkbox" v-model.number="list.active" :true-value="1" :false-value="0">
              <div class="control__indicator"></div>
            </label>
          </td>
          <td>
            {{ list.stoplossvalue > 1 ? getScore(list.stoplossvalue, 2) : getScore(list.stoplossvalue, 10) }}
          </td>
          <td>
            {{ list.takeprofitvalue > 1 ? getScore(list.takeprofitvalue, 2) : getScore(list.takeprofitvalue, 10) }}
          </td>
        </tr>
        </tbody>
      </table>
    </div>

    <br>

    <template v-if="listtrading.length > 0">
      <div id="message"></div>
      <input type="button" class="button" value="Применить" @click="write_table">
    </template>
    <template v-else>
      No Trading Data
    </template>

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
  methods: {
    async sendlisttrading(data) {
      const requestOptions = {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.$store.state.accessToken}`
        },
        body: JSON.stringify(data)
      }
      fetch(`${this.$store.getters.getServerUrl}/trading/add`, requestOptions).then(
          response => {
            if (response.status === 401)
              router.push({name: 'login'})
            else if (response.status === 200) {
              document.querySelector('#message').innerHTML = "Данные обновлены"
              this.$emit('reLoad')
            } else
              document.querySelector('#message').innerHTML = "Ошибка создания"
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
              document.querySelector('#message').innerHTML = "Данные удалены"
            else
              document.querySelector('#message').innerHTML = "Ошибка удаления"
          }
      )
    },
    del(index) {
      let id = this.listtrading[index].id
      if (id > 0) {
        document.querySelector('#message').innerHTML = ''
        this.dellisttrading(id)
      }
      this.listtrading.splice(index, 1)
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
      let error = {
        price_error: '',
        amount_error: '',
        err: false
      }
      this.listtrading.map(function (trade) {
        if (trade.price === 0 || trade.price === '') {
          error.price_error = "Цена не может быть 0<br>"
          error.err = true
        }
        if (trade.amount === 0 || trade.amount === '') {
          error.amount_error = "Количество не может быть 0<br>"
          error.err = true
        }
      })

      document.querySelector('#message').innerHTML = error.price_error + error.amount_error
      if (!error.err) this.sendlisttrading(this.listtrading)
    },
    trackChange(index) {
      this.listtrading[index].stoploss = isNaN(parseInt(this.listtrading[index].stoploss)) ? 0 : this.listtrading[index].stoploss
      this.listtrading[index].takeprofit = isNaN(parseInt(this.listtrading[index].takeprofit)) ? 0 : this.listtrading[index].takeprofit
      this.listtrading[index].trailingtakeprofitprocent = isNaN(parseInt(this.listtrading[index].trailingtakeprofitprocent)) ? 0 : this.listtrading[index].trailingtakeprofitprocent
      this.listtrading[index].amount = isNaN(parseInt(this.listtrading[index].amount)) ? 0 : this.listtrading[index].amount
      this.listtrading[index].price = isNaN(parseInt(this.listtrading[index].price)) ? 0 : this.listtrading[index].price
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
  width: var(--width-td-th);
}

#trading_table {
  border-collapse: separate;
  border-spacing: 0 var(--td-spacing);
  margin-right: calc(var(--width-td-th) + var(--td-spacing) * 2);
}

#trading_table tbody tr {
  padding-bottom: 2px;
}

#trading_table tbody tr td:nth-child(2) {
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
}

#trading_table tbody tr td:nth-child(14) {
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
}

#trading_table td, th {
  padding: var(--td-spacing);
  text-align: center;
  width: var(--width-td-th);
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

#trading_table tbody tr:hover td input {
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

@media (max-width: 1280px) {

  #trading_table td {
    font-size: 10px;
  }

  #trading_table th {
    font-size: 12px;
  }

  .write {
    font-size: 10px;
  }

}

</style>