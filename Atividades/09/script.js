// 01 -- calculadora da tabuada
function calcTabuada(){
  // entrada do input do usuário
  let entradaTabuada = parseInt(document.getElementById("entradaTabuada").value);

  let resultTabuada = []

  for(let i = 0; i < 11; i++){
    resultTabuada[i] = `<br> ${entradaTabuada} x ${i} = ${entradaTabuada * i}`
  }
  
  // mostrar na tela
  document.getElementById("resultFinal").innerHTML = resultTabuada
  
}
// 02 --
function calcIntervalo(){
  // inputs
  let valor1 = parseInt(document.getElementById("valor1").value);
  let valor2 = parseInt(document.getElementById("valor2").value);

  let valores = []

  for (i = valor1 + 1; i < valor2 ; i++){ 
    valores = valores + `${i},`  
  }

  document.getElementById("intervalo").innerHTML = `${valor1} e ${valor2}`

  document.getElementById("resultIntervalo").innerHTML = valores

}

// 03 -- 
let listaItens = [];

function addItem(){
// inputs
  let novoItem = document.getElementById("nomeItem").value;

  listaItens.push(`${novoItem}`) 

  alert(`O item ${novoItem} foi adicionado a lista`)
}

function mostrarLista(){
  document.getElementById("resultLista").innerHTML = listaItens
}

function limparLista(){
  listaItens = []
  document.getElementById("resultLista").innerHTML = ""
}

// 04 -- 
let nSorteados = []

function sortear(){

  // números aleatórios 
  for (i = 0; i <= 5; i++){
    nSorteados[i] = Math.floor(Math.random() * 60) + 1
  }
  
  // mostrar na tela
  document.getElementById("resultSorteio").innerHTML = `Resultado: ${nSorteados} `
}

// 05 -- 
let listaHomens = []
let listaMulheres = []

// adicionar pessoa
function addPessoa(){
  // inputs
  let nome = document.getElementById("nome").value;
  let sexo =  document.getElementById("sexo").value;

  // função validadora
  if (nome != ""){
  
    if (sexo == 'M'){
      listaHomens.push(nome)
      mostrarTela("homens")

    }else if(sexo == 'F'){
      listaMulheres.push(nome)
      mostrarTela("mulheres")
  }
  }else{
    alert("Você não pode adicionar um nome vazio à lista!")
  }
  
  function mostrarTela(tipoLista){
    alert(`A pessoa ${nome}, foi adicionada à lista de ${tipoLista}`)
  }
  
}

function mostrarListaPessoas(){
  if (listaMulheres == 0 || listaHomens == 0){
    alert(`Você precisa preencher as duas listas para apresentar os nomes na tela`)

  }else{
    document.getElementById("resultHomens"). innerHTML = `Lista de homens: ${listaHomens}`
    document.getElementById("resultMulheres"). innerHTML = `Lista de mulheres: ${listaMulheres}`
  }
}

function limparListaPessoa(){
  listaHomens = []
  listaMulheres = []

  document.getElementById("resultHomens"). innerHTML = ""
  document.getElementById("resultMulheres"). innerHTML = "" 

}


