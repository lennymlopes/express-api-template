const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const api = require('./routes/api/v0/index.js')

// bodyparser
app.use(express.json());

// routes
app.use('/api/v0', api)

// start server
app.listen(PORT, () => {
  console.log(`Express application listening on port ${PORT}.`);
});