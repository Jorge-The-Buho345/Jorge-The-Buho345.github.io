// Funciones para pasar de escena del juego

function sceneGame(btn) {
  btn.addEventListener("click", () => {
    console.log(btn)
    const game = document.querySelector(".game");
    const menu = document.querySelector(".menu");

    menu.classList.add("hidden");
    game.classList.remove("hidden");  
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

  sceneGame(btnGame);
  sceneCredits(btnCredits);
}

export default nextScene


