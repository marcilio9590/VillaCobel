myApp.service('produtosService', function ($http) {

    function searchProducts(codProj) {
        return $http({
            method: 'GET',
            url: '/projeto/ItensProjeto/' + codProj
        });
    }

    var exports = {
        searchProducts: searchProducts
    }

    return exports;

});