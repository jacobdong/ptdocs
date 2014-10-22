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
	.state('autoSelect',{
		url:'/select',
		templateUrl: '/tpl/auto-select.html' 
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





app.controller('sanboxCtrl', ['$scope','$timeout', function ($scope,$timeout) {

	var vm = $scope.vm = {};

	vm.countries = [
	  {
	    label: '中国',
	    flag: 'cn.png',
	    provinces: [
	      {
	        label: '北京',
	        cities: [
	          {
	            label: '朝阳区'
	          },
	          {
	            label: '宣武区'
	          },
	          {
	            label: '海淀区'
	          }
	        ]
	      },
	      {
	        label: '河北',
	        cities: [
	          {
	            label: '石家庄'
	          },
	          {
	            label: '承德'
	          },
	          {
	            label: '唐山'
	          }
	        ]
	      }
	    ]
	  },
	  {
	    label: '美国',
	    flag: 'us.png',
	    provinces: [
	      {
	        label: '纽约',
	        cities: [
	          {
	            label: '曼哈顿区'
	          },
	          {
	            label: '皇后区'
	          }
	        ]
	      },
	      {
	        label: '德克萨斯州',
	        cities: [
	          {
	            label: '休斯顿'
	          },
	          {
	            label: '达拉斯'
	          }
	        ]
	      },
	      {
	        label: '加利福尼亚州'
	      }
	    ]
	  }
	]


	vm.autoSelect = function(){

		console.log("=========");
		//$timeout(function(){
		vm.country = {
		    label: '中国',
		    flag: 'cn.png',
		    provinces: [
		      {
		        label: '北京',
		        cities: [
		          {
		            label: '朝阳区'
		          },
		          {
		            label: '宣武区'
		          },
		          {
		            label: '海淀区'
		          }
		        ]
		      },
		      {
		        label: '河北',
		        cities: [
		          {
		            label: '石家庄'
		          },
		          {
		            label: '承德'
		          },
		          {
		            label: '唐山'
		          }
		        ]
		      }
		    ]
		  };
		vm.province = 
		      {
		        label: '北京',
		        cities: [
		          {
		            label: '朝阳区'
		          },
		          {
		            label: '宣武区'
		          },
		          {
		            label: '海淀区'
		          }
		        ]
		      }
		//})
		console.log("=========");
	}
	
}])