<template id="app">
  <ulcerlocations/>
</template>

<script>
import login from './components/login/login.vue'
import locations from './components/locations/locations.vue'
import patients from './components/patients/patients.vue'
import ulcerlocations from './components/ulcerlocations/ulcerlocations.vue'

export default {
  name: 'app',
  components: {
    login,
    locations,
    patients,
    ulcerlocations
  }
}
</script>

<style src="./style.css"></style>
