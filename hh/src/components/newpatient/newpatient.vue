<template id="newpatient">
    <div id="newpatientdiv" class="container">
      <img class="mb-4" src="@/assets/speedlogo.png" alt="" width="200">
      <form class="form text-center">

        <h1 class="h3 font-weight-bold">ADD NEW PATIENT</h1>

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

        <button v-on:click="addPatient" class="btn btn-lg btn-primary btn-block" type="submit">Add Patient</button>
      </form>
    </div>
</template>

<script>
export default {
    name: 'newpatient',
    data:function() {
        return {

        }
    },
    methods: {
        addPatient:function(){
            // Store in the db
            // Go to lenght.vue - to add ulcer length
        }
    }
}
</script>

<style src="./style.css" scoped></style>