<template id="newpatient">
    <div id="viewdiv" class="container-fluid">
    <div id="maincontent">
      <img class="mb-4" src="@/assets/speedlogo.png" alt="" width="200">
      <form v-on:submit.prevent="addPatient" class="form-newpatient text-center container-fluid">

        <h1 class="h3 font-weight-bold">ADD NEW PATIENT</h1>

        <div id="inputsdiv" class="row justify-content-center">

            <!-- ------------------------------------------------------ LEFTSIDE -------------------------------------------------------------- -->
            <div class="col-md-5">

            <!-- PATIENT ID INPUT -->
            <div class="row inputs">
                <i class="material-icons col-1">fingerprint</i><label for="inputPatientID" class="sr-only">Patient ID</label>
                <input v-model="patientID" id="inputPatientID" class="form-control col offset-1" placeholder="Patient ID" maxlength="11" required autofocus>
                <span class="validity mr-3 mt-3"></span>
            </div>

            <!-- PATIENT NAME INPUT -->
            <div class="row inputs">
                <i class="material-icons col-1">perm_identity</i><label for="inputPatientName" class="sr-only">Patient Full Name</label>
                <input v-model="patientName" id="inputPatientName" class="form-control col offset-1" placeholder="Patient Full Name" pattern=".{2,}" title="Two or more characters" maxlength="1000" required>
                <span class="validity mr-3 mt-3"></span>
            </div>

            <!-- PATIENT PHONE# INPUT -->
            <div class="row inputs">
                <i class="material-icons col-1">call</i><label for="inputPatientPhone" class="sr-only">Patient Phone</label>
                <input v-model="patientPhone" type="number" id="inputPatientPhone" class="form-control col offset-1" placeholder="Patient Phone" min="1000000000" max="9999999999999" required>
                <span class="validity mr-3 mt-3"></span>
            </div>

            <!-- PATIENT ADDRESS INPUT -->
            <div class="row inputs">
                <i class="material-icons col-1">place</i><label for="inputPatientAddress" class="sr-only">Patient Address</label>
                <input v-model="patientAddress" id="inputPatientAddress" class="form-control col offset-1" placeholder="Patient Address" pattern=".{6,}" title="Six or more characters" maxlength="100" required>
                <span class="validity mr-3 mt-3"></span>
            </div>

            <!-- PATIENT CITY INPUT -->
            <div class="row inputs">
                <i class="material-icons col-1">location_city</i><label for="inputPatientCity" class="sr-only">Patient City</label>
                <input v-model="patientCity" id="inputPatientCity" class="form-control col offset-1" pattern=".{3,}" title="Three or more characters" placeholder="Patient City" maxlength="100" required>
                <span class="validity mr-3 mt-3"></span>
            </div>

            <!-- PATIENT STATE INPUT -->
            <div class="row inputs">
                <i class="material-icons col-1">map</i><label for="inputPatientState" class="sr-only">Patient State</label>
                <select v-model="patientState" id="inputPatientState" class="form-control col offset-1 h-auto" name="inputPatientState" required>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                    <option value="AS">American Samoa</option>
                    <option value="GU">Guam</option>
                    <option value="MP">Northern Mariana Islands</option>
                    <option value="PR">Puerto Rico</option>
                    <option value="UM">United States Minor Outlying Islands</option>
                    <option value="VI">Virgin Islands</option>
                </select>				
            </div>

            <!-- PATIENT ZIP INPUT -->
            <div class="row inputs">
                <i class="material-icons col-1">import_contacts</i><label for="inputPatientZip" class="sr-only">Patient Zip</label>
                <input v-model="patientZip" type="number" id="inputPatientZip" class="form-control col offset-1" placeholder="Patient Zip" min="10000" max="99999" required>
                <span class="validity mr-3 mt-3"></span>
            </div>

            <!-- PATIENT SSN INPUT -->
            <div class="row inputs">
                <i class="material-icons col-1">vpn_key</i><label for="inputPatientSSN" class="sr-only">Patient SSN</label>
                <input v-model="patientSSN" type="password" id="inputPatientSSN" class="form-control col offset-1" placeholder="Patient SSN" pattern=".{9}" title="SSN must be 9 digits (Numbers only)" maxlength="9" required>
                <span class="validity mr-3 mt-3"></span>
            </div>

            <!-- PATIENT InsuranceType INPUT -->
            <div class="row inputs">
                <i class="material-icons col-1">security</i><label for="inputPatientInsuranceType" class="sr-only">Patient InsuranceType</label>
                <select v-model="inputPatientInsuranceType" class="form-control col offset-1 h-auto" name="inputPatientInsuranceType" required>
                    <option value="Medicare">Medicare</option>
                    <option value="Medicaid">Medicaid</option>
                    <option value="Private">Private</option>
                </select>
            </div>

            </div>
            <!-- ------------------------------------------------------ RIGHTSIDE -------------------------------------------------------------- -->
            <div class="col-md-5 offset-md-1">    
            
            <!-- PATIENT InsuranceName INPUT -->
            <div class="row inputs">
                <i class="material-icons col-1">accessible_forward</i><label for="inputPatientInsuranceName" class="sr-only">Patient InsuranceName</label>
                <select v-model="inputPatientInsuranceName" class="form-control col offset-1 h-auto" name="inputPatientInsuranceName" required>
                    <option value="Passport Health Group">Passport Health Group</option>
                    <option value="Unitedhealth Group">Unitedhealth Group</option>
                    <option value="Wellpoint Inc. Group">Wellpoint Inc. Group</option>
                    <option value="Kaiser Foundation Group">Kaiser Foundation Group</option>
                    <option value="Humana Group">Humana Group</option>
                    <option value="Aetna Group">Aetna Group</option>
                    <option value="HCSC Group">HCSC Group</option>
                    <option value="Cigna Health Group">Cigna Health Group</option>
                    <option value="Highmark Group">Highmark Group</option>
                </select>
            </div>                        

            <!-- ULCER LENGTH INPUT -->
            <div class="row inputs">
                <i class="material-icons col-1">straighten</i><label for="maxLength" class="sr-only">Max length of the ulcer (cm)</label>
                <input v-model="length" type="number" id="maxLength" class="form-control col offset-1" placeholder="Max length of the ulcer (cm)" max="999" required>
                <span class="validity mr-3 mt-3"></span>
            </div>

            <!-- UPLOAD IMAGE INPUT -->
            <h2 class="h5 mt-2 font-weight-bold">Upload Picture</h2>

            <div class="row inputs">
                <i class="material-icons col-1">photo_camera</i><label for="ulcarImage" class="sr-only">Upload Picture</label>
                <input type="file" name="ulcerImage" class="form-control col offset-1" accept="image/*" required>
                <span class="validity mr-3 mt-3"></span>
            </div>

            <!-- ULCERLOCATION PICKER -->
            <div id="ulcerlocationdiv">
                <h2 class="h5 mt-3 font-weight-bold">Where is the ulcer located?</h2>
                <div class="row body-view">
                    <div class="col-3" v-on:click="bodyView = 'FRONT'">FRONT</div>
                    <div class="col-3" v-on:click="bodyView = 'BACK'">BACK</div>
                    <div class="col-3" v-on:click="bodyView = 'RIGHT'">RIGHT</div>
                    <div class="col-3" v-on:click="bodyView = 'LEFT'">LEFT</div>
                </div>
                <div id="bodyfig" v-bind:class="bodyView">
                    <!-- FRONT VIEW -->
                    <div style="padding-top: 22px;" v-if="bodyView === 'FRONT'">
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
                    <div style="padding-top: 22px;" v-if="bodyView === 'BACK'">
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
                    <div style="padding-top: 18px;" v-if="bodyView === 'RIGHT'">
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
                    <div style="padding-top: 18px;" v-if="bodyView === 'LEFT'">
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
                <span class="validity mr-3 mt-3"></span>
            </div>

            </div>
        </div>
        <!-- ADD PATIENT BUTTON -->
        <button class="btn btn-lg btn-danger btn-block" type="submit">Add Patient</button>
      </form>
    </div>
    </div>
