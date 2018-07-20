<template id="loginPage">
  <div id="viewdiv" class="container-fluid">
    <div id="maincontent">

      <img class="mb-2" src="@/assets/speedlogo.png" alt="" width="200">

      <div class="container text-center">

        <h1 class="h1 font-weight-bold">HOPEFULLYHEALING</h1>
        <span class="text-muted">ULCER PROGRESS TRACKER APP</span>

        <div id="introText" class="mt-4">

          <p>Welcome to HopefullyHealing!</p>
          <p>If we had to explain in just a few words: This app will help you track the progress of pressure ulcers. As simple as that.</p>
          <p>Our reports are generated through machine learning/deep learning analysis. By providing only a few details and a photograph, HopefullyHealing allows our users to visualize the development of the wounds in terms of area and tissue type presence.</p>
          <p>Even though it's meant for doctors and nurses we designed HopefullyHealing having patients in mind, so it's funtionality it's meant to be interactive and friendly for patients to comprehend.</p>

        </div>

        <button type="button" v-on:click="loginHH" class="btn btn-lg btn-danger">LOGIN</button>
        <p class="mt-5 mb-3 text-muted">&copy; 2018 - ∞</p>

      </div>
    </div>
  </div>
</template>

<script>
import AuthService from '../../auth/AuthService'
export default {
  name: 'loginPage',
  props: ['auth'],
  data:function() {
    return {}
  },
  methods: {
    loginHH:function() {
      const auth = new AuthService()
      const { login, logout, authenticated, authNotifier } = auth
      console.log(auth)
      // console.log(auth.login)
      auth.login()
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
