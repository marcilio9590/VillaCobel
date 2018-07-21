myApp.controller("clientesCtrl", function ($scope, modalFactory, $http, clientesFactory, clientesService, $timeout) {
    var vm = $scope;
    vm.cliente = {};
    vm.cliente.telefones = [];
    vm.clientes = [];

    vm.limpar = function () {
        vm.cliente = {};
        vm.cliente.telefones = [];
    }

    vm.salvar = function () {

    }

    vm.detalharCliente = function (obj) {
        modalFactory.open("modalDetalheCliente", "Detalhes do Cliente", true, obj);
    }

    vm.adicionarTelefone = function () {
        vm.cliente.telefones.push({ id: 'telefone' + vm.cliente.telefones.length, valor: "" });
    }

    vm.removerTelefone = function (i) {
        vm.cliente.telefones.splice(i, 1);
    }

    function obterClientes() {
        mock();
    }

    function mock() {
        vm.clientes.push({ idCliente: 1, nome: "Cliente 1", endereco: "Rua 1", telefones: [{ ddd: "81", numero: "9999999999" }] });
        vm.clientes.push({ idCliente: 2, nome: "Cliente 2", endereco: "Rua 2", telefones: [{ ddd: "81", numero: "9999999999" }] });
        vm.clientes.push({ idCliente: 3, nome: "Cliente 3", endereco: "Rua 3", telefones: [{ ddd: "81", numero: "9999999999" }] });
        vm.clientes.push({ idCliente: 4, nome: "Cliente 4", endereco: "Rua 4", telefones: [{ ddd: "81", numero: "9999999999" }] });
        vm.clientes.push({ idCliente: 5, nome: "Cliente 5", endereco: "Rua 5", telefones: [{ ddd: "81", numero: "9999999999" }] });
        vm.clientes.push({ idCliente: 6, nome: "Cliente 6", endereco: "Rua 6", telefones: [{ ddd: "81", numero: "9999999999" }, { ddd: "81", numero: "9999999999" }] });
        vm.clientes.push({ idCliente: 7, nome: "Cliente 7", endereco: "Rua 6", telefones: [{ ddd: "81", numero: "9999999999" }, { ddd: "81", numero: "9999999999" }] });
    }

    function activate() {
        obterClientes();
    }

    activate();

    function abrirModal(id, titulo) {

    }

});

