const request = require('request')

function check(optionParam, cb) {
  request(optionParam, (err, res, body) => {
    if (!err && response.statusCode == 200) {
      return cb(true, body)
    }

    return cb(false, {})
  })
}

module.exports = {
  check: check
}
