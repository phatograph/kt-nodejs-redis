const redis = require('redis')
const client = redis.createClient()

const validateDate = (userId, date, callback) => {
  client.get(userId, (e, currentDate) => {
    if (date == currentDate) {
      callback({
        status: 200,
      })
    }
    else if (date < currentDate) {
      callback({
        status: 400,
      })
    }
    else {
      saveData(userId, date, callback)
    }
  })
}

const saveData = (userId, date, callback) => {
  client.set(userId, date, (err, reply) => {
    callback({
      status: 202,
      date,
    })
  })
}

module.exports = {
  validateDate,
};
