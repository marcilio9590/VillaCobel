myApp.controller("vendasCtrl", function($scope,$http,$timeout,vendasFactory){
	var vm = $scope;

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

	function openModal(){
		angular.element('#myModal').modal('show');
	}

	vm.closeModal = function(){
		angular.element('#myModal').modal('hide');
		vm.produto = {};
		vm.flag = false;
	}

	function activate(){

	}

	activate();
	
});