const http = require('http');
const express = require('express');
const aplicacao = express();

const servidorHttp = http.createServer(aplicacao);
const io = require('socket.io')(servidorHttp);

io.addListener('connection', (socket) => {
  console.log('um usuário conectou');
  socket.addListener('nova mensagem', (msg) => {
    io.emit('nova mensagem', msg);
  });
});

aplicacao.use(express.static('public'));
//put your ipv4 number after set the port. '111.111.1.1' you can see the number in 'cmd > ipconfig > ipv4'
servidorHttp.listen(1000, '111.111.1.1');