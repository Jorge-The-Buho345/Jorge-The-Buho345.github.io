// Sistema de slides para la introduccion

const slides = Array.from(document.querySelectorAll('.slideshow__item'));
const nextButton = document.querySelector('.slideshow__btn');
let currentSlide = 0;
let timer;

function showSlide(index) {
  currentSlide = index;
  slides[currentSlide].classList.add('show');
}

function nextSlide() {
  clearInterval(timer);
  if (currentSlide === slides.length - 1) {
    // Último slide, pasar escena
    nextButton.textContent = "Comenzar"
    nextButton.addEventListener('click', () => {
      const game = document.querySelector(".game");
      const intro = document.querySelector(".intro");
      intro.classList.add("hidden");
      game.classList.remove("hidden");
    });

  } else {
    // Mostrar siguiente slide
    showSlide(currentSlide + 1);
  }

  timer = setInterval(nextSlide, 5000);
}

function startTimer() {
  timer = setInterval(nextSlide, 5000); // Cambiar slide automáticamente después de 10 segundos
}

function stopTimer() {
  clearInterval(timer);
}

function slide() {
// Mostrar el primer slide al cargar la página
  showSlide(0);
// Pasar al siguiente slide al hacer clic en el botón "Siguiente"
  nextButton.addEventListener('click', nextSlide);
// Iniciar el temporizador para el cambio automático de slide
  startTimer();
// Reiniciar el temporizador al hacer clic en cualquier parte de la página
  document.addEventListener('click', startTimer);
}

export default slide
