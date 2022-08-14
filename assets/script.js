const titulo = document.getElementById("titulo-conselho")
const conteudo = document.getElementById("conteudo-conselho")
const botao = document.getElementById("button")
const baseURL = "https://api.adviceslip.com/advice"


function textoAltera(elemento, texto){
    elemento.innerText = texto
}

async function getDados(){
    const dados = await fetch(baseURL)
    const dadosJSON = await dados.json()
    return dadosJSON.slip
}

async function handleClick(event){ 
    event.preventDefault()
    const dadosConselho = await getDados()
    textoAltera(titulo, `ADVICE # ${dadosConselho.id}`)
    textoAltera(conteudo, dadosConselho.advice)
}

botao.addEventListener("click", handleClick)