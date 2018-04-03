var socket = io();


socket.on('connect', function(){
  console.log('Connected to socket.io server');
});

$('#chatForm').on('submit', function(e){
  e.preventDefault();
  socket.emit('createMessage', {
    from: 'user',
    text: $('[name=messages]').val()
  });
});

socket.on('messageReceived', function(msg){
  console.log('got new message:', msg);

  var listMessages = $('<li></li>');
  listMessages.text(`${msg.from}: ${msg.text}`);
  $('#chatList').append(listMessages);
});
