'use strict'

angular.module("todoListApp")
.service('dataService', function($http) {
  //this refers to the service itself
  this.helloConsole = function() {
    console.log("console service")
  }

  this.getTodos = function(callback){
    $http.get('mock/todos.json')
      .then(callback)
    }

  this.deleteTodo = function(todo) {
    console.log("The" + todo.name + " has been deleted!")
    //simulate communication
  }

  this.saveTodo = function(todo){
    console.log("The " + todo.name + " todo has been saved!")
  }
})
