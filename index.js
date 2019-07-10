const express = require('express');
const { validateDate } = require('./connector/redis-connector');
const app = express()
const port = 3000

app.get('/', (req, res) => {
    // http://localhost:3000/?id=5d21d19cdf68f60d202c1dac&date=1562660653
    const result = validateDate(req.query.id, req.query.date)
    res.send(result)
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))