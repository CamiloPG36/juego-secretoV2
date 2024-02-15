//Declaración de variables
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//Función para moodificar texto de un elemento del HTML, basado en los parametros "elemento" y "texto"
function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

//Función que permite verificar si el usuario acerto o no, el número secreto.
function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
  //Condicional para verificar si el usuario acerta o no el número secreto
  //Caso cuando el usuario acertó
  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento("p",`Acertaste el número en ${intentos} ${intentos === 1 ? "vez " : "veces"}`);
    document.getElementById("reiniciar").removeAttribute("disabled");
    //Caso cuando el usuario no acertó.
  } else if (numeroDeUsuario > numeroSecreto) {
    asignarTextoElemento("p", "El número secreto es menor");
  } else {
    asignarTextoElemento("p", "El número secreto es mayor");
  }
  intentos++;
  limpiarCaja();
  return;
}

//Función que limpia la caja de texto donde se introduce el valor del usuario
function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
}

//Funcion que genera un número aleatorio entre 0 y 99.
function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);
  //Verificar si ya se sortearon todos los números
  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
  } else {
    //Verificar si el número generado esta incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

//Funcion que genera los mensajes iniciales  al inicio del juego.
function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del número secreto!");
  asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

//Funcion para reinicia el juego al hacer click en el botón "Nuevo juego".
function reiniciarJuego() {
  //Limpiar caja
  limpiarCaja();
  //Indica mensaje de intervalo de números
  //Se genera el número aleatorio
  //Se Inicializa el número de intentos
  //Se Deshabilita el botón  "nuevo juego", hasta que el jugador haga clic en él otra vez.
  condicionesIniciales();
  //Uso de la función "mensajesIniciales"
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();
