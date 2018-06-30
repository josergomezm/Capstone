<template id="newpatient">
    <div id="newpatientdiv" class="container-fluid">
    <div id="maincontent">
      <img class="mb-4" src="@/assets/speedlogo.png" alt="" width="200">
      <form class="form-newpatient text-center">

        <h1 class="h3 font-weight-bold">ADD NEW PATIENT</h1>

        <div id="inputsdiv">

          <div class="row inputs">
            <i class="material-icons col-1">perm_identity</i><label for="inputPatientName" class="sr-only">Patient Full Name</label>
            <input type="patientName" id="inputPatientName" class="form-control col offset-1" placeholder="Patient Full Name" required autofocus>
          </div>

          <div class="row inputs">
            <i class="material-icons col-1">fingerprint</i><label for="inputPatientID" class="sr-only">Patient ID</label>
            <input type="patientID" id="inputPatientID" class="form-control col offset-1" placeholder="Patient ID" required>
          </div>

          <div class="row inputs">
            <i class="material-icons col-1">straighten</i><label for="maxLength" class="sr-only">Max length of the ulcer (cm)</label>
            <input type="number" id="maxLength" class="form-control col offset-1" placeholder="Max length of the ulcer (cm)" required>
          </div>

          <div id="ulcerlocationdiv">
            <h2 class="h4 mt-4 font-weight-bold">Where is the ulcer located?</h2>
            <div class="row body-view">
                <div class="col-3" v-on:click="bodyView = 'front'">FRONT</div>
                <div class="col-3" v-on:click="bodyView = 'back'">BACK</div>
                <div class="col-3" v-on:click="bodyView = 'right'">RIGHT</div>
                <div class="col-3" v-on:click="bodyView = 'left'">LEFT</div>
            </div>
            <div id="bodyfig" v-bind:class="bodyView">
                <div v-if="bodyView === 'front'">
                    
                </div>
            </div>
          </div>
        
        </div>

        <button v-on:click="addPatient" class="btn btn-lg btn-danger btn-block" type="submit">Add Patient</button>
      </form>
    </div>
    </div>
</template>

<script>
export default {
    name: 'newpatient',
    data:function() {
        return {
            patientName: '',
            patientID: '',
            location: '',
            length: '',
            bodyView: ''
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