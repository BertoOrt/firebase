app.controller("currency", ["$scope", "$firebaseObject",
  function($scope, $firebaseObject) {
    var coinRef = new Firebase("https://publicdata-cryptocurrency.firebaseio.com");
    $scope.coinData = $firebaseObject(coinRef);
    $scope.type = 'bitcoin'
    $scope.number = 1;
    }
]);

app.controller("todo", ["$scope", "$firebaseArray",
  function($scope, $firebaseArray) {
    var todoRef = new Firebase("https://torrid-inferno-625.firebaseio.com/todo/");
    $scope.todos = $firebaseArray(todoRef);
    $scope.newTodo = {text:'', completed: false}
    $scope.addTodo = function () {
      $scope.todos.$add($scope.newTodo).then(function () {
        $scope.newTodo.text = '';
      })
    }
    $scope.removeTodo = function (todo) {
      $scope.todos.$remove(todo)
    }
    $scope.complete = function (todo) {
      todo.completed = !todo.completed
      $scope.todos.$save(todo)
    }
    }
]);

app.controller('chat', ["$scope", "$firebaseArray", function ($scope, $firebaseArray) {
  var chatRef = new Firebase("https://torrid-inferno-625.firebaseio.com/chat/");
  $scope.chats = $firebaseArray(chatRef);
  $scope.newChat = {message: '', name: '', url: '', edit: false};
  $scope.addChat = function () {
    $scope.chats.$add($scope.newChat).then(function () {
      $scope.newChat.message = '';
    })
  }
  $scope.removeChat = function (chat) {
    $scope.chats.$remove(chat)
  }
  $scope.updateChat = function(chat) {
    chat.edit = false;
    $scope.chats.$save(chat)
  }
}])
