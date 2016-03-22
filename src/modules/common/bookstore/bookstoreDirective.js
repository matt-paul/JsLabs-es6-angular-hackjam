export var bookstoreDirective = function bookstoreDirective(){
    return {
      restrict: 'EA',
      templateUrl: 'src/modules/common/bookstore/bookstore.html'
    };
  }

  angular.module('common').directive('bookstore', bookstoreDirective);

