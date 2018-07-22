myApp.factory('modalFactory', function () {

    function open(id, titulo, showButtons, data) {
        $("#" + id).modal();
        var modal = $("#" + id);
        popularModal(modal, titulo, data);
    }

    function popularModal(modal, titulo, data) {
        modal.find('.modal-title').text(titulo);
        modal.find('.nome').text(data.nome);
        modal.find('.endereco').text(data.endereco);
        var telefones = modal.find('.telefones');
        var aux = "";
        for (let i = 0; i < data.telefones.length; i++) {
            var key = data.telefones[i];
            aux += "(" + key.ddd + ") " + key.numero;
            aux += i == data.telefones.length - 1 ? "" : " - ";
        }
        telefones.text(aux);
    }

    var exports = {
        open: open
    }

    return exports;

});

