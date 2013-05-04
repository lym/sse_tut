$(function() {

  $("#container").notify({
    speed: 500,
    expires: false
  });

  var es = new EventSource('/connect');
  es.onmessage = function(event) {
    var msg = $.parseJSON(event.data);
    $("#container").notify("create", "basic-template", {
      title: msg.timestamp,
      text: msg.notification
    });
  }
})
