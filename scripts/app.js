angular.module("todoListApp", [])//[] dependencies
  .controller('mainCtrl', function($scope, dataService){
    $scope.helloConsole = dataService.helloConsole

    $scope.learningNgChange = function () {
      console.log("An input changed")
    }

    dataService.getTodos(function(response) {
      console.log(response.data)
      $scope.todos = response.data
    })

    $scope.deleteTodo = function(todo) {
      dataService.deleteTodo(todo)
    }


  })
.service('dataService', function($http) {
  this.helloConsole = function() {
    console.log("console service")
  }

  this.getTodos = function(callback){
    $http.get('mock/todos.json')
      .then(callback)
    })

  this.deleteTodo = function(todo) {
    console.log("The" + todo.name + "has been deleted!")
  }

  this.saveTodo = function(todo){
    console.log("The " + todo.name + " todo has been saved!")
  }

  }
})
