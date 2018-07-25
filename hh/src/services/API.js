const axios = require('axios')
const os = require('os')
const instance = axios.create({
    baseURL: `http://${os.hostname}:5000`,
    timeout: 30000
  });


instance.get('/pythonGetPredictions', {
    params: {
        imagePath: 'img1.jpg'
    }
}).then((res)=>{
    console.log(res.data)
    // this.patient = res.data;
}).catch((err)=>{
    console.error(err)
})

// instance.post('/data', {
//     patId: 20,
//     fname: 'Umar',
//     lname: 'Seyal',
//     woundSize: 1.9,
//     woundLocation: 'FRONT'
// }).then((res)=>{
//     console.log(res.data)
// }).catch((err)=>{
//     console.error(err)
// })

// instance.post('/data', {
//     fname: 'Umar',
//     lname: 'Seyal',
//     woundSize: 1.2,
//     woundLocation: 'FRONT'
// }).then((res)=>{
//     console.log(res.data)
// }).catch((err)=>{
//     console.error(err)
// })


// instance.get('/data', {
//     params: {
//         fname: 'Umar'
//     }
// }).then((res)=>{
//     console.log(res.data)
// }).catch((err)=>{
//     console.error(err)
// })