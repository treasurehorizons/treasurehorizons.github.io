function playSound() {
  var audio = document.getElementById("popSound");
  audio.play();
  window.setTimeout(function() {
    audio.pause();
    audio.currentTime = 0;
  }, 50);
}
