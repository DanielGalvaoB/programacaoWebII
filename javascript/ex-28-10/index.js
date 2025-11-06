
// document.getElementById("teste").innerText = "marcos viado"
// document.getElementById("teste").style.color = "#891a1aff"

let texto = document.getElementById("teste");

texto.innerText = "marcote estranho";
// texto.style.backgroundColor = rgba(255, 0, 0, 0);
texto.style.color = "#ff0000ff"


let bt = document.getElementById("bt");
bt.innerText = "seu botao";
bt.style.color = "#0044ffff"
bt.style.backgroundColor = "#ff0000ff"


bt.addEventListener("click", clickbotao);

function clickbotao(){
    console.log("apertaram seu botao")
}   

