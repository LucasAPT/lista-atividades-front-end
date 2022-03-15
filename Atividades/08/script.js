// Questão 1
function estilo1() {
    document.getElementById('result').style.fontSize = '18px';
    document.getElementById('result').style.background = 'blue';
    document.getElementById('result').style.color = 'white';
    document.getElementById('result').style.padding = '3px';
}

function mediaPonderada() {
    let nota1 = +(document.getElementById('nota1').value) * 2;
    let nota2 = +(document.getElementById('nota2').value) * 3;
    let nota3 = +(document.getElementById('nota3').value) * 5;

    let resultado = (nota1 + nota2 + nota3) / 10;
    document.getElementById('result').innerText = resultado.toFixed(2);
    estilo1();
}

document.getElementById('calcularMedia').addEventListener('click', mediaPonderada)

// Questão 2
function estilo2() {
    document.getElementById('correto').style.fontSize = '18px';
    document.getElementById('correto').style.background = 'blue';
    document.getElementById('correto').style.color = 'white';
    document.getElementById('correto').style.padding = '3px';
}

function validatePWD() {
    let password = document.getElementById("pwd").value;
    let valor = '2002';

    if (password != valor) {
        alert('Senha invalida')
    } else {
        document.getElementById('correto').innerText = "Acesso Permitido";
        estilo2();
    }

}

// Questão 3
function estilo3() {
    document.getElementById('int').style.fontSize = '18px';
    document.getElementById('int').style.background = 'blue';
    document.getElementById('int').style.color = 'white';
    document.getElementById('int').style.padding = '3px';
}

function mostrarIntervalo() {
    let value = parseFloat(document.getElementById('valor').value).toFixed(2);

    if (value >= 0 && value < 25.01) {
        document.getElementById('int').innerHTML = '[0,25]';
        estilo3();

    } else if (value >= 25.01 && value < 50.01) {
        document.getElementById('int').innerHTML = '[25,50]';
        estilo3();

    } else if (value >= 50.01 && value < 75.01) {
        document.getElementById('int').innerHTML = '[50,75]';
        estilo3();

    } else if (value >= 75.01 && value < 100.01) {
        document.getElementById('int').innerHTML = '[75,100]';
        estilo3();
        
    } else {
        alert('Fora de intervalo');
    }
}

document.getElementById('questao3').addEventListener('click', mostrarIntervalo);

// Questão 4

function calcularSalario() {
    let salario = parseFloat(document.getElementById('salario').value);

    if (salario >= 0 && salario < 400.01) {
        let novoSalario = (salario * 0.15) + salario;
        let reajusteGanho = novoSalario - salario;
        let percentual = '15%';
        document.querySelector('[data-js="ns"]').innerHTML = novoSalario.toFixed(2);
        document.querySelector('[data-js="gn"]').innerHTML = reajusteGanho.toFixed(2);
        document.querySelector('[data-js="perc"]').innerHTML = percentual;

    } else if (salario >= 400.01 && salario < 800.01) {
        let novoSalario = (salario * 0.12) + salario;
        let reajusteGanho = novoSalario - salario;
        let percentual = '12%';
        document.querySelector('[data-js="ns"]').innerHTML = novoSalario.toFixed(2);
        document.querySelector('[data-js="gn"]').innerHTML = reajusteGanho.toFixed(2);
        document.querySelector('[data-js="perc"]').innerHTML = percentual;

    } else if (salario >= 800.01 && salario < 1200.01) {
        let novoSalario = (salario * 0.10) + salario;
        let reajusteGanho = novoSalario - salario;
        let percentual = '10%';
        document.querySelector('[data-js="ns"]').innerHTML = novoSalario.toFixed(2);
        document.querySelector('[data-js="gn"]').innerHTML = reajusteGanho.toFixed(2);
        document.querySelector('[data-js="perc"]').innerHTML = percentual;

    } else if (salario >= 1200.01 && salario < 2000.01) {
        let novoSalario = (salario * 0.07) + salario;
        let reajusteGanho = novoSalario - salario;
        let percentual = '7%';
        document.querySelector('[data-js="ns"]').innerHTML = novoSalario.toFixed(2);
        document.querySelector('[data-js="gn"]').innerHTML = reajusteGanho.toFixed(2);
        document.querySelector('[data-js="perc"]').innerHTML = percentual;

    } else {
        let novoSalario = (salario * 0.04) + salario;
        let reajusteGanho = novoSalario - salario;
        let percentual = '4%';
        document.querySelector('[data-js="ns"]').innerHTML = novoSalario.toFixed(2);
        document.querySelector('[data-js="gn"]').innerHTML = reajusteGanho.toFixed(2);
        document.querySelector('[data-js="perc"]').innerHTML = percentual;
    }
}

// Questão 05
function estilo5() {
    document.getElementById('imp').style.fontSize = '18px';
    document.getElementById('imp').style.background = 'blabck';
    document.getElementById('imp').style.color = 'white';
    document.getElementById('imp').style.padding = '3px';
}

function calcularImposto() {
    let renda = parseFloat(document.getElementById('renda').value);
    let situacao = "Isento";

    if (renda >= 0.00 && renda < 2000.01) { //Isento de imposto
        document.getElementById('imp').innerHTML = situacao;
        estilo5();

    } else if (renda >= 2000.01 && renda < 3000.01) { //imposto de 8%
        let saldo = renda - 2000.00;
        let impostoRenda = 0.08 * saldo;
        document.getElementById('imp').innerHTML = "R$ " + impostoRenda.toFixed(2);
        estilo5();

    } else if (renda >= 3000.01 && renda < 4500.01) { //imposto de 18%
        let saldo = renda - 2000.00;
        let restoValor = saldo - 1000.00;
        let impostoRenda = (saldo - restoValor) * 0.08 + (restoValor * 0.18);
        document.getElementById('imp').innerHTML = "R$ " + impostoRenda.toFixed(2);
        estilo5();

    } else { //imposto de 28%
        let impostoRenda = ((renda - 4500) * 0.28) + 350;
        document.getElementById('imp').innerHTML = "R$ " + impostoRenda.toFixed(2);
        estilo5();
    }
}

// Questão 06
function salario() {

    let nome = document.getElementById('nome').value;
    let valorHora = parseFloat(document.getElementById('valorHora').value);
    let totalHoras = +document.getElementById('totalHoras').value;

    //Calculo do Salário
    let salario = valorHora * totalHoras
    document.querySelector('[data-js="name"]').innerHTML = nome;
    document.querySelector('[data-js="value"]').innerHTML = "R$ " + salario.toFixed(2);
}

document.getElementById('questao6').addEventListener('click', salario)

// Questão 07
function estilo7() {
    document.getElementById('consumo').style.fontSize = '18px';
    document.getElementById('consumo').style.background = 'blue';
    document.getElementById('consumo').style.color = 'white';
    document.getElementById('consumo').style.padding = '3px';
}

function consumoMedio() {
    let distanciaPercorrida = +document.getElementById('distancia').value;
    let combustivelGasto = parseFloat(document.getElementById('gasto').value);

    //Calculo da media de consumo
    let consumoMedio = distanciaPercorrida / combustivelGasto;
    document.getElementById('consumo').innerHTML = consumoMedio.toFixed(3) + " km/l";
    estilo7();
}

document.getElementById('questao7').addEventListener('click', consumoMedio);
