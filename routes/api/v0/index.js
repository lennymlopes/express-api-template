const express = require('express');
const router = express.Router();

const address = require('./address.js')
const send = require('./send.js')
const database = require('./database.js')

// mock database
const db = database()

// default route, get all db entries
router.get('/', (req, res) => res.send(db.all()))

// get db entry by id
router.get('/:id', (req, res) => res.send(db.read(req.params.id)))

// write entry to db
router.post('/', (req, res) => res.status(201).json(db.write(req.body.key, req.body.value)))

// get address
router.get('/address', address)

// send message
router.post('/send', send)



module.exports = router;