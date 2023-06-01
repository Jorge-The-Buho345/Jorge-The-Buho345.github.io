// Funciones para pasar de escena del juego
import slide from "./slide.mjs"

function sceneIntro(btn) {
  btn.addEventListener("click", () => {
    const intro = document.querySelector(".intro");
    const menu = document.querySelector(".menu");
  
    menu.classList.add("hidden");
    intro.classList.remove("hidden");  
    slide() 
  })
}

function sceneCredits(btn) {
  btn.addEventListener("click", () => {
    let credits = document.querySelector(".credits");
    let menu = document.querySelector(".menu");
    
    menu.classList.add("hidden");
    credits.classList.remove("hidden");  
  })
}



function nextScene() {
  const btnGame = document.querySelector("#game");
  const btnCredits = document.querySelector("#credits");

  sceneIntro(btnGame);
  sceneCredits(btnCredits);
}

export default nextScene


