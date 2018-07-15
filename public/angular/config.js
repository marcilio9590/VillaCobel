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
	.when('/balanco_vendas', {
		templateUrl: 'views/balanco_vendas.html',
		controller: 'vendasCtrl'
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
