var app = angular.module("gpsApp", []);
var name;
app.controller('contactCtrl', 
	function($scope, $rootScope, $window) {
	 $rootScope.color;
	console.log("enter");
	
	
	 $scope.send= function(frm){
		name=frm.name;
		

			$window.location.href = 'ThankYou.html'; 
			
			       
	 }	   
	 
	
});

app.controller('ThankCtrl', 
			function($scope, $rootScope, $window) {
console.log(name);
var x = Math.floor((Math.random() * 100000) + 1);
$scope.name=name;
$scope.id=x;
	
	
});






