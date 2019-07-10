const redis = require('redis')
const client = redis.createClient()

const validateDate = (userId, date, callback) => {
  console.log(`validate userId: [${userId}] . . .`);

  client.get('x', (e, response) => {
    callback(response)
  })
}

module.exports = {
  validateDate,
};
