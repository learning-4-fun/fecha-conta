angular.module('directive.facebook.user', [])
.directive('fbUser', [function () {	
	return {
		restrict: 'A',
		templateUrl: 'directives/facebook/user/user-main.html',
		controller: 'FbUserCtrl'
	};
}])
.controller('FbUserCtrl', ['$scope', '$http', function ($scope, $http) {
	var resource = 'http://graph.facebook.com/'.concat($scope.friend.id).concat('/?fields=first_name');
    $http.get(resource)
       	.success(function (data) {
       		$scope.user = data;
        });
}]);