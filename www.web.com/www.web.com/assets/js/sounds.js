function accionPlayAudio() {
  if (!audioControl.paused && !audioControl.ended) {
    audioControl.pause();
    playAudio.value = "\u25BA"; //\u25BA
    document.body.style.backgroundColor = "#fff";
  } else {
    audioControl.play();
    playAudio.value = " || ";
    document.body.style.backgroundColor = "grey";
  }
}
function accionReiniciarAudio() {
  //Usar propiedad .currentTime
  //Reproducir el vídeo
  //Cambiar el valor del botón a ||
  audioControl.pause();
  audioControl.currentTime = 0;
  audioControl.play();
  playAudio.value = " || ";
}
function accionRetrasarAudio() {
  //Usar propiedad .curentTime
  //Contemplar que no existen valores negativos
  if (audioControl.currentTime > 0) audioControl.currentTime -= 5;
}
function accionAdelantarAudio() {
  //Contemplar que no existen valores mayores a medio.duration
  if (audioControl.currentTime < media.duration) audioControl.currentTime += 5;
}
function accionSilenciarAudio() {
  //Utilizar medio.muted = true; o medio.muted = false;
  audioControl.muted = !audioControl.muted;
}
function accionMasVolumenAudio() {
  if (audioControl.value < 1) audioControl.volume += 0.1;
}
function accionMenosVolumenAudio() {
  if (audioControl.value > 0) audioControl.volume -= 0.1;
}

function iniciarAudio() {
  playAudio = document.getElementById("playAudio");
  reiniciarAudio = document.getElementById("reiniciarAudio");
  retrasarAudio = document.getElementById("retrasarAudio");
  adelantarAudio = document.getElementById("adelantarAudio");
  silenciarAudio = document.getElementById("silenciarAudio");
  menosVolumenAudio = document.getElementById("menosVolumenAudio");
  masVolumenAudio = document.getElementById("masVolumenAudio");

  playAudio.addEventListener("click", accionPlayAudio);
  reiniciarAudio.addEventListener("click", accionReiniciarAudio);
  retrasarAudio.addEventListener("click", accionRetrasarAudio);
  adelantarAudio.addEventListener("click", accionAdelantarAudio);
  silenciarAudio.addEventListener("click", accionSilenciarAudio);
  menosVolumenAudio.addEventListener("click", accionMenosVolumenAudio);
  masVolumenAudio.addEventListener("click", accionMasVolumenAudio);
}

window.addEventListener("load", iniciarAudio, false);
let audioControl = new Audio();
audioControl.src =
  "https://www.sshhtt.com/images/sampledata/christmas/otannenbaumotannenbaum.mp3";
