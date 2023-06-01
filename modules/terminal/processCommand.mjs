// Funcion que detecta si el comando ingresado existe para ejecutarlo
function processCommand(command) {
  if (command === "clear") {
    return "clear"
  } else if (command === "date") {
    return new Date().toLocaleDateString();
  } else if (command === "hello") {
    return "hola compas";
  } else if (command === "help") {
    return "Comandos disponibles: date, hello, clear";
  } else {
    return "Comando no reconocido";
  }
}
export default processCommand

