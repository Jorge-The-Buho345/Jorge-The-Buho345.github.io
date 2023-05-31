// Alertas de orientacion para el juego
function checkOrientation() {
  const m = document.querySelector(".alert") 
  if (window.innerWidth < window.innerHeight) {
    m.classList.remove("hidden");
    console.log("poraqui paso")
  }
  else {
    m.classList.add("hidden");
  }
}
function modal() {
  window.addEventListener("resize", () => {
      checkOrientation();
  });
}
export default modal
