<template id="app">
  <keep-alive>
    <component v-bind:is="component"></component>
  </keep-alive>
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
  },
  data() {
    return {
      component: 'login'
    }
  }
}
</script>

<style src="./style.css"></style>
