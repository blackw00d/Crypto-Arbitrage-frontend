<template>
  <div id="listing">
    <table class="coin_table">
      <thead>
      <tr>
        <th>Биржа</th>
        <th>Монета</th>
        <th>Дата добавления</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="coin in listing">
        <td>{{ coin.exchange }}</td>
        <td style='width: 230px'>{{ coin.name }}</td>
        <td>{{ GetDate(coin.date) }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "listing",
  data() {
    return {
      listing: []
    }
  },
  created() {
    this.loadlisting()
  },
  methods: {
    async loadlisting() {
      const requestOptions = {
        headers: {"Content-Type": "application/json", Authorization: `Bearer ${this.$store.state.accessToken}`}
      }
      this.listing = await fetch(`${this.$store.getters.getServerUrl}/listing`, requestOptions).then(responce => responce.json())
    },
    GetDate(date) {
      let str = date.split('-')
      return str[2] + "-" + str[1] + "-" + str[0]
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