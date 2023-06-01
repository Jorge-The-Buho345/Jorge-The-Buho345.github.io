// Temporizador que cuenta el tiempo disponible y lo imprime en pantalla

function timer(duration) {
  const display = document.querySelector(".game-ut__clock");
  duration = duration * 60;

  var timer = duration, minutes, seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}


export default timer
