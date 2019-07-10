const redis = require('redis')
const client = redis.createClient()

const validateDate = (userId, date) => {
  console.log(`validate userId: [${userId}] . . .`);

  const promise = new Promise((resolve, reject) => {
    client.get('x', (e, response) => {
      resolve(response)
    })
  });

  return promise
}

module.exports = {
  validateDate,
};
