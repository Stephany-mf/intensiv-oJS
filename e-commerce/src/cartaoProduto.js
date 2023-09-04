import { adicionarAoCarrinho } from "./menuCarrinho"
import { catalogo } from "./utilidades"
export function renderizarCatalago() {

    for (let produtoCatalogo of catalogo) {
        const cartaoProduto = `
                <div id="card-produto-${produtoCatalogo}" class=" border-solid w-40 m-2 flex flex-col p-2 justify-between shadow-xl shadow-slate-400 rounded-lg">
                  <img
                    src="./assets/img/${produtoCatalogo.imagem}" class='hover:scale-110 duration:300 rounded-lg'>
                  <p class="text-sm">${produtoCatalogo.marca}</p>
                  <p class=""text-sm">${produtoCatalogo.nome}</p>
                  <p class=""text-sm">${produtoCatalogo.preco}</p>
                  <button id="adicionar-${produtoCatalogo.id}" class="bg-slate-950 hover:bg-slate-700 text-slate-200"><i class="fa fa-cart-plus" aria-hidden="true"></i></button>
                </div>
        `
        document.getElementById('container-produto').innerHTML += cartaoProduto

    }
    for (const produtoCatalogo of catalogo) {
        /*Não abri e fechei parentes porque não quero executa a função, somente estou criando uma referencia para esse função
        document.getElementById(`adicionar-${produtoCatalogo.id}`).addEventListener('click', adicionarAoCarrinho(produtoCatalogo))*/

        //Agora estou falando qual função e como quero que ela seja executada.
        document.getElementById(`adicionar-${produtoCatalogo.id}`).addEventListener('click', () => adicionarAoCarrinho(produtoCatalogo.id))

    }
}