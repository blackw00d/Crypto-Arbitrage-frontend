<template>

</template>

<script>
export default {
  name: "logout",
  created() {
    this.$store.dispatch('userLogout')
        .then(() => {
          this.$router.push({name: 'Home'})
        })
  }
}
</script>

<style scoped>

</style>