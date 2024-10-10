// Variables
var categorias = ["Historia", "Geografía", "Arte", "Literatura", "Gastronomía"];
var preguntas = {
  "Historia": [
    {pregunta: "¿Quién fue el primer presidente del Perú?", respuesta: "jose de la riva aguero"},
    {pregunta: "¿En qué año se declaró la independencia de Perú?", respuesta: "1821"},
    {pregunta: "¿Cuál es la capital de Perú?", respuesta: "Lima"},
    {pregunta: "¿Quién fue el primer virrey oficial de Perú?", respuesta: "blasco nuñez de vela"},
    {pregunta: "¿Contra qué país se enfrentó Perú en la Guerra del Pacífico entre 1879 y 1884?", respuesta: "chile"}
  ],
  "Geografía": [
    {pregunta: "¿Cuál es el desierto más extenso del Perú?", respuesta: "sechura"},
    {pregunta: "¿Cuál es el factor que favorece la gran variedad ictiológica del mar peruano?", respuesta: "frialdad de aguas"},
    {pregunta: "¿En qué departamento se encuentra el volcán Chachani?", respuesta: "arequipa"},
    {pregunta: "¿Cuál es el río más largo del Perú?", respuesta: "rio ucayali"},
    {pregunta: "¿Cuál es la montaña más alta de Perú?", respuesta: "el huascaran"}
  ],
  // Agrega más categorías aquí
};

var categoriaActual = 0;
var indicePregunta = 0;
var puntos = 0;

// Función para mostrar pregunta
function mostrarPregunta() {
  var categoria = categorias[categoriaActual];
  var pregunta = preguntas[categoria][indicePregunta];
  document.getElementById("preguntas").innerHTML = `
    <h2>${categoria}</h2>
    <p>${pregunta.pregunta}</p>
    <input type="text" id="respuesta" />
    <button onclick="comprobarRespuesta()">Comprobar respuesta</button>
    <p>Puntos: ${puntos}</p>
  `;
}

// Función para comprobar respuesta
function comprobarRespuesta() {
  var categoria = categorias[categoriaActual];
  var pregunta = preguntas[categoria][indicePregunta];
  var respuestaUsuario = document.getElementById("respuesta").value.trim().toLowerCase();
  if (respuestaUsuario === pregunta.respuesta.toLowerCase()) {
    alert("¡Correcto!");
    puntos++;
    siguientePregunta();
  } else {
    alert("¡Incorrecto! Inténtalo de nuevo.");
    document.getElementById("respuesta").value = "";
  }
}

// Función para mostrar siguiente pregunta
function siguientePregunta() {
  indicePregunta++;
  if (indicePregunta >= preguntas[categorias[categoriaActual]].length) {
    categoriaActual++;
    indicePregunta = 0;
    if (categoriaActual >= categorias.length) {
      finalizarJuego();
    } else {
      mostrarPregunta();
    }
  } else {
    mostrarPregunta();
  }
}

// Función para finalizar el juego
function finalizarJuego() {
  alert(`¡Fin del juego! Obtuviste ${puntos} puntos.`);
  document.getElementById("preguntas").innerHTML = `
    <h2>¡Fin del juego!</h2>
    <p>Obtuviste ${puntos} puntos.</p>
    <button onclick="reiniciarJuego()">Reiniciar juego</button>
  `;
}

// Función para reiniciar el juego
function reiniciarJuego() {
  categoriaActual = 0;
  indicePregunta = 0;
  puntos = 0;
  mostrarPregunta();
}

// Llamar a función para mostrar primera pregunta
mostrarPregunta();
