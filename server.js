const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const greet = require('./module.js');

const hostname = '127.0.0.1';
const port = 3000;

let count = 0;
const favicon = path.join(__dirname, 'favicon.ico');

const server = http.createServer((req, res) => {
  const { pathname }= url.parse(req.url);
  if(req.method === 'GET' && pathname === '/favicon.ico') {
    res.setHeader('Content-Type', 'image/x-icon');
    console.log('got request for icon everytime');
    fs.createReadStream(favicon).pipe(res);
    return ;
  }
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write('Hello World!\n');
  res.write('How are you.\n');
  debugger;
  console.log(`got a req and count is ${count++}.`);
  res.write(`${greet.hello('Singh')} \n`);
  res.end('I am fine.\n');
});

server.listen(port, hostname, () => {
  debugger;
  console.log(port);
  console.log(`Server running at http://${hostname}:${port}/`);
});
