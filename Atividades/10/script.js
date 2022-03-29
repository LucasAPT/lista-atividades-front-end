function calcular(){
    let distancia = Number(document.getElementById('distancia').value);
    let gasto = Number(document.getElementById('gasto').value);

    let consumo = distancia / gasto;
   

    let resultado = document.getElementById("consumo").value = consumo.toFixed(3);
    return resultado;
}