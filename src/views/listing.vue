<template>
  <div id="listing">
    <table class="coin_table">
      <thead>
      <tr>
        <th @click='sort("exchange")'>
          {{ sortBy === 'exchange' ? (sortOrder === 1 ? '&#129045;' : '&#129047;') : '' }} Биржа
        </th>
        <th @click='sort("name")'>
          {{ sortBy === 'name' ? (sortOrder === 1 ? '&#129045;' : '&#129047;') : '' }} Монета
        </th>
        <th @click='sort("date")'>
          {{ sortBy === 'date' ? (sortOrder === 1 ? '&#129045;' : '&#129047;') : '' }} Дата добавления
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="coin in sortedList">
        <td>{{ coin.exchange }}</td>
        <td style='width: 230px'>{{ coin.name }}</td>
        <td>{{ getDate(coin.date) }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "listing",
  data() {
    return {
      sortBy: "date",
      sortOrder: -1,
      listing: []
    }
  },
  created() {
    if (!this.$store.state.timeToken)
      router.push('login')
    else
      this.loadlisting()
  },
  computed: {
    sortedList() {
      return this.listing
          .sort((a, b) => {
            if (a[this.sortBy] >= b[this.sortBy]) {
              return this.sortOrder
            }
            return -this.sortOrder
          })
    }
  },
  methods: {
    async loadlisting() {
      const requestOptions = {
        headers: {"Content-Type": "application/json", Authorization: `Bearer ${this.$store.state.accessToken}`}
      }
      this.listing = await fetch(`${this.$store.getters.getServerUrl}/listing`, requestOptions).then(
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
    getDate(date) {
      let str = date.split('-')
      return str[2] + "-" + str[1] + "-" + str[0]
    },
    sort(sortBy) {
      if (this.sortBy === sortBy)
        this.sortOrder = -this.sortOrder
      else
        this.sortBy = sortBy
    }
  }
}
</script>

<style scoped>

#listing {
  height: 1000px;
  overflow-y: scroll
}

#listing::-webkit-scrollbar {
  width: 0;
}

#listing {
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
}

.coin_table {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  width: 500px;
  border-collapse: collapse; /* Убираем двойные линии между ячейками */
  font-size: 13px;
  margin: auto;

}

.coin_table td, th {
  padding: 3px; /* Поля вокруг содержимого таблицы */
  border: 1px solid black; /* Параметры рамки */
  text-align: center;
  width: 80px;
}

</style>