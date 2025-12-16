const btn = document.getElementById("btnBusca");
const input = document.getElementById("pokeInput");
const statusMSG = document.getElementById("statusMSG");
const pokeInfo = document.getElementById("pokeInfo");


btn.addEventListener("click", buscarPoke);

async function buscarPoke() {
    const pokemon = input.value.toLowerCase();

    limparTela();

    if(!pokemon){
        statusMSG.textContent = "digite o nome ou numero correto";
        return;
    }

    statusMSG.textContent = "carregando...";

    try{
        const resposta = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon}`

        );

        if (!resposta.ok){
            throw new Error("POKEMON NAO ENCONTRADO!");

        }

        const dados = await resposta.json();
        renderizaPoke(dados);

    }catch (erro){
        statusMSG.textContent = erro.message;   
    }
}

function renderizaPoke(dados){
    statusMSG.textContent = "";



    pokeInfo.innerHTML = `
    <h3>#${dados.id} - ${dados.name}</h3>
        <img src="${dados.sprites.front_default}">
        <p><strong>Tipo:</strong> 
            ${dados.types.map(t => t.type.name).join(", ")}
        </p>
        `;

}

function limparTela(){
    statusMSG.textContent = "";
    pokeInfo.innerHTML = "";
}

