// LISTA DE PRODUTO
lista = [];
function buscarListaProduto() {
    let ajax = new XMLHttpRequest();
    ajax.open("GET", "js/produtos.json");
    ajax.send();
    ajax.onload = function () {
        lista = JSON.parse(this.response);
        replicar();
    }
}
// REALIZA A CONVERSÃO DE VALORES PARA O REAL-BRASIL
function floatParaReal(valor) {
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(valor)
}

// FUNÇÃO REPLICAR IRÁ CRIAR UM CLONE DO OBJETO ORIGINAL PARA QUE POSSA SER MANIPULADO SEM ALTERAR O ORIGINAL
// cloneNode *
function replicar() {
    let i = 0;
    for (const p of lista) {
        let id = i;
        let produto = document.querySelector(".produto").cloneNode(true);

        produto.querySelector(".tituloProduto").innerHTML = p.nome.toUpperCase();
        produto.querySelector(".produtoImg").src = p.img;
        produto.querySelector(".descricaoProduto").innerHTML = p.descricao;
        produto.querySelector(".precoProduto").innerHTML = floatParaReal(p.valor);
        produto.querySelector(".quantidadeNumero").innerHTML = p.quantidade;

        produto.querySelector(".menos").addEventListener("click", function(){ alterarQt(id, -1) });
        produto.querySelector(".mais").addEventListener("click", function(){ alterarQt(id, 1) });

        document.querySelector(".item").append(produto);
        i++
    }
    document.querySelector(".produto").remove();
}
// FUNÇÃO ALTERAR QUANTIDADE IRÁ INTERAGIR COM O BOTÃO
function alterarQt(id, quantidade){
    let p = lista[id];
    p.quantidade += quantidade;
    if(p.quantidade < 0) p.quantidade = 0;
    if(p.quantidade > 999) p.quantidade = 999;
    document.getElementsByClassName("quantidadeNumero")[id].innerHTML = p.quantidade;
    let prodQtd = 0;
    let tudo = 0;
    for(const produto of lista){
        if(p.quantidade > 0){
            prodQtd = produto.quantidade;
            tudo += +prodQtd;
            document.querySelector(".carroQtd").innerHTML = tudo;
        }
    }
}

// FUNÇÃO PARA O MODAL
// MAL COMPARANDO, MODAL É UMA JANELA POP-UP ... IRÁ ABRIR 'EM CIMA' DO CONTEÚDO DA PÁGINA
let msgModal = "";
function mostrarPedidos(){
    let msgModalPadrao = "<p>Nenhum produto foi selecionado.</p>";
    let subTotal = 0;
    let total = 0;
    for (const produto of lista) {
        if(produto.quantidade > 0){
            subTotal = (produto.valor * produto.quantidade).toFixed(2);
            total += +subTotal;
            msgModal += `<p>${produto.nome.toUpperCase()} (R$: ${produto.valor} x ${produto.quantidade}) = ${subTotal}</p>`;
        }
    }
    if(msgModal == ""){
        
        document.querySelector("#btEnviar").disabled = "disabled"; 
        document.querySelector(".modal-body").innerHTML = msgModalPadrao;
    }else{
        msgModal += `<b>Total R$ ${total.toFixed(2)}</b>`
        document.querySelector("#btEnviar").disabled = "";
        document.querySelector(".modal-body").innerHTML = msgModal;
    }
}

// ENVIAR 
function enviar() {
    let fone = '+5521987878849';
    msgModal = msgModal.replaceAll("<p>", "").replaceAll("</p>", "\n");
    msgModal = msgModal.replaceAll("<b>", "*").replaceAll("</b>", "*");
    let nome = document.querySelector("#nome").value;
    let endereco = document.querySelector("#endereco").value;
    msgModal += `\nNome: *${nome}*`;
    msgModal += `\nEndereço: *${endereco}*`;
    msgModal = encodeURI(msgModal);

    link = `https://api.whatsapp.com/send?phone=${fone}&text=${msgModal}`;
    window.open(link, '_blanck')
}

// LIMPA O MODAL
$('#myModal').on('hidden.bs.modal', function () {
    msgModal = msgModal * 0;
    msgModal = "";
});

// CHAMA A FUNÇÃO QUE LISTA O PRODUTO
buscarListaProduto();