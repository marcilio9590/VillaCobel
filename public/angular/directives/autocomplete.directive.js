myApp.directive('complete', function ($http, $compile) {
    return function (scope, elm) {
        var ul;
        ul = angular.element("<ul class='list-group'></ul>");
        elm.append(ul);
        elm.bind("keyup", function (event) {
            buscarProduto(event, $http, limparConteudo, ul, $compile, scope);
        });

        // angular.element(elm[0].parentNode).bind("blur", function (event) {
        //     var ul = angular.element(event.currentTarget.parentNode).find('ul');
        //     limparConteudo(ul);
        // });

        // elm.bind("focus", function (event) {
        //     buscarProduto(event, $http, limparConteudo, ul, $compile, scope);
        // });
    };
    function limparConteudo(ul) {
        while (ul[0].hasChildNodes()) {
            ul[0].removeChild(ul[0].lastChild);
        }
    }

    function buscarProduto(event, $http, limparConteudo, ul, $compile, scope) {
        var filter = { value: event.currentTarget.value };
        var data = JSON.parse(event.currentTarget.attributes.complete.value);
        $http({
            method: 'POST',
            url: data.url,
            data: filter
        }).then(function successCallback(response) {
            if (response.data.length > 0) {
                limparConteudo(ul);
                for (var i = 0; i < response.data.length; i++) {
                    var obj = response.data[i];
                    var li = angular.element("<li ng-click='" + data.functionName + "(" + JSON.stringify(obj) + ")' class='list-group-item clickable'>" + obj.nome + "</li>");
                    ul.append(li);
                    $compile(ul.contents())(scope);
                }
                if (ul.length > 0) {
                    event.target.parentNode.append(ul[0]);
                }
            }
            else {
                limparConteudo(ul);
            }
        }, function errorCallback(response) {
            alert(response.data);
        });
    }
});


