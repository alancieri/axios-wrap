const api = require('./index')('https://api.oneabee.com/content')
if (!api) {
  console.log('Error: Api not set properly')
  return false
}
console.log(api)
console.log('Test completed successfully')
