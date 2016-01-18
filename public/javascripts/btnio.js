$('#newChat').submit(function(){
    console.log('hello');
    socket.emit('send', 
        {
            'content': $('#inputChat').val(), 
            'user': $('#user').text(), 
            'time': moment().format('MMMM Do YYYY, h:mm:ss a')
        });
    return true
});