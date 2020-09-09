<template>
  <section class="footer">
    <div class="container">
      <div id="fa">
        <a href="https://t.me/crypto_arbitrage_crypto" title="Telegram" target="_blank">
          <i class="fab fa-telegram"></i>
        </a>
      </div>
      <div class="copy">
        Copyright©2019 Blackw00d ArtStudio
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "footer"
}
</script>

<style scoped>

section {
  padding-top: 50px
}

a {
  color: #007bff;
  text-decoration: none;
  background-color: transparent
}

#fa {
  display: table;
  margin: 0 auto
}

#fa a {
  font-size: 25px
}

.copy {
  color: #fa8602;
  text-shadow: black 0.5px 0.5px 1px, black -0.5px -0.5px 1px, black 0.5px -0.5px 1px, black -0.5px 0.5px 1px;
  font-size: 13px;
  margin: 0 auto;
  display: table
}

</style>