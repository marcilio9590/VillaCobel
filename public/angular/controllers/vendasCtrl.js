myApp.controller("vendasCtrl", function ($scope, $http, $timeout, vendasFactory) {
	var vm = $scope;
	vm.autocompleteOptions =
		{
			url: "/vendas/buscarProdutos"
		};

	// vm.listarEstoque = function(){
	// 	$http({
	// 		method: 'GET',
	// 		url: '/estoque/listar'
	// 	}).then(function successCallback(response) {
	// 		vm.data = produtosFactory.convertEstoqueToFront(response.data);	
	// 	}, function errorCallback(response){
	// 		alert(response.data);
	// 	});
	// }

	// vm.incluirItem = function(obj){
	// 	$http({
	// 		method: 'POST',
	// 		url: '/estoque/salvarItem',
	// 		data:obj
	// 	}).then(function successCallback(response) {
	// 		vm.cad = true;
	// 		$timeout(function() {
	// 			vm.cad = false;
	// 		}, 3000);	
	// 		document.getElementById("nome").focus();
	// 	}, function errorCallback(response){
	// 		alert(response.data);
	// 	});
	// 	vm.produto = {};
	// 	vm.flag = false;
	// }

	vm.filtroProdutos = [];
	vm.venda = {};

	var optionsDatePicker = {
		format: "DD/MM/YYYY",
		locale: "pt-br"
	};

	function openModal() {
		angular.element('#myModal').modal('show');
	}

	vm.closeModal = function () {
		angular.element('#myModal').modal('hide');
		vm.produto = {};
		vm.flag = false;
	}

	vm.openDatePicker = function () {
		$('#dataRecebimento').datetimepicker(optionsDatePicker)
	}

	vm.complete = function (string) {
		if (string.length > 0) {
			var output = [];
			angular.forEach(vm.itemsEstoque, function (item) {
				if (item.nome.toLowerCase().indexOf(string.toLowerCase()) >= 0) {
					output.push(item);
				}
			});
			vm.filtroProdutos = output;
		} else {
			vm.filtroProdutos = [];
		}
	}

	function activate() {

	}

	activate();

});