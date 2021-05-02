/**
 * TODO:
 * 1) Criar um projeto Node.js e colocar um servidor no ar; [Node.js]
 * 2) Criar as rotas iniciais para a realização do CRUD (só as rotas, sem funcionalidades) [Express, Rotas]
 * 3) Trabalhar com o request e o response adequadamente, criando um comportamento simulado da aplicação [request e response]
 * 4) Utilizar um Controller para as rotas. [Controller]
 * 5) Adicionar a biblioteca do MySQL no projeto: npm install mysql
 * 6) Adicionar o CRUD de Produtos que fizemos em MySQL no projeto. Adaptar para ser utilizado na API.
 * 7) Testar e refatorar o código para trabalhar corretamente com a API (retornando os dados necessários) - Explicação do Professor.
 */

const Produto = require("./models/produto");
const CadastroProdutos = require("./cadastro_produtos");
const express = require('express');
const app = express();
const port = 3000;

let cadastroProdutos = new CadastroProdutos();

/**Rotas */
// app.get('/', function(req, res){
//     cadastroProdutos.listar()
// })

// cadastroProdutos.buscarPorNome('arroz')
// cadastroProdutos.listar()
//cadastroProdutos.atualizar(1,'preco',50)

//cadastroProdutos.deletar(6)

// const produto = new Produto(1,"arroz",6.3);

// cadastroProdutos.inserir(produto);
// cadastroProdutos.inserir(new Produto(5,"teste",4));
// cadastroProdutos.inserir(new Produto("feijao",8.9));

// for(let prod of cadastroProdutos.listar()){
//     console.log (`Produto ${prod.codigo}: ${prod.nome}, ${prod.preco}`);
// }

// console.log(cadastroProdutos.deletar(5));

// cadastroProdutos.atualizar(2, new Produto(2,"feijao",9.2));

// cadastroProdutos.inserir(new Produto("pão","3.5"));

// console.log(cadastroProdutos.listar());

app.listen(port, function(){
    console.log("Servidor rodando em http://localhost:3000");
});