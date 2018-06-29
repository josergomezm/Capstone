<template id="app">
  <keep-alive>
    <component v-bind:is="component" v-on:changeComp="goTo($event)"></component>
  </keep-alive>
</template>

<script>
import login from './components/login/login.vue'
import locations from './components/locations/locations.vue'
import patients from './components/patients/patients.vue'
import ulcerlocations from './components/ulcerlocations/ulcerlocations.vue'
import newpatient from './components/newpatient/newpatient.vue'

export default {
  name: 'app',
  components: {
    login,
    locations,
    patients,
    ulcerlocations,
    newpatient
  },
  data() {
    return {
      component: 'login'
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
