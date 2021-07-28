const http = require('http');
const app = require('./app');


const port = process.env.PORT || 8080;

const server = http.createServer(app);
console.log('server ran successfully.')

server.listen(port);










