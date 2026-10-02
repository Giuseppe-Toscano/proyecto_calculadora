import { suma } from './funciones/suma.js';
import { promedio } from './funciones/promedio.js';
import { multiplicacion } from './funciones/multiplicacion.js';
import { maximo } from './funciones/maximo.js';
import { raiz } from './funciones/raiz.js';
import { division } from './funciones/division.js';
import { seno } from './funciones/seno.js';
import { log } from './funciones/log.js';

document.addEventListener("DOMContentLoaded", () => {

  document.getElementById("btnCalcular").addEventListener("click", calcular);

});

function calcular() {

  const op = document.getElementById("operacion").value;

  const v1 = parseFloat(document.getElementById("valor1").value);
  const v2 = parseFloat(document.getElementById("valor2").value);

  // El seno solamente necesita el Valor 1
  if (op === "seno") {

    if (isNaN(v1)) {
      alert("Ingrese un valor válido");
      return;
    }

  } else {

    if (isNaN(v1) || isNaN(v2)) {
      alert("Ingrese valores válidos");
      return;
    }

  }

  let resultado;

  if (op === "suma") {

    resultado = suma(v1, v2);

  } else if (op === "promedio") {

    resultado = promedio(v1, v2);

  } else if (op === "maximo") {

    resultado = maximo(v1, v2);

  } else if (op === "multiplicacion") {

    resultado = multiplicacion(v1, v2);

  } else if (op === "raiz") {

    resultado = raiz(v1, v2);

  } else if (op === "division") {

    resultado = division(v1, v2);

  } else if (op === "seno") {

    resultado = seno(v1);

  } else if (op === "log") {

    resultado = log(v1, v2)
  
  } else {

    alert("Operación no válida");
    return;

  }

  document.getElementById("resultado").innerText = "Resultado: " + resultado;

}