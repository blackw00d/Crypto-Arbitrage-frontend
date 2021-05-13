<template>
  <div class="home">

    <section class="bg-6">
      <div class="row">
        <div class="col-5">
          <h3 class="section-title">Exchange's Data</h3>
          Данные о цене, объеме торгов и размере стакана<br>
          Данные обновляются каждые 20 минут
        </div>
        <div class="col-6">
          <img src="../assets/img/home/exchange.png">
        </div>
      </div>
    </section>

    <section class="bg-6 gray">
      <div class="row">
        <div class="col-5">
          <h3 class="section-title">Price and Volume Chart</h3>
          Подробный график с отображением цены и объема криптовалюты<br>
          Настраеваемый диапазон отображения, данные напрямую с биржи
        </div>
        <div class="col-6">
          <img src="../assets/img/home/chart.png">
        </div>
      </div>
    </section>

    <section class="bg-6">
      <div class="row">
        <div class="col-5">
          <h3 class="section-title">Tracking Assistant</h3>
          Контроль за изменением параметров криптовалюты<br>
          Укажи интересующие параметры и получи уведомление<br>
          при их достижении
        </div>
        <div class="col-6">
          <img src="../assets/img/home/tracking.png">
        </div>
      </div>
    </section>

    <section class="bg-6 gray">
      <div class="row">
        <div class="col-5">
          <h3 class="section-title">Trading Assistant</h3>
          Биржа не поддерживает Trailing - не беда.<br>
          Настрой требуемую доходность и защиту от потери депозита<br>
          и получи торговый сигнал о продаже вовремя
        </div>
        <div class="col-6">
          <img src="../assets/img/home/trading.png">
        </div>
      </div>
    </section>

    <section class="bg-6">
      <div class="row">
        <div class="col-5">
          <h3 class="section-title">Cryptocurrency Arbitrage</h3>
          Межбиржевой арбитраж поддерживает 12 бирж<br>
          Обновление каждые 20 минут
        </div>
        <div class="col-6">
          <img src="../assets/img/home/arbitrage.png">
        </div>
      </div>
    </section>

    <section class="bg-6 gray">
      <div class="row">
        <div class="col-5">
          <h3 class="section-title">Total Balance</h3>
          Общий баланс в одном месте<br>
          Отслеживай свои доходы
        </div>
        <div class="col-6">
          <img src="../assets/img/home/balance.png">
        </div>
      </div>
    </section>

    <section class="pricing-section bg-6">
      <h3 class="section-title">Выбрать тарифный план</h3>
      <div class="pricing pricing--pema">
        <div class="pricing__item">
          <h3 class="pricing__title">Basic</h3>
          <p class="pricing__sentence">For try</p>
          <div class="pricing__price">
            <span class="pricing__currency">$</span>20<span class="pricing__period">/ месяц</span>
          </div>
          <br><br>
          <button class="pricing__action">Выбрать</button>
        </div>
        <div class="pricing__item pricing__item--featured">
          <h3 class="pricing__title">Standard</h3>
          <p class="pricing__sentence">For beginners</p>
          <div class="pricing__price">
            <span class="pricing__currency">$</span>55<span class="pricing__period">/ 3 месяца</span>
          </div>
          <br><br>
          <button class="pricing__action">Выбрать</button>
        </div>
        <div class="pricing__item">
          <h3 class="pricing__title">Enterprise</h3>
          <p class="pricing__sentence">For traders</p>
          <div class="pricing__price">
            <span class="pricing__currency">$</span>100<span class="pricing__period">/ 6 месяцев</span>
          </div>
          <br><br>
          <button class="pricing__action">Выбрать</button>
        </div>
      </div>

    </section>

  </div>
</template>

<script>

export default {
  name: 'Home',
  created() {
    if (this.$store.getters.loggedIn)
      this.$router.push({name: 'balance'})
  }
}
</script>

<style scoped>

@import url("https://fonts.googleapis.com/css?family=Alegreya+Sans:400,700,800");
@import url("https://fonts.googleapis.com/css?family=Sahitya:400,700");
@import url("http://fonts.googleapis.com/css?family=Lobster+Two:700italic,700");
@import url("http://fonts.googleapis.com/css?family=Oswald:300");

.row {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto 7%;
  font-family: 'Space Grotesk',sans-serif;
}

.col-5 {
  color: #adb5bd;
  width: 40%;
  float: left;
}

.col-6 {
  width: 60%;
  float: left;
}

.col-6 img {
  width: 70%;
  height: 70%;
}

.section-title {
  font-weight: 700;
  position: relative;
  font-size: 24px;
  line-height: 43px;
  color: #6ed19f;
}

.pricing {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-justify-content: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto 3em;
}

.pricing__item {
  position: relative;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: stretch;
  align-items: stretch;
  text-align: center;
  -webkit-flex: 0 1 330px;
  flex: 0 1 330px;
}

.pricing__action {
  color: inherit;
  border: none;
  background: none;
}

.pricing__action:focus {
  outline: none;
}

/* Pema */
.pricing--pema .pricing__item {
  font-family: 'Alegreya Sans', sans-serif;
  padding: 2em 3em;
  margin: 1em;
  color: #262b38;
  background: #fafafa;
  cursor: default;
  overflow: hidden;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
}

@media screen and (min-width: 66.250em) {
  .pricing--pema .pricing__item {
    margin: 1.5em 0;
  }

  .pricing--pema .pricing__item--featured {
    z-index: 10;
    margin: 0;
    font-size: 1.15em;
  }
}

.pricing--pema .pricing__title {
  font-size: 2em;
  margin: 0.5em 0 0;
  color: #1d211f;
}

.pricing--pema .pricing__price {
  font-size: 5em;
  font-weight: 800;
  color: #6ed19c;
  position: relative;
  z-index: 100;
}

.pricing--pema .pricing__currency {
  font-size: 0.5em;
  vertical-align: super;
}

.pricing--pema .pricing__period {
  font-size: 0.25em;
  display: inline-block;
  padding: 0 0 0 0.5em;
  color: #CEDED6;
}

.pricing--pema .pricing__sentence {
  font-weight: bold;
  margin: 0 0 1em 0;
  padding: 0 0 0.5em;
  color: #6ed19c;
}

.pricing--pema .pricing__action {
  font-weight: bold;
  margin-top: auto;
  padding: 1em 2em;
  color: #fff;
  border-radius: 5px;
  background: #6ed19c;
  -webkit-transition: background-color 0.3s;
  transition: background-color 0.3s;
}

.pricing--pema .pricing__action:hover,
.pricing--pema .pricing__action:focus {
  background-color: #4F5F56;
}

*, *:after, *:before {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

/* Content */
.pricing-section {
  padding: 4em 0 1em;
  position: relative;
}

.pricing-section a {
  color: #333;
}

.pricing-section a:hover,
.pricing-section a:focus {
  color: #000;
}

.bg-6 {
  background: #FFFFFF;
  text-align: center;
  margin: 0 auto;
  padding: 50px 0px 50px 0px;
}

.gray {
  background: #f5f8fd;
}

section {
  display: block;
}

body {
  margin: 0;
}

button {
  font-family: inherit;
  font-size: 100%;
  margin: 0;
}

</style>