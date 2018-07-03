<template id="status">
    <div id="statusdiv" class="container-fluid">
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
            <div id="ulcerLocation" class="back">
              
            </div>
          </div>
          <!-- PICTURE -->
          <div class="col-md-6 m-auto">
            <img id="ulcerPicture" src="path-to-image" v-bind:alt=" pname + '\'s Ulcer'">
          </div>
        </div>

        <div class="row">
          <!-- MAX-LENGTH -->
          <div class="col-md-6">
            <h2 class="h4">Length: <span>{{ length }} cm</span></h2>
          </div>
          <!-- TISSUE PRESENCE (%) -->
          <div class="col-md-6">
            <h2 class="h4">Tissue Presence (%): <span><br>Healthy: {{ tissueA }}%, Tissue B: {{ tissueB }}%,<br> Tissue C: {{ tissueC }}%, Necrotic: {{ tissueD }}%</span></h2>
          </div>
        </div>
      </div>

      <!-- GRAPH -->
      <div></div>
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
      pname: 'John Doe',
      pid: '999NH5',
      date: '5/2/18',
      location: 'Lower Back',
      length: '15',
      tissueA: '30',
      tissueB: '40',
      tissueC: '29',
      tissueD: '1'
    }
  },
  methods: {
    
  }
}
</script>

<style src="./style.css"></style>
