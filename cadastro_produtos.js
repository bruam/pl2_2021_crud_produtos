module.exports = class CadastroProdutos {
    constructor(){
        this.produtos = [];
    }

    inserir(produto){
        this.produtos.push(produto);
    }
    
    listar(){
        return this.produtos;
        /*for(const prod of produtos){
            console.log(`Produto ${prod.codigo}: ${prod.nome}, ${prod.preco}`);
        }*/
    }

    deletar(indice){
        this.produtos.splice(indice,1);
    }

}