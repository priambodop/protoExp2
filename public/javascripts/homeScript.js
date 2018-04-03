var gameArea = $(".game-area");

var homeHtml = $('.home').html();
gameArea.html(homeHtml);

function toSync(){
  var syncHtml = $('.sync').html();
  gameArea.html(syncHtml);
}

function toChar(){
  var charHtml = $('.char').html();
  gameArea.html(charHtml);
}
