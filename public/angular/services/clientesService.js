myApp.service('clientesService', function (abstractService, $http) {

    function listar(url, parameters) {
        return abstractService.doGet(url, parameters);
    }

    var exports = {
        listar: listar
    }

    return exports;

});