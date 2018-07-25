<template id="updatepatient">
    <div id="viewdiv" class="container-fluid">
    <div id="maincontent">
      <img class="mb-4" src="@/assets/speedlogo.png" alt="" width="200">
      <form class="form-updatepatient text-center">

        <h1 class="h3 mb-4 font-weight-bold">UPDATE PATIENT</h1>

        <div id="inputsdiv" class="container">

            <div class="row mb-4">
                <!-- PATIEN NAME -->
                <div class="col-md-4">
                    <h2 class="h4">Patient Name: <br><span>{{ patientName }}</span></h2>
                </div>
                <!-- PATIENT ID -->
                <div class="col-md-4">
                    <h2 class="h4">Patient ID: <br><span>{{ patientID }}</span></h2>
                </div>
                <!-- DATE -->
                <div class="col-md-4">
                    <h2 class="h4">Date and Time: <br><span>{{ date }}</span></h2>
                </div>
            </div>

            <!-- PATIENT NAME INPUT -->
            <!-- <div class="row inputs">
                <i class="material-icons col-1">perm_identity</i><label for="inputPatientName" class="sr-only">Patient Full Name</label>
                <input v-model="patientName" id="inputPatientName" class="form-control col offset-1" placeholder="Patient Full Name" required readonly>
            </div> -->

            <!-- PATIENT ID INPUT -->
            <!-- <div class="row inputs">
                <i class="material-icons col-1">fingerprint</i><label for="inputPatientID" class="sr-only">Patient ID</label>
                <input v-model="patientID" id="inputPatientID" class="form-control col offset-1" placeholder="Patient ID" required readonly>
            </div> -->

            <!-- ULCER LENGTH INPUT -->
            <div class="row inputs">
                <i class="material-icons col-1">straighten</i><label for="maxLength" class="sr-only">Max length of the ulcer (cm)</label>
                <input v-model="length" type="number" id="maxLength" class="form-control col offset-1" placeholder="Max length of the ulcer (cm)" required autofocus>
            </div>

            <!-- UPLOAD IMAGE INPUT -->
            <!-- <h2 class="h5 mt-2 font-weight-bold">Upload Picture</h2> -->

            <div class="row inputs">
                <i class="material-icons col-1">photo_camera</i><label for="ulcarImage" class="sr-only">Upload Picture</label>
                <input type="file" name="ulcerImage" class="form-control col offset-1" v-on:change="convertToBase64" accept="image/*" required>
            </div>

            <h2 class="h5 mt-3 font-weight-bold">Where is the ulcer located?</h2>

            <!-- NEW/EXISTING BUTTONS -->
            <div class="row mb-2 justify-content-center">
                <button class="btn btn-danger col-sm-5 loc-btn" type="button" v-on:click="showing = 'newUlcer', ulcerLocation = ''">New</button>
                <button class="btn btn-danger col-sm-5 loc-btn" type="button" v-on:click="showing = 'oldUlcer', ulcerLocation = '', getExistingWounds()">Existing</button>
            </div>

            <!-- ULCERLOCATION PICKER -->
            <div id="ulcerlocationdivA" v-if="showing === 'newUlcer'">                
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
                            <div class="bodyPart col-2" title="Head (Front)" v-on:click="ulcerLocation = 'Head (Front)'"></div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="bodyPart col-2" title="Right Shoulder (Front)" v-on:click="ulcerLocation = 'Right Shoulder (Front)'"></div>
                            <div class="bodyPart col-2" title="Chest" v-on:click="ulcerLocation = 'Chest'"></div>
                            <div class="bodyPart col-2" title="Left Shoulder (Front)" v-on:click="ulcerLocation = 'Left Shoulder (Front)'"></div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="bodyPart col-1" title="Right Arm (Front)" v-on:click="ulcerLocation = 'Right Arm (Front)'"></div>
                            <div class="bodyPart col-3" title="Abdomen" v-on:click="ulcerLocation = 'Abdomen'"></div>
                            <div class="bodyPart col-1" title="Left Arm (Front)" v-on:click="ulcerLocation = 'Left Arm (Front)'"></div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="bodyPart col-1" title="Right Hand (Front)" v-on:click="ulcerLocation = 'Right Hand (Front)'"></div>
                            <div class="bodyPart col-3" title="Pelvis (Front)" v-on:click="ulcerLocation = 'Pelvis (Front)'"></div>
                            <div class="bodyPart col-1" title="Left Hand (Front)" v-on:click="ulcerLocation = 'Left Hand (Front)'"></div>
                        </div>     
                        <div class="row justify-content-center">
                            <div class="bodyPart col-2" title="Right Leg (Front)" v-on:click="ulcerLocation = 'Right Leg (Front)'"></div>
                            <div class="bodyPart col-2" title="Left Leg (Front)" v-on:click="ulcerLocation = 'Left Leg (Front)'"></div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="bodyPart col-2" title="Right Crus" v-on:click="ulcerLocation = 'Right Crus'"></div>
                            <div class="bodyPart col-2" title="Left Crus" v-on:click="ulcerLocation = 'Left Crus'"></div>
                        </div>  
                        <div class="row justify-content-center">
                            <div class="bodyPart col-2" title="Right Foot (Front)" v-on:click="ulcerLocation = 'Right Foot (Front)'"></div>
                            <div class="bodyPart col-2" title="Left Foot (Front)" v-on:click="ulcerLocation = 'Left Foot (Front)'"></div>
                        </div>                      
                    </div>
                    <!-- BACK VIEW -->
                    <div style="padding-top: 22px;" v-if="bodyView === 'back'">
                        <div class="row justify-content-center">
                            <div class="bodyPart col-2" title="Head (Back)" v-on:click="ulcerLocation = 'Head (Back)'"></div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="bodyPart col-2" title="Left Shoulder (Back)" v-on:click="ulcerLocation = 'Left Shoulder (Back)'"></div>
                            <div class="bodyPart col-2" title="Back" v-on:click="ulcerLocation = 'Back'"></div>
                            <div class="bodyPart col-2" title="Right Shoulder (Back)" v-on:click="ulcerLocation = 'Right Shoulder (Back)'"></div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="bodyPart col-1" title="Left Arm (Back)" v-on:click="ulcerLocation = 'Left Arm (Back)'"></div>
                            <div class="bodyPart col-3" title="Lower Back" v-on:click="ulcerLocation = 'Lower Back'"></div>
                            <div class="bodyPart col-1" title="Right Arm (Back)" v-on:click="ulcerLocation = 'Right Arm (Back)'"></div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="bodyPart col-1" title="Left Hand (Back)" v-on:click="ulcerLocation = 'Left Hand (Back)'"></div>
                            <div class="bodyPart col-3" title="Gluteus" v-on:click="ulcerLocation = 'Gluteus'"></div>
                            <div class="bodyPart col-1" title="Right Hand (Back)" v-on:click="ulcerLocation = 'Right Hand (Back)'"></div>
                        </div>     
                        <div class="row justify-content-center">
                            <div class="bodyPart col-2" title="Left Leg (Back)" v-on:click="ulcerLocation = 'Left Leg (Back)'"></div>
                            <div class="bodyPart col-2" title="Right Leg (Back)" v-on:click="ulcerLocation = 'Right Leg (Back)'"></div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="bodyPart col-2" title="Left Calf" v-on:click="ulcerLocation = 'Left Calf'"></div>
                            <div class="bodyPart col-2" title="Right Calf" v-on:click="ulcerLocation = 'Right Calf'"></div>
                        </div>  
                        <div class="row justify-content-center">
                            <div class="bodyPart col-2" title="Left Foot (Back)" v-on:click="ulcerLocation = 'Left Foot (Back)'"></div>
                            <div class="bodyPart col-2" title="Right Foot (Back)" v-on:click="ulcerLocation = 'Right Foot (Back)'"></div>
                        </div>                      
                    </div>
                    <!-- RIGHT VIEWS -->
                    <div style="padding-top: 18px;" v-if="bodyView === 'right'">
                        <div class="row justify-content-center">
                            <div class="bodyPart col-3" title="Head (Right Side)" v-on:click="ulcerLocation = 'Head (Right Side)'"></div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="bodyPart col-2" title="Right Shoulder (Side)" v-on:click="ulcerLocation = 'Right Shoulder (Side)'"></div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="bodyPart col-1" title="Right Arm (Side)" v-on:click="ulcerLocation = 'Right Arm (Side)'"></div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="bodyPart col-1" title="Pelvis (Right Side)" v-on:click="ulcerLocation = 'Pelvis (Right Side)'"></div>
                        </div>     
                        <div class="row justify-content-center">
                            <div class="bodyPart col-2" title="Right Leg (Side)" v-on:click="ulcerLocation = 'Right Leg (Side)'"></div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="bodyPart col-2" title="Right Fibula (Side)" v-on:click="ulcerLocation = 'Right Fibula (Side)'"></div>
                        </div>  
                        <div class="row justify-content-center">
                            <div class="bodyPart col-2" title="Right Foot (Side)" v-on:click="ulcerLocation = 'Right Foot (Side)'"></div>
                        </div>                      
                    </div>
                    <!-- LEFT VIEW -->
                    <div style="padding-top: 18px;" v-if="bodyView === 'left'">
                        <div class="row justify-content-center">
                            <div class="bodyPart col-3" title="Head (Left Side)" v-on:click="ulcerLocation = 'Head (Left Side)'"></div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="bodyPart col-2" title="Left Shoulder (Side)" v-on:click="ulcerLocation = 'Left Shoulder (Side)'"></div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="bodyPart col-1" title="Left Arm (Side)" v-on:click="ulcerLocation = 'Left Arm (Side)'"></div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="bodyPart col-1" title="Pelvis (Left Side)" v-on:click="ulcerLocation = 'Pelvis (Left Side)'"></div>
                        </div>     
                        <div class="row justify-content-center">
                            <div class="bodyPart col-2" title="Left Leg (Side)" v-on:click="ulcerLocation = 'Left Leg (Side)'"></div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="bodyPart col-2" title="Left Fibula (Side)" v-on:click="ulcerLocation = 'Left Fibula (Side)'"></div>
                        </div>  
                        <div class="row justify-content-center">
                            <div class="bodyPart col-2" title="Left Foot (Side)" v-on:click="ulcerLocation = 'Left Foot (Side)'"></div>
                        </div>                     
                    </div>
                </div>              
            </div>

            <div id="ulcerlocationdivA" v-if="showing === 'oldUlcer'">
                <ul id="ulcerlocations" class="text-center">
                    <li v-for="wound in wounds" :key="wound.woundId">
                        <a v-on:click="ulcerLocation = wound.woundLocation">
                            {{ wound.woundLocation }} 
                        </a>
                    </li>
                </ul>
            </div>  

            <!-- ULCER LOCATION INPUT -->
            <div v-if="ulcerLocation.length > 0" class="row inputs">
                <i class="material-icons col-1">accessibility</i><label for="ulcarLocation" class="sr-only">Ulcer Location</label>
                <input name="ulcerLocation" v-bind:value="ulcerLocation" class="form-control col text-center" required readonly>
            </div>

            <!-- ADD PATIENT BUTTON -->
            <button v-on:click="updatePatient" class="btn btn-lg btn-danger btn-block" type="submit">Update Patient</button>
            
        </div>
      </form>
    </div>
    </div>
