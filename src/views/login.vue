<template>
  <div>
    <div class="container text-dark">
      <div class="row justify-content-md-center">
        <div class="col-md-5 p-3 login justify-content-md-center">
          <h1 class="h3 mb-3 font-weight-normal text-center">Please sign in</h1>

          <p v-if="incorrectAuth">Incorrect username or password entered - please try again</p>
          <form v-on:submit.prevent="login">
            <div class="form-group">
              <input type="text" name="username" id="user" v-model="username" class="form-control"
                     placeholder="Username">
            </div>
            <div class="form-group">
              <input type="password" name="password" id="pass" v-model="password" class="form-control"
                     placeholder="Password">
            </div>
            <button type="submit" class="btn btn-lg btn-primary btn-block justify-content-md-center">Login</button>
          </form>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: '',
      incorrectAuth: false,
    }
  },
  methods: {
    login() {
      this.incorrectAuth = false
      this.$store.dispatch('userLogin', {
        username: this.username,
        password: this.password
      })
          .then(data => {
            if (data!==undefined && data.error)
              this.incorrectAuth = true
            else
              this.$router.push({name: 'balance'})
          })
          .catch(err => {
            this.incorrectAuth = true
          })
    }
  }
}
</script>

<style scoped>

body {
  background-color: #f4f4f4;
}

.login {
  background-color: #fff;
  margin-top: 10%;
}

input {
  padding: 25px 10px;
}

.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.text-dark {
  color: #343a40 !important;
}

.row {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

.justify-content-md-center {
  -ms-flex-pack: center !important;
  justify-content: center !important;
}

.p-3 {
  padding: 1rem !important;
}

.col-md-5 {
  -ms-flex: 0 0 25%;
  flex: 0 0 25%;
  max-width: 25%;
}

.h3 {
  font-size: 1.75rem;
}

.mb-3 {
  margin-bottom: 1rem !important;
}

.font-weight-normal {
  font-weight: 400 !important;
}

.text-center {
  text-align: center !important;
}


.form-group {
  margin-bottom: 1rem;
}

.btn {
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

.btn-lg {
  padding: .5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: .3rem;
}

.btn-primary {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.btn-block {
  display: block;
  width: 100%;
}

.btn:not(:disabled):not(.disabled) {
  cursor: pointer;
}

[type=button], [type=reset], [type=submit], button {
  -webkit-appearance: button;
}

button, select {
  text-transform: none;
}

button, input {
  overflow: visible;
}

button, input, optgroup, select, textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

.form-control {
  display: block;
  width: 100%;
  height: calc(1.5em + .75rem + 2px);
  padding: .375rem .75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

*, ::after, ::before {
  box-sizing: border-box;
}

</style>
