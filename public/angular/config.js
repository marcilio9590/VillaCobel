angular.module('myApp')
.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when('/login', {
		templateUrl: 'views/login.html',
		controller: 'loginCtrl'
	})
	.when('/nova_venda', {
		templateUrl: 'views/nova_venda.html',
		controller: 'vendasCtrl',
		reloadOnSearch: false
	})
	.when('/balanco_vendas', {
		templateUrl: 'views/balanco_vendas.html',
		controller: 'vendasCtrl'
	})
	.when('/novo_produto', {
		templateUrl: 'views/novo_produto.html',
		controller: 'produtosCtrl'
	})
	.when('/ajuste_estoque', {
		templateUrl: 'views/ajuste_estoque.html',
		controller: 'produtosCtrl'
	})
	.otherwise({
		redirectTo: '/'
	});
	$locationProvider.html5Mode(true);
});
