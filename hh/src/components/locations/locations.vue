<template id="locations">
  <div id="locationsdiv" class="container">

    <img class="mb-4" src="@/assets/speedlogo.png" alt="" width="200">

    <div class="text-center">
      
      <h1 class="h3 mb-4 font-weight-bold">Locations</h1>

      <div class="container">
        <ul id="locations" class="text-center">
          <a v-on:click="goToPatients">
            <li>
              Location 1
            </li>
          </a>
          <a v-on:click="goToPatients">
            <li>
              Location 2
            </li>
          </a>
          <a v-on:click="goToPatients">
            <li>
              Location 3
            </li>
          </a>
        </ul>          
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'locations',
  methods: {
    goToPatients:function() {
      //Check if username&password matching is in DB
      //If in DB: Check if admin or nurse - If not: display alert
      //Depending if admin or nurse load/populate locations
      //Go to locations.vue --> 
      // this.$emit('changeComp', 'patients');
      this.$router.push('/patients')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./style.css" scoped></style>
