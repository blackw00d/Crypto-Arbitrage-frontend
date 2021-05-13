<template>
  <div class="page-container">
    <div class="row space-top-8 space-8">
      <div class="col-6">
        <h1 class="text-jumbo text-ginormous">Ой!</h1>
        <h2>Что-то пошло не так.<br>Мы работаем над этим.</h2>
        <h6>Ошибка 404</h6>
      </div>
      <div class="col-5 col-middle text-center">
        <img alt="Bitcoin - new GOLD" src="../assets/img/bit.png" width="560">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'error'
}
</script>

<style scoped>

@media (min-width: 1128px) {
  .page-container {
    width: 1080px;
  }
}

@media (min-width: 744px) {
  .page-container {
    width: 696px;
  }
}

.page-container {
  margin: 50px auto;
  padding-right: 10%;
}

.space-top-8 {
  margin-top: 48px;
}

.space-8 {
  margin-bottom: 48px;
}

.row {
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  font-size: 14px;
  line-height: 1.43;
  color: #484848;
  background-color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 -12px;
}

.col-5 {
  width: 41.66667%;
  float: left;
  position: relative;
  min-height: 1px;
  padding-left: 12px;
  padding-right: 12px;
}

.col-6 {
  width: 50%;
  float: left;
  position: relative;
  min-height: 1px;
  padding-left: 12px;
  padding-right: 12px;
}

.text-center {
  text-align: center;
}

.text-jumbo {
  font-size: 60px;
  font-weight: 700;
}

.text-ginormous {
  font-size: 80px;
}

h1, h2, h6 {
  margin-top: 25px;
  margin-bottom: 15px;
}

h1 {
  font-size: 44px;
  font-weight: normal;
}

h2 {
  font-size: 32px;
  font-weight: normal;
}

h6 {
  font-size: 14px;
  font-weight: bold;
  color: #767676;
}

img {
  border: 0;
  padding-top: 33%;
}

</style>
