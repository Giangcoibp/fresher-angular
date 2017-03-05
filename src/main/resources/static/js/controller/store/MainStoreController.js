var app = angular.module('myApp');

var data = {};

app.controller('MainStoreController', function($scope, $http){
		$scope.collection = data;
		
		// get method data
		$scope.getData = function(){
			$http.get("http://localhost:9000/fresherangular/product/list")
			.then(function(response){
				$scope.collection = response.data;
				
			});
		}					
			
		$scope.postData = function(col){			
			var dataObj = col;		
			$http.post("http://localhost:9000/fresherangular/product/add", dataObj).then(function(response){				
				$scope.collection = $scope.collection.concat(col);
				alert("successed");
			});			
		}
		
		// add button		
		$scope.addQuantity = function(index, x){		
			var lnk = "http://localhost:9000/fresherangular/product/increase/" + x[index].id;
			$http.get(lnk).then(function(response){
				x[index].available = parseInt(x[index].available) + 1;
			});
		}					
		
		// sub button
		$scope.subQuantity = function(index, x){		
			if(x[index].available>0){
				var lnk = "http://localhost:9000/fresherangular/product/decrease/" + x[index].id;
				$http.get(lnk).then(function(response){
					x[index].available = parseInt(x[index].available) - 1;				
				});
			}
		}

		// delete button
		$scope.delete = function(index){
			$scope.collection.splice(index, 1);
		}	
});

app.directive("testDirective", function(){
	return{
		restrict: "E",
		templateUrl: "/fresherangular/views/store/ListProduct.html"
	};
});