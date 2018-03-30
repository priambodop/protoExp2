var socket = io();
var feedback = document.getElementById("welcomeMessage")

socket.on('connect', function(){
  console.log('Has been connected to socket.io server');
});

socket.on('MessageReceived', function(data){
  console.log(`Data has been received: ${data.from} and ${data.text}`);
});

socket.on('welcomeMessage', function(msg){
  feedback.innerHTML = msg
});
