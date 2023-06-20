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

  // Configurar el título del modal y el botón Calcular
  switch (figura) {
    case "circulo":
      modalTitle.innerText = "Cálculo del Círculo";
      radioInput.style.display = "block";
      break;

    case "triangulo":
      modalTitle.innerText = "Cálculo del Triángulo";
      baseInput.style.display = "block";
      alturaInput.style.display = "block";
      break;

    case "rectangulo":
      modalTitle.innerText = "Cálculo del Rectángulo";
      baseInput.style.display = "block";
      alturaInput.style.display = "block";
      break;

    case "cuadrado":
      modalTitle.innerText = "Cálculo del Cuadrado";
      baseInput.style.display = "block";
      alturaInput.style.display = "block";
      break;
  }

  // Configurar la función de cálculo según el tipo de cálculo seleccionado (área o perímetro)
  switch (calculo) {
    case "area":
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
      break;

    case "perimetro":
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
      break;
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
