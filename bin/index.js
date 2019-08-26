#!/usr/bin/env node

const program  = require('commander')
const pkg = require('../package.json')
const startServer = require('../src/index')

program
  .version(pkg.version)
  .description(pkg.description)
  .option('-p, --port <port>', 'Select a specifc PORT')
  .parse(process.argv)

if (program.port) {
  const result = startServer(program.port)
  console.log(result)
} else {
  const result = startServer()
  console.log(result)
}