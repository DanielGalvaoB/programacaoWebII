
//tradicopnal
function sum(a, b){
    return a+b
}

// function epression //funcao anonima // functions expressions nao sao elevadoas ao topo do escopo
const sumFe = function(a, b){
    return a + b
}


//arrow function

const arrowSum = (a, b) => a + b;


setTimeout(() => console.log(Date.now()),1500);
setInterval(()=> console.log("executando..."), 2500);