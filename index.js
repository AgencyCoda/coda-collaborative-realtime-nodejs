// Require process, so we can mock environment variables
require('dotenv').config();
// Init Expressjs
const app = require('./init/init_express');
// Init Socket
const socket = require('./init/init_socket')(app);
// Config first Route
app.get('/', (req, res) => {
    res.status(200).send('Hello, world Sale Target Whatsapp API3!').end();
});

module.exports = app;