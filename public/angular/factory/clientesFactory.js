// Factory
myApp.factory('clientesFactory', function () {

	var ClienteToBack = function (nome, endereco, telefonePrincipal, telefones, id) {
		this.nome = nome;
		this.endereco = endereco;
		var aux = prepararTelefones(telefonePrincipal, telefones);
		this.telefones = aux;
		this.id = id;
	};

	var ClienteToFront = function (nome, endereco, telefones, id) {
		this.nome = nome;
		this.endereco = endereco;
		var aux = prepararTelefonesFront(telefones);
		this.telefones = aux;
		this.id = id;
	};

	function convertToFront(clientes) {
		var saida = [];
		for (var i = 0; i < clientes.length; i++) {
			saida.push(
				new ClienteToFront(
					clientes[i].nome,
					clientes[i].endereco,
					clientes[i].telefones,
					clientes[i].id
				));
		}
		return saida;
	}

	function convertToBack(cliente) {
		return new ClienteToBack(
			cliente.nome,
			cliente.endereco,
			cliente.telefonePrincipal,
			cliente.telefones);
	}

	function prepararTelefones(telefonePrincipal, telefones) {
		var saida = [];
		saida.push(telefonePrincipal);
		for (let i = 0; i < telefones.length; i++) {
			var e = telefones[i];
			saida.push(e);
		}
		return saida;
	}

	function prepararTelefonesFront(telefones) {
		var saida = [];
		for (let i = 0; i < telefones.length; i++) {
			var e = telefones[i];
			saida.push(e);
		}
		return saida;
	}


	var exports = {
		convertToFront: convertToFront,
		convertToBack: convertToBack
	};

	return exports;

});

