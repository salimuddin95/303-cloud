
'use strict'

var app = angular.module('bookshop', []);
app.controller('searchController', function($scope, $http) {
    $scope.search= ""
		$scope.searchBooks = function() {
			console.log('search button clicked')
			console.log($scope.search)
			var url = 'http://localhost:8080/books?q='+$scope.search
			console.log(url)
			$http.get(url).success(function(data) {
 				console.log(data)
 				$scope.books = data.books
 		})
		}
})
