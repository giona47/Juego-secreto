let numeroMaximo = 10
let listaNumerosSorteados = [];
let NumeroSecreto = 0;
let numeroDeJuegos = 0;
intentos = 1

condicionesIniciales();
console.log(NumeroSecreto);


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorDeUsuario").value); 
    
    console.log("intentos: "+ intentos)

    if(NumeroSecreto===numeroDeUsuario){
        asignarTextoElemento("p", `Acertaste el número en ${intentos} ${intentos===1 ? "vez":"veces"}`);
        document.querySelector("#reiniciar").removeAttribute("disabled"); 
    }else{
        // el usuario no acerto
        if (NumeroSecreto<numeroDeUsuario){
            asignarTextoElemento("p",`El número es menor a ${numeroDeUsuario}`);
        }else if (NumeroSecreto>numeroDeUsuario){
            asignarTextoElemento("p",`El número es mayor a ${numeroDeUsuario}`);
        }else{
            asignarTextoElemento("p",`no se detecto valor`);
        }
        intentos++;
        LimpiarCaja();
    }
    return;
    
}

function reiniciarJuego(){
    //limpiar caja
    LimpiarCaja();
    //condiciones iniciales
    condicionesIniciales();
    //reiniciar contador de intentos
    intentos = 1;
    //deshabilitar botón de juego nuevo
    document.querySelector("#reiniciar").setAttribute("disabled","true");
}

function LimpiarCaja(){
    document.querySelector("#valorDeUsuario").value = "";
    
}


function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    console.log("Juego numero: " + numeroDeJuegos);

    //si ya salieron todos los numeros, mandamos mensaje y cerramos el juego
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p","Ya salieron todos los números posibles");

    }else if (numeroDeJuegos == 5){
        asignarTextoElemento("p","ya jugaste demasiadas veces seguidas")
        condicionesIniciales()
    }else{
        // si el numero esta en la lista generamos otro
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            numeroDeJuegos++
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            numeroDeJuegos++
            return numeroGenerado;
        }
        }    
}  


function condicionesIniciales(){
    asignarTextoElemento("h1","Juego del número secreto");
    asignarTextoElemento("p",`Menciona un número del 1 al ${numeroMaximo}`);
    NumeroSecreto = generarNumeroSecreto();
}

