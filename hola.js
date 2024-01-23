let numero = parseInt(prompt("introduzca que numero quiere en tabla de multiplicar:"));

function tablaDeMultiplicar(numeroo){
    for (var i=1; i<=10; i++){
        var resultado = numeroo*i;
        console.log(numeroo + "x" + i + "=" + resultado);
    }
    
}
tablaDeMultiplicar(numero);
