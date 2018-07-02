<template id="newpatient">
    <div id="newpatientdiv" class="container-fluid">
    <div id="maincontent">
      <img class="mb-4" src="@/assets/speedlogo.png" alt="" width="200">
      <form class="form-newpatient text-center">

        <h1 class="h3 font-weight-bold">ADD NEW PATIENT</h1>

        <div id="inputsdiv">

            <!-- PATIENT NAME INPUT -->
            <div class="row inputs">
                <i class="material-icons col-1">perm_identity</i><label for="inputPatientName" class="sr-only">Patient Full Name</label>
                <input type="patientName" id="inputPatientName" class="form-control col offset-1" placeholder="Patient Full Name" required autofocus>
            </div>

            <!-- PATIENT ID INPUT -->
            <div class="row inputs">
                <i class="material-icons col-1">fingerprint</i><label for="inputPatientID" class="sr-only">Patient ID</label>
                <input type="patientID" id="inputPatientID" class="form-control col offset-1" placeholder="Patient ID" required>
            </div>

            <!-- ULCER LENGTH INPUT -->
            <div class="row inputs">
                <i class="material-icons col-1">straighten</i><label for="maxLength" class="sr-only">Max length of the ulcer (cm)</label>
                <input type="number" id="maxLength" class="form-control col offset-1" placeholder="Max length of the ulcer (cm)" required>
            </div>

            <!-- UPLOAD IMAGE INPUT -->
            <h2 class="h5 mt-2 font-weight-bold">Upload Picture</h2>

            <div class="row inputs">
                <i class="material-icons col-1">photo_camera</i><label for="maxLength" class="sr-only">Upload Picture</label>
                <input type="file" name="ulcerImage" class="form-control col offset-1" accept="image/*" required>
            </div>

            <!-- ULCERLOCATION PICKER -->
            <div id="ulcerlocationdiv">
                <h2 class="h5 mt-3 font-weight-bold">Where is the ulcer located?</h2>
                <div class="row body-view">
                    <div class="col-3" v-on:click="bodyView = 'front'">FRONT</div>
                    <div class="col-3" v-on:click="bodyView = 'back'">BACK</div>
                    <div class="col-3" v-on:click="bodyView = 'right'">RIGHT</div>
                    <div class="col-3" v-on:click="bodyView = 'left'">LEFT</div>
                </div>
                <div id="bodyfig" v-bind:class="bodyView">
                    <!-- FRONT AND BACK VIEWS -->
                    <div style="padding-top: 22px;" v-if="bodyView === 'front' || bodyView === 'back'">
                        <div class="row justify-content-center">
                            <div class="bodyPart col-2"></div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="bodyPart col-2"></div>
                            <div class="bodyPart col-2"></div>
                            <div class="bodyPart col-2"></div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="bodyPart col-1"></div>
                            <div class="bodyPart col-3"></div>
                            <div class="bodyPart col-1"></div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="bodyPart col-1"></div>
                            <div class="bodyPart col-3"></div>
                            <div class="bodyPart col-1"></div>
                        </div>     
                        <div class="row justify-content-center">
                            <div class="bodyPart col-2"></div>
                            <div class="bodyPart col-2"></div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="bodyPart col-2"></div>
                            <div class="bodyPart col-2"></div>
                        </div>  
                        <div class="row justify-content-center">
                            <div class="bodyPart col-2"></div>
                            <div class="bodyPart col-2"></div>
                        </div>                      
                    </div>
                    <!-- SIDE VIEWS -->
                    <div style="padding-top: 18px;" v-if="bodyView === 'right' || bodyView === 'left'">
                        <div class="row justify-content-center">
                            <div class="bodyPart col-3"></div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="bodyPart col-2"></div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="bodyPart col-1"></div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="bodyPart col-1"></div>
                        </div>     
                        <div class="row justify-content-center">
                            <div class="bodyPart col-2"></div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="bodyPart col-2"></div>
                        </div>  
                        <div class="row justify-content-center">
                            <div class="bodyPart col-2"></div>
                        </div>                      
                    </div>
                </div>
            </div>
            <!-- ULCER LOCATION INPUT -->
            <select class="mt-2 d-none" required>
                <!-- <option value=""></option>
                <option value="location1">Location 1</option>
                <option value="location2">Location 2</option>
                <option value="location3">Location 3</option> -->
            </select>
        </div>
        <!-- ADD PATIENT BUTTON -->
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
            length: '',
            bodyView: '',
            location: '',
            image: '',
            date: ''
        }
    },
    methods: {
        locateUlcer:function(){
            // Write funcion to figure out where the ulcer is depending on which div the user clicked.
            // I was thinking in using the nested inner classes of #bodyfig (bodyView, bodyPart, and any other we could assign to make it easier)
            // store value in var location
            // ************* If we dont have time for this we can you create a dropdown with a search bar (might be easier). *****************
        },
        addPatient:function(){
            // Trigered when "Add Patient" clicked
            // Post info in the db
            // Go to - imgupload.vue
        }
    }
}
</script>

<style src="./style.css" scoped></style>