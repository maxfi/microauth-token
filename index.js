const query = require('micro-query')

module.exports = name => {
  if (!name) throw new Error(`Name of env var must be passed`)
  const token = process.env[name]
  if (!token) throw new Error(`${name} must be set as env var`)

  return fn => (req, res) => {
    if (query(req)[name] !== token) {
      const err = new Error('Unauthorized')
      err.statusCode = 401
      throw err
    }
    return fn(req, res)
  }
}
