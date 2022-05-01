const pptr = require('puppeteer')
let instance = null
module.exports.getBrowserInstance = async function (options) {
  if (!instance) {
    instance = await pptr.launch(options)
  }
  return instance
}
