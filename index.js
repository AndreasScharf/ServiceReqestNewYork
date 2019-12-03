const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static(__dirname +'/client'));
app.get('*', (req, res)=>{
    res.sendFile(__dirname + '/client/index.html');

});

io.on('connection', function(socket){
});

http.listen(80, ()=>{
  console.log('listening on *:80');
});
