function accionPlay() {
  if (!media.paused && !media.ended) {
    media.pause();
    play.value = "\u25BA"; //\u25BA
    document.body.style.backgroundColor = "#fff";
  } else {
    media.play();
    play.value = " || ";
    document.body.style.backgroundColor = "grey";
  }
}
function accionReiniciar() {
  //Usar propiedad .currentTime
  //Reproducir el vídeo
  //Cambiar el valor del botón a ||
  media.pause();
  media.currentTime = 0;
  media.play();
  play.value = " || ";
}
function accionRetrasar() {
  //Usar propiedad .curentTime
  //Contemplar que no existen valores negativos
  if (media.currentTime > 0) media.currentTime -= 5;
}
function accionAdelantar() {
  //Contemplar que no existen valores mayores a medio.duration
  if (media.currentTime < media.duration) media.currentTime += 5;
}
function accionSilenciar() {
  //Utilizar medio.muted = true; o medio.muted = false;
  media.muted = !media.muted;
}
function accionMasVolumen() {
  if (media.value < 1) media.volume += 0.1;
}
function accionMenosVolumen() {
  if (media.value > 0) media.volume -= 0.1;
}

function iniciarVideo() {
  media = document.getElementById("media");
  play = document.getElementById("play");
  reiniciar = document.getElementById("reiniciar");
  retrasar = document.getElementById("retrasar");
  adelantar = document.getElementById("adelantar");
  silenciar = document.getElementById("silenciar");
  menosVolumen = document.getElementById("menosVolumen");
  masVolumen = document.getElementById("masVolumen");

  play.addEventListener("click", accionPlay);
  reiniciar.addEventListener("click", accionReiniciar);
  retrasar.addEventListener("click", accionRetrasar);
  adelantar.addEventListener("click", accionAdelantar);
  silenciar.addEventListener("click", accionSilenciar);
  menosVolumen.addEventListener("click", accionMenosVolumen);
  masVolumen.addEventListener("click", accionMasVolumen);
}

window.addEventListener("load", iniciarVideo, false);
