var app = angular.module("app",[
	'ngResource',
	'ui.router'
]);




app.config(function($stateProvider,$urlRouterProvider){
	//$urlRouterProvider.when('', '/main');

	$stateProvider.state('main', {
		url:'/main',
		templateUrl: 'tpl/main.html',
		//controller: 'mainCtrl'
	})
	.state('articles', {
		url:'/articles/itemid',
		templateUrl: 'tpl/article/article-list.html',
		//controller: 'mainCtrl'
	})
	.state('article', {
		url:'/articles/artucleid',
		templateUrl: 'tpl/article/article-detail.html',
		//controller: 'mainCtrl'
	})
	.state('file',{
		url:'/filetest',
		templateUrl: '/tpl/file.html' 
	})
	$urlRouterProvider.otherwise('main');	

});


app.run([function () {
	
}]);


app.controller('navCtrl', ['$scope','$http', function ($scope,$http,$state) {
	var vm = $scope.vm = {};

	vm.logout = function(){
		$http({method:'GET',url:'/logout'})
			.success(function(data,status){
				window.alert('logout success');
				// 退出到登录界面
				window.location.href="/";
			})
			.error(function(data,status){
				console.log('logout error');
			});
	}

	if($){

	}
}]);
