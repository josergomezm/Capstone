import loginPage from './components/loginPage/loginPage.vue';
import locations from './components/locations/locations.vue';
import patients from './components/patients/patients.vue';
import newPatient from './components/newPatient/newPatient.vue';
import updatePatient from './components/updatePatient/updatePatient.vue';
import status from './components/status/status.vue';
import callback from './components/callback/callback.vue'
import Vue from 'vue';
import Router from 'vue-router';
import VueResource from 'vue-resource';

Vue.use(Router)
Vue.use(VueResource)

import AuthService from './auth/AuthService';
const auth = new AuthService();
console.log('router-auth', auth);

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
    routes: [{
            path: '/',
            component: loginPage,
        },
        {
            path: '/patients',
            component: patients,
            beforeEnter: (to, from, next) => {
                if (!auth.isAuthenticated()) {
                    alert('Please Login First!')
                    next('/')
                } else {
                    next()
                }
            }
        },
        {
            path: '/newPatient',
            component: newPatient,
            beforeEnter: (to, from, next) => {
                if (!auth.isAuthenticated()) {
                    alert('Please Login First!')
                    next('/')
                } else {
                    next()
                }
            }
        },
        {
            path: '/updatePatient/:patientId',
            component: updatePatient,
            beforeEnter: (to, from, next) => {
                if (!auth.isAuthenticated()) {
                    alert('Please Login First!')
                    next('/')
                } else {
                    next()
                }
            }
        },
        {
            path: '/status/:patientId',
            component: status,
            beforeEnter: (to, from, next) => {
                if (!auth.isAuthenticated()) {
                    alert('Please Login First!')
                    next('/')
                } else {
                    next()
                }
            }
        },
        {
            path: '/callback',
            name: 'callback',
            component: callback
        },
        {
            path: '/locations',
            name: 'locations',
            component: locations
            ,
            beforeEnter: (to, from, next) => {
                if (!auth.isAuthenticated()) {
                    alert('Please Login First!')
                    next('/')
                } else {
                    next()
                }
            }
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})