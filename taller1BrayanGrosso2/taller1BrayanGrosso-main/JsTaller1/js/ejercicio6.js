function createButton(text, onClick) {
    var button = document.createElement("button");
    button.textContent = text;
    button.addEventListener("click", onClick);
    return button;
  }
  
  function openModal(shape) {
    var modal = document.getElementById("modal");
    var modalTitle = document.getElementById("modalTitle");
    var modalBody = document.getElementById("modalBody");
    var result = document.getElementById("result");
  
    if (shape === "circle") {
      modalTitle.innerText = "Círculo";
      modalBody.innerHTML = '<label for="input1">Radio:</label>' +
                            '<input type="number" id="input1"><br>';
      result.innerText = "";
    } else if (shape === "triangle") {
      modalTitle.innerText = "Triángulo";
      modalBody.innerHTML = '<label for="input1">Base:</label>' +
                            '<input type="number" id="input1"><br>' +
                            '<label for="input2">Altura:</label>' +
                            '<input type="number" id="input2"><br>';
      result.innerText = "";
    } else if (shape === "rectangle") {
      modalTitle.innerText = "Rectángulo";
      modalBody.innerHTML = '<label for="input1">Lado 1:</label>' +
                            '<input type="number" id="input1"><br>' +
                            '<label for="input2">Lado 2:</label>' +
                            '<input type="number" id="input2"><br>';
      result.innerText = "";
    } else if (shape === "square") {
      modalTitle.innerText = "Cuadrado";
      modalBody.innerHTML = '<label for="input1">Lado:</label>' +
                            '<input type="number" id="input1"><br>';
      result.innerText = "";
    }
  
    modalBody.style.display = "block";
    modal.style.display = "block";
  }
  
  function calculate() {
    var modalBody = document.getElementById("modalBody");
    var result = document.getElementById("result");
    var shape = document.getElementById("modalTitle").innerText;
    var input1 = parseFloat(document.getElementById("input1").value);
    var input2 = parseFloat(document.getElementById("input2").value);
    var input3 = parseFloat(document.getElementById("input3").value);
  
    if (shape === "Círculo") {
      var perimeter = 2 * Math.PI * input1;
      var area = Math.PI * input1 * input1;
      result.innerText = "Perímetro: " + perimeter.toFixed(2) + ", Área: " + area.toFixed(2);
    } else if (shape === "Triángulo") {
      var perimeter = input1 + input2 + input3;
      var area = (input1 * input2) / 2;
      result.innerText = "Perímetro: " + perimeter.toFixed(2) + ", Área: " + area.toFixed(2);
    } else if (shape === "Rectángulo") {
      var perimeter = 2 * (input1 + input2);
      var area = input1 * input2;
      result.innerText = "Perímetro: " + perimeter.toFixed(2) + ", Área: " + area.toFixed(2);
    } else if (shape === "Cuadrado") {
      var perimeter = 4 * input1;
      var area = input1 * input1;
      result.innerText = "Perímetro: " + perimeter.toFixed(2) + ", Área: " + area.toFixed(2);
    }
  
    modalBody.style.display = "none";
  }
  
  window.onclick = function(event) {
    var modal = document.getElementById("modal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  
  function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
  }
  
  var closeButton = document.getElementsByClassName("close")[0];
  closeButton.onclick = closeModal;
  
  // Agregar los botones "Calcular" y "Cerrar" dinámicamente
  var calculateButton = createButton("Calcular", calculate);
  var closeButton = createButton("Cerrar", closeModal);
  var modalButtons = document.createElement("div");
  modalButtons.classList.add("modal-buttons");
  modalButtons.appendChild(calculateButton);
  modalButtons.appendChild(closeButton);
  modalBody.appendChild(modalButtons);
  