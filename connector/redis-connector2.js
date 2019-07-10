const redis = require('redis')
const client = redis.createClient()

const validateDate = (userId, date) => {
  console.log(`validate userId: [${userId}] . . .`);

  const promise = new Promise((resolve, reject) => {
    client.get(userId, (e, currentDate) => {
      if (date == currentDate) {
        resolve({
          status: 200,
        })
      }
      else if (date < currentDate) {
        resolve({
          status: 400,
        })
      }
      else {
        saveData(userId, date)
          .then((newDate) => {
            resolve({
              status: 202,
              date: newDate,
            })
          })
      }
    })
  });

  return promise
}

const saveData = (userId, date) => {
  const promise = new Promise((resolve, reject) => {
    client.set(userId, date, (err, reply) => {
      resolve(date)
    })
  })

  return promise
}

module.exports = {
  validateDate,
};
