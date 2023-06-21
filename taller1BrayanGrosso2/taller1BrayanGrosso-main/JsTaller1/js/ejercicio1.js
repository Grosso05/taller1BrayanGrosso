// Solicitar al usuario que ingrese una palabra
var palabra = prompt("Ingresa una palabra:");

// Solicitar al usuario que elija una opción
var opcion = prompt("Elige una opción:\n1. Longitud de la palabra\n2. Palabra en mayúsculas\n3. Palabra en minúsculas\n4. Primer carácter de la palabra");

// Verificar la opción seleccionada por el usuario y mostrar el resultado correspondiente
if (opcion === "1") {
  // Calcular y mostrar la longitud de la palabra
  alert("La longitud de la palabra es: " + palabra.length);
} else if (opcion === "2") {
  // Convertir la palabra a mayúsculas y mostrarla
  alert("La palabra en mayúsculas es: " + palabra.toUpperCase());
} else if (opcion === "3") {
  // Convertir la palabra a minúsculas y mostrarla
  alert("La palabra en minúsculas es: " + palabra.toLowerCase());
} else if (opcion === "4") {
  // Obtener el primer carácter de la palabra y mostrarlo
  alert("El primer carácter de la palabra es: " + palabra.charAt(0));
} else {
  // Opción inválida
  alert("Opción inválida");
}
