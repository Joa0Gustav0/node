var http = require("http");

http.createServer(function(req, res) {
  res.end(JSON.stringify({
    users: [
      {
        username: "Gustavo",
        password: "gustavo217621u312h"
      },
      {
        username: "Ana",
        password: "Ana217621u312h"
      },
      {
        username: "Pedro",
        password: "pedro217621u312h"
      },
    ]
  }));
}).listen(2409);

console.log("Servidor hospedado.");