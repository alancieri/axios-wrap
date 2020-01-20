const axios = require('axios')

class Service {
  constructor (baseUrl, headers = null) {
    let Headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }

    if (headers) { Object.assign(Headers, headers) }

    let service = axios.create({
      baseURL: baseUrl,
      headers: Headers,
      withCredentials: false
    })
    service.interceptors.request.use(this.handleRequest, this.handleRequestError)
    service.interceptors.response.use(this.handleSuccess, this.handleError)
    this.service = service
  }

  handleRequest (config) {
    return config
  }

  handleRequestError (error) {
    return Promise.reject(error)
  }

  handleSuccess (response) {
    return response.data
  }

  handleError (error) {
    return Promise.reject(error.response)
  }

  async get (url, config) {
    return this.service.get(url, config)
  }

  async delete (url, config) {
    return this.service.delete(url, config)
  }

  async head (url, config) {
    return this.service.head(url, config)
  }

  async options (url, config) {
    return this.service.options(url, config)
  }

  async post (url, data, config) {
    return this.service.post(url, data, config)
  }

  async put (url, data, config) {
    return this.service.put(url, data, config)
  }

  async patch (url, data, config) {
    return this.service.patch(url, data, config)
  }
}

module.exports = Service
