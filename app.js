var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var path = require('path');

var users = [];
var connections = [];

server.listen(process.env.PORT || 8000);

console.log('Ahoy! Server running...');

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'index.html'));
})

/*
io.on('connection', function(socket){
  connections.push(socket);
  console.log('[SERVER] : %s sockets connected !', connections.length);

  // Disconnect
  socket.on('disconnect', function(){
    connections.splice(connections.indexOf(socket), 1);
    console.log('[SERVER] : %s sockets connected!', connections.length);
  })
});

*/


io.on('connection', function(socket){
  socket.on('push', function(msg){
    io.emit('push', msg);
  });
});
