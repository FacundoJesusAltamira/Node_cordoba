const generarNumeroAleatorio = () => {
  return Math.floor(Math.random() * 100) + 1;
};
const verificarAdivinanza = (numeroSecreto, numeroIngresado) => {
  if (numeroIngresado === numeroSecreto) {
    console.log("¡Adivinaste!");
  } else if (numeroIngresado > numeroSecreto) {
    console.log("El número secreto es menor");
  } else {
    console.log("El número secreto es mayor");
  }
};
module.exports = {
  generarNumeroAleatorio,
  verificarAdivinanza,
};
