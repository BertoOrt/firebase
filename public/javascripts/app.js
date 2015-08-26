var myDataRef = new Firebase('https://sfy4t5zx6q4.firebaseio-demo.com/');

$( document ).ready(function () {
  $('#messageInput').keypress(function (e) {
    if (e.keyCode == 13) {
      var name = $('#nameInput').val();
      var text = $('#messageInput').val();
      myDataRef.set({name: name, text: text});
      $('#messageInput').val('');
    }
  });
})
