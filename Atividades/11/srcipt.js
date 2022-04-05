// VARÍAVEL ALFA (PESSOA)
var alma = JSON.parse(localStorage.getItem("alma"));
if (alma == null) {
    alma = [];
}

// FUNÇÃO 'SALVAR' COM VARIÁVEL 'PESSOA' E SEUS ATRIBUTOS
function gravar() {
    var pessoa = {};

    pessoa.nome = document.getElementById("nome").value.toUpperCase();
    pessoa.status = document.getElementById("status").value;
    pessoa.local = document.getElementById("local").value;
    pessoa.horaInicio = document.getElementById("horaInicio").value;
    pessoa.inicioPrevisto = document.getElementById("inicioPrevisto").value;
    pessoa.fimPrevisto = document.getElementById("fimPrevisto").value;
    pessoa.saidaPrevista = document.getElementById("saidaPrevista").value;

    var id = document.getElementById("id").value;

    if (id == '') {
        alma.push(pessoa);
    } else {
        alma[id] = pessoa;
    }

    localStorage.setItem("alma", JSON.stringify(alma));
    atualizarTabela();
    novo();
}

// PAINEL ONDE FICAM OS REGISTROS
function atualizarTabela() {
    
    var alma = JSON.parse(localStorage.getItem("alma"));
    var corpoTabela = "";
    for (i in alma) {
        corpoTabela += `<tr onclick="editar(${i})">`;
        corpoTabela += `<td>${alma[i].nome}</td>`;
        corpoTabela += colunaStatus(alma[i].status, alma[i].local);
        corpoTabela += `<td>${alma[i].horaInicio}</td>`;
        corpoTabela += `<td>${alma[i].inicioPrevisto}</td>`;
        corpoTabela += `<td>${alma[i].fimPrevisto}</td>`;
        corpoTabela += `<td>${alma[i].saidaPrevista}</td>`;
        corpoTabela += `</tr>`;
    }
    // MOSTRA OS DADOS
    document.getElementById("corpoTabela").innerHTML = corpoTabela;
}

// COLUNA STATUS E LOCAL REFERENTE AO PACIENTE
function colunaStatus(status, local) {
    var retorno = "<td &class>&status &local</td>";
    local = (local == "") ? "" : `(${local})`;
    retorno = retorno.replace("&local", local);
    switch (status) {
        case "operatorio": {
            retorno = retorno.replace("&class", "class='table-warning'")
                .replace("&status", "Pré Operatório");
            break;
        }
        case "sala-cirurgia": {
            retorno = retorno.replace("&class", "class='table-danger'")
                .replace("&status", "Sala de Cirurgia");
            break;
        }
        case "recuperacao": {
            retorno = retorno.replace("&class", "class='table-success'")
                .replace("&status", "Sala de Recuperação");
            break;
        }
        case "transferido": {
            retorno = retorno.replace("&class", "class='table-primary'")
                .replace("&status", "Transferido");
            break;
        }
    }
    return retorno;
}


// FUNÇÃO EMBUTIDA -- QUANDO O USUÁRIO SELECIONAR ALGUM REGISTRO PERMITIRÁ EDITAR
function editar(id) {
    document.getElementById('nome').value = alma[id].nome;
    document.getElementById("status").value = alma[id].status;
    document.getElementById("local").value = alma[id].local;
    document.getElementById("horaInicio").value = alma[id].horaInicio;
    document.getElementById("inicioPrevisto").value = alma[id].inicioPrevisto;
    document.getElementById("fimPrevisto").value = alma[id].fimPrevisto;
    document.getElementById("saidaPrevista").value = alma[id].saidaPrevista;
    document.getElementById("id").value = id;
}

// FUNÇÃO APAGAR -- EXCLUIRÁ REGISTRO -- PRECISA ATRELAR AO BOTÃO NO HTML
function apagar() {
    var id = document.getElementById("id").value;
    if (id == '') {
        return;
    }
    if (confirm("Você realmente deseja apagar esse registro?")) {
        alma.splice(id, 1);
        localStorage.setItem("alma", JSON.stringify(alma));
        atualizarTabela();
        novo();
    }
}

// FUNÇÃO NOVO -- ADICIONARÁ REGISTRO -- PRECISA ATRELAR AO BOTÃO NO HTML
function novo() {
    document.getElementById("formulario").reset();
    document.getElementById("id").value = "";
}

// CHAMAR FUNÇÃO
atualizarTabela();