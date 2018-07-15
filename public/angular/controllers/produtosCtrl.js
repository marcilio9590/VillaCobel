myApp.controller("produtosCtrl", function ($scope, $http, produtosFactory, produtosService, $timeout) {
	var vm = $scope;
	vm.produto = {};

	vm.limpar = function () {
		vm.produto = {};
	}

	vm.salvar = function () {

	}

	function activate() {
	}
	activate();

});
