const mysql = require('mysql');

let conexao = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"crud_produtos"
});

module.exports = class CadastroProdutos {    

    inserir(produto){
        conexao.connect(function(erro){ // callback da função que retorna erro caso não consiga conectar
            if(erro) throw err;    
            //console.log("Conectado");
        
            //const sql = "SELECT * FROM produto";
            const sql = "INSERT INTO produto (nome, preco) VALUES (?,?)"; //values parametrizaveis (recomendado para evitar SQL inject)
            conexao.query(sql, [produto.nome,produto.preco], function(erro){
                if(erro) throw erro;                
                console.log("Inserido");
            });
        
        });
    }

    // buscarPorCodigo(codigo) {
    //     // for(let prod of this.produtos) {
    //     //     if(prod.codigo == codigo){
    //     //         return prod
    //     //     }
    //     // }
    //     let verificaId = function (produto){ // função com condição que será usada em find
    //         return produto.codigo == codigo;
    //     }

    //     return this.produtos.find(verificaId); //find usa função para encontrar primeiro valor de um array que satisfaz condição da função

    // }

    // buscarIndicePorCodigo(codigo){ // busca indice do produto na lista pelo código, se não encontrar retorna -1
    //     let verificaId = function (produto){
    //         return produto.codigo == codigo;
    //     }

    //     return this.produtos.findIndex(verificaId); // retorna indice do item que satisfaz condição da função
    // }


    // deletar(codigo){
    //     const indice = this.buscarIndicePorCodigo(codigo);
    //     if(indice == -1) {
    //         console.log("Codigo não encontrado!");
    //     }
    //     else {
    //         return(this.produtos.splice(indice,1));
    //     }
    // }

    // atualizar(codigo, produtoAtual) {
    //     const indice = this.buscarIndicePorCodigo(codigo);
    //     if(indice == -1) {
    //         console.log("Codigo não encontrado!");
    //     }
    //     else {
    //         this.produtos[indice] = produtoAtual;
    //     }
    // }
    
    listar() {
        conexao.connect(function(erro){ // callback da função que retorna erro caso não consiga conectar
            // if(erro) throw err;    
            //console.log("Conectado");
            let result;
        
            const sql = "SELECT * FROM produto";
            //const sql = "INSERT INTO produto (nome, preco) VALUES (?,?)"; //values parametrizaveis (recomendado para evitar SQL inject)
            conexao.query(sql, /*["arroz",30.5],*/ function(erro, resultado){
                if(erro) throw erro;
                result = console.log(JSON.stringify(resultado));
            });
            return result;        
        });
        // conexao.end();
    }    
}