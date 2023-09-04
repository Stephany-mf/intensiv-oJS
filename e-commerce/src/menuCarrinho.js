import { catalogo } from "./utilidades"
function abrirCarrinho() {
    document.getElementById("carrinho").classList.add("right-[-0px]")
    document.getElementById("carrinho").classList.remove("right-[-360px]")
    console.log("Abrindo")
}
function fecharCarrinho() {
    console.log("Entrou")
    document.getElementById("carrinho").classList.remove("right-[-0px]")
    document.getElementById("carrinho").classList.add("right-[-360px]")
    console.log("Fechando")
}
export function inicializarCarrinho() {
    const botaoFecharCarrinho = document.getElementById("fechar-carrinho")
    const botaoAbriCarrinho = document.getElementById("abrir-carrinho")
    console.log("ta passando aqui")

    botaoFecharCarrinho.addEventListener("click", fecharCarrinho);
    botaoAbriCarrinho.addEventListener("click", abrirCarrinho);
}
export function adicionarAoCarrinho(idProduto) {
    //ache um produto 'p' onde o id seja igual a id do produto do meu catalago.
    const produto = catalogo.find((p) => p.id == idProduto)
    const containerProdutosCarrinho = document.getElementById('produtos-carrinho')
    const cartaoProdutoCarrinho = `
        <article class="flex bg-slate-100 rounded-lg p-1 relative">
          <button id="fechar-carrinho" class=" absolute top-0 right-2">
                <i class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-800"></i>
          </button>
          <img
          src="./assets/img/${produto.imagem}" 
          alt="${produto.nome}"
            class="h-24 rounded-lg">
          <div class="py-2">
            <p class="text-slate-900 text-sm">${produto.nome}</p>
            <p class="text-slate-400 text-xs">Tamanho: M</p>
            <p class="text-green-700 text-lg">$${produto.preco}</p>
          </div>
        </article>`
    containerProdutosCarrinho.innerHTML += cartaoProdutoCarrinho;
}