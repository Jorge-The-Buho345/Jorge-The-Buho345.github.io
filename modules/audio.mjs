// Sistema de slides para la intro del juego
const slideshow = document.getElementById('slideshow');
const images = slideshow.getElementsByTagName('img');
let currentIndex = 0;

function showSlide(index) {
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = 'none';
  }
  images[index].style.display = 'block';
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  showSlide(currentIndex);
}

// Intervalo de tiempo en milisegundos (por ejemplo, 3 segundos)
const interval = 3000;

// Iniciar la presentación de diapositivas
showSlide(currentIndex);
setInterval(nextSlide, interval);


