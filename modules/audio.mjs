// Sistema de audio para el juego
const playButton = document.querySelector('.audio_btn');
const audioIcon = document.querySelector('.audio_icon');
const audioElement = document.querySelector('#audio');

function toggleAudio() {
  if (audioElement.paused || audioElement.ended) {
    audioElement.play();
    audioIcon.classList.add("icon-volume-off");
    audioIcon.classList.remove("icon-volume-up");
  } else {
    audioElement.pause();
    audioIcon.classList.add("icon-volume-up");
    audioIcon.classList.remove("icon-volume-off");
  }
}

function controllAudio() {
  playButton.addEventListener('click', toggleAudio);
}

export default controllAudio
