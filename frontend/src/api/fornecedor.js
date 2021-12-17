const axios = require('axios')
const config = require('./config')

const instance = axios.create({
    baseURL: `${config.baseURL}/fornecedor`,
    headers: {
        "Content-Type": "application/json",
    }
})

module.exports = instance