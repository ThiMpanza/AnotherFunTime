const moment = require('moment')

const logger = (req, res, next) => {
  console.log(`What it do baby : ${moment().format('lll')}`)
  next()
}

module.exports = logger
