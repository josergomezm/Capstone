<template id="app">
  <keep-alive>
    <component v-bind:is="component" v-on:changeComp="goTo($event)"></component>
  </keep-alive>
</template>

<script>
import login from './components/login/login.vue'
import locations from './components/locations/locations.vue'
import patients from './components/patients/patients.vue'
import ulcersLocations from './components/ulcersLocations/ulcersLocations.vue'
import newPatient from './components/newPatient/newPatient.vue'
import status from './components/status/status.vue'

export default {
  name: 'app',
  components: {
    login,
    locations,
    patients,
    ulcersLocations,
    newPatient,
    status
  },
  data() {
    return {
      component: 'status'
    }
  },
  methods: {
    goTo:function(nextComp){
      this.component = nextComp;
    }
  }
}
</script>

<style src="./style.css"></style>
