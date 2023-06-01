// importar los mudulos
import modal from "./modules/alert.mjs";
import nextScene from "./modules/next-scene.mjs"; 
import terminal from "./modules/terminal/terminal.mjs";
import timer from "./modules/timer.mjs";


// Alertas sobre la orientacion de la pantalla
modal();

// Para pasar de scena
nextScene();

// Habilitar los comandos de terminal
terminal();

// setear timer en 3min
window.onload = function () {
    timer(3);
};

