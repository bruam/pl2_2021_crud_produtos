module.exports = class CadastroProdutos {
    constructor(){
        this.produtos = [];
    }

    inserir(produto){
        this.produtos.push(produto);
    }

    buscarPorCodigo(codigo) {
        // for(let prod of this.produtos) {
        //     if(prod.codigo == codigo){
        //         return prod
        //     }
        // }
        let verificaId = function (produto){ // função com condição que será usada em find
            return produto.codigo == codigo;
        }

        return this.produtos.find(verificaId); //find usa função para encontrar primeiro valor de um array que satisfaz condição da função

    }

    buscarIndicePorCodigo(codigo){ // busca indice do produto na lista pelo código, se não encontrar retorna -1
        let verificaId = function (produto){
            return produto.codigo == codigo;
        }

        return this.produtos.findIndex(verificaId); // retorna indice do item que satisfaz condição da função
    }


    deletar(codigo){
        const indice = this.buscarIndicePorCodigo(codigo);
        if(indice == -1) {
            console.log("Codigo não encontrado!");
        }
        else {
            return(this.produtos.splice(indice,1));
        }
    }

    atualizar(codigo, produtoAtual) {
        const indice = this.buscarIndicePorCodigo(codigo);
        if(indice == -1) {
            console.log("Codigo não encontrado!");
        }
        else {
            this.produtos[indice] = produtoAtual;
        }
    }
    
    listar() {
        return this.produtos;
    }    
}