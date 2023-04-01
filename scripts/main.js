// Selección de elementos del DOM
const display = document.querySelector('.display');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');
const botonIgual = document.querySelector('.igual');
const botonLimpiar = document.querySelector('.limpiar');

// Variables para almacenar los valores
let valorEnMemoria = null;
let operadorActual = null;
let valorActual = '0';

// Función para actualizar el display
function actualizarDisplay() {
  display.value = valorActual;
}

// Función para agregar un número al valor actual
function agregarNumero(numero) {
  if (valorActual === '0') {
    valorActual = numero.toString();
  } else {
    valorActual += numero.toString();
  }
  actualizarDisplay();
}

// Función para agregar un operador al valor actual
function agregarOperador(operador) {
  if (operadorActual !== null) {
    calcular();
  }
  valorEnMemoria = parseFloat(valorActual);
  operadorActual = operador;
  valorActual = '0';
}

// Función para realizar el cálculo
function calcular() {
  if (operadorActual === null) {
    return;
  }
  const valorActualFloat = parseFloat(valorActual);
  switch (operadorActual) {
    case '+':
      valorEnMemoria += valorActualFloat;
      break;
    case '-':
      valorEnMemoria -= valorActualFloat;
      break;
    case '*':
      valorEnMemoria *= valorActualFloat;
      break;
    case '/':
      valorEnMemoria /= valorActualFloat;
      break;
    default:
      break;
  }
  valorActual = valorEnMemoria.toString();
  operadorActual = null;
  actualizarDisplay();
}

// Función para limpiar los valores
function limpiar() {
  valorEnMemoria = null;
  operadorActual = null;
  valorActual = '0';
  actualizarDisplay();
}

// Event listeners para los botones
botonesNumeros.forEach((boton) => {
  boton.addEventListener('click', () => {
    agregarNumero(boton.textContent);
  });
});

botonesOperadores.forEach((boton) => {
  boton.addEventListener('click', () => {
    agregarOperador(boton.textContent);
  });
});

botonIgual.addEventListener('click', () => {
  calcular();
});

botonLimpiar.addEventListener('click', () => {
  limpiar();
});
