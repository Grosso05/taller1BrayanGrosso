// Funciones de cálculo del área y el perímetro para cada figura

function calcularAreaCirculo() {
  var radio = parseFloat(document.getElementById("radio").value);
  var area = Math.PI * radio * radio;
  mostrarResultado(area);
}

function calcularPerimetroCirculo() {
  var radio = parseFloat(document.getElementById("radio").value);
  var perimetro = 2 * Math.PI * radio;
  mostrarResultado(perimetro);
}

function calcularAreaTriangulo() {
  var base = parseFloat(document.getElementById("base").value);
  var altura = parseFloat(document.getElementById("altura").value);
  var area = (base * altura) / 2;
  mostrarResultado(area);
}

function calcularPerimetroTriangulo() {
  var lado1 = parseFloat(document.getElementById("lado1").value);
  var lado2 = parseFloat(document.getElementById("lado2").value);
  var lado3 = parseFloat(document.getElementById("lado3").value);
  var perimetro = lado1 + lado2 + lado3;
  mostrarResultado(perimetro);
}

function calcularAreaRectangulo() {
  var base = parseFloat(document.getElementById("base").value);
  var altura = parseFloat(document.getElementById("altura").value);
  var area = base * altura;
  mostrarResultado(area);
}

function calcularPerimetroRectangulo() {
  var base = parseFloat(document.getElementById("base").value);
  var altura = parseFloat(document.getElementById("altura").value);
  var perimetro = 2 * (base + altura);
  mostrarResultado(perimetro);
}

function calcularAreaCuadrado() {
  var lado = parseFloat(document.getElementById("lado").value);
  var area = lado * lado;
  mostrarResultado(area);
}

function calcularPerimetroCuadrado() {
  var lado = parseFloat(document.getElementById("lado").value);
  var perimetro = 4 * lado;
  mostrarResultado(perimetro);
}

// Función para abrir la ventana modal
function abrirModal(figura, calculo) {
  var modal = document.getElementById("myModal");
  var modalTitle = document.getElementById("modal-title");
  var calcularBtn = document.getElementById("calcular-btn");
  var resultadoDiv = document.getElementById("resultado");
  var baseInput = document.getElementById("base");
  var alturaInput = document.getElementById("altura");
  var radioInput = document.getElementById("radio");
  var ladoInput = document.getElementById("lado");

  // Reiniciar los campos de entrada
  baseInput.style.display = "none";
  alturaInput.style.display = "none";
  radioInput.style.display = "none";
  ladoInput.style.display = "none";

  // Configurar el título del modal
  modalTitle.innerText = "Cálculo del " + figura.charAt(0).toUpperCase() + figura.slice(1);

  // Configurar la función de cálculo según el tipo de cálculo seleccionado (área o perímetro)
  if (calculo === "area") {
    calcularBtn.onclick = function () {
      switch (figura) {
        case "circulo":
          calcularAreaCirculo();
          break;
        case "triangulo":
          calcularAreaTriangulo();
          break;
        case "rectangulo":
          calcularAreaRectangulo();
          break;
        case "cuadrado":
          calcularAreaCuadrado();
          break;
      }
    };
  } else if (calculo === "perimetro") {
    calcularBtn.onclick = function () {
      switch (figura) {
        case "circulo":
          calcularPerimetroCirculo();
          break;
        case "triangulo":
          calcularPerimetroTriangulo();
          break;
        case "rectangulo":
          calcularPerimetroRectangulo();
          break;
        case "cuadrado":
          calcularPerimetroCuadrado();
          break;
      }
    };
  }

  // Mostrar los campos de entrada necesarios según la figura y el cálculo
  if (figura === "circulo") {
    if (calculo === "area" || calculo === "perimetro") {
      radioInput.style.display = "block";
    }
  } else if (figura === "triangulo" || figura === "rectangulo") {
    if (calculo === "area" || calculo === "perimetro") {
      baseInput.style.display = "block";
      alturaInput.style.display = "block";
    }
  } else if (figura === "cuadrado") {
    if (calculo === "area" || calculo === "perimetro") {
      ladoInput.style.display = "block";
    }
  }

  // Limpiar el resultado anterior
  resultadoDiv.innerText = "";

  // Abrir el modal
  modal.style.display = "block";
}

// Función para cerrar la ventana modal
function cerrarModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}
