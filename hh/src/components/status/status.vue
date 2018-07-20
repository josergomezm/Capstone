<template id="status">
    <div id="viewdiv" class="container-fluid">
    <div id="maincontent">

      <img class="mb-4" src="@/assets/speedlogo.png" alt="" width="200">

      <div class="container text-center">

        <h1 class="h3 mb-4 font-weight-bold">Patient Status</h1>

        <div class="row">
          <!-- PATIEN NAME -->
          <div class="col-md-4">
            <h2 class="h4">Patient Name: <span>{{ pname }}</span></h2>
          </div>
          <!-- PATIENT ID -->
          <div class="col-md-4">
            <h2 class="h4">Patient ID: <span>{{ pid }}</span></h2>
          </div>
          <!-- DATE -->
          <div class="col-md-4">
            <h2 class="h4">Date: <span>{{ date }}</span></h2>
          </div>
        </div>

        <div class="row">
          <!-- LOCATION -->
          <div class="col-md-6">
            <h2 class="h4">Location: <span>{{ location }}</span></h2>
            <div id="ulcerLocation" v-bind:class="locationSide">
              <!-- FRONT VIEW -->
              <div style="padding-top: 22px;" v-if="locationSide === 'FRONT'">
                  <div class="row justify-content-center">
                      <div class="bodyPart col-2" title="Head (Front)"></div>
                  </div>
                  <div class="row justify-content-center">
                      <div class="bodyPart col-2" title="Right Shoulder (Front)"></div>
                      <div class="bodyPart col-2" title="Chest"></div>
                      <div class="bodyPart col-2" title="Left Shoulder (Front)"></div>
                  </div>
                  <div class="row justify-content-center">
                      <div class="bodyPart col-1" title="Right Arm (Front)"></div>
                      <div class="bodyPart col-3" title="Abdomen"></div>
                      <div class="bodyPart col-1" title="Left Arm (Front)"></div>
                  </div>
                  <div class="row justify-content-center">
                      <div class="bodyPart col-1" title="Right Hand (Front)"></div>
                      <div class="bodyPart col-3" title="Pelvis (Front)"></div>
                      <div class="bodyPart col-1" title="Left Hand (Front)"></div>
                  </div>     
                  <div class="row justify-content-center">
                      <div class="bodyPart col-2" title="Right Leg (Front)"></div>
                      <div class="bodyPart col-2" title="Left Leg (Front)"></div>
                  </div>
                  <div class="row justify-content-center">
                      <div class="bodyPart col-2" title="Right Crus"></div>
                      <div class="bodyPart col-2" title="Left Crus"></div>
                  </div>  
                  <div class="row justify-content-center">
                      <div class="bodyPart col-2" title="Right Foot (Front)"></div>
                      <div class="bodyPart col-2" title="Left Foot (Front)"></div>
                  </div>                       
              </div>
              <!-- BACK VIEW -->
              <div style="padding-top: 22px;" v-if="locationSide === 'BACK'">
                  <div class="row justify-content-center">
                      <div class="bodyPart col-2" title="Head (Back)"></div>
                  </div>
                  <div class="row justify-content-center">
                      <div class="bodyPart col-2" title="Left Shoulder (Back)"></div>
                      <div class="bodyPart col-2" title="Back"></div>
                      <div class="bodyPart col-2" title="Right Shoulder (Back)"></div>
                  </div>
                  <div class="row justify-content-center">
                      <div class="bodyPart col-1" title="Left Arm (Back)"></div>
                      <div class="bodyPart col-3" title="Lower Back"></div>
                      <div class="bodyPart col-1" title="Right Arm (Back)"></div>
                  </div>
                  <div class="row justify-content-center">
                      <div class="bodyPart col-1" title="Left Hand (Back)"></div>
                      <div class="bodyPart col-3" title="Gluteus"></div>
                      <div class="bodyPart col-1" title="Right Hand (Back)"></div>
                  </div>     
                  <div class="row justify-content-center">
                      <div class="bodyPart col-2" title="Left Leg (Back)"></div>
                      <div class="bodyPart col-2" title="Right Leg (Back)"></div>
                  </div>
                  <div class="row justify-content-center">
                      <div class="bodyPart col-2" title="Left Calf"></div>
                      <div class="bodyPart col-2" title="Right Calg"></div>
                  </div>  
                  <div class="row justify-content-center">
                      <div class="bodyPart col-2" title="Left Foot (Back)"></div>
                      <div class="bodyPart col-2" title="Right Foot (Back)"></div>
                  </div>                
              </div>
              <!-- RIGHT VIEWS -->
              <div style="padding-top: 18px;" v-if="locationSide === 'RIGHT'">
                  <div class="row justify-content-center">
                      <div class="bodyPart col-3" title="Head (Right Side)"></div>
                  </div>
                  <div class="row justify-content-center">
                      <div class="bodyPart col-2" title="Right Shoulder (Side)"></div>
                  </div>
                  <div class="row justify-content-center">
                      <div class="bodyPart col-1" title="Right Arm (Side)"></div>
                  </div>
                  <div class="row justify-content-center">
                      <div class="bodyPart col-1" title="Pelvis (Right Side)"></div>
                  </div>     
                  <div class="row justify-content-center">
                      <div class="bodyPart col-2" title="Right Leg (Side)"></div>
                  </div>
                  <div class="row justify-content-center">
                      <div class="bodyPart col-2" title="Right Fibula (Side)"></div>
                  </div>  
                  <div class="row justify-content-center">
                      <div class="bodyPart col-2" title="Right Foot (Side)"></div>
                  </div>                   
              </div>
              <!-- LEFT VIEW -->
              <div style="padding-top: 18px;" v-if="locationSide === 'LEFT'">
                  <div class="row justify-content-center">
                      <div class="bodyPart col-3" title="Head (Left Side)"></div>
                  </div>
                  <div class="row justify-content-center">
                      <div class="bodyPart col-2" title="Left Shoulder (Side)"></div>
                  </div>
                  <div class="row justify-content-center">
                      <div class="bodyPart col-1" title="Left Arm (Side)"></div>
                  </div>
                  <div class="row justify-content-center">
                      <div class="bodyPart col-1" title="Pelvis (Left Side)"></div>
                  </div>     
                  <div class="row justify-content-center">
                      <div class="bodyPart col-2" title="Left Leg (Side)"></div>
                  </div>
                  <div class="row justify-content-center">
                      <div class="bodyPart col-2" title="Left Fibula (Side)"></div>
                  </div>  
                  <div class="row justify-content-center">
                      <div class="bodyPart col-2" title="Left Foot (Side)"></div>
                  </div>                      
              </div>
            </div>
          </div>
          <!-- PICTURE -->
          <div class="col-md-6 m-auto">
            <img id="ulcerPicture" src="path-to-image" v-bind:alt=" pname + '\'s Ulcer'">
          </div>
        </div>

        <div class="row">
          <!-- MAX-LENGTH & AREA -->
          <div class="col-md-6">
            <h2 class="h4">Length: <span>{{ length }} cm</span></h2>
            <h2 class="h4">Area: <span>{{ ulcerArea }} cm<sup>2</sup></span></h2>
          </div>
          <!-- TISSUE PRESENCE (%) -->
          <div class="col-md-6">
            <h2 class="h4">Tissue Presence (%): <span><br>Epithelial: {{ tissueA }}%, Granulation: {{ tissueB }}%,<br> Slough: {{ tissueC }}%, Necrotic: {{ tissueD }}%</span></h2>
          </div>
        </div>

        <!-- GRAPH -->
        <canvas class="mt-4" id="ulcerChart"></canvas>

        <!-- UPDATE AND BACK TO PATEINTS BUTTONS -->
        <!-- NEW/EXISTING BUTTONS -->
        <div class="row mb-2 justify-content-center">
            <button class="btn btn-danger col-sm-5 opt-btn" type="button" v-on:click="updatePatient">Update</button>
            <button class="btn btn-danger col-sm-5 opt-btn" type="button" v-on:click="backToPatients">Patients List</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'status',
  components: {
    
  },
  data() {
    return {
      //Latests Data
      pname: 'John Doe',
      pid: '999NH5',
      date: '5/2/18',
      locationSide: 'BACK',
      location: 'Lower Back',
      length: '15',
      ulcerArea: '180',
      tissueA: '30', 
      tissueB: '40',
      tissueC: '29',
      tissueD: '1',
      //Graph Variables
      aDates: ['5/2/18','5/7/18','5/11/18','5/16/18','5/22/18','5/28/18'],
      aUlcerArea: ['74','70','68','60','51','32'],
      aTissueA: ['10','7','9','15','20','30'], 
      aTissueB: ['30','22','34','28','20','10'],
      aTissueC: ['12','14','16','9','8','7'],
      aTissueD: ['4','3','2','1','.5','0'],
    }
  },
  methods: {
    updatePatient:function(){
        // Do something
        //Then:
        // this.$emit('changeComp', 'updatePatient');
        this.$router.push('/updatePatient')
    },
    backToPatients:function(){
        // Do something
        //Then:
        // this.$emit('changeComp', 'patients');
        this.$router.push('/patients')
    }
  },
  created(){
    //Populate all the variables!
  },
  mounted() {
    // Highlight Ulcer Location
    var x = $("div[title='"+ this.location +"']");
    x.css("border", "inset 2px #AD0000");
    // --------------- MAKE CHART ---------------- //
    var ctx = document.getElementById("ulcerChart").getContext('2d');
    //Global Settings:
    Chart.defaults.global.defaultFontFamily = 'Poppins';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = '#000';

    var ulcerChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.aDates,
        datasets: 
          [{
            label: 'Area',
              data: this.aUlcerArea,
              backgroundColor: [
                  'rgba(255, 159, 64, 0)'
              ],
              borderColor: [
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1.1
          },
          {
              label: 'Epithelial Tissue',
              data: this.aTissueA,
              backgroundColor: [
                  'rgba(255, 99, 132, 0)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)'
              ],
              borderWidth: 1
          },
          {
            label: 'Granulation Tissue',
              data: this.aTissueB,
              backgroundColor: [
                  'rgba(54, 162, 235, 0)'
              ],
              borderColor: [
                  'rgba(54, 162, 235, 1)'
              ],
              borderWidth: 1
          },
          {
            label: 'Slough',
              data: this.aTissueC,
              backgroundColor: [
                  'rgba(255, 206, 86, 0)'
              ],
              borderColor: [
                  'rgba(255, 206, 86, 1)'
              ],
              borderWidth: 1
          },
          {
            label: 'Necrotic Tissue',
              data: this.aTissueD,
              backgroundColor: [
                  'rgba(75, 192, 192, 0)'
              ],
              borderColor: [
                  'rgba(0, 0, 0, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      } 
    });
  }
}
</script>

<style src="./style.css"></style>
