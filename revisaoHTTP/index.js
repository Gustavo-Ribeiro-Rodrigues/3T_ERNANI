//UTILIZANDO MÓDULOS CJS
//const fs =require('node:fs');
const http =require('node:http');
//const fs =require('node:os');
const PORT =8000;
const server = http.createServer((req, res) => {
  if(req.url === '/') {
    res.writeHead(200, {"content-Type": "text/html"});
    res.write( "<h1>bem vindo(a) à homepage!</h1>"});
    res.end();
  } else if (req.url ==="/sobre") {
     res.writeHead(200, {"content-Type": "text/html"});
  }
});

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