</template>

<script>
import instance from "../../services/RESTful";

export default {
  name: "updatepatient",
  data: function() {
    return {
      patient: [],
      wounds: [],
      patientName: "",
      patientID: "",
      length: "",
      bodyView: "",
      ulcerLocation: "",
      image: "",
      imageBLOB: "",
      date: "",
      showing: "",
      patientLocation: ""
    };
  },
  created() {
    //Get patients
    instance
      .get("/dataPatientStatus", {
        params: {
          patId: this.$route.params.patientId
        }
      })
      .then(res => {
        // console.log(res.data)
        this.patient = res.data[0][0];
        (this.patientName = this.patient.fullName),
          (this.patientID = this.$route.params.patientId),
          (this.length = this.patient.woundSize_cm),
          (this.bodyView = this.patient.woundView),
          (this.ulcerLocation = this.patient.woundLocation),
          (this.image = this.patient.imagePath),
          (this.patientLocation = this.patient.locationId);
      })
      .catch(err => {
        // console.error(err)
        alert("An error has occured. The patient was not added. " + err);
      });
    //--------
    File.prototype.convertToBase64 = function(callback) {
      var reader = new FileReader();
      reader.onload = function(e) {
        callback(e.target.result);
      };
      reader.onerror = function(e) {
        callback(null, e);
      };
      reader.readAsDataURL(this);
    };
  },
  mounted() {
    // Populate this.date!
    var today = new Date();
    function twoDigits(d) {
      if (0 <= d && d < 10) return "0" + d.toString();
      if (-10 < d && d < 0) return "-0" + (-1 * d).toString();
      return d.toString();
    }
    this.date =
      today.getUTCFullYear() +
      "-" +
      twoDigits(1 + today.getUTCMonth()) +
      "-" +
      twoDigits(today.getUTCDate()) +
      " " +
      twoDigits(today.getUTCHours()) +
      ":" +
      twoDigits(today.getUTCMinutes()) +
      ":" +
      twoDigits(today.getUTCSeconds());
  },
  methods: {
    getExistingWounds: function() {
      //Get patient wounds
      instance
        .get("/dataUpdatePatientGetWounds", {
          params: {
            patId: this.$route.params.patientId
          }
        })
        .then(res => {
          // console.log('wounds', res.data)
          this.wounds = res.data;
        })
        .catch(err => {
          // console.error(err)
          alert("An error has occured. The patient was not added. " + err);
        });
    },
    updatePatient: function() {
      // Post info in the db
      instance.post("/updatePatientWound", {
          patId: this.patientID,
          imagePath: this.image,
          imageData: this.imageBLOB,
          woundSize: this.length,
          woundView: this.bodyView,
          woundLocation: this.ulcerLocation,
          woundDate: this.date
        })
        .then(res => {
          // console.log(res.data)
          if (res.data.sqlMessage != undefined) {
            alert("ERROR: Patient not added. \n" + res.data.sqlMessage);
          } else {
            alert("Patient " + this.patientName + " has been updated!");
            this.$router.push("/patients");
          }
        })
        .catch(err => {
          // console.error(err)
          alert("An error has occured. The patient was not added. " + err);
        });

      // this.$emit('changeComp', 'patients');
      this.$router.push('/patients')
    },
    convertToBase64: function(event) {
      const file = event.target.files[0];
      const that = this;
      if (file.size > 224288) {
        alert("File is too big!");
        event.target.value = "";
      } else {
        file.convertToBase64(function(base64) {
          that.imageBLOB = base64;
        });
      }
    }
  }
};
</script>

<style src="./style.css" scoped></style>