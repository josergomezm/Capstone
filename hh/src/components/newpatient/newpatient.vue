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
                <input v-model="patientName" id="inputPatientName" class="form-control col offset-1" placeholder="Patient Full Name" required autofocus>
            </div>

            <!-- PATIENT ID INPUT -->
            <div class="row inputs">
                <i class="material-icons col-1">fingerprint</i><label for="inputPatientID" class="sr-only">Patient ID</label>
                <input v-model="patientID" id="inputPatientID" class="form-control col offset-1" placeholder="Patient ID" required>
            </div>

            <!-- ULCER LENGTH INPUT -->
            <div class="row inputs">
                <i class="material-icons col-1">straighten</i><label for="maxLength" class="sr-only">Max length of the ulcer (cm)</label>
                <input v-model="length" type="number" id="maxLength" class="form-control col offset-1" placeholder="Max length of the ulcer (cm)" required>
            </div>

            <!-- UPLOAD IMAGE INPUT -->
            <h2 class="h5 mt-2 font-weight-bold">Upload Picture</h2>

            <div class="row inputs">
                <i class="material-icons col-1">photo_camera</i><label for="ulcarImage" class="sr-only">Upload Picture</label>
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
                    <!-- FRONT VIEW -->
                    <div style="padding-top: 22px;" v-if="bodyView === 'front'">
                        <div class="row justify-content-center">
                            <div class="bodyPart col-2" title="Head (Front)" v-on:click="location = 'Head (Front)'"></div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="bodyPart col-2" title="Right Shoulder (Front)" v-on:click="location = 'Right Shoulder (Front)'"></div>
                            <div class="bodyPart col-2" title="Chest" v-on:click="location = 'Chest'"></div>
                            <div class="bodyPart col-2" title="Left Shoulder (Front)" v-on:click="location = 'Left Shoulder (Front)'"></div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="bodyPart col-1" title="Right Arm (Front)" v-on:click="location = 'Right Arm (Front)'"></div>
                            <div class="bodyPart col-3" title="Abdomen" v-on:click="location = 'Abdomen'"></div>
                            <div class="bodyPart col-1" title="Left Arm (Front)" v-on:click="location = 'Left Arm (Front)'"></div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="bodyPart col-1" title="Right Hand (Front)" v-on:click="location = 'Right Hand (Front)'"></div>
                            <div class="bodyPart col-3" title="Pelvis (Front)" v-on:click="location = 'Pelvis (Front)'"></div>
                            <div class="bodyPart col-1" title="Left Hand (Front)" v-on:click="location = 'Left Hand (Front)'"></div>
                        </div>     
                        <div class="row justify-content-center">
                            <div class="bodyPart col-2" title="Right Leg (Front)" v-on:click="location = 'Right Leg (Front)'"></div>
                            <div class="bodyPart col-2" title="Left Leg (Front)" v-on:click="location = 'Left Leg (Front)'"></div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="bodyPart col-2" title="Right Crus" v-on:click="location = 'Right Crus'"></div>
                            <div class="bodyPart col-2" title="Left Crus" v-on:click="location = 'Left Crus'"></div>
                        </div>  
                        <div class="row justify-content-center">
                            <div class="bodyPart col-2" title="Right Foot (Front)" v-on:click="location = 'Right Foot (Front)'"></div>
                            <div class="bodyPart col-2" title="Left Foot (Front)" v-on:click="location = 'Left Foot (Front)'"></div>
                        </div>                      
                    </div>
                    <!-- BACK VIEW -->
                    <div style="padding-top: 22px;" v-if="bodyView === 'back'">
                        <div class="row justify-content-center">
                            <div class="bodyPart col-2" title="Head (Back)" v-on:click="location = 'Head (Back)'"></div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="bodyPart col-2" title="Left Shoulder (Back)" v-on:click="location = 'Left Shoulder (Back)'"></div>
                            <div class="bodyPart col-2" title="Back" v-on:click="location = 'Back'"></div>
                            <div class="bodyPart col-2" title="Right Shoulder (Back)" v-on:click="location = 'Right Shoulder (Back)'"></div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="bodyPart col-1" title="Left Arm (Back)" v-on:click="location = 'Left Arm (Back)'"></div>
                            <div class="bodyPart col-3" title="Lower Back" v-on:click="location = 'Lower Back'"></div>
                            <div class="bodyPart col-1" title="Right Arm (Back)" v-on:click="location = 'Right Arm (Back)'"></div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="bodyPart col-1" title="Left Hand (Back)" v-on:click="location = 'Left Hand (Back)'"></div>
                            <div class="bodyPart col-3" title="Gluteus" v-on:click="location = 'Gluteus'"></div>
                            <div class="bodyPart col-1" title="Right Hand (Back)" v-on:click="location = 'Right Hand (Back)'"></div>
                        </div>     
                        <div class="row justify-content-center">
                            <div class="bodyPart col-2" title="Left Leg (Back)" v-on:click="location = 'Left Leg (Back)'"></div>
                            <div class="bodyPart col-2" title="Right Leg (Back)" v-on:click="location = 'Right Leg (Back)'"></div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="bodyPart col-2" title="Left Calf" v-on:click="location = 'Left Calf'"></div>
                            <div class="bodyPart col-2" title="Right Calg" v-on:click="location = 'Right Calg'"></div>
                        </div>  
                        <div class="row justify-content-center">
                            <div class="bodyPart col-2" title="Left Foot (Back)" v-on:click="location = 'Left Foot (Back)'"></div>
                            <div class="bodyPart col-2" title="Right Foot (Back)" v-on:click="location = 'Right Foot (Back)'"></div>
                        </div>                      
                    </div>
                    <!-- RIGHT VIEWS -->
                    <div style="padding-top: 18px;" v-if="bodyView === 'right'">
                        <div class="row justify-content-center">
                            <div class="bodyPart col-3" title="Head (Right Side)" v-on:click="location = 'Head (Right Side)'"></div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="bodyPart col-2" title="Right Shoulder (Side)" v-on:click="location = 'Right Shoulder (Side)'"></div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="bodyPart col-1" title="Right Arm (Side)" v-on:click="location = 'Right Arm (Side)'"></div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="bodyPart col-1" title="Pelvis (Right Side)" v-on:click="location = 'Pelvis (Right Side)'"></div>
                        </div>     
                        <div class="row justify-content-center">
                            <div class="bodyPart col-2" title="Right Leg (Side)" v-on:click="location = 'Right Leg (Side)'"></div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="bodyPart col-2" title="Right Fibula (Side)" v-on:click="location = 'Right Fibula (Side)'"></div>
                        </div>  
                        <div class="row justify-content-center">
                            <div class="bodyPart col-2" title="Right Foot (Side)" v-on:click="location = 'Right Foot (Side)'"></div>
                        </div>                      
                    </div>
                    <!-- LEFT VIEW -->
                    <div style="padding-top: 18px;" v-if="bodyView === 'left'">
                        <div class="row justify-content-center">
                            <div class="bodyPart col-3" title="Head (Left Side)" v-on:click="location = 'Head (Left Side)'"></div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="bodyPart col-2" title="Left Shoulder (Side)" v-on:click="location = 'Left Shoulder (Side)'"></div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="bodyPart col-1" title="Left Arm (Side)" v-on:click="location = 'Left Arm (Side)'"></div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="bodyPart col-1" title="Pelvis (Left Side)" v-on:click="location = 'Pelvis (Left Side)'"></div>
                        </div>     
                        <div class="row justify-content-center">
                            <div class="bodyPart col-2" title="Left Leg (Side)" v-on:click="location = 'Left Leg (Side)'"></div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="bodyPart col-2" title="Left Fibula (Side)" v-on:click="location = 'Left Fibula (Side)'"></div>
                        </div>  
                        <div class="row justify-content-center">
                            <div class="bodyPart col-2" title="Left Foot (Side)" v-on:click="location = 'Left Foot (Side)'"></div>
                        </div>                     
                    </div>
                </div>
            </div>
            <!-- ULCER LOCATION INPUT -->
            <div v-if="location.length > 0" class="row inputs">
                <i class="material-icons col-1">accessibility</i><label for="ulcarLocation" class="sr-only">Ulcer Location</label>
                <input name="ulcerLocation" v-bind:value="location" class="form-control col text-center" required readonly>
            </div>
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
        addPatient:function(){
            //Do stuff
            //Then
            alert("Patient " + this.patientName + " has been added!");
            // this.$emit('changeComp', 'patients');
            this.$router.push('/patients')
        }
    }
}
</script>

<style src="./style.css" scoped></style>