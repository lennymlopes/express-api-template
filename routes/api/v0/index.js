var express = require('express');
var router = express.Router();

const address = require('./address.js')
const send = require('./send.js')

let db = {}

// Home page route.
router.get('/', function (req, res) {
  res.send(db);
})


router.post('/', (req, res) => {
  db[req.body.key] = req.body.value;
  res.status(201).json({ 
    status: 'OK' 
  });
});

router.get('/address', address)
router.post('/send', send)

module.exports = router;