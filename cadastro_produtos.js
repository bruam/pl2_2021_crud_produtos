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
            if(erro) throw erro;    
            //console.log("Conectado");
            const sql = "INSERT INTO produto (nome, preco) VALUES (?,?)"; //values parametrizaveis (recomendado para evitar SQL inject)
            conexao.query(sql, [produto.nome,produto.preco], function(erro){
                if(erro) throw erro;                
                console.log("Inserido");
            });
        
        });
    }

    deletar(id){
        conexao.connect(function(erro){ // callback da função que retorna erro caso não consiga conectar
            if(erro) throw erro;    
            //console.log("Conectado");
            const sql = "DELETE FROM produto WHERE id = ?"; //values parametrizaveis (recomendado para evitar SQL inject)
            conexao.query(sql, [id], function(erro){
                if(erro) throw erro;
                console.log(`Produto ${id} deletado!`);
            });
        
        });
    }

    listar() {
        conexao.connect(function(erro){ // callback da função que retorna erro caso não consiga conectar
            if(erro) throw erro;    
            //console.log("Conectado");
            // let result;
        
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

    buscarPorNome(nome) {
        conexao.connect(function(erro){ // callback da função que retorna erro caso não consiga conectar
            if(erro) throw erro;    
            //console.log("Conectado");
            const sql = "SELECT * FROM produto WHERE nome LIKE ?"; //values parametrizaveis (recomendado para evitar SQL inject)
            conexao.query(sql, [nome], function(erro, resultado){
                if(erro) throw erro;
                console.log(JSON.stringify(resultado));
            });
        
        });
    }

    atualizar(id, coluna, novaInfo) {
        conexao.connect(function(erro){ // callback da função que retorna erro caso não consiga conectar
            if(erro) throw erro;    
            //console.log("Conectado");
            const sql = "UPDATE produto SET ? = ? WHERE id = ?"; //values parametrizaveis (recomendado para evitar SQL inject)
            conexao.query(sql, [coluna,novaInfo,id], function(erro){
                if(erro) throw erro;
                console.log("Informação atualizada!");
            });
        
        });
    }

    // buscarIndicePorCodigo(codigo){ // busca indice do produto na lista pelo código, se não encontrar retorna -1
    //     let verificaId = function (produto){
    //         return produto.codigo == codigo;
    //     }

    //     return this.produtos.findIndex(verificaId); // retorna indice do item que satisfaz condição da função
    // }    
    
}