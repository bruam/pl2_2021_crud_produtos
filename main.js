const Produto = require ("./produto"); // importanto classe Produto
const CadastroProdutos = require ("./cadastro_produtos");

let cadastroProdutos = new CadastroProdutos();

const produto = new Produto(1,"arroz",6.3);

cadastroProdutos.inserir(produto);
cadastroProdutos.inserir(new Produto(2,"feijão",7));
cadastroProdutos.inserir(new Produto(3,"carne",7000));

for ( const prod of cadastroProdutos.listar()){
    console.log(`Produto ${prod.codigo}: ${prod.nome}, ${prod.preco}`);
}

cadastroProdutos.deletar(2);
console.log(cadastroProdutos.listar());