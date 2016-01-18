var socket = io();

socket.on('send', function(msg){
	var $ts = $("<div class='timestamp'>").text(msg['time']);
	var $ar = $("<div class='author'>").text(msg['user']);
	var $ct = $("<div class='content'>").text(msg['content']);
    $('#chatList').append($ts, $ar, $ct);
});