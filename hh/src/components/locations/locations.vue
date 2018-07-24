<template id="locations">
  <div id="viewdiv" class="container-fluid">
    <div id="maincontent">

      <img class="mb-4" src="@/assets/speedlogo.png" alt="" width="200">
      <button type="button" id="logoutbtn" class="mt-4 btn btn-dark float-right position-relative" v-on:click="logOut">Logout</button>

      <div class="text-center">
        
        <h1 class="h3 mb-4 font-weight-bold">Locations</h1>

        <div class="container">
          <ul id="locations" class="text-center">
            <li v-for="location in locations" :key="location.locationId" class="row">
              <a v-on:click="goToPatients(location.locationId)" class="col"> {{ location.locationId + ' - ' + location.locationName }} </a>
            </li>
          </ul>          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import instance from '../../services/RESTful'
import AuthService from '../../auth/AuthService'

export default {
  name: 'locations',
  props: ['auth'],
  data () {
    return {
      locations: [],
      locationClicked: ''
    }
  },
  created(){
    const auth = new AuthService()
    const { admin } = auth
    //Get patients
    //Depending if admin or nurse load/populate locations
    instance.get('/dataLocations', {
        params: {
            restrictedLocation: auth.admin
        }
    }).then((res)=>{
        // console.log(res.data)
        this.locations = res.data;
    }).catch((err)=>{
        console.error(err)
    })
  },
  methods: {
    goToPatients(somelocation){
      //get location clicked and pass it to App.vue (global variable)
      this.locationClicked = somelocation;
      // if (sessionStorage.getItem('locationClicked')){
      //   this.$emit('callParent', sessionStorage.getItem('locationClicked'));
      // }else{
        sessionStorage.setItem('locationClicked', this.locationClicked);
        this.$emit('callParent', this.locationClicked);
      // }
      //route to patients.vue
      this.$router.push('/patients')
    },
    logOut(){
      //Logout
      const auth = new AuthService()
      const { logout } = auth
      auth.logout()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./style.css" scoped></style>
