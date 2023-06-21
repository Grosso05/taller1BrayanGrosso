document.getElementById("verificationForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var selectedName = document.getElementById("name").value;
    var selectedLastName = document.getElementById("lastName").value;
    var selectedActivity = document.getElementById("activity").value;
  
    var instructors = [
      { name: "Jennifer", lastName: "Fajardo", activity: "Fundamentos Js" },
      { name: "Manuel", lastName: "Garavito", activity: "Python Básico" },
      { name: "Margarita", lastName: "Guarin", activity: "Prototípado Avanzado" },
      { name: "Erick", lastName: "Granados", activity: "Java Avanzado" },
      { name: "Cristian", lastName: "Buitrago", activity: "Diseño Proyecto" },
      { name: "Sandra", lastName: "Rueda", activity: "Consulta y Sql" },
      { name: "Julio", lastName: "Buitrago", activity: "Derechos del trabajo" }
    ];
  
    var isCorrect = false;
    for (var i = 0; i < instructors.length; i++) {
      if (
        selectedName === instructors[i].name &&
        selectedLastName === instructors[i].lastName &&
        selectedActivity === instructors[i].activity
      ) {
        isCorrect = true;
        break;
      }
    }
  
    if (isCorrect) {
      alert("La respuesta es correcta");
    } else {
      alert("La respuesta es incorrecta");
    }
  });
  