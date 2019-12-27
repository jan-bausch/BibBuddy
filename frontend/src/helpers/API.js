const axios = require('axios');

export default axios.create({
   baseURL: process.env.BACKEND_HOST,
   withCredentials: true
})
