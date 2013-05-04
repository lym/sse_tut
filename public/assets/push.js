$(function() {
  $('#send').click(function(event) {
    event.preventDefault();

    var notification = { message: $('#message').val()};

    $.post( '/push', notification, 'json');
  })
});
