// Alertas de orientacion para el juego
function checkOrientation() {
  const modal = document.querySelector(".alert") 
  const height = window.innerHeight + 200

  if (window.innerWidth < height) {
    modal.classList.remove("hidden");
    console.log("poraqui paso")
  }
  else {
    modal.classList.add("hidden");
  }
}
function modal() {
  checkOrientation();

  window.addEventListener("resize", () => {
      checkOrientation();
  });
}
export default modal
