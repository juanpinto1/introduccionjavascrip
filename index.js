precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

function sumar(){
    let valor = parseInt(document.querySelector(".cantidad").innerHTML);
    valor += 1;
    document.querySelector(".cantidad").innerHTML = valor;
    calcularTotal(valor);
}

function restar(){
    let valor = parseInt(document.querySelector(".cantidad").innerHTML);
    valor -= 1;
    document.querySelector(".cantidad").innerHTML = valor;
    calcularTotal(valor);
}
function calcularTotal(unidades){
    let total = precio * unidades
    document.querySelector(".valor-total").innerHTML = total;
}
