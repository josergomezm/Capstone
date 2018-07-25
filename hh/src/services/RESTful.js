const axios = require('axios')

const instance = axios.create({
    baseURL: `http://${window.location.hostname}:5000`,
    timeout: 30000
  });

export default instance