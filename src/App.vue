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