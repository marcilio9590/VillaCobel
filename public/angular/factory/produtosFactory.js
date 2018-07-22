// Factory
myApp.factory('produtosFactory', function () {

	var Produto = function (nome, custo, precoCliente, quantidade, id) {
		this.nome = nome;
		this.custo = custo;
		this.precoCliente = precoCliente;
		this.quantidade = quantidade;
	};

	function convertToFront(produtos) {
		var saida = [];
		for (var i = 0; i < produtos.length; i++) {
			saida.push(
				new Produto(
					produtos[i].nome,
					produtos[i].custo,
					produtos[i].precoCliente,
					produtos[i].quantidade,
					produtos[i].id
				));
		}
		return saida;
	}

	function convertToBack(produto) {
		return new Produto(
			produto.nome,
			produto.custo,
			produto.precoCliente,
			produto.quantidade);
	}



	var exports = {
		convertToFront: convertToFront,
		convertToBack: convertToBack
	};

	return exports;

});