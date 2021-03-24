module.exports = class Produto { // exportando a classe diretamente

    constructor(codigo, nome, preco){
        this.codigo = codigo;
        this.nome = nome;
        this.preco = preco;
    }

}

//module.exports = Produto; // Exportando classe