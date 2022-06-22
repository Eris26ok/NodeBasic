const http = require("http")
const server = http.createServer();
server.on('request', function (request, response) {
  const message = 'Sucesso';

  response.write(message);
  response.end();
});

const PORT = process.env.PORT || 4270;
server.listen(PORT);
console.log('Servidor roodando');