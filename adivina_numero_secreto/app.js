const readlineSync = require("readline-sync");
const { generarNumeroAleatorio, verificarAdivinanza } = require("./adivinanza");
const obtenerNumeroIngresado = () => {
  return readlineSync.questionInt("Ingrese un numero: ");
};
const juegoAdivinanza = () => {
  const numeroSecreto = generarNumeroAleatorio();
  let numeroIngresado = 0;
  console.log("¡Bienvenido a Adivina el numero secreto!");
  console.log("Intenta adivinar el numero del 1 al 100. \n");
  while (numeroIngresado !== numeroSecreto) {
    numeroIngresado = obtenerNumeroIngresado();
    verificarAdivinanza(numeroSecreto, numeroIngresado);
  }
};
juegoAdivinanza();
