const printerLog = require('debug')('ZPLprinter')
const normalizeZPL = require('./helpers/normalizeZPL')
const executePrint = require('./helpers/executePrint')

const sendZPLforPrinter = async (
  ZPLCodeArray,
  CUPSUrl,
  userName = 'Sistema valle',
  jobName = 'Relatório',
  jobId = 0
  ) => {

  try {

    const ZPLCode = normalizeZPL(ZPLCodeArray)
    const binaryStream = Buffer.from(ZPLCode)

    const configs = {
      "operation-attributes-tag": {
        "requesting-user-name": userName,
        "job-name": jobName,
        "document-format": "application/vnd.cups-raw",
        "job-id": jobId,
      }, data: binaryStream
    }

    try {

      const result = await executePrint(CUPSUrl, configs)

      printerLog('Job submitted uccessfully')
      return { success: result }

    } catch (err) {

      printerLog('ERROR: The job was submitted, but an error occurred')
      return { success: err }

    }

  } catch(err) {

    printerLog('ERROR: Invalid job data or printer not found')
    return { success: false }

  }

}

module.exports = sendZPLforPrinter