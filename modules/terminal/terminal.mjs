// Funciones de la terminal
import processCommand from "./processCommand.mjs"

// Entrada y salida de la terminal
const output = document.querySelector(".game-tmn__output");
const input = document.querySelector(".input");

function executeCommand() {
  const command = input.value; 
  input.value = "";
  // Ejecutar el comando y obtener el resultado
  const result = processCommand(command);
  // Mostrar el resultado en la salida
  
  if (result === "clear") {

    output.innerHTML = ""; 

  } else {

    const outputLine = document.createElement("p");
    outputLine.innerHTML = '<span class="prompt">root_></span>'+ " " + command;
    output.appendChild(outputLine);

    if (result) {

      const resultLine = document.createElement("p");
      resultLine.classList.add("game-tmn-otp__text");
      resultLine.textContent = result;
      output.appendChild(resultLine);

    }
    // Hacer scroll hacia abajo
    output.scrollTop = output.scrollHeight;

  }
}


function terminal() { 
  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      executeCommand();
    }
  });
}

export default terminal
