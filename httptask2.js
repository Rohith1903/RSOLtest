const http = require('http');

const hostname = '127.0.0.1';

//const port = 21;

//const port = 23;

const port = 9090;

var a = 1;
var b = 2;
var c = a+b

const server = http.createServer((req, res) => {
  res.statusCode = 200; //server could process 
  res.setHeader('Content-Type', 'text/plain');
  
  res.end(`Addition of two numbers a = ${a} and b = ${b} is :${c}\n`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`); 
  console.log(`Addition of two numbers is :${c}\n`);
});  