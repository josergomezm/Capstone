<template id="login">
  <div id="logindiv" class="container">
      <img class="mb-4" src="@/assets/speedlogo.png" alt="" width="200">
      <form class="form-signin text-center">

        <h1 class="h3 font-weight-bold">HOPEFULLYHEALING</h1>
        <span class="text-muted">ULCER PROGRESS TRACKER APP</span>

        <div id="inputsdiv">
          <div class="row inputs">
            <i class="material-icons col-1">face</i><label for="inputEmail" class="sr-only">Email address</label>
            <input type="email" id="inputEmail" class="form-control col offset-1" placeholder="Email address" required autofocus>
          </div>

          <div class="row inputs">
            <i class="material-icons col-1">lock</i><label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" class="form-control col offset-1" placeholder="Password" required>
          </div>
        </div>

        <!-- <div class="checkbox mb-3"></div>
        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label> -->

        <button v-on:click="loginHH" class="btn btn-lg btn-danger btn-block" type="submit">LOGIN</button>
        <p class="mt-5 mb-3 text-muted">&copy; 2018 - ∞</p>
      </form>
    </div>
</template>

<script>
export default {
  name: 'login',
  data:function() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    loginHH:function() {
      //Check if username&password matching is in DB
      //If in DB: Check if admin or nurse - If not: display alert
      //Depending if admin or nurse load/populate locations
      //Go to locations.vue --> 
      this.$emit('changeComp', 'locations');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./style.css" scoped></style>
