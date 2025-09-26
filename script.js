// Declaramos un arreglo (array) con varias frases motivacionales
const citas = [
  "Anakin Skywalker",
  "Obi Wan Kenobi",
  "Padme Amidala",
  "Luke Skywalker.",
  "Leia Organa.",
  "Han Solo.",
  "Ahsoka Tano."
  "Din Djarin"
  "Grogu"
  "Darth Vader"
  "Darth Tyranus"
  "Darth Maul"
  "Chewbacca"
  "C-3PO"
  "R2-D2"
  "Palpatine"
  "Darth Sidious"
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
}

