<template>
  <div id="app">
    <Nav/>
    <router-view/>
  </div>
</template>

<style>
  @import "assets/css/style.css";
</style>

<script>
  import Nav from "@/components/nav";
  export default {
    components: {Nav}
  }
</script>