myApp.controller("produtosCtrl", function ($scope, $http, produtosFactory, produtosService, $timeout) {
	var vm = $scope;
	vm.produto = {};
	vm.itemsEstoque = [];
	
	vm.limpar = function () {
		vm.produto = {};
	}

	vm.salvar = function () {

	}

	function obterItensEstoque() {
		mock();
	}

	function mock() {
		vm.itemsEstoque.push({ idProduto: 1, nome: "Blusa Manga de couro", quantidade: 2 });
	}

	function activate() {
		obterItensEstoque();
	}

	activate();

});
