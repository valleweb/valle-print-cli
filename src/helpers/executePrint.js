const ipp = require('ipp')

/**
 * Promisify the ipp library
 *
 */

const executePrint = (CUPSUrl, configs) => {
  
  const printer = ipp.Printer(CUPSUrl)

  return new Promise((resolve, reject) => {

    printer.execute("Print-Job", configs, err => {

      err 
      ? reject(false)
      : resolve(true)

    })

  })
}

module.exports = executePrint