</template>

<script>
import instance from '../../services/RESTful'

export default {
    name: 'newpatient',
    data:function() {
        return {
            // WOUND VARS
            length: '',
            bodyView: '',
            location: '',
            image: '',
            date: '',
            // PATIENT VARS
            patientID: '',
            patientName: '',
            patientPhone: '',
            patientAddress: '',
            patientCity: '',
            patientState: '',
            patientZip: '',
            patientSSN: '',
            inputPatientInsuranceType: '',
            inputPatientInsuranceName: ''
        }
    },
    mounted(){
        // Populate this.date!
        var today = new Date();
        // var dd = today.getDate();
        // var mm = today.getMonth()+1; //January is 0!
        // var yyyy = today.getFullYear();
        // if(dd<10) {
        //     dd = '0'+dd
        // }
        // if(mm<10) {
        //     mm = '0'+mm
        // }
        // this.date = mm + '/' + dd + '/' + yyyy;

        function twoDigits(d) {
            if(0 <= d && d < 10) return "0" + d.toString();
            if(-10 < d && d < 0) return "-0" + (-1*d).toString();
            return d.toString();
        }

        this.date = today.getUTCFullYear() + "-" + twoDigits(1 + today.getUTCMonth()) + "-" + twoDigits(today.getUTCDate()) + " " + twoDigits(today.getUTCHours()) + ":" + twoDigits(today.getUTCMinutes()) + ":" + twoDigits(today.getUTCSeconds());

    },
    methods: {
        addPatient:function(){
            //Do stuff
            if(this.location.length == 0){
                alert("Please specify where the ulcer is located");
            }
            else
            instance.post('/data', {
                patId: this.patientID,
                patName: this.patientName,
                patPhone: this.patientPhone,
                patAddress: this.patientAddress,
                patCity: this.patientCity,
                patState: this.patientState,
                patZip: this.patientZip,
                patSSN: this.patientSSN,
                patIType: this.inputPatientInsuranceType,
                patIName: this.inputPatientInsuranceName,
                woundDate: this.date,
                imagePath: this.image,
                woundSize: this.length,
                woundView: this.bodyView,
                woundLocation: this.location
            }).then((res)=>{
                console.log(res.data)
                if(res.data.sqlMessage != undefined){
                    alert("ERROR: Patient not added. \n" + res.data.sqlMessage)
                }
                else {
                    alert("Patient " + this.patientName + " has been added!");
                    this.$router.push('/patients')
                }
            }).catch((err)=>{
                console.error(err)
                alert("An error has occured. The patient was not added");
            })            
        }
    }
}
</script>

<style src="./style.css" scoped></style>