const produtos = [
    {
        id: 1,
        nome: "Camisa",
        quantidade: 1,
        preco: 10

    }, {
        id: 2,
        nome: "Calça",
        quantidade: 1,
        preco: 10
    }, {
        id: 3,
        nome: "Tênis",
        quantidade: 1,
        preco: 10
    }, {
        id: 4,
        nome: "Boné", quantidade: 5, preco: 10
    }]; 
    
    // function calcularValorTotal(produtos) { let valorTotal = 0; produtos.forEach((produto) => { valorTotal += produto.quantidade * produto.preco; }); console.log("valor sem reduce", valorTotal); } 
    
    // calcularValorTotal(produtos);
    
    // const calcularValorTotalComReduce = (produtos) => { 
    //     const valorTotal = produtos.reduce((acumulador, produto) => { 
    //         return acumulador + (produto.quantidade * produto.preco); 
    //     }, 0); 
    //     console.log("valor com reduce", valorTotal); }; 
    //     calcularValorTotalComReduce(produtos);

function calcularValorTotal(produtos){
    let valorTotal = 0;
    produtos.forEach ((produtos) => {
        {
            valorTotal += produtos.quantidade * produtos.preco
        }   
    });
    return console.log("valor sem reduce: ",valorTotal)
}



function calcularValorTotalComReduce(produtos){
    const valorTotal = produtos.reduce((acumulator, produto)=> {
        return acumulator + produto.quantidade * produto.preco;

    },0)
    return console.log("valor com reduce: ", valorTotal)
}



calcularValorTotal(produtos)
calcularValorTotalComReduce(produtos)