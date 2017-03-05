var app = angular.module('myApp');

app.controller('ProductDetail', function($scope, $http, $routeParams){
	
	$http.get("http://localhost:9000/fresherangular/product/get/"+ $routeParams.id)
	.then(function(response){
		$scope.product = response.data;
	});
	
	$scope.doTheBack = function(){
		window.history.back();
	}
		
});