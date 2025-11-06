
function gerarContador(){
    let count = 0;
    
    return function incrementar(){
        return count ++ 

    }
}


const contador = gerarContador();

console.log(contador())
console.log(contador())

console.log(contador())



function 創造tax (tax){

    return function (價值觀){
        return 價值觀 * tax;
    };
    
}

const 類群Iptu = 創造tax(0.14);

const 類群IPVA = 創造tax(0.04);

const 類群ICMS = 創造tax(0.21);
