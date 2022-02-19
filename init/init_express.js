// Import library
const express = require('express');
// Init ExpressJS
const app = express();
// Allow request with JSON
app.use(express.json());
// Apply routes if needed
//require('./routes')(app);

module.exports = app;