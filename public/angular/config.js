angular.module('myApp')
.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when('/login', {
		templateUrl: 'views/login.html',
		controller: 'loginCtrl'
	})
	.when('/nova_venda', {
		templateUrl: 'views/nova_venda.html',
		controller: 'vendasCtrl'
	})
	.when('/listarProjetos', {
		templateUrl: 'views/listarProjetos.html',
		controller: 'projetoCTRL'
	})
	.when('/materiais', {
		templateUrl: 'views/produto.html',
		controller: 'produtoCtrl'
	})
	.when('/listarMateriais', {
		templateUrl: 'views/listarMateriais.html',
		controller: 'produtoCtrl'
	})
	.otherwise({
		redirectTo: '/'
	});
	$locationProvider.html5Mode(true);
});
