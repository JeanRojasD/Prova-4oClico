const axios = require('axios')
const config = require('./config')

const instance = axios.create({
    baseURL: `${config.baseURL}/produto`,
    headers: {
        "Content-Type": "application/json",
    }
})

module.exports = instance