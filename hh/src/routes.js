import loginPage from './components/loginPage/loginPage.vue';
import locations from './components/locations/locations.vue';
import patients from './components/patients/patients.vue';
import newPatient from './components/newPatient/newPatient.vue';
import updatePatient from './components/updatePatient/updatePatient.vue';
import status from './components/status/status.vue';
import Router from 'vue-router'

// export default [
//     {path:'/', component: loginPage},
//     {path: '/locations', component: locations},
//     {path: '/patients', component: patients},
//     {path: '/newPatient', component: newPatient},
//     {path: '/updatePatient', component: updatePatient},
//     {path: '/status', component: status}
// ]

export default new Router({
    mode: 'history', // enable history mode
    routes: [
        {path:'/', component: loginPage},
        {path: '/patients', component: patients},
        {path: '/newPatient', component: newPatient},
        {path: '/updatePatient', component: updatePatient},
        {path: '/status', component: status},
        {
            path: '/locations',
            name: 'locations',
            component: locations
        },
        {
            path: '*',
            redirect: '/home'
        }
    ]
  })