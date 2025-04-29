const filmes = []

function adicionarFilme() {
    const inputFilme = document.getElementById("inputFilme")
    const mensagem = document.getElementById("mensagem")
    let mensagemSucesso = "Filme adicionado com sucesso!"
    let mensagemErro = "Digite um filme antes de adicionar!"
    const valorInput = inputFilme.value.trim()

    if (valorInput == "") {
        mensagem.textContent = mensagemErro
    }

    else {
        mensagem.textContent = mensagemSucesso
        filmes.push(valorInput)
        renderizarFilmes()
       
    }

    inputFilme.value = ""
}

function renderizarFilmes() {

    listaFilmes = document.getElementById("listaFilmes")
    listaFilmes.innerHTML = ""
    
    for (let i = 0; i < filmes.length;i++) {
    const novoFilme = document.createElement("li")
    novoFilme.textContent = filmes[i]

let botaoRemover = document.createElement("button")
 botaoRemover.className = "remover"
 botaoRemover.textContent = "Remover"
 botaoRemover.onclick = () => removerFilme(i)

 let botaoEditar = document.createElement("button")
 botaoEditar.className = "editar"
 botaoEditar.textContent = "Editar"
 botaoEditar.onclick = () => editarFilme(i)

    novoFilme.appendChild(botaoEditar)
    novoFilme.appendChild(botaoRemover)
    listaFilmes.appendChild(novoFilme)
    }
   
}

function removerFilme(i) {
    filmes.splice(i, 1)
    renderizarFilmes()
}

function editarFilme(i){
    let filmeEditado = prompt("Edite o filme: ")
    if (filmeEditado.trim() !== "") {
        filmes[i] = filmeEditado
        renderizarFilmes()
    }
}

function limparLista() {
    
    if (filmes == "") {
        mensagem.textContent = "Ops! Parece que sua lista está vazia."
    }
    else {
    filmes.length = 0
    renderizarFilmes()
    mensagem.textContent = "Lista de filme limpa com sucesso!"
    }

}