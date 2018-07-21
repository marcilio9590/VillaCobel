myApp.service('abstractService', function ($http) {

    function doGet(url, parameters) {
        return $http({
            method: 'GET',
            url: url + parameters
        });
    }

    function doPost(url, data) {
        return $http({
            method: 'POST',
            url: url,
            data: data
        });
    }

    var exports = {
        doGet: doGet,
        doPost: doPost
    }

    return exports;

});