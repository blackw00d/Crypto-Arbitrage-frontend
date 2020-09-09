<template>
  <div id="app">
    <Nav/>
    <router-view/>
    <Footer/>
  </div>
</template>

<style>
@import "assets/css/style.css";

body {
  position: relative;
  min-height: 100vh;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
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

</style>

<script>
import Nav from "@/components/nav";
import Footer from "@/components/footer";

export default {
  components: {Footer, Nav}
}
</script>