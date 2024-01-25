let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numerMaximo = 10;


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;

}

console.log(numeroSecreto);
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numerMaximo)+1;
    if (listaNumerosSorteados == numerMaximo){
        asignarTextoElemento('p', "Ya se sortearon todos los números posibles");

        }else{
            if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
            }else{
                listaNumerosSorteados.push(numeroGenerado);
                return numeroGenerado;
        }   }
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
   
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');

        }else{
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();

    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value='';
    return;
   
}

function condicionesIniciales(){
    asignarTextoElemento('h1',"Juego del número secreto!");
    asignarTextoElemento('p',`Indica un número del 1 al ${numerMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    return;
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
   
    condicionesIniciales();
    //generar el numero aleatorio
    //Inicializar el número de intentos
    //indicar mensaje de inicio

    //desahabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    return;

    

}

condicionesIniciales();