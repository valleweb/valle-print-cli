const path = require('path')
const express = require('express')
const log = require('debug')('init')
const bodyParser = require('body-parser')
const compression = require('compression')
const helmet = require('helmet')
const cors = require('cors')
const sendZPLforPrinter = require('./ZPLPrint')

const app = express()

/**
 * Middlewares.
 *
 */

log('Loading middlewares...')

app.use(helmet())
app.use(cors())
app.use(compression())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ type: 'application/json'}))

/**
 * Routes.
 *
 */

log('Loading routes...')

app.post('/print' , async (req, res) => {

  const result = await sendZPLforPrinter(
    req.body.ZPLCodeArray,
    req.body.CUPSUrl,
    req.body.userName,
    req.body.jobName,
    req.body.jobId,
  )

  res.status(201)
  res.json(result)
})

/**
 * Load Static files.
 *
 */

app.use('/', express.static(path.resolve(__dirname, '../static')))

/**
 * Start.
 *
 */

log('Starting server...')

const startServer = (port = 3000) => {

  app.listen(port, () => {
    log('Server running on %o', `http://localhost:${port}`)
  })

  return `Server running on http://localhost:${port}`;

}

module.exports = startServer
