module.exports = (app) => {
    const http = require('http');
    const server = http.createServer(app);
    const { Server } = require("socket.io");
    const io = new Server(server);

    io.on('connection', (socket) => {
        socket.on('event-test', require('../events/test_event'));
    });

    server.listen(process.env.PORT, () => {
        console.log('listening on *:' + process.env.PORT);
    });
};