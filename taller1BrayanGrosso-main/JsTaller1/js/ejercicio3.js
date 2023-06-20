// Solicitar al usuario ingresar los valores de los lados del triángulo
var lado1 = parseFloat(prompt("Ingresa el valor del lado 1 del triángulo:"));
var lado2 = parseFloat(prompt("Ingresa el valor del lado 2 del triángulo:"));
var lado3 = parseFloat(prompt("Ingresa el valor del lado 3 del triángulo:"));

// Verificar qué tipo de triángulo es
if (lado1 === lado2 && lado2 === lado3) {
  // Todos los lados son iguales, es un triángulo equilátero
  alert("El triángulo es equilátero.");
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
  // Dos lados son iguales, es un triángulo isósceles
  alert("El triángulo es isósceles.");
} else {
  // Ningún lado es igual a los otros, es un triángulo escaleno
  alert("El triángulo es escaleno.");
}
