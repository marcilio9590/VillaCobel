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
		vm.itemsEstoque.push({ idProduto: 2, nome: "Blusa Manga de couro2", quantidade: 2 });
		vm.itemsEstoque.push({ idProduto: 3, nome: "Blusa Manga de couro3", quantidade: 2 });
		vm.itemsEstoque.push({ idProduto: 4, nome: "Blusa Manga de couro4", quantidade: 2 });
		vm.itemsEstoque.push({ idProduto: 5, nome: "Blusa Manga de couro5", quantidade: 2 });
		vm.itemsEstoque.push({ idProduto: 6, nome: "Blusa Manga de couro6", quantidade: 2 });
		vm.itemsEstoque.push({ idProduto: 7, nome: "Blusa Manga de couro7", quantidade: 2 });
	}

	function activate() {
		obterItensEstoque();
	}

	activate();

});
