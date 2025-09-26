// Declaramos un arreglo (array) con varias frases motivacionales
const citas = [
  "Anakin Skywalker",
  "Obi Wan Kenobi",
  "Padme Amidala",
  "Luke Skywalker",
  "Leia Organa",
  "Darth Vader",
  "R2-D2",
  "C-3PO",
  "Palpatine",
  "Din Djarin",
  "Grogu",
  "Ahsoka Tano",
  "Darth Maul",
  "Chewbacca",
  "Han Solo",
  "Mace Windu",
  "Qui-Gon Jim",
  "Yoda",
  "Conde Dooku",
  "General Grievous",
  "Jango Fett",
  "Boba Fett",
  "Lando Calrissian",
  "Kit Fisto",
  "Plo Koon",
  "Shaak Ti",
  "Barriss Offee",
  "Cad Bane",
  "Cassian Andor",
  "Cal Kestis",
];

// Definimos la función que mostrará una cita aleatoria
function generarCita() {
  // Generamos un número aleatorio entre 0 y la cantidad de frases (citas.length)
  // Math.random() → número entre 0 y 1
  // * citas.length → escala ese número al rango de frases disponibles
  // Math.floor() → redondea hacia abajo para obtener un número entero válido
  const indice = Math.floor(Math.random() * citas.length);

  // Buscamos en el documento el elemento con id="quote"
  // Cambiamos su contenido de texto por la frase que corresponde al índice generado
  document.getElementById("quote").innerText = citas[indice];
  // Cada vez que generamos una cita, aumentamos el contador
  contarClics();
}
let contador = 0;
function contarClics() {
  contador++;
  document.getElementById("contador").innerText = "Nombres Mostrados: " + contador;
}







