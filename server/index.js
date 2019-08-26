const configs = require('./configs')
const startServer = require('../src/index')

const result = startServer(configs.port)
console.log(result)