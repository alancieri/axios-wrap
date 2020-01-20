const Service = require('./service')

module.exports = (url) => {
  return new Service(url)
}
