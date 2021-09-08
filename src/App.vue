<template>
  <div id="app">
    <NavBar/>
    <router-view/>
    <FooterBar/>
  </div>
</template>

<script>
import NavBar from "@/components/nav";
import FooterBar from "@/components/footer";
import {mapState} from "vuex";

export default {
  components: {FooterBar, NavBar},
  computed: mapState(['darkTheme']),
  watch: {
    darkTheme: function () {
      if (this.darkTheme) {
        document.querySelector('body').classList.add('dark-theme')
      } else {
        document.querySelector('body').classList.remove('dark-theme')
      }
    }
  },
  created() {
    if (this.darkTheme) {
      document.querySelector('body').classList.add('dark-theme')
    }
  },

}
</script>

<style>
@import "assets/css/style.css";

:root {
  --black-color: #292C35;
  --always-black: #292C35;
  --white-color: #fff;
  --always-white: #fff;
  --arb-hover: #dee8e4;
  --track-trade-color: #dee8e4;
  --track-trade-hover: #b7c1bd;
  --chart-background: white;

  --width-td-th: 80px;
  --td-spacing: 10px;
}

body {
  background: var(--white-color);
  color: var(--black-color);
  position: relative;
  min-height: 100vh;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.dark-theme {
  --black-color: #fff;
  --white-color: #252830;
  --arb-hover: #b7c1bd;
  --track-trade-color: #b7c1bd;
  --track-trade-hover: #808784;
  --chart-background: #2A2A2A;
}

body::-webkit-scrollbar {
  display: none;
}

.footer {
  padding-bottom: 25px;
  position: absolute;
  bottom: -18vw;
  width: 100%;
}

.fab, .fas {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  line-height: 1
}

@font-face {
  font-family: "Font Awesome 5 Brands";
  font-style: normal;
  font-weight: 400;
  font-display: block;
  src: url(assets/fonts/fa-brands-400.ttf) format("truetype")
}

@font-face {
  font-family: "Font Awesome 5 Free";
  font-style: normal;
  font-weight: 900;
  font-display: block;
  src: url(assets/fonts/fa-solid-900.ttf) format("truetype")
}

.fab {
  font-family: "Font Awesome 5 Brands", sans-serif;
}

.fab {
  font-weight: 400
}

.fas {
  font-family: "Font Awesome 5 Free", sans-serif;
}

.fas {
  font-weight: 900
}

.fa-sign-out-alt:before {
  content: "\f2f5"
}

.fa-user-circle:before {
  content: "\f2bd"
}

.fa-telegram:before {
  content: "\f2c6"
}

.fa-moon:before {
  content: "\f186"
}

.fa-sun:before {
  content: "\f185"
}

.loading::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("assets/img/loading.gif") center / 50px no-repeat;
}

@media (max-width: 1280px) {

  :root {
    --width-td-th: 60px;
    --td-spacing: 7px;
  }

}

@media (max-width: 1024px) {

  :root {
    --width-td-th: 60px;
    --td-spacing: 5px;
  }

}

</style>