<template>
  <div class="home">
    <div class="price">
      <section class="pricing-section bg-6">
        <div class="pricing pricing--pema">
          <div class="pricing__item">
            <h3 class="pricing__title">Basic</h3>
            <p class="pricing__sentence">For try</p>
            <div class="pricing__price"><span class="pricing__currency">$</span>20<span
                class="pricing__period">/ month</span></div>
            <br><br>
            <button class="pricing__action">Choose plan</button>
          </div>
          <div class="pricing__item pricing__item--featured">
            <h3 class="pricing__title">Standard</h3>
            <p class="pricing__sentence">For beginners</p>
            <div class="pricing__price"><span class="pricing__currency">$</span>55<span class="pricing__period">/ 3 month</span>
            </div>
            <br><br>
            <button class="pricing__action">Choose plan</button>

          </div>
          <div class="pricing__item">
            <h3 class="pricing__title">Enterprise</h3>
            <p class="pricing__sentence">For traders</p>
            <div class="pricing__price"><span class="pricing__currency">$</span>100<span class="pricing__period">/ 6 month</span>
            </div>
            <br><br>
            <button class="pricing__action">Choose plan</button>
          </div>
        </div>
      </section>
    </div>
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

@import url('https://fonts.googleapis.com/css?family=Alegreya+Sans:400,700,800');
@import url('https://fonts.googleapis.com/css?family=Sahitya:400,700');
@import url('http://fonts.googleapis.com/css?family=Lobster+Two:700italic,700');
@import url('http://fonts.googleapis.com/css?family=Oswald:300');

.container {
  width: 100%;
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

.pricing__feature-list {
  text-align: left;
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

.pricing--pema .icon {
  display: inline-block;
  min-width: 2em;
  color: #8A9790;
  vertical-align: middle;
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

.pricing--pema .pricing__feature-list {
  font-size: 0.95em;
  margin: 0;
  padding: 1.5em 0.5em 2.5em;
  list-style: none;
}

.pricing--pema .pricing__feature {
  padding: 0.15em 0;
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
  color: #6ed19f
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