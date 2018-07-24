<template id="patients">
  <div id="viewdiv" class="container-fluid">
    <div id="maincontent">

      <img class="mb-4" src="@/assets/speedlogo.png" alt="" width="200">
      <button type="button" id="logoutbtn" class="mt-4 btn btn-dark float-right position-relative" v-on:click="logOut">Logout</button>

      <div class="container text-center">

        <h1 class="h3 mb-4 font-weight-bold">Patients</h1>

        <!-- SEARCH BAR -->
        <form>
          <input id="patientSearchInput" class="mb-5" type="text" name="search" placeholder="Search Patient..">
        </form>

        <div id="headers">
          <div class="row">
            <div class="col-12 col-sm-10">
              <div class="row">
                <div class="col">Patient Name</div>
                <div class="col-3 d-none d-sm-block">Patient ID</div>
                <div class="col-3 d-none d-sm-block">Last Entry</div>
                <div class="col-2 d-none d-sm-block">Number of Wounds</div>
              </div>
            </div>
            <div class="col"></div>
          </div>
        </div> 

        <ul id="patientsList">
          <li v-for="patient in patients" :key="patient.patientId" class="row">
            <a v-on:click="patientStatus(patient)" class="col-12 col-sm-10">
              <div class="row">
                <div class="col">{{ patient.fullName }}</div>
                <div class="col-3 d-none d-sm-block">{{ patient.patientId }}</div>
                <div class="col-3 d-none d-sm-block">{{ patient.lastEntry }}</div>
                <div class="col-2 d-none d-sm-block">{{ patient.NumOfWounds }}</div>
              </div>
            </a>
            <button type="button" class="btn btn-secondary col" v-on:click="updatePatient(patient)">Update</button>
          </li>
          <li v-if="patients.length == 0" class="row text-muted">No records found...</li>
        </ul>

        <button type="button" class="mt-4 btn btn-danger col-sm-5" v-on:click="backToLocations">Locations</button>
        <button type="button" class="mt-4 btn btn-danger col-sm-5 offset-sm-1" v-on:click="addPatient">Add New Patient</button>
      </div>
    </div>
  </div>
</template>

<script>
import instance from '../../services/RESTful'
import AuthService from '../../auth/AuthService'

export default {
  name: 'locations',
  data(){
    return {
      patients: []
    }
  },
  created(){
      //Get patients
      instance.get('/dataPatientInLocations', {
        params: {
          locationId: sessionStorage.getItem('locationClicked')
        }
      }).then((res)=>{
          // console.log(res.data);
          this.patients = res.data;
          // If patient list is empty, go back to location selection
      }).catch((err)=>{
          console.error(err)
      })
  },
  mounted(){
    //Search Pateints Function
    $("#patientSearchInput").on('keyup', function(){
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById("patientSearchInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("patients");
    li = ul.getElementsByTagName('li');
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) 
    {
      a = li[i];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
});
  },
  methods: {
    patientStatus:function(patient){
      //Do something
      //Then take me to the next component
      // this.$emit('changeComp', 'status');
      // console.log(patient);
      this.$router.push(`/status/${patient.patientId}`)
    },
    updatePatient:function(patient) {
      //Do something
      //Then take me to the next component
      // this.$emit('changeComp', 'updatePatient');
      this.$router.push(`/updatePatient/${patient.patientId}`)
    },
    addPatient:function() {
      //Do something
      //Then take me to the next component
      // this.$emit('changeComp', 'newPatient');
      this.$router.push('/newPatient')
    },
    backToLocations(){
      //Do something
      //Then take me to the next component
      // this.$emit('changeComp', 'locations');
      this.$router.push('/locations')
    },
    logOut(){
      //Logout
      const auth = new AuthService()
      const { logout } = auth
      auth.logout()
    }
  }
}
</script>
    
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./style.css" scoped></style>