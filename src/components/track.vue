<template>
  <div style="text-align: center">

    <div>
      <table id="tracking_table">
        <thead>
        <tr>
          <th style='visibility: hidden'></th>
          <th rowspan='2'>Exchange</th>
          <th rowspan='2'>Pair</th>
          <th colspan='4'>Price Tracking</th>
          <th colspan='4'>Volume Tracking</th>
        </tr>
        <tr>
          <th style='visibility: hidden'></th>
          <th>Price</th>
          <th>Price value change</th>
          <th>Price value procent</th>
          <th>Price active</th>
          <th>Volume</th>
          <th>Volume value change</th>
          <th>Volume value procent</th>
          <th>Volume active</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(list, index) in listtracking" class="tr_bd" @mouseover="ontable(index)" @mouseout="offtable(index)">
          <td :id="'table'+index" class="td_del" @click="del('table'+index)" style="visibility: hidden">удалить</td>
          <td>{{ list.exchange }}</td>
          <td>{{ list.pair }}</td>
          <td>{{ list.price }}</td>
          <td><input type="text" class="write"
                     onkeyup="this.value=this.value.replace(/[^\d\.]+/g,'')"
                     :value="list.pricechangevalue" maxlength="10" size="5"></td>
          <td><input type="text" class="write"
                     onkeyup="this.value=this.value.replace(/[^\d\.]+/g,'')"
                     :value="list.pricechangeprocent" maxlength="10" size="5"></td>
          <td><input type="checkbox" :checked="list.priceactive"></td>
          <td>{{ list.volume }}</td>
          <td><input type="text" class="write" onkeyup="this.value=this.value.replace(/[^\d\.]+/g,'')"
                     :value=list.volumechangevalue maxlength="10" size="5"></td>
          <td><input type="text" class="write" onkeyup="this.value=this.value.replace(/[^\d\.]+/g,'')"
                     :value=list.volumechangeprocent maxlength="10" size="5"></td>
          <td><input type="checkbox" :checked="list.volumeactive"></td>
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
import tracking from "../views/tracking";

export default {
  name: "trade",
  props: ['listtracking'],
  data() {
    return {}
  },
  created() {
  },
  updated() {
  },
  methods: {
    async sendlisttracking(arr) {
      let data = {
        pricechangevalue: arr[3],
        pricechangeprocent: arr[4],
        priceactive: arr[5],
        volumechangevalue: arr[7],
        volumechangeprocent: arr[8],
        volumeactive: arr[9],
        id: arr[10]
      }
      const requestOptions = {
        method: "patch",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.$store.state.accessToken}`
        },
        body: JSON.stringify(data)
      }
      fetch(`${this.$store.getters.getServerUrl}/tracking/change/${data["id"]}`, requestOptions).then(responce => {
        responce.json()
        tracking.$emit('reLoad')
      })
    },
    async dellisttracking(id) {
      const requestOptions = {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.$store.state.accessToken}`
        },
      }
      fetch(`${this.$store.getters.getServerUrl}/tracking/change/${id}`, requestOptions).then(responce => {
        responce.json()
      })
    },
    del(item) {
      let data = document.getElementById(item).parentElement.children[11].innerHTML
      this.dellisttracking(data)
      document.getElementById(item).parentElement.remove()
    },
    ontable(item) {
      document.getElementById('table' + item).style.setProperty('visibility', 'visible')
    },
    offtable(item) {
      document.getElementById('table' + item).style.setProperty('visibility', 'hidden')
    },
    write_table() {
      let data = []
      let out = false
      $('#tracking_table tbody tr').each(function (i) {
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
      })
      $('#message').html("")
      for (let i = 0; i < data.length; i++)
        this.sendlisttracking(data[i])
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

#tracking_table {
  width: 750px;
  border-collapse: collapse;
  font-size: 13px;
  text-align: center;
}

#tracking_table td, th {
  padding: 3px;
  border: 1px solid black;
  text-align: center;
  width: 80px;
}

#tracking_table thead th:first-child {
  border: 1px solid;
  border-bottom-style: hidden;
  width: 50px;
}

#tracking_table tbody tr td {
  border: 1px solid;
}

#tracking_table tbody tr td:first-child {
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