// Solicitar al usuario ingresar una temperatura en grados
var temperatura = parseFloat(prompt("Ingresa una temperatura en grados:"));

// Solicitar al usuario elegir las unidades de conversión
var opcionDe = prompt("Vas a convertir de:\n1. Celsius\n2. Fahrenheit\n3. Kelvin");

var opcionA = prompt("Deseas convertir a:\n1. Celsius\n2. Fahrenheit\n3. Kelvin");

// Realizar la conversión según las opciones seleccionadas por el usuario
var resultado;

if (opcionDe === "1") { // Convertir de Celsius
  if (opcionA === "1") {
    resultado = temperatura; // Celsius a Celsius
  } else if (opcionA === "2") {
    resultado = (temperatura * 9 / 5) + 32; // Celsius a Fahrenheit
  } else if (opcionA === "3") {
    resultado = temperatura + 273.15; // Celsius a Kelvin
  }
} else if (opcionDe === "2") { // Convertir de Fahrenheit
  if (opcionA === "1") {
    resultado = (temperatura - 32) * 5 / 9; // Fahrenheit a Celsius
  } else if (opcionA === "2") {
    resultado = temperatura; // Fahrenheit a Fahrenheit
  } else if (opcionA === "3") {
    resultado = (temperatura + 459.67) * 5 / 9; // Fahrenheit a Kelvin
  }
} else if (opcionDe === "3") { // Convertir de Kelvin
  if (opcionA === "1") {
    resultado = temperatura - 273.15; // Kelvin a Celsius
  } else if (opcionA === "2") {
    resultado = (temperatura * 9 / 5) - 459.67; // Kelvin a Fahrenheit
  } else if (opcionA === "3") {
    resultado = temperatura; // Kelvin a Kelvin
  }
}

// Mostrar el resultado de la conversión en una alerta con dos cifras decimales
alert("El resultado de la conversión es: " + resultado.toFixed(2));
