<template id="loginPage">
  <div id="logindiv" class="container">
      <img class="mb-4" src="@/assets/speedlogo.png" alt="" width="200">
      <form class="form-signin text-center">

        <h1 class="h3 font-weight-bold">HOPEFULLYHEALING</h1>
        <span class="text-muted">ULCER PROGRESS TRACKER APP</span>

        <br>
        <br>
        <p>Welcome to Hopefully Healing. This app will help you track the progress of pressure ulcer</p>
        <p>Click the buttom below to login</p>

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
import AuthService from '../../auth/AuthService'
export default {
  name: 'loginPage',
  props: ['auth'],
  data:function() {
    return {

    }
  },
  methods: {
    loginHH:function() {
      const auth = new AuthService()
      const { login, logout, authenticated, authNotifier } = auth
      console.log(auth)
      // console.log(auth.login)
      auth.login()
      debugger
      //Email: fake@fake.fake - Password: Fake123456
      
      //Check if username&password matching is in DB
      //If in DB: Check if admin or nurse - If not: display alert
      //Depending if admin or nurse load/populate locations
      //Go to locations.vue --> 
      // this.$emit('changeComp', 'locations');
      // this.$router.push('/locations')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./style.css" scoped></style>
