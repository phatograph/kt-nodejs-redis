const express = require('express');
const {validateDate} = require('./connector/redis-connector3')
const app = express()
const port = 3000

const redis = require('redis')
const client = redis.createClient()

// client.set('5d21d19cdf68f60d202c1dac', '1562660653');  // Manually set redis key/value, needs to be removed in real run

app.get('/', (req, res) => {
  // http://localhost:3000/?id=5d21d19cdf68f60d202c1dac&date=1562660653

  // connector2, uses promise
  // validateDate(req.query.id, req.query.date)
  //   .then((response) => {
  //     res.send(response)
  //   })

  // connector3, uses callback
  validateDate(req.query.id, req.query.date, (response) => {
    res.send(response)
  })
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
